import React from 'react';
import '../ImageAndPhrase/ImageAndPhrase.css';
import AnimatedText from 'D:/Front/kr/src/Components/ADD/AnimatedText/AnimatedText';

const ImageAndPhrase = ({ image, phrase, type }) => {
    return (
        <div className={`image-phrase-container ${type}`}>
            <div className='image-container'>
                <img src={image.image} alt='Image'/>
                <p>{image.artistName}</p>
            </div>
            <div className='phrase-container'> 
                {/* <p>{phrase}</p> */}
                <AnimatedText text={phrase} />
            </div>
        </div>
    );
};

export default ImageAndPhrase;