import React from 'react';

const Button = (props) => {
    const {href, btnName, } = props;
    return (
        <a className="btn btn-lg" href={href} target="_blank" rel="noopener noreferrer">
            {btnName}
        </a>
    )
}

export default Button;