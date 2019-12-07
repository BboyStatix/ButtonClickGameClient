import React, {FC, useState} from "react";
import styles from "./Styles";

const ClickCounter: FC<{type:string}> = ({type}) => {
    const [count,setState] = useState(0)

    return (
        <div style={{...styles.counter, ...{backgroundColor: type}}}>
            {count}
        </div>
    )
}

export default ClickCounter
