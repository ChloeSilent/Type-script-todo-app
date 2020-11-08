import React from 'react';


export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 pd-x1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">To do list</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
            </div>
        </nav>
    )
}
