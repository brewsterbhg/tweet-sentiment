import React from 'react';
import { string } from 'prop-types';

const ChartTitle = ({ color, text }) => <h1 className={color}>{text}</h1>;

export default ChartTitle;

ChartTitle.propTypes = {
    color: string,
    text: string
}