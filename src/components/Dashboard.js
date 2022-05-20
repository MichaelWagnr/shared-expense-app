import React from 'react';
import SetNames from './SetNames.js';

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <SetNames
                nameA={props.nameA}
                nameB={props.nameB}
                selectName={props.selectName}
            />
        </div>
    );
}

export default Dashboard;