import React from 'react'
import { Provider } from 'react-redux'

import store from '../store/store'

import styled from 'styled-components';

const Container = styled.div`

`
const Title = styled.h1`

`

const App = () => {
  return (
    <Provider store={ store }>
      <Container>
        <Title>notes</Title>
      </Container>
    </Provider>
  );
}

export default App;
