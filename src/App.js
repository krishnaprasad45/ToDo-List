import './App.css';
import { useState } from 'react'


function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const addTodo = () => {
    if (toDo.trim() === '') {
      return; // Don't add empty todos
    }
    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setTodo(''); // Clear the input field after adding a todo
  };

  const removeTodo = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id));
  };

  return (
    <div className='app' id='parentdiv' >

      <div id='leftdiv'>
        <h4 style={{ color: 'Highlight' }}>Unfineshed Task</h4>
        {toDos.map((obj) => {
          if (obj.status == false) {
            return (
              <div className="right" key={obj.id}>
                <h2 style={{ color: 'orange' }} >{obj.text}</h2>
              </div>
            );
          }
          return null;
        })}
      </div>


      <div id='centerdiv'>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>


        <div className="input">
          <input
            value={toDo}
            onChange={(event) => setTodo(event.target.value)}
            type="text"
            placeholder=" Add item..."
          />
          <i onClick={addTodo} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            return (
              <div className="todo" key={obj.id}>
                <div className="left">
                  <input
                    onChange={(e) => {
                      setTodos(
                        toDos.map((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    type="checkbox"
                    checked={obj.status}
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => removeTodo(obj.id)}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>





      <div id='rightdiv'>
        <h4 style={{ color: 'Highlight' }}>Finished Task</h4>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div className="right" key={obj.id}>
               <h2 style={{ color: 'green' }} >{obj.text}</h2>
              </div>
            );
          }
          return null;
        })}
      </div>







    </div>

  );
}

export default App;
