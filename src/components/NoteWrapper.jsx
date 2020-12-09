import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import NoteElement from './NoteElement'


const NoteWrapper = ({ notes, visibleNote = "" }) => {

    const [isNoteVisible, setIsNoteVisible] = useState(false)
    const [visibleNoteId, setVisibleNoteId] = useState(visibleNote)

    const actualNote = notes.filter(currentElement => currentElement.id === visibleNoteId);

    const formOrNote = () => {
        if (isNoteVisible && actualNote.length > 0) return (<NoteElement title={ actualNote[0].title } note={ actualNote[0].note } id={ actualNote[0].id } />)
        else return (<Form />)
    }
    const isNoteId = () => {
        if (visibleNote) {
            setIsNoteVisible(true)
        } else {
            setIsNoteVisible(false)
        }
    }
    useEffect(() => {
        setVisibleNoteId(visibleNote)
        isNoteId()
    }, [visibleNote]);
    return (
        <>
            {formOrNote() }
        </>
    );
}


const reduxStateToProps = state => ({
    notes: state.notes
})

const NoteWrapperConsumer = connect(reduxStateToProps)(NoteWrapper)

export default NoteWrapperConsumer