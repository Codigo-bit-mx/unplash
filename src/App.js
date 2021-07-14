import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import ImgState from './context/app/imgState';
import Imagenes from './componentes/Imagenes';

function App() {
  return (

  <ImgState>

    <div>
      <Header />
    </div>

    <div>
      <Imagenes />
    </div>

    <div>
      <Footer />
    </div>

  </ImgState>

    
 );
}

export default App;
