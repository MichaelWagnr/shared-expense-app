import React from 'react';

const Purchase = (props) => {
    return (
        <div className="purchase">
            <span className="purchaser">{props.purchaser}</span>
            <span className="total">{props.total}</span>
            <span className="description">{props.desc}</span>
        </div>
    )
}

export default Purchase;