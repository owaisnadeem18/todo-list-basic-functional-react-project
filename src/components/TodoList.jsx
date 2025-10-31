import { PencilIcon, PlusCircleIcon, Trash2Icon } from 'lucide-react'
import React, { useState } from 'react'

const TodoList = () => {

    const [todo , setTodo] = useState("")

    const [todos , setTodos] = useState([])

    const addNewTodo = () => {
        setTodos([...todos , todo])
        setTodo("")
    }

    const deleteTodo = (idx) => {
        setTodos(todos.filter((item , index) => index !== idx )) 
    }

    const editTodo = (idx) => {
        setTodos(todos?.filter((todo , index) => index != idx ))
        setTodo(todos?.filter((todo , index) => index == idx))
    }

  return (
    <>

        <div>

            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

            {/* button to add or edit the content */}

            <button onClick={addNewTodo} >
                Add <PlusCircleIcon/>
            </button>

            {/* List of all todos here in the following */}

            {
                todos.map((todo, index) => <div key={index} >
                        {
                            todo
                        }

                        <button onClick={() => editTodo(index)} >
                            edit <PencilIcon  />
                        </button>

                        <button onClick = {() => deleteTodo(index)} >
                            delete <Trash2Icon  />
                        </button>

                    </div>
                 )
            }

        </div>
    
    </>
  )
}

export default TodoList
