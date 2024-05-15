import Navbar from "./componentes/Navbar";
import { SearchBar } from "./componentes/SearchBar";
import Footer from "./componentes/Footer";
import { TableCompras } from "./componentes/TableCompras";
import PruebaCard from "./componentes/PruebaCard";
import Carrusel from "./componentes/Carrusel";
import Reviews from "./componentes/Reviews";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{/* <Carrusel/>*/}</div>
      <SearchBar />
      <div>
        <PruebaCard />
      </div>
      <div>
        <TableCompras />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
