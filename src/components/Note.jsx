import React from "react";


function Note(props){

   function submitDelete(){
     props.deletedTask(props.id);
   }

    return(
      <div className="note">
         <p> {props.id + 1 + ")"} {props.content} </p>
         <button onClick={submitDelete}> x </button>
      </div>
    );
}
export default Note;
