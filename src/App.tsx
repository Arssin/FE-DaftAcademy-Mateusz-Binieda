import './App.css';
import {ShowAlert} from './components/ShowAlert/ShowAlert'
import {InputForm} from './components/InputForm'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'
import {Homepage} from './components/Homepage'
import {Header} from './components/Header'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/showAlert' element ={<ShowAlert />} />
          <Route path='/form' element = {<InputForm  defaultValue={'Hello There'}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
