import React from 'react';

const Form = (props) => {

    return (
        <div className="form">
            <p>Submit an expense / shared purchase:</p>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="purchaser">Purchased by:</label>
                <select name="purchaser" id="purchaser">
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <label htmlFor="total">Receipt total:</label>
                <input name="total" type="text" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;