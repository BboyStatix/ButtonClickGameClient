import React, {FC} from "react";
import Button from "../../Components/Button";

const Client: FC = () => {
    return (
        <div className='client'>
            <Button type={'orange'}>
                -
            </Button>
            <Button type={'blue'}>
                +
            </Button>
        </div>
    )
}

export default Client
