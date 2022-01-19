namespace Quality_of_Life_changer.Contracts.Exceptions;

public class InvalidInputException : Exception
{
    public InvalidInputException() { }

    public InvalidInputException(string message)
        : base(message) { }

    public InvalidInputException(string message, Exception inner)
        : base(message, inner) { }
}