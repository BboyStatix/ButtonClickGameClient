import React, {FC, useEffect, useState} from "react";
import Chart from "../../Components/Chart";
import ClickCounter from "../../Components/ClickCounter";
import {gql} from "apollo-boost"
import {useSubscription} from '@apollo/react-hooks';
import {Link} from "react-router-dom";
import {initialChartData} from "./initialChartData";
import {formatDataForChart} from "../../Utils/formatDataForChart";

const GAME_LENGTH=5000

const CLICK_SUBSCRIPTION = gql`
    subscription {
        clickBroadcast {
            type
            timestamp
        }
    }
`

interface SubscriptionDataItem {
    type: string,
    timestamp: string
}

const Dashboard: FC = () => {
    const [orangeClickCount,setOrangeClickCount] = useState(0)
    const [blueClickCount,setBlueClickCount] = useState(0)
    const [gameState, setGameState] = useState('notStarted')
    const [subscriptionData, setSubscriptionData] = useState<SubscriptionDataItem[]>([])
    const [chartData,setChartData] = useState(initialChartData)
    useSubscription(CLICK_SUBSCRIPTION,
        {onSubscriptionData: ({subscriptionData}) => {
                handleSubscriptionData(subscriptionData.data.clickBroadcast)
            }
        })

    const handleSubscriptionData = ({type, timestamp}:SubscriptionDataItem) => {
        if(gameState !== 'ended') {
            setSubscriptionData(subscriptionData.concat({type, timestamp}))
            switch (type) {
                case 'blue':
                    setBlueClickCount(blueClickCount+1)
                    break
                case 'orange':
                    setOrangeClickCount(orangeClickCount+1)
                    break
            }

            if(gameState === "notStarted") {
                setGameState("inProgress")
            }
        }
    }

    const updateChart = () => {
        console.log('updateChart now!')
        const formattedData = formatDataForChart(subscriptionData)
        console.log(formattedData)
        setChartData(formattedData)
    }

    useEffect(() => {
        switch (gameState) {
            case 'inProgress':
                setTimeout(() => setGameState('ended'), GAME_LENGTH)
                return
            case 'ended':
                updateChart()
                return
        }
    }, [gameState])

    return (
        <div className='dashboard'>
            Dashboard
            <Chart data={chartData} />
            <ClickCounter type={'orange'} count={orangeClickCount} />
            <ClickCounter type={'blue'} count={blueClickCount} />

            <Link to={'/client'}>Client</Link>
        </div>
    )
}

export default Dashboard
