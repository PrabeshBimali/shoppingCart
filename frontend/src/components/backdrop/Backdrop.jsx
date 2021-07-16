import React from 'react'
import "./backdrop.css"

export default function Backdrop({show, click}) {
    return show && <div className="backdrop" onClick={click}></div>
        

}
