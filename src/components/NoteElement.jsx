import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { deleteNote } from '../actions/appActions'

import styled from 'styled-components';
import { theme } from '../themes/theme'

import Form from './Form.jsx';

const SingleNote = styled.div`
grid-column:2/5;
grid-row:2/4;
display:flex;
flex-direction:column;

`
const Title = styled.h2`
flex:1;
display:flex;
align-items:flex-end;
color:#ffffff;
font-size:5vh;
`
const NoteInformations = styled.div`
flex:8;
display:flex;
flex-direction:column;
`
const TitleWrapp = styled.div`
flex:1;
position:relative;
border-bottom:5px ${theme.colors.dark} solid;
background:${theme.colors.orange};
display:flex;
align-items:center;
`
const ContentWrapp = styled.div`
background:${theme.colors.orange};
flex:5;
position:relative;
border-top:5px ${theme.colors.dark} solid;
`
const NoteTitle = styled.h2`
font-weight:400;
padding-left:2%;
font-size:5vh;

`
const NoteContents = styled.p`

font-size:5vh;
padding:2%;
`
const NoteButtons = styled.div`
flex:1;
display:flex;
justify-content:flex-start;
align-items:center;
`
const EditButton = styled.button`
cursor:pointer;
color:white;
font-size:4vh;
width:20%;
height:50%;
background:transparent;
margin-right:2%;
border:2px solid ${theme.colors.grey} ;
&:focus{
    outline:none;
}
&:hover{
    border:2px solid ${theme.colors.orange};
    color: ${theme.colors.orange};
}`
const DeleteButton = styled.button`
cursor:pointer;
color:white;
font-size:4vh;
width:20%;
height:50%;
background:transparent;
border:2px solid ${theme.colors.grey} ;
&:focus{
    outline:none;
}
&:hover{
    border:2px solid ${theme.colors.orange};
    color: ${theme.colors.orange};
}`

const NoteElement = ({ title, note, id }) => {


    const [isVisibleForm, setIsVisibleForm] = useState(false)

    const dispatch = useDispatch()

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
                <Title>my note</Title>
                <NoteInformations>
                    <TitleWrapp>
                        <NoteTitle>{ title }</NoteTitle>
                    </TitleWrapp>
                    <ContentWrapp>
                        <NoteContents>{ note }</NoteContents>
                    </ContentWrapp>

                    <NoteButtons>
                        <EditButton onClick={ toogleElements } >edit</EditButton>
                        <DeleteButton onClick={ () => dispatch(deleteNote(id)) }>delete</DeleteButton>
                    </NoteButtons>

                </NoteInformations>
            </SingleNote>
        )

    return (
        <>
            { formOrNoteElement }
        </>
    );
}

export default NoteElement;