import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter } from "react-router-dom";

import Admin from "./layouts/Admin";
import Public from "./layouts/Public";
import User from "./layouts/User";

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


function App() {
  const [layoutComponent, setLayoutComponent] = useState(null);

  useEffect(() => {
    switch (localStorage.getItem('auth_role')) {
      case 'admin':
        setLayoutComponent(<Admin />);
        break;

      case 'user':
        setLayoutComponent(<User />);
        break;

      default:
        setLayoutComponent(<Public />);
        break;
    }
  }, [localStorage.getItem('auth_role')]);

  return (
    <div className="d-flex flex-column min-vh-100">

      <BrowserRouter>
        {layoutComponent}
      </BrowserRouter>
    </div>
  );
}

export default App;
