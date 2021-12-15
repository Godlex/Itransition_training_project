using Serilog;

namespace Quality_of_Life_changer.WebApi
{
    public class Logger
    {
        public static void Initial()
        {
                 Log.Logger = new LoggerConfiguration()
                .WriteTo.Console()
                .WriteTo.Seq("http://localhost:5341")
                .CreateLogger();
        }

        public static Action<HostBuilderContext, LoggerConfiguration> Configure => (ctx, lc) => lc
             .WriteTo.Console()
             .WriteTo.Seq("http://localhost:5341")
             .ReadFrom.Configuration(ctx.Configuration);

    }
}
