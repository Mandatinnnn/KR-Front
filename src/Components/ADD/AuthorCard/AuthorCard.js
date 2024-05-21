import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../AuthorCard/AuthorCard.css';

const AuthorCard = ({ authors }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const authorImg = "https://uploads4.wikiart.org/00475/images/leonardo-da-vinci/0000136308-og.JPG";
  
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };
  
    const pages = chunkArray(authors, 3);
  
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo({
            top: 250,
            behavior: 'smooth'
        });
    };
  
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo({
            top: 250,
            behavior: 'smooth'
        });
    };
  
    return (
        <div className='author-controller'>
            {pages[currentPage] && (
                <div className="author-page">
                    {pages[currentPage].map((author, index) => (
                        <div key={index} className="author-card">
                            <div className="author-image">
                                <img src={authorImg} alt={`${author.name} image`} />
                            </div>
                            <div className="author-details">
                                <h2>{author.name}</h2>
                                <p>{author.description}</p>
                                <p>Number of quotes: {author.quoteCount}</p>
                                <Link to={`/author/${author._id}`} className="author-link">Author's page</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className='button-panel'>
                {currentPage > 0 && <button onClick={() => prevPage()}>{"<"}</button>}
                {pages.length > 1 && <p>{currentPage + 1}</p>} 
                {currentPage < pages.length - 1 && <button onClick={() => nextPage()}>{">"}</button>}
            </div>
        </div>
    );
  };

export default AuthorCard;
