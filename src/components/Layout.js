import React from "react";
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
const Layout = () => {
    return (
        <>
            <header className="Layout__header">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
            </header>
            <Outlet />
            <footer className="Layout__footer">
                &copy; Footer title
            </footer>
        </>
    )
}

export { Layout }