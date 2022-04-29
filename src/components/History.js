import React from 'react';
import Purchase from './Purchase'

const History = (props) => {
    return (
        <div className="history">
            {props.submissions.map(submission => {
                return (
                    <Purchase
                        purchaser={submission.purchaser}
                        total={submission.total}
                        desc={submission.desc}
                    />
                )
            })}
        </div>
    );
}

export default History;