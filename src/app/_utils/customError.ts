export type APIErrorObject = {
  name: string;
  message: string;
  title: string; // Frontend で表示するエラータイトル
  description: string; // Frontend で表示するエラー詳細
};

export class APIError extends Error {
  title: string;
  description: string;
  errorCode?: string;
  detail?: string;

  constructor(props: APIErrorObject) {
    super(props.message);
    this.name = props.name;
    this.title = props.title;
    this.description = props.description;
  }

  serialize() {
    return {
      className: this.constructor.name,
      name: this.name,
      message: this.message,
      title: this.title,
      description: this.description,
      errorCode: this.errorCode,
      detail: this.detail,
    };
  }

  static deserialize(data: any) {
    const errorClass = this.getErrorClass(data.className);
    return new errorClass({
      name: data.name,
      message: data.message,
      title: data.title,
      description: data.description,
    });
  }

  private static getErrorClass(className: string) {
    switch (className) {
      case 'NotFoundError':
        return NotFoundError;
      default:
        return APIError;
    }
  }
}

export class NotFoundError extends APIError {
  constructor(props: APIErrorObject) {
    super(props);
    this.name = 'NotFoundError';
  }
}
