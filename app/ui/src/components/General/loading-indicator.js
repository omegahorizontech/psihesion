import React, { useState, useEffect } from 'react';

import Icon, { MythIcon } from '../../icons/Icons';

const LoadingIndicator = ({ iconType, icon, text, children }) => {
  const [position, setPosition] = useState(0);
  const mod = 9; // Total number of states in the 'animation'
  const count = position % mod;
  let classNames = 'standard_flex_start general--loading-group'

  if (8 <= count) { // Add the 'easeout' className, to create a nice fadeout
    classNames += ' easeout'
  } else {
    classNames = 'standard_flex_start general--loading-group'
  }

  useEffect(() => {
    const interval = setInterval(() => {
        setPosition(position => position + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="standard_flex_between general--loading_margin">
      <div className={classNames}>
        { 1 <= (count) && (
          <div className="standard_elutheric_icon general--loading-icon">
            <MythIcon name={'eluMyth'} />
          </div>
        )}
        { 2 <= (count) && (
          <div className="standard_auxonic_icon general--loading-icon">
            <MythIcon name={'auxMyth'} />
          </div>
        )}
        { 3 <= (count) && (
          <div className="standard_psionic_icon general--loading-icon">
            <MythIcon name={'psiMyth'} />
          </div>
        )}
        { 4 <= (count) && (
          <div className="standard_kubernetic_icon general--loading-icon">
            <MythIcon name={'kubMyth'} />
          </div>
        )}
        { 5 <= (count) && (
          <div className="standard_biotic_icon general--loading-icon">
            <MythIcon name={'bioMyth'} />
          </div>
        )}
        { 6 <= (count) && (
          <div className="standard_genic_icon general--loading-icon">
            <MythIcon name={'genMyth'} />
          </div>
        )}
      </div>
      <div>
        <div className="general--loading-spinner">
          <Icon name={'loadingSimple'} />
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
