import { Container } from '@mui/material';
import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Container maxWidth='md' sx={{ padding: '1em' }}>
        <Form />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
