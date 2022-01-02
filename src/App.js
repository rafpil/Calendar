import logo from './logo.svg';
import './App.css';
import { MDBBadge } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MDBBadge>Primary</MDBBadge>
      <MDBBadge className='mx-2' color='secondary'>
        Secondary
      </MDBBadge>
      <MDBBadge color='success'>Success</MDBBadge>
      <MDBBadge className='mx-2' color='danger'>
        Danger
      </MDBBadge>
      <MDBBadge color='warning'>Warning</MDBBadge>
      <MDBBadge className='mx-2' color='info'>
        Info
      </MDBBadge>
      <MDBBadge className='text-dark me-2' color='light'>
        Light
      </MDBBadge>
      <MDBBadge color='dark'>Dark</MDBBadge>
      </header>
    </div>
  );
}

export default App;
