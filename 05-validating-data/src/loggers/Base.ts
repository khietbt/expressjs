export class Base {
  protected constructor(private scope: string) {}

  public formattedMessage(message: string): string {
    return `[${this.scope}] ${message}`;
  }
}
