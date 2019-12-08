import React, {FC} from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label,
} from 'recharts';
import {ChartDataItem} from "../../Containers/Dashboard/initialChartData";

const Chart: FC<{data:ChartDataItem[]}> = ({data}) => {
    return (
        <LineChart
            width={500}
            height={300}
            data={data}
        >
            <CartesianGrid />
            <XAxis>
                <Label value={"Second(s)"} />
            </XAxis>
            <YAxis label={{ value: 'Click(s)' }}/>
            <Tooltip />
            <Line type="monotone" dataKey="orange" stroke="orange" />
            <Line type="monotone" dataKey="blue" stroke="blue" />
            <Line type="monotone" dataKey="black" stroke="black" />
        </LineChart>
    )
}

export default Chart
