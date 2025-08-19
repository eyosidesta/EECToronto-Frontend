import React from 'react';
import "./style.css";
import image from '../../../images/leadership/Pastor_GEEC.jpg';
import leader2 from '../../../images/leadership/geec_leader_2.jpg'
import leader3 from '../../../images/leadership/geec_leader_4.jpg'
import leader4 from '../../../images/leadership/geec_leader_5.jpg'
import { Link } from 'react-router-dom';
import DepartmentCard from '../../SharedComponents/DepartmentCard';

const DepartmentLeaders = () => {
    return (
        
      <div className="department-leaders-container">


    <Link to="1" className='department-leaders'>
    <DepartmentCard image={image} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='department-leaders'>
    <DepartmentCard image={leader2} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='department-leaders'>
    <DepartmentCard image={leader3} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='department-leaders'>
    <DepartmentCard image={leader4} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='department-leaders'>
    <DepartmentCard image={image} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
    <Link to="1" className='department-leaders'>
    <DepartmentCard image={image} name='Pastor Fitsum' detail='Grace Ethiopian Evangelical Church Pastor / Pastor of Young Adults'/>
    </Link>
  </div>
      
    );
  };

export default DepartmentLeaders;
