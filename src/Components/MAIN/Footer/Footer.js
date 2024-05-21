import '../Footer/Footer.css';

const Footer = () => {
    const portraitImages = "https://uploads4.wikiart.org/00475/images/leonardo-da-vinci/0000136308-og.JPG";

    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-image">
                    <img src={portraitImages} alt="Footer Image" />
                </div>
                <div className="footer-info">
                    <div className="footer-text">  
                        <p><strong>Task type:</strong> Mandatory homework</p>
                        <p><strong>Teacher:</strong> Nagorny Volodymyr</p>
                        <p><strong>Done for the subject:</strong> Frontend development of SPA Web applications</p>
                        <p><strong>Performed by:</strong> Kolomiichuk Vlayslav IT-11</p>
                    </div>
                    <div className="social-buttons">
                            <button className="social-button twitter" onClick={(e) => {window.location.href = 'https://www.instagram.com/';}} >Instagram</button>
                            <button className="social-button instagram" onClick={(e) => {window.location.href = 'https://web.telegram.org/';}} >Telegram</button>
                            <button className="social-button twitter" onClick={(e) => {window.location.href = 'https://www.youtube.com/';}} >YouBube</button>
                            <button className="social-button instagram" onClick={(e) => {window.location.href = 'https://twitter.com/';}} >Twitter</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;