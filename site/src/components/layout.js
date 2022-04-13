import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const layout = ({ children, path }) => {
    return (
        <>
            <Navbar path={path} />
            <div className='container mx-auto px-5'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default layout