import { FormControl, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VacanciesStoreService } from '../../store/services/vacancies-store.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'kr-vacancy-input-popup',
    standalone: false,
    templateUrl: './vacancy-input-popup.component.html',
    styleUrl: './vacancy-input-popup.component.scss'
})
export class VacancyInputPopupComponent {
    public readonly urlControl = new FormControl('', Validators.pattern('https?://.+'));
    public readonly descriptionControl = new FormControl('');

    public description$ = this.vacanciesStoreService.jobDescription$;

    constructor(
        private dialogRef: MatDialogRef<VacancyInputPopupComponent>,
        private vacanciesStoreService: VacanciesStoreService
    ) {
        this.description$.pipe(takeUntilDestroyed()).subscribe((description) => this.descriptionControl.setValue(description ?? ''))
    }

    public loadByUrl(): void {
        if (this.urlControl.valid) {
            this.vacanciesStoreService.loadJobDescription(this.urlControl.value!);
        }
    }

    public submit(): void {
        const description = this.descriptionControl.value;
        if (description) {
            this.dialogRef.close(description);
        }
    }

    public close(): void {
        this.dialogRef.close();
    }
}
