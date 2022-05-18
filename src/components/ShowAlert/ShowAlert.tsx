import './ShowAlert.css'

export const ShowAlert = () => {

  const handleHelloAlert = () => {
    alert('hello react')
  }

  return (
    <div className="AlertDiv">
        <p className="Title">Task number 1</p>
        <button onClick={handleHelloAlert} className="AlertBtn"> Show alert!</button>
        <a
            className="App-link"
            href="https://github.com/Arssin/FE-DaftAcademy-Mateusz-Binieda"
            target="_blank"
            rel="noopener noreferrer"
        >
          Link GH Repository - Mateusz Binięda
        </a>
    </div>
  )
}

export default ShowAlert