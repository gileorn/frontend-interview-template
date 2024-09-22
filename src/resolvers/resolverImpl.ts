import { CacheOptions, MapCache } from "./cacheImpl";

export type ResolverParams = { [key: string]: string };

export type ResolverOptions<Params extends ResolverParams> = {
  requestParams: Params;
  cacheOptions?: CacheOptions;
};

const generateKeyFromParams = (params: ResolverParams) => {
  let string = "";

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = params[key];

      string += `_key_${value}`;
    }
  }

  return string;
};

const cache = new MapCache();

type ResolverResult<Result> = {
  result?: Result;
  error?: Error;
};

const resolverImpl = async <Params extends ResolverParams, Result>(
  resolver: (args: Params) => Promise<Result>,
  { requestParams, cacheOptions }: ResolverOptions<Params>,
): Promise<ResolverResult<Result>> => {
  let result;
  let error;

  const key = cacheOptions?.key
    ? `${resolver.name}_${cacheOptions?.key}`
    : `${resolver.name}_${generateKeyFromParams(requestParams)}`;

  if (cache.has(key)) {
    return { result: cache.get(key) as Result };
  }

  try {
    result = await resolver(requestParams);
    cache.set(key, result);
  } catch (e) {
    if (typeof e === "string") {
      error = new Error(e);
    } else if (e instanceof Error) {
      error = new Error(e.message);
    }
  }

  return { result, error };
};

export default resolverImpl;
