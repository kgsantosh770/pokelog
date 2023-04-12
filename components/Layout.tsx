import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface ILayoutProps {
    children: React.ReactElement,
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout