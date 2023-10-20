import { v4 as uuid } from "uuid";
import "./App.css";
import { useState } from "react";

// camelcase -> 띄어씌기가 필요한 곳에 대문자로 표시한다
// ex) background-color -> backgroundColor
//     font-size -> fontSize

function App() {
  // state 새로운 값으로 대체한다
  const [inputValue, setInputValue] = useState("");
   /**
   * TODO
   * {
   *  id: 중복되지 않는 id값,
   *  content: 할일에 대해 적은 내용 strign ('할일 1')
   *  createdAt: 생성된 시간 number (0~9128439184921490)
   *  isDone: 완료 여부 검사 (true, false)
   * }
   */
  const [todos, setTodos] = useState([]);
  // state 변화하는 값, 임시 값
  // React -> state가 변할때마다 화면을 다시 출력한다.
  // ["할일 1", "할일 2"];
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  
  const computedTodos = todos.filter((todo) => {
    if (filter === "ALL") return true;
    if (filter === "DONE") return todo.isDone === true;
    if (filter === "NOT DONE") return todo.isDone === false;
  }).sort((a, b) => {
      if( sort === "none") return 0;
      if( sort === "createdAT") return a.createdAt - b.createdAt;
      if( sort === "content") return a.content.localeCompare(b.content);
  })

  return (
     // JSX (JS -> HTML)
    <div className="App">
      <h1>나만의 To-do List</h1>
      <div> {/* () => {} */}
        <label htmlFor="sort">정렬 : </label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">  생성순 </option>
          <option value="createdAt"> 최신순 </option>
          <option value="content"> 가나다순 </option>
        </select>
      </div>
      <div>
        <label>필터 : </label>
        <input
          type="radio"
          value="ALL"
          checked={filter === "ALL"}
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>전체</label>
        <input
          type="radio"
          value="DONE"
          checked={filter === "DONE"}
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>완료</label>
        <input
          type="radio"
          value="NOT_DONE"
          checked={filter === "NOT_DONE"}
          onChange={(e) => setFilter(e.target.value)}
        />
        <label>미완료</label>
      </div>
      <div>
        <input
          // Input의 제어권을 React(JS)가 가지고 있을 수 있게, state값을 주입했다.
          value={inputValue}
          // Input의 값이 변하는 이벤트가 발생했을 때, 제어권을 가진 React(JS)의 state값을 변경한다.
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // spread 연산자
            /**
             * TODO
             * {
             *  id: 중복되지 않는 id값,
             *  content: 할일에 대해 적은 내용
             *  createdAt: 생성된 시간
             *  isDone: 완료 여부
             * }
             * */

              // uuid : 항상 공유한 키값이 나오는 암호화 로직을 갖고 있는 라이브러리
            const newTodo = {
              id: uuid(),
              content: inputValue,
              isDone: false,
              createdAt: Date.now(),
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
          }}
        >
          추가
        </button>
     </div>
      <div>
        {todos.map((todo, index) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={(e) => { 
              /**
              * todos :
              * { content : "할일 1"
              * createdAt : 1697782607507
              * id : "38b5c80a-008a-47f4-81f1-bb50fa206c29"
              * isDone : false },
              * 두번째 todo,
              * 서밴째 todo
              */
                const nextTodos = todos.map((todo, idx) =>
                  idx === index ? { ...todo, isDone: e.target.checked } : todo
                );
                setTodos(nextTodos);
              }}
            />
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              {todo.content}
            </span>
            <button
              onClick={() => {
                const nextTodos = todos.filter((_, idx) => idx !== index);
                setTodos(nextTodos);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

