import './App.css'
import Navbar from './components/Navbar'
import Leftcolumn from './components/Leftcolumn'
import Rightcolumn from './components/Rightcolumn'
import Bottomcontent from './components/Bottomcontent'

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between h-auto">
      <Navbar />
      <div className="columns-container h-auto row w-100 m-0 justify-content-around py-5">
        <Leftcolumn />
        <Rightcolumn />
      </div>
      <Bottomcontent />
    </div>
  )
}

export default App
