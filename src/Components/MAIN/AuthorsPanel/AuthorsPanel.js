import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../AuthorsPanel/AuthorsPanel.css';


const AuthorsPanel = () => {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAuthors = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.quotable.io/authors?limit=10&sortBy=quoteCount&order=desc');
                setAuthors(response.data.results);
            } catch (error) {
                console.error('Error getting list of authors:', error);
            }
            setLoading(false);
        };

        fetchAuthors();
    }, []);

    return (
    <div className="authors-panel">
        {loading ? (
        <p>Loading...</p>
        ) : (
        <ul>
            {authors.map(( author, index ) => (
            <li key={index}><Link to={`/author/${author._id}`} className="link">{author.name}</Link></li>
            ))}
        </ul>
        )}
    </div>
    );
};

export default AuthorsPanel;

