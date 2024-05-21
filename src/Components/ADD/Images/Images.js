import React, { useState, useEffect } from 'react';
import '../Images/Images.css';

const Images = ({ landscapeImages, portraitImages, numberOfPhrases }) => {
    const [combinedImages, setCombinedImages] = useState([]);

    useEffect(() => {
        const generateImages = () => {
            const temp = [];
            const phrasesCount = numberOfPhrases || 1;
            const limit = phrasesCount > 1 ? Math.ceil(phrasesCount / 2) - 2 : phrasesCount;

            for (let i = 0; i < limit; i++) {
                if (landscapeImages.length > 0) {
                    const randomIndex = Math.floor(Math.random() * landscapeImages.length);
                    temp.push(landscapeImages[randomIndex]);
                }
                if (portraitImages.length > 0 && i < 1) {
                    const randomIndex = Math.floor(Math.random() * portraitImages.length);
                    temp.push(portraitImages[randomIndex]);
                }
            }
            setCombinedImages(temp);
        };

        generateImages();
    }, [landscapeImages, portraitImages, numberOfPhrases]);

    return (
        <div className='image-list'>
            {combinedImages.map((image, index) => (
                <div className={`image-container ${index % 2 === 0 ? "landscape" : "portrait"}`} key={index}>
                    <img className="image" src={image.image} alt="Image" />
                    <div className="author-name">{image.artistName}</div>
                </div>
            ))}
        </div>
    );
};

export default Images;
