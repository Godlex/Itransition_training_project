namespace Quality_of_Life_changer.Contracts.Exceptions;

public class ValidationException : Exception
{
    public ValidationException() { }

    public ValidationException(string message)
        : base(message) { }

    public ValidationException(string message, Exception inner)
        : base(message, inner) { }
}