import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components';

import NoteElement from './NoteElement'
const List = styled.ul``

const NoteList = ({ notes }) => {

    const noteElements = notes.map(note => (
        <NoteElement key={ note.id } { ...note } />
    ))


    return (
        <List>
            { noteElements }
        </List>
    );
}

const reduxStateToProps = state => ({
    notes: state.notes
})

const noteListConsumer = connect(reduxStateToProps)(NoteList)

export default noteListConsumer