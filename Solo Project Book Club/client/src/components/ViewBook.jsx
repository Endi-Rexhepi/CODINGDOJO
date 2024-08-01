import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useParams } from 'react-router-dom';

const ViewBook = () => {
  const { bookId } = useParams();
  const { user, logout } = useAuth();
  const [book, setBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${bookId}`);
        setBook(response.data.book);
        setIsFavorite(response.data.book.favorites.some(fav => fav._id === user._id));
      } catch (error) {
        console.error('Error fetching book:', error.message);
      }
    };

    fetchBook();
  }, [bookId, user._id]);

  const handleAddFavorite = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:8000/api/books/${bookId}/favorite`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setIsFavorite(true);
      setBook({
        ...book,
        favorites: [...book.favorites, { _id: user._id, firstName: user.firstName, lastName: user.lastName }]
      });
    } catch (error) {
      console.error('Error adding favorite:', error.message);
    }
  };

  if (!book) return <div>Loading...</div>;

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
              <h2 className="text-center">View Book</h2>
            </div>
            <h3>{book.title}</h3>
            <p>Created by: {book.createdBy.firstName} {book.createdBy.lastName}</p>
            <p>Description: {book.description}</p>
            {isFavorite ? (
              <p>This is one of your favorites</p>
            ) : (
              <button className="btn btn-link text-decoration-none" onClick={handleAddFavorite}>
                Add to favorites
              </button>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 rounded-3 card-body">
            <div className="header-background mb-3">
              <h2 className="text-center">Likes</h2>
            </div>
            <ul>
              {book.favorites.map((likedUser) => (
                <li key={likedUser._id}>{likedUser.firstName} {likedUser.lastName} liked this book</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
