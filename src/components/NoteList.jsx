import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'


import styled from 'styled-components';

const ListElement = styled.div`
width:100%;
height:10%;
border-bottom:solid white 2px;
cursor:pointer;
display:flex;
align-items:flex-end;
margin-bottom:2%;
font-size:3vh;
`
const ListElementTitle = styled.p`
    
    margin-left:2%;
`
const List = styled.div`
grid-row:2/5;
color:white;
padding-right:5%;
`
const ListTitle = styled.h1``


const NoteList = ({ notes, getNoteId }) => {

    const handleOnClick = (note) => {
        getNoteId(note.id)
    }

    const noteElements = notes.map(note => (
        <ListElement key={ note.id } onClick={ handleOnClick.bind(this, note) }> <FontAwesomeIcon icon={ faThumbtack } /> <ListElementTitle>{ note.title }</ListElementTitle></ListElement >
    ))

    return (
        <List>
            <ListTitle>my notes</ListTitle>
            {/* <ListElement key={ 1 }>new note</ListElement > */ }
            { noteElements }
        </List>
    );
}

const reduxStateToProps = state => ({
    notes: state.notes
})

const noteListConsumer = connect(reduxStateToProps)(NoteList)

export default noteListConsumer