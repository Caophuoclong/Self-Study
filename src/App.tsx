import { useStore, actions } from "./store";
import { useContext, FormEvent, KeyboardEvent } from "react";
import './App.css';

function App() {
  const {state, dispatch} = useStore();
  console.log(state);
  const {todos, todoInput} = state;
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    dispatch(actions.setTodoInput(value));
  }
  const addTodo = () =>{
    if(todoInput.length > 0)
    dispatch(actions.addTodo(""));
    else
    alert("Input is required");
  }
  const keyPress = (event: KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === "Enter") addTodo();
  }
  return (
    <div className="App">
      <input type="text" value={todoInput} onChange={handleInputChange} onKeyPress={keyPress} />
      <button onClick={addTodo}>Add todo</button>
      {console.log(todos)}
      <ul>
        {
          
          todos.map((value, index)=>(
            <li key={index}>{value}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
