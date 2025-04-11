import { useEffect, useState } from "react";

/**
 * Interface for a Todo item.
 */
export interface Todo {
  id: number;
  title: string;
}

/**
 * API endpoint for fetching todos.
 */
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

/**
 * A mock hook for fetching todos from an API. SHOULD NOT BE USED IN PRODUCTION.
 *
 * This hook fetches TODO from API endpoint and handles loading states and error cases.
 * We are using this hook in the ComboBox.stories.tsx and App.tsx to demonstrate the use of the ComboBox component.
 */
export const useMockFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = (await response.json()) as Todo[];
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchTodos();
  }, []);

  return { todos, isLoading, error };
};
