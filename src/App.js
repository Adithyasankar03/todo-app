import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const deleteTask = (objid) => {
    const updatedTodo = [...toDos].filter((toDo) => toDo.id !== objid);
    setToDos(updatedTodo);
  };

  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo App</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Date : {currDate}</h2>
        <h2>Time : {currTime}</h2>
      </div>
      <div  className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i 
          onClick={() =>{
            if(toDo===""){
              alert("Can't Be Empty")
            }
            else{
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])}
          }
        }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(obj);
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p className="textline">{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-trash"
                  onClick={() => deleteTask(obj.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
  );
}

export default App;
