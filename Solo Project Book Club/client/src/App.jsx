import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './components/LogIn';
import Registration from './components/Registration';
import AddNewBook from './components/AddNewBook';
import ViewBook from './components/ViewBook';
import EditBook from './components/EditBook';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/add-new-book" element={<AddNewBook user={user} />} />
            <Route path="/view-book/:bookId" element={<ViewBook user={user}/>} />
            <Route path="/edit-book/:bookId" element={<EditBook user={user}/>} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
