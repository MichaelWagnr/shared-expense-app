import React from 'react';

const Header = (props) => {
    return (
        <header className={props.activeFormError ? 'error' : ''}>
            <h1>Royal Mint</h1>
        </header>
    )
}


export default Header;