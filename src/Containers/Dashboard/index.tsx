import React, {FC} from "react";
import Chart from "../../Components/Chart";
import ClickCounter from "../../Components/ClickCounter";
import {gql} from "apollo-boost"
import {useSubscription} from '@apollo/react-hooks';

const CLICK_SUBSCRIPTION = gql`
    subscription {
        clickBroadcast {
            type
            timestamp
        }
    }
`

const Dashboard: FC = () => {
    const {loading, error, data} = useSubscription(CLICK_SUBSCRIPTION, {onSubscriptionData: ({subscriptionData}) => console.log(subscriptionData)})

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
