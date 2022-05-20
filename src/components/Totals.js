import React from 'react';

const Totals = ({ submissions, nameA, nameB }) => {

    const totalOwedTo = (name, submissions) => {
        return submissions
            .filter(submissions => submissions.purchaser === name)
            .map(purchase => {
                return (purchase.total * (purchase.shared / 100))
            })
            .reduce((a, b) => { return (a + b) }, 0)
    };

    const bOwesA = totalOwedTo(nameA, submissions);
    const aOwesB = totalOwedTo(nameB, submissions);


    if (submissions.length === 0) { // No submissions
        return (
            <div clasName="total"></div>
        )
    } else if (bOwesA === aOwesB) { // Owed ammounts equal
        return (
            <div className="total">
                <p className="balance">Amounts owed are in balance</p>
            </div>
        )
    } else { // Owed ammounts !equal
        return (
            bOwesA > aOwesB
                ? <div className="total">
                    <p className="debter">{nameB} owes {nameA}:</p>
                    <p className="debt">${bOwesA - aOwesB}</p>
                </div>
                : <div className="total">
                    <p className="debter">{nameA} owes {nameB}:</p>
                    <p className="debt">${aOwesB - bOwesA}</p>
                </div>
        )
    }
}

export default Totals;