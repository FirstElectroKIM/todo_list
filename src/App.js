import logo from './logo.svg';
import './App.css';
import { useState } from "react";




function App() {
  // react way
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(["할일1", "할일2"]);
  // State = 변화하는 값
  // React -> State가 변할 떄마다 화면을 다시 그린다.
  // ["할일1", "할일2"];
  
  return (
    // JSX (JS -> HTML)
    <div className="App">
      <h1> 나만의 TODO LIST </h1>
      <div>
        {/* () => {} */}
        <input 
        // Input의 제어권을 React(JS)가 가지고 있을 수 있게, State값을 주입함.
        value={inputValue}
        // Input의 값이 변하는 이벤트가 발생했을 때, 제어권을 가진 React(JS)의 State값을 변경한다. 
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
        <button> 추가 </button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span> {todo} </span>
          <button> 삭제 </button>
        </div>
      ))}
      <ul> 
        <li>
          <input type="checkbox" />
          Task 1 <button> 수정 </button>
          <button> X </button>
        </li>
        <li>
          <input type="checkbox" />
          Task 2 <button> 수정 </button>
          <button> X </button>
        </li>
      </ul>
     
    </div>
  );
}


export default App;
