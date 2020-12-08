export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';


export const addNote = ({title,note})=>({
    type:ADD,
    payload:{
        title,
        note,
        id:Math.floor(Math.random()*123),
    }
})

export const editNote = ({title, note, id})=>({
    type:EDIT,
    payload:{
        title,
        note,
        id,
    }
})

export const deleteNote = (id)=>({
    type:DELETE,
    payload:{
        id,
    }
})

