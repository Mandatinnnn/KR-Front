import React, { useState, useEffect } from 'react';
import '../AnimatedText/AnimatedText.css';

const AnimatedText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [shouldReset, setShouldReset] = useState(false);

    useEffect(() => {
        let interval;
        if (!shouldReset) {
            interval = setInterval(() => {
                if (displayedText.length < text.length) {
                    setDisplayedText(text.substring(0, displayedText.length + 1));
                } else {
                    clearInterval(interval);
                    setShouldReset(true);
                }
            }, 300);
        } else {
            interval = setInterval(() => {
                setDisplayedText('');
                setShouldReset(false);
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [displayedText, text, shouldReset]);

    return (
        <div className="animated-text">
            {displayedText.split('').map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </div>
    );
};

export default AnimatedText;
