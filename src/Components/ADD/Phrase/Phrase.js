import React, { useState } from 'react';
import '../Phrase/Phrase.css';

const Phrase = ({ phrases }) => {
    const [currentPage, setCurrentPage] = useState(0); 

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };

    const pages = chunkArray(phrases, 8);

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
        <div className='phrase-controller'>
            {pages[currentPage] && (
                <div className="phrase-page">
                    {pages[currentPage].map(( phrase, index) => (
                        <div key={index} className={`phrase ${index % 2 === 0 ? 'even-phrase' : 'odd-phrase'}`}>
                            <p id="text">{phrase.content}</p>
                            <p id="author">{phrase.author}</p>
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

export default Phrase;
