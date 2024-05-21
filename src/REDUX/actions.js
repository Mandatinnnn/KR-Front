export const setNumberOfPhrases = (numberOfPhrases) => {
    return {
        type: 'SET_NUMBER_OF_PHRASES',
        payload: numberOfPhrases
    };
};

export const setPortraitImages = (images) => ({
    type: 'SET_PORTRAIT_IMAGES',
    payload: images,
});

export const setLandscapeImages = (images) => ({
    type: 'SET_LANDSCAPE_IMAGES',
    payload: images,
});