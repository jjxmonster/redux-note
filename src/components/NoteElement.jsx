import React, { useState } from 'react'
import { connect } from 'react-redux';

import { deleteNote } from '../actions/appActions'

import styled from 'styled-components';

import Form from './Form.jsx';

const SingleNote = styled.li``
const NoteTitle = styled.h2``
const NoteContents = styled.p``
const EditButton = styled.button``
const DeleteButton = styled.button``

const NoteElement = ({ title, note, id, deleteNote }) => {


    const [isVisibleForm, setIsVisibleForm] = useState(false)

    const toogleElements = () => setIsVisibleForm(prev => !prev)

    const formOrNoteElement = isVisibleForm ?
        (
            <Form
                title={ title }
                note={ note }
                id={ id }
                toogleVisible={ toogleElements }
            />
        ) : (
            <SingleNote>
                <NoteTitle>{ title }</NoteTitle>
                <NoteContents>{ note }</NoteContents>
                <EditButton onClick={ toogleElements } >EDIT</EditButton>
                <DeleteButton onClick={ () => deleteNote(id) }>DELETE</DeleteButton>
            </SingleNote>
        )

    return (
        <>
            { formOrNoteElement }
        </>
    );
}

const connectActionDelete = ({
    deleteNote,
})

const ElementConsumer = connect(null, connectActionDelete)(NoteElement)


export default ElementConsumer;