import React, {FC} from "react";
import styles from "./Styles";

const ClickCounter: FC<{type: string,count: number}> = ({type,count}) => {
    return (
        <div style={{...styles.counter, ...{backgroundColor: type}}}>
            {count}
        </div>
    )
}

export default ClickCounter
