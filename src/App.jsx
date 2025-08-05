
import './App.css'
import AddTodo from './components/AddTodo/AddTodo.jsx'
import Button from "./components/Button/Button.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Header from "./components/Header.jsx";


function App() {
  return (
    <>
    <div className="todo-container">
      <AddTodo/>
    </div>
      <Weather/>
    </>
  )
}

export default App
