import React from 'react';

import Icon, { DiscoveryIcon } from '../../icons/Icons';

export const LargeCircleCustomButton = ({
  icon,
  iconType,
  loading,
  text,
  onClick,
  disabled,
  encourageUser
}) => {

  let cardClassNames = ['general--button_large_circle']

  if (disabled) {
    onClick = null
    cardClassNames.push('general--button_disabled')
  }

  return (
    <div title={encourageUser} onClick={onClick} className={cardClassNames.join(' ')}>
      <span>{text}</span>
    </div>
  );
};

export const LargeCustomBorderlessButton = ({
  icon,
  iconType,
  loading,
  text,
  borderRadius,
  onClick,
  disabled,
  encourageUser
}) => {

  let cardClassNames = ['general--button_large', 'general--button_borderless']

  if (disabled) {
    onClick = null
    cardClassNames.push('general--button_disabled')
  }

  /* Each button large button has different a border-radius IDEA: If lots of reuse, migrate into CSS file */
  return (
    <div
      title={encourageUser}
      onClick={onClick}
      className={cardClassNames.join(' ')}
      style={{
        borderRadius: borderRadius || "80px 80px 80px 80px"
      }}>
      <div />
      <div>
        { iconType == 'discovery' && (
          <DiscoveryIcon name={icon} />
        )}
        { !iconType && (
          <Icon name={icon}/>
        )}
        <span>{text}</span>
      </div>
      <div />
    </div>
  );
};

export const CustomBorderlessButton = ({
  icon,
  iconType,
  loading,
  text,
  borderRadius,
  onClick,
  disabled,
  encourageUser
}) => {

  let cardClassNames = ['general--button_medium', 'general--button_borderless']

  if (disabled) {
    onClick = null
    cardClassNames.push('general--button_disabled')
  }

  /* Each button large button has different a border-radius IDEA: If lots of reuse, migrate into CSS file */
  return (
    <div
      title={encourageUser}
      onClick={onClick}
      className={cardClassNames.join(' ')}
      style={{
        borderRadius: borderRadius || "80px 80px 80px 80px"
      }}>
      <div />
      <div>
        { iconType == 'discovery' && (
          <DiscoveryIcon name={icon} />
        )}
        { !iconType && (
          <Icon name={icon}/>
        )}
        <span>{text}</span>
      </div>
      <div />
    </div>
  );
};

export const LargeCustomButton = ({
  icon,
  iconType,
  loading,
  text,
  onClick,
  disabled,
  encourageUser
}) => {

  let cardClassNames = ['general--button_large']

  if (disabled) {
    onClick = null
    cardClassNames.push('general--button_disabled')
  }

  return (
    <div title={encourageUser} onClick={onClick} className={cardClassNames.join(' ')}>
      <div />
      <div>
        { iconType == 'discovery' && (
          <DiscoveryIcon name={icon} />
        )}
        { !iconType && (
          <Icon name={icon}/>
        )}
        <span>{text}</span>
      </div>
      <div />
    </div>
  );
};

const CustomButton = ({ icon, iconType, loading, text, onClick, disabled }) => {

  let cardClassNames = ['general--button']

  if (disabled) {
    onClick = null
    cardClassNames.push('general--button_disabled')
  }

  return (
    <div onClick={onClick} className={cardClassNames.join(' ')}>
      <div />
      <div>
        { iconType == 'discovery' && (
          <DiscoveryIcon name={icon} />
        )}
        { !iconType && (
          <Icon name={icon}/>
        )}
        <span>{text}</span>
      </div>
      <div />
    </div>
  );
};

export default CustomButton;
