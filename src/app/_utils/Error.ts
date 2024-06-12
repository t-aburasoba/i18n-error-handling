export class APIError extends Error {
  title: string;
  description: string;
  constructor(message: string, title: string, description: string) {
    super(message);
    this.name = "APIError";
    this.title = title;
    this.description = description;
  }
}