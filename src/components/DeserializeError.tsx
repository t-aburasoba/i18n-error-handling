'use client';

import { APIError, APIErrorObject } from '@/app/_utils/customError';

interface DeserializeErrorProps {
  apiErrorObject: APIErrorObject;
}

export default function DeserializeError({
  apiErrorObject,
}: DeserializeErrorProps) {
  throw APIError.deserialize(apiErrorObject);
  return <></>;
  // UIは表示しない
}
