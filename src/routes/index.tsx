

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import AppLayout from '../layout/appLayout';
import AuthLayout from '../layout/authLayout';
import Home from '../pages/home';


function Routing () {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path='/login' element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
          </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default Routing;
