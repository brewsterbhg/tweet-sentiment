import React, { PureComponent } from 'react';
import DoughnutChart from './DoughnutChart';
import { array } from 'prop-types';
import './chart.css';

class ChartContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            positiveCount: 0,
            negativeCount: 0,
            neutralCount: 0
        };

        this.parseTweetData = this.parseTweetData.bind(this);
    }

    componentDidMount() {
        this.parseTweetData();
    }

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

    render() {
        return (
            <div className='chart'>
                <DoughnutChart
                    data={{
                        labels: [
                            'Negative',
                            'Positive',
                            'Neutral'
                        ],
                        datasets: [{
                            data: [
                                this.state.positiveCount,
                                this.state.negativeCount,
                                this.state.neutralCount
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
                                "#DDDDDD",
                                "#DDDDDD",
                                "#DDDDDD"
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
    data: array
};