namespace Quality_of_Life_changer.Contracts.Exceptions;

public class ForbiddenException : Exception
{
    public ForbiddenException() { }

    public ForbiddenException(string message)
        : base(message) { }

    public ForbiddenException(string message, Exception inner)
        : base(message, inner) { }
}