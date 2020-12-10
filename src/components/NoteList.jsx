import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../themes/theme'
import styled from 'styled-components';

const ListElement = styled.div`
width:100%;
height:5%;
cursor:pointer;
display:flex;
align-items:center;
margin-bottom:2%;
padding-left:2%;
font-size:3vh;
background:${theme.colors.grey};
`
const ListElementTitle = styled.p`
    margin-left:2%;
    color:${theme.colors.dark};
`
const List = styled.div`
grid-row:1/5;
padding-right:30px;
border-right:solid 2px white;
`
const ListTitle = styled.h1`
margin-bottom:5vh;
text-align:center;
padding-top:10%;
height:10%;
color:${theme.colors.grey};
font-size:5vh;
`
const NewElementButton = styled.div`
width:100%;
height:5%;
cursor:pointer;
display:flex;
align-items:center;
margin-bottom:2%;
padding-left:2%;
font-size:3vh;
background:${theme.colors.grey};
margin-bottom:50px;
`


const NoteList = ({ setNoteId }) => {

    const notes = useSelector(store => store.notes)
    const handleOnClick = (note) => { note ? setNoteId(note.id) : setNoteId(0) }

    const noteElements = notes.map(note => (
        <ListElement
            key={ note.id }
            onClick={ handleOnClick.bind(this, note) }>
            <FontAwesomeIcon icon={ faThumbtack } />
            <ListElementTitle>{ note.title }</ListElementTitle>
        </ListElement >
    ))

    return (
        <List>
            <ListTitle>my notes</ListTitle>
            <NewElementButton onClick={ handleOnClick }>
                <FontAwesomeIcon icon={ faPlusCircle } />
                <ListElementTitle>new note</ListElementTitle>
            </NewElementButton>
            { noteElements }
        </List>
    );
}



export default NoteList