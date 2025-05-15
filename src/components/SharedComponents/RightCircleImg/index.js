import React, { useState } from 'react';
import './style.css';

const RightCircleImg = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='right-circle-img-container'>
      
      <div className='right-circle-img-content'>
        <div className='right-circle-big-title'>{props.title}</div>
        {props.listItems.map((item, index) => (
          <div key={index} className='right-circle-details'>
            <div
              className={`right-circle-title ${expandedIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div>{item.title}</div>
              <div className={`toggle-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                {expandedIndex === index ? '-' : '+'}
              </div>
            </div>
            <hr className={`divider ${expandedIndex === index ? 'expanded' : ''}`} />
            <div className={`right-circle-expand-content ${expandedIndex === index ? 'expanded' : ''}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className='right-circle-image'>
        <img src={props.right_img} alt="circle visual" />
      </div>
    </div>
  );
};

export default RightCircleImg;
