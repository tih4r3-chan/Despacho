import Navbar from './componentes/Navbar'
import {SearchBar} from './componentes/SearchBar'
import Footer from './componentes/Footer'
import BotonMain from './componentes/BotonMain'

function App() {
  
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <SearchBar/>
      <div>
        <Footer/>
      </div>
      <div>
        <BotonMain/>
      </div>
    </>
  )
}

export default App
