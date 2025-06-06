﻿using AutoMapper;
using KolybaResume.BLL.Models;
using KolybaResume.BLL.Services.Utility;
using KolybaResume.Common.DTO.Vacancy;
using KolybaResume.Common.Enums;
using KolybaResume.DAL.Entities;

namespace KolybaResume.BLL.MappingProfiles;

public class VacancyProfile : Profile
{
    public VacancyProfile()
    {
        CreateMap<Vacancy, VacancyDto>()
            .ForMember(v => v.Location,
                opt => opt.MapFrom(m =>
                    m.Source == VacancySource.Dou || string.IsNullOrEmpty(m.Location) ? m.Location : m.Location.Split(",", StringSplitOptions.None).First()));

        CreateMap<VacancyModel, Vacancy>()
            .ForMember(v => v.Text, opt => opt.MapFrom(m => m.Description))
            .ForMember(v => v.CategoryText, opt => opt.MapFrom(m => m.Category))
            .ForMember(v => v.Category, opt => opt.MapFrom(m => VacancyCategoryMapper.FromString(m.Category)))
            .ForMember(v => v.Url, opt => opt.MapFrom(m => m.Link));

        CreateMap<ResumeAdaptationResponse, AdaptationResponseDto>();
    }
}