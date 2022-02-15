namespace Quality_of_Life_changer.Contracts.Exceptions;

public class BadRequestException : Exception
{
    public BadRequestException() { }

    public BadRequestException(string message)
        : base(message) { }

    public BadRequestException(string message, Exception inner)
        : base(message, inner) { }
}