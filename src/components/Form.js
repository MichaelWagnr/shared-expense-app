import React from 'react';

const Form = (props) => {

    return (
        <div className="form">
            <p>Submit an expense / shared purchase:</p>
            <form onSubmit={props.validateForm}>
                <label htmlFor="purchaser">Purchased by:</label>
                <select name="purchaser" id="purchaser">
                    <option value={props.nameA}>{props.nameA}</option>
                    <option value={props.nameB}>{props.nameB}</option>
                </select>
                <label
                    htmlFor="total"
                    className={props.activeFormError ? 'number-error' : ''}
                >Receipt total:</label>
                <input
                    name="total"
                    type="text"
                />
                <label htmlFor="desc">Description:</label>
                <input name="desc" type="text" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div >
    );
}

export default Form;