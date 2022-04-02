import { stringifiedJsonToJsonAdapter } from './stringToJsonAdapter';

const string =
  '{"menu":{"id":"file","value":"File","popup":{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}';

const json = stringifiedJsonToJsonAdapter(string);

console.log(json);
