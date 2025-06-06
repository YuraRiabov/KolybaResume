﻿namespace KolybaResume.DAL.Entities;

public class User
{
    public long Id { get; set; }
    public string Uid { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public Resume? Resume { get; set; }
}