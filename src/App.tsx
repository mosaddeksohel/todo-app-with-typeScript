import React, { useCallback, useReducer, useRef } from 'react';
import './App.css';
// import Lists from './component/Lists/Lists';

/* 
const Box: React.FC<{ title: string }> = ({ title }) => {
  return <div></div>
} */

interface Todo {
  id: number,
  text: string
}
type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number };




function App() {
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text
          },
        ]
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id)
    }
  }


  const [todos, dispatch] = useReducer(reducer, []);
  const newToDoRef = useRef<HTMLInputElement>(null);

  // use call back hook
  const onAddToDo = useCallback(() => {
    if (newToDoRef.current) {
      dispatch({
        type: "ADD",
        text: newToDoRef.current.value
      })
      newToDoRef.current.value = "";
    }
  }, [])


  return (



    <div className="App">

      <input type="text" ref={newToDoRef} />
      <button onClick={onAddToDo}>Add</button>
      {
        todos.map((todo) => (
          < div key={todo.id} >
            {todo.text}
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>Remove</button>
          </div>
        ))
      }
    </div >
  );
}

export default App;
