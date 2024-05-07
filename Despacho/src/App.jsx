import Navbar from "./componentes/Navbar";
import { SearchBar } from "./componentes/SearchBar";
import Footer from "./componentes/Footer";
import BotonMain from "./componentes/BotonMain";
import { TableCompras } from "./componentes/TableCompras";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <SearchBar />
      <div>
        <BotonMain />
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
