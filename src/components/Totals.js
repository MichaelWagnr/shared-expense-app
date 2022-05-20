import React from 'react';

const Totals = ({ submissions, nameA, nameB }) => {
    // //Seperate purchases by purchaser
    // const aPurchases = submissions.filter(submissions => submissions.purchaser === nameA);
    // const bPurchases = submissions.filter(submissions => submissions.purchaser === nameB);

    // //Total purchase amounts for other person
    // const a4b = aPurchases
    //     .map(purchase => {
    //         return (purchase.total * (purchase.shared / 100))
    //     }).reduce((a, b) => { return (a + b) }, 0);

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

    return (
        <div className="total">
            {
                bOwesA > aOwesB
                    ? `${nameB} owes ${nameA} ${bOwesA - aOwesB}`
                    : `${nameA} owes ${nameB} ${aOwesB - bOwesA}`
            }
        </div>
    );
}

export default Totals;