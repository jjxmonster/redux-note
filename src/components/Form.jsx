import { useState } from 'react'
import { connect, useDispatch } from 'react-redux';

import { addNote, editNote } from '../actions/appActions'

import styled from 'styled-components';


const FormWrapper = styled.form``
const InputWrapper = styled.div``
const Label = styled.label``
const Input = styled.input``
const SubmitButton = styled.button``
const ErrorMessage = styled.p`
color:red;
`

const Form = ({ title = '', note = '', id, toogleVisible, addNote, editNote, }) => {

    const [ErrorMessageVisible, setIsErrorMessageVisible] = useState(false)

    const [titleInput, setTitleInput] = useState(title)
    const [noteInput, setNoteInput] = useState(note)

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

            id ? editNote(noteObject) : addNote(noteObject)

            if (id) {
                toogleVisible()
            }
        }
    }

    return (
        <FormWrapper onSubmit={ handleSubmit }>
            <InputWrapper>
                <Label>
                    Title:
                   <Input
                        type="text"
                        onChange={ handleChangeTitle }
                        value={ titleInput }
                    />
                </Label>
            </InputWrapper>
            <InputWrapper>
                <Label>
                    Note:
                   <Input
                        type="text"
                        onChange={ handleNoteChange }
                        value={ noteInput }
                    />
                </Label>
            </InputWrapper>
            <SubmitButton type="submit">
                { id ? "SAVE" : "ADD NOTE" }
            </SubmitButton>
            { ErrorMessageVisible ? <ErrorMessage>Please enter title and some note.</ErrorMessage> : null }
        </FormWrapper>
    )
}

const connectActionsToProps = ({
    addNote,
    editNote,
})

const FormConsumer = connect(null, connectActionsToProps)(Form)

export default FormConsumer