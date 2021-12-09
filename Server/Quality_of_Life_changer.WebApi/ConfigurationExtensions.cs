namespace Quality_of_Life_changer.WebApi
{
    public static class ConfigurationExtensions
    {
        public static void AddCors(this WebApplicationBuilder builder,string AllowSpecificOrigins)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: AllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000");
                                  });
            });
        }

    }
}
