import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {

  const [isExpanded , setExpansion] = useState(false);

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

    function gotClicked(){
      setExpansion(true);
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" onChange={inputText} value={note.title} />}
        
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={inputText} onClick={gotClicked} value={note.content} />
        <Zoom in={isExpanded}>
          <Fab onClick={onSubmit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;