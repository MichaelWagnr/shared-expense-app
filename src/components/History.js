import React from 'react';

const History = (props) => {
    return (
        <div className="history">
            {props.submissions.map(submission => {
                return (<p>{submission.purchaser}</p>)
            })}
        </div>
    );
}

export default History;