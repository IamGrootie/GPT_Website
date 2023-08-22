import React from 'react';
import '../styles.scss';

function Article({imgSrc, date, text}) {
  return (
    <div className='article-container'>
      <div className="article-container-image">
        <img src={imgSrc} alt="blog" />
      </div>
      <div className="article-container-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;