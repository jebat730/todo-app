import TodoForm from "../components/TodoForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TodoForm />
    </main>
  );
}
