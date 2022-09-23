import React from 'react'

import Link from 'next/link'
import { observer } from 'mobx-react';
import { useMobxStores } from '../data/stores';

const TopNavComponent = () => {
    const { firstName, lastName, id } = useMobxStores();

    return <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
            <div className='row w-100 mt-2 d-flex justify-content-between'>
                <div className='col my-2 mx-3'>
                    <h6>{firstName} {lastName} ({id})</h6>
                </div>
                <div className='col'>
                    <ul className="navbar-nav float-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="bi bi-bag-heart-fill"> </i>
                                Wishlist
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">
                                <a className="nav-link">
                                    <i className="bi bi-person"> </i>
                                    Log in
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export const TopNav = observer(TopNavComponent)