import React from 'react';
import '../styles/LinkCard.css';

const LinkCard = ({ title, description, link, image, tags }) => {
  return (
    <div className="link-card">
      <div className="link-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="link-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="link-card-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="promo-link">
          立即注册
        </a>
      </div>
    </div>
  );
};

export default LinkCard;