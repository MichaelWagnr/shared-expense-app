import React from 'react';

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <label htmlFor="names">Set names:</label>
            <br />

            <input
                autoComplete="off"
                type="text"
                name="nameA"
                value={props.nameA}
                onChange={props.selectName}
            />
            <input
                autoComplete="off"
                type="text"
                name="nameB"
                value={props.nameB}
                onChange={props.selectName}
            />
        </div>
    );
}

export default Dashboard;