import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(e => e.value)
    const totalMax = Math.max(...dataPointValues)

    return (
        <>
            <div className="chart">
                {dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />)}
            </div>
        </>
    )
}

export default Chart
