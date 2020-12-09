import React, { useState } from 'react'
import { Provider } from 'react-redux'

import NoteList from './NoteList'
import NoteWrapper from './NoteWrapper'

import store from '../store/store'

import styled from 'styled-components';
import GlobalStyle from '../themes/GlobalStyles'
import { theme } from '../themes/theme'

import Header from './Header'

const Container = styled.div`
width:100vw;
height:100vh;
background:${theme.colors.dark};
display:grid;
grid-template-columns: 20% 1fr 1fr 1fr;
grid-template-rows: 10% 1fr 1fr 10%;
`


const App = () => {
  const [visibleNote, setVisibleNote] = useState()


  const getNoteId = (id) => {
    setVisibleNote(id)
  }

  return (
    <Provider store={ store }>
      <GlobalStyle />
      <Container>
        <Header />
        <NoteWrapper visibleNote={ visibleNote } />
        <NoteList getNoteId={ getNoteId } />
      </Container >
    </Provider >
  );
}

export default App;

