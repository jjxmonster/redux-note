import React, { useState } from 'react'

import styled from 'styled-components';

import Form from './Form.jsx';

const SingleNote = styled.li``
const NoteTitle = styled.h2``
const NoteContents = styled.p``
const EditButton = styled.button``

const NoteElement = ({ title, note, id }) => {


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
            </SingleNote>
        )

    return (
        <>
            { formOrNoteElement }
        </>
    );
}

export default NoteElement;