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
            <div>50</div>
            <div>50</div>
        </div>
    );
}

export default Slider;