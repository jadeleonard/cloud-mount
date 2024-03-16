import React from 'react';











import { Routes, Route,} from 'react-router-dom';
import LandingPage from './publicPages/LandingPage';
import PrivateRoutes from './auth/privateRoutes';
import Dashboard from './privatePages/Dashboard';
import Createitems from './privatePages/Createitems';




const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<LandingPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createitem' element={<Createitems />} />
        {/* Define route for DetailsComponent */}
        <Route path='/details/:itemId' element={<DetailsComponent />} />
        <Route path='/createitem' element={<Createitems />} />
      </Route>
      
    </Routes>
  );
};

export default App;
