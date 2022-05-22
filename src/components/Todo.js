import React from 'react'

function Todo({id,todo}) {
  return (
    <div>
        <li>{todo}</li>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Todo