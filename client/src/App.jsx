import { useEffect, useState } from "react";
import Todo from "./components/todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoContent, setTodoContent] = useState("");

  useEffect(() => {
    (async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setTodos(todos);
    })();
  }, []);

  const createNewTodo = async (e) => {
    e.preventDefault();
    if (todoContent.length > 3) {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ todo: todoContent }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newTodo = await res.json();

      setTodoContent("");
      setTodos([...todos, newTodo]);
    } else {
      alert("The message has to be bigger than three characters")
    }
  };

  return (
    <>
      <main className="todo__app-main-container">
        <h1 className="title">MongoDB -- Todos</h1>
        <form className="form" onSubmit={createNewTodo}>
          <input
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
            placeholder="Enter a new todo..."
            className="form__input"
            required
          />
          <button className="form__button" type="submit">
            Create a new Todo
          </button>
        </form>
        <div className="todos">
          {todos.length > 0 &&
            todos.map((todo) => (
              <Todo key={todo._id} todo={todo} setTodos={setTodos} />
            ))}
        </div>
      </main>
    </>
  );
}
