import React, { useState } from 'react';
import '../Background/Background.css';
import data from 'D:/Front/kr/src/paintings.json'; 
import ImageAndPhrase from 'D:/Front/kr/src/Components/ADD/ImageAndPhrase/ImageAndPhrase';

const Background = () => {
    const phrase = 'I am an artist, this is how I see it';

    const [portraitImages] = useState(() => {
        const temp = [];
        data.forEach(image => {
            const orientation = image.width > image.height ? 'landscape' : 'portrait';
            if (orientation === 'portrait') {
                temp.push(image);
            }
        });
        return temp;
    });

    const [landscapeImages] = useState(() => {
        const temp = [];
        data.forEach(image => {
            const orientation = image.width > image.height ? 'landscape' : 'portrait';
            if (orientation === 'landscape') {
                temp.push(image);
            }
        });
        return temp;
    });

    return (
        <div className='background'>
            <ImageAndPhrase image={landscapeImages[Math.floor(Math.random() * landscapeImages.length)]}  phrase={phrase} type='landscape' />
            <ImageAndPhrase image={portraitImages[Math.floor(Math.random() * portraitImages.length)]} phrase={phrase} type='portrait' />
            <ImageAndPhrase image={landscapeImages[Math.floor(Math.random() * landscapeImages.length)]}  phrase={phrase} type='landscape' />
        </div>
    );
};

export default Background;
