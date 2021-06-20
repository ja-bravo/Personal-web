import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faTwitter);

const SocialIcon = ({ icon, onClick }) => {
  const colour = icon === 'twitter' ? '#38A1F3' : icon === 'github' ? '#333' : '#000';
  const iconName = icon === 'twitter' ? faTwitter : icon === 'github' ? faGithub : faEnvelope;
  return (
    <div onClick={onClick} className="cursor-pointer w-20 h-20 md:w-24 md:h-24  p-8 bg-white flex items-center justify-center rounded-2xl">
      <FontAwesomeIcon icon={iconName} color={colour} size="3x" />
    </div>
  );
};

export default SocialIcon;
