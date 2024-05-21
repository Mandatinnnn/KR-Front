const initialState = {
    portraitImages: [],
    landscapeImages: [],
    numberOfPhrases: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_PHRASES':
            return {
                ...state,
                numberOfPhrases: action.payload
            };
        case 'SET_PORTRAIT_IMAGES':
            return {
                ...state,
                portraitImages: action.payload,
            };
        case 'SET_LANDSCAPE_IMAGES':
            return {
                ...state,
                landscapeImages: action.payload,
            };
        default:
            return state;

    }
};

export default reducer;