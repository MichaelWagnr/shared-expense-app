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
    console.log(bOwesA);
    const aOwesB = totalOwedTo(nameB, submissions);
    console.log(aOwesB);

    return (
        <div className="totals">
            {bOwesA}
            <br />
            {aOwesB}
        </div>
    );
}

export default Totals;