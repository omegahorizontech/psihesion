import React from 'react';
import Card from 'react-bootstrap/Card';

import Icon, { EmotionIcon } from '../../icons/Icons';
import CustomCard from './custom-card'

const CustomClickableCard = (props) => {

  return (
    <div onClick={(d) => props.onClick(d)}>
      <CustomCard {...props} />
    </div>
  );
};

export default CustomClickableCard;
