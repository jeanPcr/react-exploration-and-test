import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import PostTable from "./components/PostTable";

function App() {
  return (
    <div className="App">
      <TodoList />
      <PostTable />
    </div>
  );
}

export default App;
