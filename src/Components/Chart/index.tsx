import React, {FC} from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer,
} from 'recharts';
import {ChartDataItem} from "../../Containers/Dashboard/initialChartData";
import Colors from "../../Colors";

const Chart: FC<{data:ChartDataItem[]}> = ({data}) => {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart data={data}>
                <CartesianGrid />
                <XAxis>
                    <Label value={"Second(s)"} />
                </XAxis>
                <YAxis label={{ value: 'Click(s)' }}/>
                <Tooltip />
                <Line type="monotone" dataKey="orange" stroke={Colors.orange} strokeWidth={4} />
                <Line type="monotone" dataKey="blue" stroke={Colors.blue} strokeWidth={4} />
                <Line type="monotone" dataKey="black" stroke="black" strokeWidth={4} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart
