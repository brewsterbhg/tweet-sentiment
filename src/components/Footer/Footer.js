import React from 'react';
import './footer.css';

const Footer = () => (
    <footer>
        <p>Site By Keith Brewster</p>
        <small>
            *Be aware that analysis isn't close to perfect. Sentiment Analysis performed with the <a href='http://corpustext.com/reference/sentiment_afinn.html'>AFINN</a> affective 
            lexicon.<br /> The opinions reflected from the results do not represent or reflect my own personal opinions.<br />
            I hope that the funny chart headers I wrote don't come back to bite me.
        </small>
        <div className='socials'>
            <p>Follow:</p>
            <a href='https://brewcodes.com/'>Personal</a>
            <a href='https://github.com/brewsterbhg/'>GitHub</a>
            <a href='https://www.instagram.com/brewsterbhg'>Instagram</a>
            <a href='https://www.linkedin.com/in/brewcodes/'>LinkedIn</a>
        </div>
    </footer>
);

export default Footer;