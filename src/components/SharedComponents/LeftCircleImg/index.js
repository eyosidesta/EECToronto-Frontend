import React, { useState } from 'react';
import './style.css';

const LeftCircleImg = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='left-circle-img-container'>
      <div className='left-circle-image'>
        <img src={props.left_img} alt="circle visual" />
      </div>
      <div className='left-circle-img-content'>
        <div className='left-circle-big-title'>{props.title}</div>
        {props.listItems.map((item, index) => (
          <div key={index} className='left-circle-details'>
            <div
              className={`left-circle-title ${expandedIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div>{item.title}</div>
              <div className={`toggle-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                {expandedIndex === index ? '-' : '+'}
              </div>
            </div>
            <hr className={`divider ${expandedIndex === index ? 'expanded' : ''}`} />
            <div className={`left-circle-expand-content ${expandedIndex === index ? 'expanded' : ''}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftCircleImg;
