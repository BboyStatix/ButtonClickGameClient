import React, {FC} from "react";
import {gql} from "apollo-boost"
import {useLazyQuery} from '@apollo/react-hooks';
import styles from './Styles'

const BROADCAST_CLICK = gql`
    query broadcastClick($timestamp: String!, $type: Colour!) {
        broadcastClick(timestamp: $timestamp, type: $type) {
            success
            message       
        }
    }
`

const Client: FC = () => {
    const [broadcastClick, {data}] = useLazyQuery(BROADCAST_CLICK);

    return (
        <div className='client'>
            <button
                style={{...styles.button, ...styles.orangeButton}}
                onClick={() => broadcastClick(
                    {variables: {timestamp: `${Date.now()}`, type: 'orange'}}
                    )
                }
            >
                -
            </button>
            <button
                style={{...styles.button, ...styles.blueButton}}
                onClick={() => broadcastClick(
                    {variables: {timestamp: `${Date.now()}`, type: 'blue'}}
                    )
                }
            >
                +
            </button>
        </div>
    )
}

export default Client
