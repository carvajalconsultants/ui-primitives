import { useCallback, useEffect, useRef, useState } from "react";

import type { Person } from "../grid/mock-data/data";

interface UseInfiniteScrollReturn {
  data: Person[];
  isLoading: boolean;
  error: Error | null;
  hasNextPage: boolean;
  totalCount: number;
  totalFetched: number;
  fetchNextPage: () => Promise<void>;
  isFetchingNextPage: boolean;
}

interface FetchResponse {
  data: Person[];
  meta: {
    totalRowCount: number;
  };
}

/**
 * Mock infinite query for testing purposes. SHOULD NOT BE USED IN PRODUCTION.
 *
 * @param fetchData - The function to fetch the data.
 * @param fetchSize - The size of the data to fetch.
 * @returns The data, loading state, error, has next page, total count, fetch next page, and is fetching next page.
 */
export const useMockInfiniteQuery = (fetchData: (start: number, size: number) => Promise<FetchResponse>, fetchSize: number): UseInfiniteScrollReturn => {
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const currentPageRef = useRef(0);

  const fetchNextPage = useCallback(async () => {
    if (isFetchingNextPage || !hasNextPage) return;

    setIsFetchingNextPage(true);
    setError(null);

    try {
      const start = currentPageRef.current * fetchSize;
      const response = await fetchData(start, fetchSize);

      setData((prevData) => [...prevData, ...response.data]);
      setTotalCount(response.meta.totalRowCount);

      const totalFetched = (currentPageRef.current + 1) * fetchSize;
      setHasNextPage(totalFetched < response.meta.totalRowCount);

      currentPageRef.current += 1;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred while fetching data"));
    } finally {
      setIsFetchingNextPage(false);
    }
  }, [fetchData, isFetchingNextPage, hasNextPage, fetchSize]);

  // Initial data load
  const loadInitialData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetchData(0, fetchSize);
      setData(response.data);
      setTotalCount(response.meta.totalRowCount);

      const hasMore = fetchSize < response.meta.totalRowCount;
      setHasNextPage(hasMore);

      currentPageRef.current = 1;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred while fetching data"));
    } finally {
      setIsLoading(false);
    }
  }, [fetchData, fetchSize]);

  // Load initial data
  useEffect(() => {
    void loadInitialData();
  }, [loadInitialData]);

  return {
    data,
    isLoading,
    error,
    hasNextPage,
    totalCount,
    totalFetched: data.length,
    fetchNextPage,
    isFetchingNextPage,
  };
};
