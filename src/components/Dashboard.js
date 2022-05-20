import React from 'react';
import SetNames from './SetNames.js';
import Totals from './Totals.js';

const Dashboard = (props) => {
    return (
        <div className="dashboard">

            <Totals
                nameA={props.nameA}
                nameB={props.nameB}
                submissions={props.submissions}
            />
            <br />
            <SetNames
                nameA={props.nameA}
                nameB={props.nameB}
                selectName={props.selectName}
            />
        </div>
    );
}

export default Dashboard;