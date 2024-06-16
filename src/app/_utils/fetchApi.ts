import { APIError, NotFoundError } from './customError';

export async function fetchApi(url: string) {
  // throw new NotFoundError({
  //   name: 'NotFoundError',
  //   message: 'Not Found',
  //   title: 'リソースが見つかりません。',
  //   description: '指定されたリソースは存在しないか、アクセスできません。',
  // });
  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    try {
      // レスポンスがJSONの場合はパース
      const errorData = JSON.parse(errorText);
      throw createAPIError(errorData, response.status);
    } catch (e) {
      // JSON以外のレスポンスの場合
      throw new Error(errorText, { cause: e });
    }
  }
  return response.json();
}

function createAPIError(errorData: any, status: number) {
  switch (status) {
    case 404:
      return new NotFoundError(errorData);
    default:
      return new APIError(errorData);
  }
}
