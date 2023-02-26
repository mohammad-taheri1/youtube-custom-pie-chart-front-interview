import { useEffect, useState, useRef } from "react";

const Chart = () => {
   const chartRef = useRef();
   const [percent, setPercent] = useState(30);
   // background: conic-gradient(rgb(12, 40, 118) 30%, rgb(62, 106, 226) 0);

   const changeHandler = (event) => {
      setPercent(event.target.value);
   };

   useEffect(() => {
      // console.log(chartRef.current)
      chartRef.current.style.background = `conic-gradient(rgb(12, 40, 118) ${percent}%, rgb(62, 106, 226) 0)`;
   }, [percent]);

   return (
      <>
         <div className="chart" ref={chartRef}>
            <div className="legends">Value: {percent}%</div>
         </div>
         <input type="range" className="range-selector" value={percent} onChange={changeHandler} />
      </>
   );
};

export default Chart;
