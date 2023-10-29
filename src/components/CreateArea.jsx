import React, { useState } from "react";

function CreateArea(props) {

    const [note , setNote] = useState({
        title: "",
        content: ""
    });

    function inputText(event){
        const {value , name} = event.target;
        setNote(prevValue =>{
            return {
                ...prevValue,
                [name] : value
            };
        });
    }

    function onSubmit(event){
        props.onAdd(note);
        setNote({
        title: "",
        content: ""
    });
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={inputText} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={inputText} value={note.content} />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;