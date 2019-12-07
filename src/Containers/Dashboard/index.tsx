import React, {FC} from "react";
import Chart from "../../Components/Chart";
import ClickCounter from "../../Components/ClickCounter";

const Dashboard: FC = () => {
    return (
        <div className='dashboard'>
            Dashboard
            <Chart />
            <ClickCounter type={'orange'} />
            <ClickCounter type={'blue'} />
        </div>
    )
}

export default Dashboard
