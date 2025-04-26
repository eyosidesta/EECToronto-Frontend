import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import img2 from '../../images/leadership/church_worship_18.jpg';
import img3 from '../../images/leadership/church_worship_18.jpg';
import img4 from '../../images/leadership/church_worship_18.jpg';

const LeadersSection = () => {
    const members = [
      { name: "Pastor Ephraim", service: 'Senior Pastor', img: img2 },
      { name: "Pastor Ephraim", service: 'Senior Executive Pastor, Mission & Multisite Advancement', img: img2 },
      { name: "Pastor Ephraim", service: 'Executive Pastor, Ministry Support', img: img3 },
      { name: "Pastor Ephraim", service: 'Family Ministries Pastor', img: img4 },
      { name: "Pastor Ephraim", service: 'Family Ministries Pastor', img: img2 },
      { name: "Pastor Ephraim", service: 'Family Ministries Pastor', img: img3 },
      { name: "Pastor Ephraim", service: 'Family Ministries Pastor', img: img4 },
    ];
  
    return (
        
      <div className="team-container">
        
        {members.map((member, index) => (
            <Link to={`/leadership/${index}`}>
          <div className="team-member" key={index}>
            <img src={member.img} alt={member.name} />
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-service">{member.service}</div>
          </div>
          </Link>
        ))}
        
      </div>
      
    );
  };

export default LeadersSection;
