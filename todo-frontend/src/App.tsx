import "./App.css";
import SignIn from "./components/SignIn";
import TodoList from "./components/TodoList";
import { Input } from "./components/ui/input";
import useAuth from "./hooks/auth";

function App() {
  useAuth();
  return (
    <main className="h-screen w-screen bg-primary flex justify-center items-center font-lato">
      {/* Container */}
      <div className="container h-screen flex flex-col gap-8 p-4 xl:w-1/3">
        {/* Title: Todo App */}
        <h1 className="text-4xl font-semibold mt-10 text-blue-300">T-O-D-O</h1>
        {/* Todo Input */}
        <Input
          placeholder="Add a new task"
          className="p-2 bg-gray-200 rounded"
          autoFocus
        />
        <SignIn />
       <TodoList />
      </div>
    </main>
  );
}

export default App;
