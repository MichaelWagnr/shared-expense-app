import React from 'react';

const Form = () => {
    return (
        <div className="form">
            <p>Submit an expense / shared purchase:</p>
            <form>
                <label htmlFor="purchaser">Purchased by:</label>
                <select name="purchaser" id="purchaser">
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <label htmlFor="total">Receipt total:</label>
                <input name="total" type="text" />
                {/* <label htmlFor="shared">Percentage shared:</label>
                <input type="range" min="0" max="100" value="50" name="shared" id="total-shared" /> */}
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Form;