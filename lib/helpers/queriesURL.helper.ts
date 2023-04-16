import { GetTags } from '../interfaces/tags.interface';
import { GetUsers } from '../interfaces/user.interface';
type Type = GetUsers | GetTags;

export function getURLQueries(dataQueries: Type) {
  let queries = '?';
  let counter = 0;
  for (const query in dataQueries) {
    if (counter) {
      queries += `&${query}=${dataQueries[query as keyof Type]}`;
      continue;
    }
    queries += `${query}=${dataQueries[query as keyof Type]}`;
    counter += 1;
  }
  return queries;
}
