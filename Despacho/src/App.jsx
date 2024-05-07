import Navbar from "./componentes/Navbar";
import { SearchBar } from "./componentes/SearchBar";
import Footer from "./componentes/Footer";
import { TableCompras } from "./componentes/TableCompras";
import PruebaCard from "./componentes/PruebaCard"

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <SearchBar />
      <div>
        <PruebaCard/>
      </div>
      <div>
        <TableCompras />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
