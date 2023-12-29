 import React from 'react'
 import rectangle from'../../assets/Rectangle 38.png'
 import avatar from '../../assets/profile mage.png'

 const Card = ({img1, name, img2}) => {
   return (
    <div className="card">
          <div className="image">
          <img src={img1? img1 : rectangle} alt="pic" /></div>
          <div className="card_bottom">
            <button>Technology</button>
            <p>The Impact of Technology on the Workplace: How Technology is Changing</p>
            <div className="profile">
              <div className="profile_pic">
              <img src={img2? img2 : avatar} alt="profile" />
                <p>{name? name : "Jack"}</p></div>
              <div className="date">
                <p>August 20, 2022</p>
              </div></div>
          </div>
        </div>
   )
 }

 export default Card