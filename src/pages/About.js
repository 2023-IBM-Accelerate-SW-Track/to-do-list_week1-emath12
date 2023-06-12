import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_name}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ethan Mathieu</div>
            <div className="brief_description">
              Yale University <br />
              Rising Junior <br/>
              Studying CS
            </div>
          </div>
        </div>
    </div>
    )
  }
}