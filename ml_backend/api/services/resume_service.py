from sqlalchemy.orm import Session
from ml_backend.api.db.models import Resume
from ml_backend.api.services.cleaning_service import clean_text, translate
from ml_backend.api.services.model_service import get_embedding_model, get_classification_model
from ml_backend.api.services.keyword_service import extract_keywords
import torch
import logging
import json

logger = logging.getLogger(__name__)


def classify_resume(resume_text: str) -> int:
    tokenizer, model = get_classification_model()

    inputs = tokenizer(
        resume_text,
        return_tensors="pt",
        max_length=512,
        padding="max_length",
        truncation=True
    )

    if torch.cuda.is_available():
        inputs = {k: v.to('cuda') for k, v in inputs.items()}

    with torch.no_grad():
        outputs = model(**inputs)

    logits = outputs.logits
    predicted_class_idx = torch.argmax(logits, dim=1).item()

    return predicted_class_idx


def preprocess_resume_text(db: Session, resume: Resume) -> None:
    resume_text = resume.Text
    resume_text = translate(resume_text)
    resume_text = clean_text(resume_text)
    resume.CleanedText = resume_text
    resume_keywords = extract_keywords(resume_text)
    resume.Keywords = json.dumps(list(resume_keywords))

    embed_model = get_embedding_model()
    resume_vector = embed_model.encode(resume_text)
    resume.Vector = resume_vector.tobytes()

    category = classify_resume(resume_text)
    resume.Category = category

    db.commit()
    logger.info(f"Successfully processed resume")
