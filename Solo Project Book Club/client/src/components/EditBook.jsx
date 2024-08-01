import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const EditBook = () => {
  const { bookId } = useParams();
  const { user, logout } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [likedUsers, setLikedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${bookId}`);
        console.log(response.data.book.favorites); // Log the fetched data
        setTitle(response.data.book.title);
        setDescription(response.data.book.description);
        setLikedUsers(response.data.book.favorites);
      } catch (error) {
        console.error('Error fetching book:', error.message);
      }
    };
  
    fetchBook();
  }, [bookId]);
  

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:8000/api/books/${bookId}`, {
        title,
        description
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      navigate('/add-new-book');
    } catch (error) {
      console.error('Error updating book:', error.message);
    }
  };

  const handleDeleteBook = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/books/${bookId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      navigate('/add-new-book');
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Welcome, {user.firstName}</h1>
        <button className="btn btn-danger" onClick={logout}>Log Out</button>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 rounded-3 card-body">
            <div className="header-background mb-3">
              <h2 className="text-center">Edit Book</h2>
            </div>
            <form onSubmit={handleUpdateBook}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Update Book</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteBook}>Delete Book</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 rounded-3 card-body">
            <div className="header-background mb-3">
              <h2 className="text-center">Likes</h2>
            </div>
            <ul>
              {likedUsers.map((likedUser) => (
                <li key={likedUser._id}>{likedUser.firstName} {likedUser.lastName} liked this book</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
