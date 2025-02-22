import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
