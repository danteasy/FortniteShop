import React from "react";

function Header() {
    return (
        <nav>
            <div className="nav-wrapper teal lighten-2">
                <a href="#" className="brand-logo">
                    Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="sass.html">Sass</a>
                    </li>
                    <li>
                        <a href="badges.html">Components</a>
                    </li>
                    <li>
                        <a href="collapsible.html">JavaScript</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
