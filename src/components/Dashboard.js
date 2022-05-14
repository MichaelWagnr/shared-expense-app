import React from 'react';

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <label htmlFor="names">Set names:</label>
            <br />

            <input
                type="text"
                name="nameA"
                // value={props.names[0]}
                onChange={props.selectName}
            />
            <input
                type="text"
                name="nameB"
                // value={props.names[1]}
                onChange={props.selectName}
            />
        </div>
    );
}

export default Dashboard;