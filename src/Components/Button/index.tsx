import React, {FC, ReactNode} from "react";
import styles from "./Styles"
import Colors from "../../Colors";
import {useLazyQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

const BROADCAST_CLICK = gql`
    query broadcastClick($timestamp: String!, $type: Colour!) {
        broadcastClick(timestamp: $timestamp, type: $type) {
            success
            message
        }
    }
`

const Button: FC<{type: string, children: ReactNode}> = ({type, children}) => {
    const [broadcastClick] = useLazyQuery(BROADCAST_CLICK);

    return (
        <button
            style={{...styles.button, backgroundColor: Colors[type]}}
            onClick={() => broadcastClick(
                {variables: {timestamp: `${Date.now()}`, type}}
                )
            }
        >
            {children}
        </button>
    )
}

export default Button
