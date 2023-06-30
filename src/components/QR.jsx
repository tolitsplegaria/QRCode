import React from 'react'
import QRCode from "react-qr-code"
import '../styles/QR.scss'

function QR() {
    return(
        <div className='container'>
            <div className='inner-con'>
                <div className='qrcode'>
                    <div className='img'><QRCode value='hey' size={128} bgColor='#2B7DFA' fgColor='white'/></div>
                </div>
                <div className='txt'>
                    <p><b>Improve your front-end skills by building projects</b></p>
                    <p className='sec'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}
export default QR

