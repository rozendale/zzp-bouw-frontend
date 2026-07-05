import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ContactenList from './pages/ContactenList';
import ContactenDetail from './pages/ContactenDetail';
import ContactenUpdate from './pages/ContactenUpdate';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import WerkOmschrijvingenList from './pages/WerkOmschrijvingenList';
import WerkOmschrijvingenDetail from './pages/WerkOmschrijvingenDetail';
import FactuurList from './pages/FactuurList';
import FactuurEdit from './pages/FactuurEdit';
import FactuurNew from './pages/FactuurNew';
import FactuurDetail from './pages/FactuurDetail';
import TransactieList from './pages/TransactieList';
// import TransactieEdit from './pages/TransactieEdit';
// import TransactieNew from './pages/TransactieNew';
import WerkzaamhedenListList from './pages/WerkzaamhedenList.tsx';
import WerkzaamhedenDetail from './pages/WerkzaamhedenDetail';
import NumberList from './pages/primaze/NumberList';
import DesignerList from './pages/icm/DesignerList';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/beheer/contacten', element: <ContactenList />},
  {path: '/beheer/contacten/edit/:id', element: <ContactenUpdate />},
  {path: '/beheer/contact/:id', element: <ContactenDetail />},
  {path: '/beheer/projecten', element: <ProjectList />},
  {path: '/beheer/project/:id', element: <ProjectDetail />},
  {path: '/beheer/werkomschrijvingen', element: <WerkOmschrijvingenList />},
  {path: '/beheer/werkomschrijving/:id', element: <WerkOmschrijvingenDetail />},
  {path: '/beheer/werkzaamheden', element: <WerkzaamhedenListList />},
  {path: '/beheer/werkzaamheid/:id', element: <WerkzaamhedenDetail />},
  {path: '/beheer/facturen', element: <FactuurList />},
  {path: '/beheer/factuur/:id', element: <FactuurDetail />},
  {path: '/beheer/facturen/edit/:id', element: <FactuurEdit />},
  {path: '/beheer/facturen/new', element: <FactuurNew />},
  {path: '/beheer/transacties', element: <TransactieList />},
  // {path: '/beheer/transacties/edit/:id', element: <TransactieEdit />},
  // {path: '/beheer/transacties/new', element: <TransactieNew />},

  {path: '/priem/test', element: <NumberList />},
  {path: '/icm/designer', element: <DesignerList />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </StrictMode>,
);
