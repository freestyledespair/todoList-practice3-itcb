import { Button, Stack, TextField } from '@mui/material';
import React from 'react';

const Form = ({ name, about, setName, setAbout, addTodo }) => {
    const noAddTodo = (event) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={name !== '' ? addTodo : (event) => noAddTodo(event)}>
            <Stack direction={"row"} spacing={2}>
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name" variant="filled" />
                <TextField value={about} onChange={(e) => setAbout(e.target.value)} id="filled-basic" label="About" variant="filled" />
                <Button type="submit" size="large" variant="contained">Add ToDo</Button>
            </Stack>

        </form>
    );
};

export default Form;