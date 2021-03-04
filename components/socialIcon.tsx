import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faTwitter);

const Wrapper = styled.div<{ colour: string }>`
  height: 70px;
  width: 70px;
  border-radius: 15px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;
  padding: 8px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    transform: translateY(-5px);
    background: ${p => p.colour};

    svg {
      color: white;
    }
  }
`;

const SocialIcon = ({ icon, onClick }) => {
  const colour = icon === 'twitter' ? '#38A1F3' : icon === 'github' ? '#333' : '#000';
  const iconName = icon === 'twitter' ? faTwitter : icon === 'github' ? faGithub : faEnvelope;
  return (
    <Wrapper colour={colour} onClick={onClick}>
      <FontAwesomeIcon icon={iconName} color={colour} size="1x" />
    </Wrapper>
  );
};

export default SocialIcon;
