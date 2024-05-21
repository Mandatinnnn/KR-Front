import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Components/PAGES/Home/Home';
import AuthorPage from '../Components/PAGES/AuthorPage/AuthorPage';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/author/:authorId" element={<AuthorPage />} />
            </Routes>
        </Router>
    );
};

export default App;