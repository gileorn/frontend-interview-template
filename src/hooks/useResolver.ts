import { useEffect, useState } from "react";

import resolverImpl, {
  ResolverOptions,
  ResolverParams,
} from "~/resolvers/resolverImpl";

type Return<Result> = {
  isLoading: boolean;
  data: Result | undefined;
  error: Error | undefined;
  refetch: () => void;
};

type QueryParams = {
  queryParams: { prefetch: boolean };
};

type Options<Params extends ResolverParams> = ResolverOptions<Params> &
  QueryParams;

const useResolver = <Params extends ResolverParams, Result>(
  resolver: (args: Params) => Promise<Result>,
  {
    requestParams: params,
    cacheOptions,
    queryParams: { prefetch },
  }: Options<Params>,
): Return<Result> => {
  const [isLoading, setIsLoading] = useState(false);
  const [needFetch, setNeedFetch] = useState(prefetch);
  const [data, setData] = useState<Result | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  const refetch = () => {
    setNeedFetch(true);
  };

  useEffect(() => {
    if (!needFetch) {
      return;
    }

    setIsLoading(true);
    setError(undefined);

    async function fetch() {
      const { result, error } = await resolverImpl<Params, Result>(resolver, {
        requestParams: params,
        cacheOptions,
      });

      setData(result);
      setError(error);
      setIsLoading(false);
      setNeedFetch(false);
    }

    fetch();
  }, [needFetch]);

  return { isLoading, data, error, refetch };
};

export default useResolver;
