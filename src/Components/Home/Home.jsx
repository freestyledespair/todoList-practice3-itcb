import React, { useState } from 'react';
import Form from '../Form/Form';
import Output from '../Output/Output';

const Home = () => {
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = (e) => {
        e.preventDefault()
        const todo = {
            name,
            about,
            id: todos.length + 1,
            status: false,
            date: new Date(),
        }
        setTodos([...todos, todo])
        setName("")
        setAbout("")
    }

    const editTodo = (newName, id) => {
        todos.map(item => {
            if (item.id === id && newName.inputId == 1) {
                return item.name = newName.input
            }
            else if (item.id === id && newName.inputId == 2) {
                return item.about = newName.input
            }
        })

        setTodos([...todos])
    }

    const done = (id) => {
        todos.map(el => {
            if (el.id === id) {
                return el.status = !el.status
            }
        })
        setTodos([...todos])
    }

    const deleteTodo = (id) => setTodos(todos.filter(el => el.id !== id))

    return (
        <div>
            <Form
                name={name}
                setName={setName}
                about={about}
                setAbout={setAbout}
                addTodo={addTodo}
            />
            <Output
                todos={todos}
                editTodo={editTodo}
                done={done}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default Home;