import React from 'react';
import { string } from 'prop-types';

const ChartTitle = ({ color, text, chartRef }) => <h1 className={color} ref={chartRef}>{text}</h1>;

export default React.memo(ChartTitle);

ChartTitle.propTypes = {
    color: string,
    text: string
}