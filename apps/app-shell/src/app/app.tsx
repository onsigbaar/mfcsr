import React from 'react';
import {Header} from '@libreria/ui';
import {Button, Container} from 'semantic-ui-react';
import {Route, Routes} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import useMarketplace from 'marketplace/Module';

const Category = React.lazy(() => import('category/Module'));
const Purchase = React.lazy(() => import('purchase/Module'));

export function App() {
  const {count, increment} = useMarketplace();
  return (
    <React.Suspense fallback={null}>
      <Container style={{marginTop: '5rem'}}>
        <Header/>
        <Button onClick={increment}>{count} Likes </Button>
        <Routes>
          <Route path="/" element={<Category/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/purchase" element={<Purchase/>}/>
        </Routes>
      </Container>
    </React.Suspense>
  );
}

export default App;
