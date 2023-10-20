import logo from './logo.svg';
import './App.css';



function App() {
  // react way
  const [todos, setTodos] = useState([]);
  // ["할일1", "할일2"];
  
  return {
  //  JSX (JS -> HTML)
    <div className="App">
      <h1> TODO LIST</h1>
      <div>
        <input />
        <button> 추가 </button>
      </div>
      {todos.map((todo, index) => (
        <div key=(index)>
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
};

export default App;
