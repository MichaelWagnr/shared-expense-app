import React from 'react';

const Slider = (props) => {
    return (
        <div className="slider-display">
            <div>{props.selectedName}</div>
            <div>
                {props.selectedName === props.nameA
                    ? props.nameB
                    : props.nameA
                }
            </div>
            <div>{100 - props.currentPercentage}%</div>
            <div>{props.currentPercentage}%</div>
        </div>
    );
}

export default Slider;