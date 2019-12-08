import React, {FC, useState} from "react";
import Chart from "../../Components/Chart";
import ClickCounter from "../../Components/ClickCounter";
import {gql} from "apollo-boost"
import {useSubscription} from '@apollo/react-hooks';
import {Link} from "react-router-dom";

const CLICK_SUBSCRIPTION = gql`
    subscription {
        clickBroadcast {
            type
            timestamp
        }
    }
`

// const SUBSCRIBE = gql`
//     query {
//         subscribe {
//             success
//             subscriptionId
//         }
//     }
// `
//
// const UNSUBSCRIBE = gql`
//     query unsubscribe($subscriptionId: ID!){
//         unsubscribe(subscriptionId: $subscriptionId) {
//             success
//         }
//     }
// `

// interface SubscriptionResponse {
//     subscribe: {
//         subscriptionId: number
//         success: boolean,
//     }
// }

interface SubscriptionData {
    type: string,
    timestamp: string
}

const Dashboard: FC = () => {
    const [orangeClickCount,setOrangeClickCount] = useState(0)
    const [blueClickCount,setBlueClickCount] = useState(0)
    const {loading, error, data} = useSubscription(CLICK_SUBSCRIPTION,
        {onSubscriptionData: ({subscriptionData}) => {
                handleSubscriptionData(subscriptionData.data.clickBroadcast)
            }
        })

    const handleSubscriptionData = ({type, timestamp}:SubscriptionData) => {
        console.log({type, timestamp})
        switch (type) {
            case 'blue':
                setBlueClickCount(blueClickCount+1)
                return
            case 'orange':
                setOrangeClickCount(orangeClickCount+1)
                return
        }
        // handleClickData({type, timestamp})
        // console.log({type,timestamp})
        // setTimeout(unsubscribe, 1000)
    }

    // const [subscriptionId, setSubscriptionId] = useState(null)
    // const [unsubscribe] = useLazyQuery(UNSUBSCRIBE)

    // console.log({subscriptionId})

    // const {data: subscriptionResponse} = useQuery(SUBSCRIBE)
    // if(subscriptionResponse && subscriptionResponse.subscribe && subscriptionResponse.subscribe.subscriptionId) {
    //     const prevSubId = subscriptionId
    //     const newSubId = subscriptionResponse.subscribe.subscriptionId
    //     if(prevSubId !== newSubId) {
    //         setSubscriptionId(newSubId)
    //     }
    // }


    // useEffect(() => {
    //     window.addEventListener('beforeunload', () => {
    //         console.log({'beforeunload': subscriptionId})
    //         unsubscribe({variables: {subscriptionId: subscriptionId}})
    //     })
    // })

    // useEffect(() => {
    //     return () => {
    //         console.log('unmount')
    //         console.log({'handleunsubscribe': subscriptionId})
    //
    //     }
    // }, [])

    // const handleUnsubscribe = async (subscriptionId:string) => {
    //     await unsubscribe({variables: {subscriptionId: subscriptionId}})
    // }

    // const handleUnsubscribe = () => {
    //     console.log('unsubscribing beforeunload lol')
    //     console.log({'handleunsubscribe': subscriptionId})
    //     if(subscriptionId)
    //         unsubscribe({variables: {subscriptionId: subscriptionId}})
    //     // unsubscribe({variables: {subscriptionId: subscriptionId}})
    // }

    return (
        <div className='dashboard'>
            Dashboard
            <Chart />
            <ClickCounter type={'orange'} count={orangeClickCount} />
            <ClickCounter type={'blue'} count={blueClickCount} />

            <Link to={'/client'}>Client</Link>
            {/*{subscriptionId &&*/}
            {/*    <div onClick={() => unsubscribe({variables: {subscriptionId: subscriptionId}})}>Unsubscribe</div>*/}
            {/*}*/}
        </div>
    )
}

export default Dashboard
