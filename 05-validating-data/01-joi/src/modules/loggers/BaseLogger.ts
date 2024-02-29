export abstract class BaseLogger {
  protected abstract formattedMessage(message: string): string;
}
