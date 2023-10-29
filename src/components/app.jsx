import React, { useState } from "react";
import Footer from "./Footer";
import Note from "./Note";
import Header from "./header";
import CreateArea from "./CreateArea";



function App(){

    const [newNote , setNewNote] = useState([]);

function addNote(note){
    setNewNote(prevValue =>{
        return [...prevValue , note];
    });
}

function deleteNote(id){
    setNewNote(prevValue=>{
        return prevValue.filter((item,index)=> {
            return index != id;
        });
        
    });

}

    return(
        <div>
            <Header/>
            <CreateArea  onAdd={addNote}/>
            {newNote.map((foundNote , index)=>{
                return <Note 
                    title={foundNote.title}
                    content={foundNote.content}
                    onPress={deleteNote}
                    key={index}
                    id={index}
                />;
            })};
            <Footer/>
            
        </div>
    );
}
export default App;