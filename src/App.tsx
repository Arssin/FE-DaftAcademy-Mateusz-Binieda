import './App.css';
import {ShowAlert} from './components/ShowAlert/ShowAlert'
import {InputForm} from './components/InputForm'
import {Footer} from './components/Footer'
import {Header} from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="Container">
        <ShowAlert />
        <InputForm  defaultValue={'Hello There'}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
