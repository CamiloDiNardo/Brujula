import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Preloader from './componentes/Preloader/Preloader';
const Footer = lazy(() => import('./componentes/Footer/Footer'));
const Inicio = lazy(() => import('../src/pages/Inicio.jsx'));
const Empresa = lazy(() => import('../src/pages/Empresa'));
const Destinos = lazy(() => import('../src/pages/Destinos'));
const FlotaAvion = lazy(() => import('../src/pages/FlotaAvion'));
const Contacto = lazy(() => import('../src/pages/Contacto'));
const CondicionesGeneralesDeTransporte = lazy(() =>
  import('../src/pages/CondicionesGeneralesDeTransporte')
);
const Ciudad = lazy(() => import('../src/pages/Ciudad'));
const PoliticasDeCookies = lazy(() => import('../src/pages/PoliticaDeCookies'));
const PoliticasDePrivacidad = lazy(() =>
  import('../src/pages/PoliticaDePrivacidad')
);
const VerTodos = lazy(() => import('../src/pages/VerTodos'));
// Despues de Vertodos puse /:ciudad que hace que ir si vamos a ver todos y desp queremos ir a una ciudad lo cambie automaticamente xq asi lo configuramos en otro componente.
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
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/:ciudad' element={<Ciudad />} />
            <Route path='/VerTodos' element={<VerTodos />} />
            <Route path='/VerTodos/:ciudad' element={<Ciudad />} />
            <Route
              path='/PoliticasDeCookies'
              element={<PoliticasDeCookies />}
            />
            <Route
              path='/CondicionesGenerales'
              element={<CondicionesGeneralesDeTransporte />}
            />
            <Route
              path='/PoliticasDePrivacidad'
              element={<PoliticasDePrivacidad />}
            />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </div> // Con Navigate hacemos que si va a una ruta desconocida, se redireccione automaticamente al inicio GOD. el path="*" indica que la ruta no existe
  );
};

export default App;
