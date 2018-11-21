import React, { PureComponent } from 'react';
import DoughnutChart from './DoughnutChart';
import ChartTitle from './ChartTitle';
import { array } from 'prop-types';
import { positiveResponses, negativeResponses, neutralResponses } from 'data/responses';
import './chart.css';

class ChartContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            positiveCount: 0,
            negativeCount: 0,
            neutralCount: 0
        };

        this.chartRef = React.createRef();
        this.parseTweetData = this.parseTweetData.bind(this);
        this.getTitle = this.getTitle.bind(this);
    }

    componentDidMount() {
        this.parseTweetData();
    }

    componentDidUpdate() {
        if (this.chartRef) {
            window.scrollTo({
                top: this.chartRef.current.offsetTop, 
                behavior: 'smooth'
            });
        }
        this.parseTweetData();
    };

    parseTweetData() {
        let positiveCount = 0;
        let negativeCount = 0;
        let neutralCount = 0;

        for (let result of this.props.data) {
            if (result.score.score > 0) {
                positiveCount++;
            } else if (result.score.score < 0) {
                negativeCount++;
            } else {
                neutralCount++;
            }
        }

        this.setState({
            positiveCount,
            negativeCount,
            neutralCount
        });
    }

    getTitle() {
        let topScore;
        let max = 0;

        for (let score in this.state) {
            if (this.state[score] > max) {
                topScore = score;
                max = this.state[score];
            }
        }
        switch(topScore) {
            case 'negativeCount':
                return negativeResponses[Math.floor((Math.random() * negativeResponses.length))];
            case 'positiveCount':
                return positiveResponses[Math.floor((Math.random() * positiveResponses.length))];
            case 'neutralCount':
                return neutralResponses[Math.floor((Math.random() * neutralResponses.length))];
            default: return;
        }
    }

    render() {
        const {
            positiveCount,
            negativeCount,
            neutralCount
        } = this.state;
        const text = this.getTitle();

        return (
            <div className='chart'>
                <ChartTitle
                    chartRef={this.chartRef}
                    text={text}
                />
                <DoughnutChart
                    data={{
                        labels: [
                            'Negative',
                            'Positive',
                            'Neutral'
                        ],
                        datasets: [{
                            data: [
                                negativeCount,
                                positiveCount,
                                neutralCount
                            ],
                            backgroundColor: [
                                '#FF4136',
                                '#01FF70',
                                '#AAAAAA'
                            ],
                            hoverBackgroundColor: [
                                '#FF4136',
                                '#01FF70',
                                '#AAAAAA'
                            ],
                            borderColor: [
                                '#DDDDDD',
                                '#DDDDDD',
                                '#DDDDDD'
                            ]
                        }]
                    }}
                />
            </div>
        );
    }
}

export default ChartContainer;

ChartContainer.propTypes = {
    data: array.isRequired
};