import React, {FC} from "react";
import styles from "./Styles";
import Colors from "../../Colors";

const Counter: FC<{type: string,count: number}> = ({type,count}) => {
    return (
        <div style={{...styles.counter, backgroundColor: Colors[type]}}>
            {count}
        </div>
    )
}

export default Counter
