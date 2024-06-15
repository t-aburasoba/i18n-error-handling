import { APIError } from '@/app/_utils/customError';
import { fetchApi } from '@/app/_utils/fetchApi';
import DeserializeError from '@/components/DeserializeError';
import { TodoList } from '@/components/TodoList';
import { Todo } from '@/types/Todo';

async function fetchTodos(): Promise<Todo[]> {
  return await fetchApi('https://jsonplaceholder.typicode.com/todos');
}

export default async function Todos() {
  let todos: Todo[] = [];
  try {
    todos = await fetchTodos();
  } catch (error: any) {
    if (error instanceof APIError) {
      return <DeserializeError apiErrorObject={error.serialize()} />;
      // クライアントコンポーネントでは instanceof でエラークラスを判定
    }
    throw error;
    // APIError 以外のエラーは再スロー
  }

  return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}
