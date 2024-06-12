import { APIError } from "./Error";

export async function fetchApi (url: string) {
  
  const response = await fetch(url);
  throw new APIError('これはテストのエラーです', 'テストのタイトル', 'テストの説明');
  if (!response.ok) {
    throw new APIError(response.statusText, 'API Error', 'API Error');
  }
  return response.json();
}