import React from 'react'
import '../style/Home.css'; // Import the CSS file

export default function Home() {
  return (
    <div className='Container'>
        <div className='mainMiddle'>
           <div className='topHeader'>
            <div className="foryou">
               <span>
                 For you
               </span>
            </div>
            <div className="following">Following</div>
           </div>
        </div>
        <div className='mainRight'>
        <div className='topHeader right'>
            <input type="text" />
        </div>
        </div>
    </div>
  )
}
