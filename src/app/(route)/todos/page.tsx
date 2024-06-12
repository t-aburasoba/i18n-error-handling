import { APIError } from "@/app/_utils/Error";
import { fetchApi } from "@/app/_utils/fetchApi";
import { TodoList } from "@/components/TodoList";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<Todo[]> {
  return await fetchApi("https://jsonplaceholder.typicode.com/todos");
}

export default async function Todos() {
  let todos: Todo[] = [];
  try {
    todos = await fetchTodos();
  } catch (error: any) {
    console.log(error instanceof APIError);
    console.log('これはどうだろうか');
    if (error instanceof APIError) {
      console.log('判定できてる');
    }else {
      console.error("判定できてない"); 
    }
    throw error; // この server component から client component に error がわたると通常の Error として扱われる
    // この問題は、サーバーコンポーネントで発生したエラーがクライアントコンポーネントに渡る際に、instanceof チェックが失敗するためです。これは、サーバーとクライアント間でオブジェクトがシリアライズされて再構築されるために発生します。これを解決するためには、エラーオブジェクトを適切にシリアライズおよびデシリアライズする必要があります。
  }
  
  return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}