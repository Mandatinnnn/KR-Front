import React from 'react';
import AuthorsPanel from 'D:/Front/kr/src/Components/MAIN/AuthorsPanel/AuthorsPanel';
import SearchBar from 'D:/Front/kr/src/Components/MAIN/SearchBar/SearchBar';
import Background from 'D:/Front/kr/src/Components/MAIN/Background/Background';
import Footer from 'D:/Front/kr/src/Components/MAIN/Footer/Footer';
import '../Home/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Background />
      <div className='title'>
        <h1>TipsArt</h1>
      </div>
      <AuthorsPanel />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Home;
