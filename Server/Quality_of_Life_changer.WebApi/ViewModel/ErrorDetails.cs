using System.Text.Json;

namespace Quality_of_Life_changer.WebApi.ViewModel;

public class ErrorDetails
{
    public int StatusCode { get; set; }
    public string Message { get; set; }

    public override string ToString()
    {
        return JsonSerializer.Serialize(this);
    }
}