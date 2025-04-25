import React from 'react'
import './style.css'
import defaultImage from '../../images/slider/img-1.jpg';


const PageTitle = (props) => {
    const backgroundImgStyle = {
        background: props.imageUrl ? `url(${props.imageUrl}) no-repeat center top / cover` : `url(${defaultImage}) no-repeat center top / cover`,
        minHeight: '350px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 1,
  };

    return(
        <>
        <div style={backgroundImgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PageTitle;