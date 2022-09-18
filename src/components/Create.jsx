import React from "react";


function Create(props){
  const [task,setTask] = React.useState("");

  function handleChange(event){
   const newTask=event.target.value;
   setTask(newTask);
  }

  function submitTask(event){
    props.add(task);
    setTask("");
    event.preventDefault();
  }

  return(
    <div>
    <form>
      <textarea
       onChange={handleChange}
       name="content"
       placeholder="Enter your next task"
       rows="3"
       value={task}
       />
      <button onClick={submitTask}> + </button>
    </form>
  </div>
);

}
export default Create;
