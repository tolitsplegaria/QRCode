import React from 'react'
import '../styles/Navbar.scss'

function Navbar () {
    return(
        <div className='container'>
            <div className='inner-con'>
                <div className='qrcode'></div>
                <div className='txt'>
                    <p>Improve your front-end skills by building projects</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar