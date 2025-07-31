import React from 'react'

const WomenFashion = (props) => {
  const {title,image1,image2,image3,image4,image5,image6,image7} = props.ladiesFashion;
  return (
     <div className='collectionSection'>
      <h2>{title}</h2>
      <div className="bannerbox">
      <img src="assets/girlbanner.jpg" alt="Banner" width="100%" height="350px" />
      </div>
<div className="womenImages">
        <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>     
        <img src={image6} alt={title}/>
   <img src={image7} alt={title}/>
      </div> 
      </div>
       )
}

export default WomenFashion
