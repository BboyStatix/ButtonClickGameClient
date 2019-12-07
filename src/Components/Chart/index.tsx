import React, {FC} from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label,
} from 'recharts';

const Chart: FC = () => {
    const initialData = [
        {
            name: '0', orange: 0, blue: 0, black: 0,
        },
        {
            name: '1', orange: 0, blue: 0, black: 0,
        },
        {
            name: '2', orange: 0, blue: 0, black: 0,
        },
        {
            name: '3', orange: 0, blue: 0, black: 0,
        },
        {
            name: '4', orange: 0, blue: 0, black: 0,
        },
        {
            name: '5', orange: 0, blue: 0, black: 0,
        }
    ];

    return (
        <div className='dashboard'>
            <LineChart
                width={500}
                height={300}
                data={initialData}
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
        </div>
    )
}

export default Chart
