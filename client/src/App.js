import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import axios from 'axios';

export default function App(){
  const [data,setData] = useState("");
  const [todo,setTodo] = useState([]);
  const [isUpdating,setUpdating] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:9000/todo')
    .then((res) => setTodo(res.data))
    .catch((err) => console.log(err));
  },[todo]);

  const addUpdateTodo = ()=>{
    if(isUpdating === ""){
      axios.post('http://localhost:9000/todo/create-todo',{data})
      .then((res)=>{
        console.log(res.data)
        setData("");
      })
      .catch((err)=>console.log(err));
    }
    else{
      axios.post('http://localhost:9000/todo/update-todo',{_id: isUpdating,data})
      .then((res)=>{
        console.log(res.data)
        setData("");
        setUpdating("");
      })
      .catch((err)=>console.log(err));
      
    }
  }

  const deleteTodo = (_id)=>{
    axios.post('http://localhost:9000/todo/delete-todo',{_id})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }


  const updateTodo = (_id,data)=>{
    setUpdating(_id);
    setData(data);
  }
  return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h1>Todo List</h1>
            </div>
          </div>

              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <input type="text" className="form-control" value={data} onChange={e=>setData(e.target.value)} placeholder="Enter task ...." />
                </div>
                <div className="col-sm-3">
                <button className="btn btn-primary" onClick={addUpdateTodo}>{isUpdating? "UPDATE":"ADD"}</button>
                </div>
              </div>

            <div className='container list'>
              {todo.map(item => <Item key={item._id} text={item.data} remove={()=>deleteTodo(item._id)} update={()=>updateTodo(item._id,item.data)}></Item>)}
            </div>
        </div>
      </div>
    );
}

