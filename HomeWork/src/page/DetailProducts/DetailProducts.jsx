import React from "react";
import { useParams } from 'react-router-dom'

const DetailProducts = () => {
    const param = useParams();
    return (
        <div>
            <h1>DetailProducts {param.id}</h1>
        </div>
    )
}
export default DetailProducts;