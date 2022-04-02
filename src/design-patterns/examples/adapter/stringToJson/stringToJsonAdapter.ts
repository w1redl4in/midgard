import { StringToJson } from './protocol';

export const stringifiedJsonToJsonAdapter: StringToJson = (
  stringifiedJson: string,
) => JSON.parse(stringifiedJson);
