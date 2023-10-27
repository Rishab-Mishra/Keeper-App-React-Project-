import React from "react";
import Footer from "./Footer";
import Note from "./Note";
import Header from "./header";
import notes from "../notes";

function App(){
    return(
        <div>
            <Header/>
            <Footer/>
            {notes.map((task) => (<Note key={task.key} title={task.title} content={task.content}  />))}
        </div>
    )
}
export default App;