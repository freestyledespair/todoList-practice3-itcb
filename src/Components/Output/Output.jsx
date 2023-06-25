import { Stack } from '@mui/material';
import React, { useState } from 'react';
import "./Output.css"

const Output = ({ todos, editTodo, done, deleteTodo }) => {
    const [isEditName, setIsEditName] = useState(false)
    const [isEditAbout, setIsEditAbout] = useState(false)
    const [currentTodo, setCurrentTodo] = useState(null)
    const [input, setInput] = useState("")

    return (
        <div>
            {
                todos.length > 0 &&
                todos.map(e => (
                    <div className="block" key={e.id}>
                        <div>
                            {
                                isEditName && currentTodo == e.id ?
                                    <>
                                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={e.name} />
                                        <button onClick={() => {
                                            setIsEditName(false)
                                            editTodo({
                                                input,
                                                inputId: 1
                                            }, e.id)
                                            setInput("")
                                        }}>Save</button>
                                        <button onClick={() => {
                                            setIsEditName(false)
                                        }}>Cancel</button>
                                    </>
                                    :
                                    <>
                                        <h2 style={{ color: "red" }}>Name: </h2>{e.name}
                                        <button onClick={() => {
                                            setIsEditName(true)
                                            setCurrentTodo(e.id)
                                        }}>Edit</button>
                                    </>
                            }
                        </div>
                        <div>
                            {
                                isEditAbout && currentTodo === e.id ?
                                    <>
                                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={e.about} />
                                        <button onClick={() => {
                                            setIsEditAbout(false)
                                            editTodo({
                                                input,
                                                inputId: 2
                                            }, e.id)
                                            setInput("")
                                        }}>Save</button>
                                        <button onClick={() => {
                                            setIsEditAbout(false)
                                        }}>Cancel</button>
                                    </>
                                    :
                                    <>
                                        <h2 style={{ color: "red" }}>About: </h2>{e.about}
                                        <button onClick={() => {
                                            setIsEditAbout(true)
                                            setCurrentTodo(e.id)
                                        }}>Edit</button>
                                    </>
                            }
                        </div>
                        <h3 style={{ color: "red" }}>Date:</h3> {e.date.getMonth() + 1 + "-" + e.date.getDate() + "-" + e.date.getHours() + ":" + e.date.getMinutes() + ":" + e.date.getSeconds()}
                        <h3 style={{ color: "red" }}>Status:</h3> {e.status ? "Выполнено" : "Выполняется"}
                        <Stack direction={"row"} spacing={5}>
                            <button onClick={() => done(e.id)}>Done</button>
                            <button onClick={() => deleteTodo(e.id)}>Delete</button>
                        </Stack>

                    </div>
                ))
            }
        </div>
    );
};

export default Output;