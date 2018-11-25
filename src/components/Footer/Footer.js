import React from 'react';
import './footer.css';

const Footer = () => (
    <footer>
        <div className='footer-content'>
            <p>Site By Keith Brewster © 2018</p>
            <small>
                *Be aware that sentiment analysis isn't always accurate. Analysis performed with the <a href='http://corpustext.com/reference/sentiment_afinn.html'>AFINN</a> affective 
                lexicon.<br /> The results of analysis do not represent or reflect my own personal opinions.<br />
                I hope that the funny chart headers I wrote don't come back to bite me.
            </small>
            <div className='socials'>
                <p>Follow:</p>
                <a href='https://brewcodes.com/'>Personal</a>
                <a href='https://github.com/brewsterbhg/'>GitHub</a>
                <a href='https://www.twitter.com/switchcasebreak'>Twitter</a>
                <a href='https://www.linkedin.com/in/brewcodes/'>LinkedIn</a>
            </div>
        </div>
    </footer>
);

export default Footer;