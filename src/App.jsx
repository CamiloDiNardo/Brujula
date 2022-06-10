import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './componentes/Preloader/Preloader';
const Inicio = lazy(() => import('../src/pages/Inicio.jsx'));
const Empresa = lazy(() => import('../src/pages/Empresa'));
const Destinos = lazy(() => import('../src/pages/Destinos'));
const FlotaAvion = lazy(() => import('../src/pages/FlotaAvion'));
const Contacto = lazy(() => import('../src/pages/Contacto'));
const AcropolisDeAtenas = lazy(() => import('../src/pages/AcropolisDeAtenas'));
const Bariloche = lazy(() => import('../src/pages/Bariloche'));
const Calafate = lazy(() => import('../src/pages/Calafate'));
const ColiseoDeRoma = lazy(() => import('../src/pages/ColiseoDeRoma'));
const CondicionesGeneralesDeTransporte = lazy(() =>
  import('../src/pages/CondicionesGeneralesDeTransporte')
);
const CristoRedentor = lazy(() => import('../src/pages/CristoRedentor'));
const Disneyland = lazy(() => import('../src/pages/Disneyland'));
const LagoBled = lazy(() => import('../src/pages/LagoBled'));
const MachuPicchu = lazy(() => import('../src/pages/MachuPicchu'));
const MonteFiju = lazy(() => import('../src/pages/MonteFiju'));
const Madrid = lazy(() => import('../src/pages/Madrid'));
const MurallaChina = lazy(() => import('../src/pages/MurallaChina'));
const OperaDeSidney = lazy(() => import('../src/pages/OperaDeSidney'));
const Palolem = lazy(() => import('../src/pages/Palolem'));
const Panama = lazy(() => import('../src/pages/Panama'));
const PoliticasDeCookies = lazy(() => import('../src/pages/PoliticaDeCookies'));
const PoliticasDePrivacidad = lazy(() =>
  import('../src/pages/PoliticaDePrivacidad')
);
const TorreEiffel = lazy(() => import('../src/pages/TorreEiffel'));
const VerTodos = lazy(() => import('../src/pages/VerTodos'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <Router>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Empresa' element={<Empresa />} />
            <Route path='/Destinos' element={<Destinos />} />
            <Route path='/Flota' element={<FlotaAvion />} />
            <Route path='#Contacto' element={<Contacto />} />
            <Route path='/AcropolisDeAtenas' element={<AcropolisDeAtenas />} />
            <Route path='/Bariloche' element={<Bariloche />} />
            <Route path='/Calafate' element={<Calafate />} />
            <Route path='/ColiseoDeRoma' element={<ColiseoDeRoma />} />
            <Route
              path='/CondicionesGeneralesDeTransporte'
              element={<CondicionesGeneralesDeTransporte />}
            />
            <Route path='/CristoRedentor' element={<CristoRedentor />} />
            <Route path='/Disneyland' element={<Disneyland />} />
            <Route path='/LagoBled' element={<LagoBled />} />
            <Route path='/MachuPicchu' element={<MachuPicchu />} />
            <Route path='/Madrid' element={<Madrid />} />
            <Route path='/MonteFiju' element={<MonteFiju />} />
            <Route path='/MurallaChina' element={<MurallaChina />} />
            <Route path='/OperaDeSidney' element={<OperaDeSidney />} />
            <Route path='/Palolem' element={<Palolem />} />
            <Route path='/Panama' element={<Panama />} />
            <Route
              path='/PoliticasDeCookies'
              element={<PoliticasDeCookies />}
            />
            <Route
              path='/PoliticasDePrivacidad'
              element={<PoliticasDePrivacidad />}
            />
            <Route path='/TorreEiffel' element={<TorreEiffel />} />
            <Route path='/VerTodos' element={<VerTodos />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
