import React from 'react';
import Slider from './Slider.js';

const Form = (props) => {

    return (
        <div className="form">
            <p>Submit an expense / shared purchase:</p>
            <form
                onSubmit={props.validateForm}
                autoComplete="off"
            >
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
                <label htmlFor="slider">Amount shared:</label>

                <Slider />

                <input name="slider" className="slider" type="range" min="0" max="100" step="10" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div >
    );
}

export default Form;