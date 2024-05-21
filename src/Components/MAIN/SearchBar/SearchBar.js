import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../SearchBar/SearchBar.css';
import Phrase from 'D:/Front/kr/src/Components/ADD/Phrase/Phrase';
import AuthorCard from 'D:/Front/kr/src/Components/ADD/AuthorCard/AuthorCard';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [phrases, setPhrases] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [searchBy, setSearchBy] = useState('quotables');

    useEffect(() => {
        const fetchPhrase = async () => {
            try {
                const response = await axios.get(`https://api.quotable.io/quotes/random?limit=8`);
                setPhrases(response.data);
            } catch (error) {
                console.error('Error getting phrases:', error);
            }
        };

        const fetchAuthors = async () => {
            try {
                const response = await axios.get(`https://api.quotable.io/search/authors?query=john`);
                setAuthors(response.data.results);
            } catch (error) {
                console.error('Error getting phrases:', error);
            }
        };

        fetchPhrase();
        fetchAuthors();
    }, [searchBy]);

    const handleSearch = async () => {
        if(searchTerm !== "") {
            if(searchBy === "quotables") {
                try {
                    const response = await axios.get(`https://api.quotable.io/search/quotes?query=${searchTerm}`);
                    setPhrases(response.data.results);
                } catch (error) {
                    console.error('Error getting phrases:', error);
                }
            } else {
                try {
                    const response = await axios.get(`https://api.quotable.io/search/authors?query=${searchTerm}`);
                    setAuthors(response.data.results);
                } catch (error) {
                    console.error('Error getting phrases:', error);
                }
            }
        }

        setIsActive(true);
    };

    const handleSelectorChange = (e) => {
        setSearchBy(e.target.value);
        setSearchTerm('');
        setIsActive(false);
    };

    const handleKeyPress = async  (event) => {
        if (event.key === 'Enter') {
            await handleSearch();
        }
    };

    return (
    <div className='search-container'>
        <div className={`search-bar ${isActive ? 'active' : ''}`}>
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            />

            <select onChange={handleSelectorChange}>
                <option value="quotables" selected>By Quotables</option>
                <option value="authors">By Authors</option>
            </select>

            <button type="submit" onClick={handleSearch}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="21" y1="21" x2="15.8" y2="15.8" />
                </svg>
            </button>
        </div>
        <div className="result">
            {searchBy === 'quotables' && <Phrase phrases={phrases} />}
            {searchBy === 'authors' && <AuthorCard authors={authors} />}
        </div>
    </div>    
    );
};

export default SearchBar;
