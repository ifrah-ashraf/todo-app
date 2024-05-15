

// eslint-disable-next-line react/prop-types
function DeleteTodo({index , delTodo}){
    
    function handleDelete(){
        delTodo(index)
    }

    return (
        <>
        <button onClick={handleDelete}>delete</button>
        </>
    )
}


export default DeleteTodo