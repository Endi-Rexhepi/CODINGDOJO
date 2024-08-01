import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../AddNewBook.css';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user._id) {
      const fetchBooks = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/books');
          setBooks(response.data.books);
        } catch (error) {
          console.error('Error fetching books:', error.message);
        }
      };
  
      const fetchFavorites = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:8000/api/favorites/${user._id}/favorites`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          setFavorites(response.data.favorites.map(fav => fav._id));
        } catch (error) {
          console.error('Error fetching favorites:', error.message);
        }
      };
      
  
      fetchBooks();
      fetchFavorites();
    }
  }, [user]);
      

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log(user)
      const response = await axios.post('http://localhost:8000/api/books', {
        title,
        description,
        createdBy : user._id
      }, {
        headers: { 'Authorization': `Bearer ${token}` },
        withCredentials: true
      });
      
      setBooks([...books, response.data.book]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding book:', error.response ? error.response.data : error.message);
    }
  };
  

  const handleAddFavorite = async (bookId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:8000/api/books/${bookId}/favorite`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setFavorites([...favorites, bookId]);
    } catch (error) {
      console.error('Error adding favorite:', error.response ? error.response.data : error.message);
    }
  };

  const handleRemoveFavorite = async (bookId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:8000/api/books/${bookId}/unfavorite`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setFavorites(favorites.filter(fav => fav !== bookId));
    } catch (error) {
      console.error('Error removing favorite:', error.response ? error.response.data : error.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isFavorite = (bookId) => favorites.includes(bookId);

  const handleBookClick = (bookId, createdBy) => {
    if (createdBy === user._id) {
      navigate(`/edit-book/${bookId}`);
    } else {
      navigate(`/view-book/${bookId}`);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Welcome, {user.firstName}</h1>
        <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 rounded-3 card-body">
            <div className="header-background mb-3">
              <h2 className="text-center">Add a New Book</h2>
            </div>
            <form onSubmit={handleAddBook}>
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
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 rounded-3 card-body">
            <div className="header-background mb-3">
              <h2 className="text-center">All Books</h2>
            </div>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {books.map((book) => (
                <div key={book._id} className="mb-3">
                  <h4>
                    <button className="btn btn-link text-decoration-none" onClick={() => handleBookClick(book._id, book.createdBy._id)}>
                      {book.title}
                    </button>
                  </h4>
                  {book.createdBy && (
                    <p>Added by: {book.createdBy.firstName} {book.createdBy.lastName}</p>
                  )}
                  {isFavorite(book._id) ? (
                    <button className="btn btn-link text-decoration-none" onClick={() => handleRemoveFavorite(book._id)}>
                      Remove from favorites
                    </button>
                  ) : (
                    <button className="btn btn-link text-decoration-none" onClick={() => handleAddFavorite(book._id)}>
                      Add to favorites
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;

