import './App.scss';
import {ShowAlert} from './components/ShowAlert/ShowAlert'
import {InputForm} from './components/InputForm'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'
import {Homepage} from './components/Homepage'
import { Routes, Route } from 'react-router-dom';
import {Contact} from './components/Contact'
import {About} from './components/About'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/alert' element ={<ShowAlert />} />
          <Route path='/form' element = {<InputForm  defaultValue={'Hello There'}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
