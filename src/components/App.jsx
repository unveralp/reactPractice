import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note";
function App(){
  const [tasks,setTask] = React.useState([]);

  function addItem(newTask){
    setTask(prevTask => {
      return [...prevTask,newTask];
    });
  }
  function deleteItem(id){
    setTask(prevTasks => {
      return prevTasks.filter((item,index) => {
        return index !== id
      });
    });

  }

  return (
    <div>
     <Header/>
     <Create
     add={addItem}
     />
     {
     tasks.map((task,index) => {
       return (
         <Note
         id={index}
         content={task}
         deletedTask={deleteItem}
         />
       );
     })
   }
     <Footer/>
    </div>
  );
}

export default App;
