import './App.css';
import {ShowAlert} from './components/ShowAlert/ShowAlert'
import {InputForm} from './components/InputForm'

function App() {

  return (
    <div className="App">
      <header className="App-header">
       DaftAcademy Project
      </header>
      <body className="Body">
          <ShowAlert />
          <InputForm />
      </body>
      <footer className="Footer">
        Designed by Mateusz Binięda
      </footer>

    </div>
  );
}

export default App;
