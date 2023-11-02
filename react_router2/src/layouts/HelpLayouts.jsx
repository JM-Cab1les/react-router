import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayouts = () => {
  return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam impedit quidem necessitatibus! Voluptatibus, hic.</p>


            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet/>
        </div>
  )
}

export default HelpLayouts