import React from 'react';

const History = (props) => {
    return (
        <div className="history">
            {props.submissions}
        </div>
    );
}

export default History;