import React from 'react';
import Purchase from './Purchase'

const History = (props) => {
    return (
        <div className="history">
            {props.submissions.map((submission, index) => {
                return (
                    <Purchase
                        key={index}
                        index={index}
                        purchaser={submission.purchaser}
                        total={submission.total.toFixed(2)}
                        desc={submission.desc}
                        handleDelete={props.handleDelete}
                    />
                )
            })}
        </div>
    );
}

export default History;