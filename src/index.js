import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  store  from './app/store';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/employeeList'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        
      
      </Routes>
      </Router>
      

    </Provider>

  </React.StrictMode>
);

