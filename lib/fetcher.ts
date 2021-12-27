import client from "./client";

export type FetcherFN<T> = (path: string) => Promise<T | null | undefined>;

const fetcher: FetcherFN<T> = async (path) => {
  if (path === "/tasks") {
    return await client.get<T>(path);
  }

  return undefined;
};

export default fetcher;
