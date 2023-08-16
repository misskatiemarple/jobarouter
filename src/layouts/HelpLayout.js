import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
