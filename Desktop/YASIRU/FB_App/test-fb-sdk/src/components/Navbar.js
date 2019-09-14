import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                <div className='collapse navbar-collapse show ml-sm-5'>
                    <ul className='navbar-nav'>
                        <li className='navbar-item'>
                            <Link className='nav-link' to='/'>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-item '>
                            <Link className='nav-link' to='/interestexplorer' >
                                Interest Explorer
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
