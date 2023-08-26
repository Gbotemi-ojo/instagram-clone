import React from 'react'
import Sidebar from '../homepage/sidebar'
import { Outlet } from 'react-router-dom'
import '../homepage/Homepage.css'
function ShareLayout2() {
    return (
        <section className='homepage'>
            <Sidebar />
            <div className='feedpost-container'>
                <Outlet />
            </div>
        </section>
    )
}
export default ShareLayout2;