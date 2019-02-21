import React, { useState, useEffect, useRef } from "react";
import { array } from "prop-types";
import DoughnutChart from "./DoughnutChart";
import ChartTitle from "./ChartTitle";
import { responseMap } from "../../data/responses";
import "./chart.css";

const labels = ["Positive", "Negative", "Neutral"];
const colors = ["#01FF70", "#FF4136", "#AAAAAA"];

const Chart = ({ data }) => {
  const [counts, setCounts] = useState({
    positive: 0,
    negative: 0,
    neutral: 0
  });
  const [responseArr, setResponseArr] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    chartRef &&
      window.scrollTo({
        top: chartRef.current.offsetTop,
        behavior: "smooth"
      });
    parseTweetData();
  }, [data]);

  function parseTweetData() {
    const countTracker = { positive: 0, negative: 0, neutral: 0 };

    for (let {
      score: { score }
    } of data) {
      if (score > 0) countTracker["positive"]++;
      else if (score < 0) countTracker["negative"]++;
      else countTracker["neutral"]++;
    }

    let max = 0;
    let response;

    Object.entries(countTracker).forEach(([key, value]) => {
      if (value > max) {
        max = value;
        response = responseMap.get(key);
      }
    });

    setCounts(countTracker);
    setResponseArr(response);
  }

  function getTitle() {
    return responseArr.length > 0
      ? responseArr[Math.floor(Math.random() * responseArr.length)]
      : "";
  }

  return (
    <div className="chart">
      <ChartTitle chartRef={chartRef} text={getTitle()} />
      <DoughnutChart
        data={{
          labels: labels,
          datasets: [
            {
              data: [counts.positive, counts.negative, counts.neutral],
              backgroundColor: colors,
              hoverBackgroundColor: colors,
              borderColor: ["#DDDDDD", "#DDDDDD", "#DDDDDD"]
            }
          ]
        }}
      />
    </div>
  );
};

export default React.memo(Chart);

Chart.propTypes = {
  data: array
};
