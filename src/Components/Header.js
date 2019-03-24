import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../Styles/Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const pathName = this.props.location.pathname;

        let navOptions = [
            {
                navName: 'Home',
                pathName: '/',
                isSelected: false,
                menuClass: 'navOption'
            },
            {
                navName: 'Work',
                pathName: '/work',
                isSelected: false,
                menuClass: 'navOption'
            },
            {
                navName: 'About',
                pathName: '/about',
                isSelected: false,
                menuClass: 'navOption'
            },
            {
                navName: 'Contact',
                pathName: '/contact',
                isSelected: false,
                menuClass: 'navOption'
            },
        ];

        let navOptionsHTML = [];
        for (let i = 0; i < navOptions.length; i++) {

            if(pathName!='/' && navOptions[i].pathName != '/')//if we are just a slash, this will be the home page
                navOptions[i].menuClass += (pathName.includes(navOptions[i].pathName) ? ' navOptionSelected' : '');
            else if(pathName=='/' && navOptions[i].pathName == '/'){
                navOptions[i].menuClass += (pathName.includes(navOptions[i].pathName) ? ' navOptionSelected' : '');
            }

            navOptionsHTML.push(
                <li className={navOptions[i].menuClass} key={navOptions[i].navName}><Link to={navOptions[i].pathName}>{navOptions[i].navName}</Link></li>
            )
        }


        return (
            <header>
                <h1 id="pageName">Stuart's Brain</h1>

                <nav id="pageNav">
                    <ul>
                        {navOptionsHTML}
                    </ul>
                </nav>

            </header>
        );
    }
}

export default withRouter(Header);