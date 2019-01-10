import React from 'react';
import './footer.css';
import { ReactComponent as Twitter } from './../../icons/twitter.svg';
import { ReactComponent as LinkedIn } from './../../icons/linkedin.svg';
import { ReactComponent as GitHub } from './../../icons/github.svg';

const Footer = () => (
    <footer>
        <div className='footer-content'>
            <p>Site By Keith Brewster © 2019</p>
            <small>
                *Be aware that sentiment analysis isn't always accurate. Analysis performed with the <a href='http://corpustext.com/reference/sentiment_afinn.html'>AFINN</a> affective 
                lexicon.<br /> The results of analysis do not represent or reflect my own personal opinions.<br />
                I hope that the funny chart headers I wrote don't come back to bite me.
            </small>
            <div className='socials'>
                <p>Follow:</p>
                <a href='https://github.com/brewsterbhg/' aria-label="GitHub">
                    <GitHub />
                </a>
                <a href='https://www.twitter.com/switchcasebreak' aria-label="Twitter">
                    <Twitter />
                </a>
                <a href='https://www.linkedin.com/in/brewcodes/' aria-label="LinkedIn">
                    <LinkedIn />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;