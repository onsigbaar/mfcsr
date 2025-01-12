// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Container, Header as Text} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import BookList from './book-list';
import React from 'react';

const Featured = React.lazy(() => import('featured/Module'));

export function App() {
  return (
    <Container style={{marginTop: '5rem'}}>
      <Text size="huge">Category App</Text>
      <BookList/>

      <Featured/>
    </Container>
  );
}

export default App;
