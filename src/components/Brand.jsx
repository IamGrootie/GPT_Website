import React from 'react'
import '../styles.scss';

import google from '../assets/google.png';
import dropbox from '../assets/dropbox.png';
import slack from '../assets/slack.png';
import shopify from '../assets/shopify.png';
import atlassian from '../assets/atlassian.png';

function Brand() {
  return (
    <div className='brand section-padding'> 
      <div>
        <img src={google} alt="google logo"/>
      </div>
      <div>
        <img src={slack} alt="slack logo"/>
      </div>
      <div>
        <img src={atlassian} alt="atlassian logo"/>
      </div>
      <div>
        <img src={dropbox} alt="dropbox logo"/>
      </div>
      <div>
        <img src={shopify} alt="shopify logo"/>
      </div>
    </div>
  )
}

export default Brand