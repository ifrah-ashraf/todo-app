import { useState } from "react";

function EditTodo({ index, todo, newTodo }) {
  const [edit, setEdit] = useState(false);
  const [newInput, setNewInput] = useState(todo);

  function handleClick() {
    setEdit(true); 
  }

  function handleSave() {
    newTodo(index, newInput);
    setEdit(false); 
  }

  let content;
  if (edit) {
    content = (
      <>
        <input type="text" value={newInput} onChange={(e) => setNewInput(e.target.value)}/>
        <button onClick={handleSave}>Save</button>
      </>
    );
  } else {
    content = (
      <button onClick={handleClick}>Edit</button>
    );
  }

  return content;
}

export default EditTodo;
