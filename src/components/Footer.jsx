import React from "react";

function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            <p>copyright ⓒ rishabh.mishra.8859@gmail.com{year}</p>
        </footer>
    );
}
export default Footer;