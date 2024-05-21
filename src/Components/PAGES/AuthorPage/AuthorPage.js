import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Phrase from 'D:/Front/kr/src/Components/ADD/Phrase/Phrase';
import axios from 'axios';
import '../AuthorPage/AuthorPage.css';
import Background from 'D:/Front/kr/src/Components/MAIN/Background/Background';

const AuthorPage = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState(null);
    const [phrases, setPhrases] = useState(null);
    const authorImg = "https://uploads4.wikiart.org/00475/images/leonardo-da-vinci/0000136308-og.JPG";

    useEffect(() => {
        const fetchAuthorData = async () => {
            try {
                const response = await axios.get(`https://api.quotable.io/authors/${authorId}`);
                const authorData = response.data;

                setAuthor(authorData);
                setPhrases(authorData.quotes);
            } catch (error) {
                console.error('Error retrieving author data:', error);
            }
        };
      
        fetchAuthorData();    
    }, [authorId]);

    return (
        <div className='author'>
            {author ? (
                <div className='author-info'>
                    <h2>{author.name}</h2>
                    <div className='author-bio'>
                        <img src={authorImg} alt={author.name} />
                        <p>{author.bio}</p>
                    </div>
                    <Phrase phrases={phrases} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Background />
        </div>
    );
};

export default AuthorPage;
