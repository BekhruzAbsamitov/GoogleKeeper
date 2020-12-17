import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
  
        </div>
    );
}

export default Note;
