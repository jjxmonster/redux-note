import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addNote, editNote } from '../actions/appActions'

import styled from 'styled-components';
import { theme } from '../themes/theme'

const NoteWrapper = styled.div`
grid-column:2/5;
grid-row:2/4;
display:flex;
flex-direction:column;
padding-left:30px;
`
const FormH1 = styled.h1`
flex:1;
display:flex;
align-items:flex-end;
color:#ffffff;
font-size:5vh;
`
const FormWrapper = styled.form`
flex:8;
display:flex;
flex-direction:column;

`
const InputWrapper = styled.div`
flex:1;
position:relative;
border-bottom:5px ${theme.colors.dark} solid;
background:${theme.colors.orange};
`
const TextAreaWrapper = styled.div`
background:${theme.colors.orange};
flex:5;
position:relative;
border-top:5px ${theme.colors.dark} solid;
`
const ButtonAndErrorWrapper = styled.div`
flex:1;
display:flex;
justify-content:flex-start;
align-items:center;

`
const LabelForInput = styled.label`
position: absolute;
top: 50%;  
right: 0%; 
transform: translate(0, -50%);
font-size:6vh;
color:#8f5800;
font-weight:bold;
`

const LabelForArea = styled.label`
position: absolute;
top: 2%;  
right: 0%; 
transform: translate(0, 0%);
font-size:6vh;
color:#8f5800;
font-weight:bold;
`

const Input = styled.input`
width:100%;
height:100%;
background:transparent;
border:none;
font-size:5vh;
padding-left:2%;

&:focus{
    outline:none;
}
`
const TextArea = styled.textarea`
width:100%;
height:100%;
background:transparent;
border:none;
font-size:5vh;
padding:2%;

&:focus{
    outline:none;
}`
const SubmitButton = styled.button`
cursor:pointer;
color:white;
font-size:4vh;
width:20%;
height:50%;
margin-right:2%;
background:transparent;
border:2px solid ${theme.colors.grey} ;
&:focus{
    outline:none;
}
&:hover{
    border:2px solid ${theme.colors.orange};
    color: ${theme.colors.orange};
}
`
const ErrorMessage = styled.p`
color:red;
font-size:3vh;
`

const Form = ({ title = '', note = '', id, toogleVisible, }) => {

    const [ErrorMessageVisible, setIsErrorMessageVisible] = useState(false)
    const [titleInput, setTitleInput] = useState(title)
    const [noteInput, setNoteInput] = useState(note)

    const dispatch = useDispatch()

    const handleChangeTitle = e => setTitleInput(e.target.value)
    const handleNoteChange = e => setNoteInput(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();

        if (titleInput === "" || noteInput === "") {
            setIsErrorMessageVisible(true)
        } else {
            setIsErrorMessageVisible(false)
            setTitleInput("")
            setNoteInput("")
            const noteObject = {
                title: titleInput,
                note: noteInput,
                id,
            };

            id ? dispatch(editNote(noteObject)) : dispatch(addNote(noteObject))

            if (id) {
                toogleVisible()
            }
        }
    }

    return (
        <NoteWrapper>
            <FormH1> { id ? "edit note" : "new note" }</FormH1>
            <FormWrapper onSubmit={ handleSubmit }>
                <InputWrapper>
                    <LabelForInput htmlFor="title" >{ id ? "edit title" : "enter title" }</LabelForInput>
                    <Input
                        id="title"
                        type="text"
                        onChange={ handleChangeTitle }
                        value={ titleInput }
                    />
                </InputWrapper>
                <TextAreaWrapper>
                    <LabelForArea htmlFor="userNote">{ id ? "edit note" : "enter note" }</LabelForArea>
                    <TextArea
                        id="userNote"
                        onChange={ handleNoteChange }
                        value={ noteInput }
                    />
                </TextAreaWrapper>
                <ButtonAndErrorWrapper>
                    <SubmitButton type="submit">
                        { id ? "save" : "add note" }
                    </SubmitButton>
                    { ErrorMessageVisible ? <ErrorMessage>Please enter title and some note.</ErrorMessage> : null }
                </ButtonAndErrorWrapper>
            </FormWrapper>
        </NoteWrapper>
    )
}


export default Form;