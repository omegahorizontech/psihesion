import React from 'react';

import Icon, { EmotionIcon, DiscoveryIcon } from '../../icons/Icons';

export const MicrocopyHeading = ({ iconType, icon, text, children }) => {

  return (
    <div className="standard_flex_between standard_microcopy_margin">
      <h4 className="standard_flex_start no_margin">
        { iconType == 'discovery' && (
          <>
          <DiscoveryIcon name={icon} />
          { text }
          </>
        )}
        { iconType == 'emotion' && (
          <>
          <EmotionIcon name={icon} />
          { text }
          </>
        )}
        { !iconType && (
          <>
          <Icon name={icon} />
          { text }
          </>
        )}
      </h4>
      { children }
    </div>
  );
};

export const FormHeading = ({ iconType, icon, text, children }) => {

  return (
    <div className="standard_form_heading standard_flex_between">
      <h5 className="standard_flex_start no_margin">
        { iconType == 'discovery' && (
          <>
          <DiscoveryIcon name={icon} />
          { text }
          </>
        )}
        { iconType == 'emotion' && (
          <>
          <EmotionIcon name={icon} />
          { text }
          </>
        )}
        { !iconType && (
          <>
          <Icon name={icon} />
          { text }
          </>
        )}
      </h5>
      { children }
    </div>
  );
};

export const SecondaryHeading = ({ iconType, icon, text, children }) => {

  return (
    <div className="standard_secondary_heading standard_flex_between standard_heading_padding">
      <h4 className="standard_flex_start no_margin">
        { iconType == 'discovery' && (
          <>
          <DiscoveryIcon name={icon} />
          { text }
          </>
        )}
        { iconType == 'emotion' && (
          <>
          <EmotionIcon name={icon} />
          { text }
          </>
        )}
        { !iconType && (
          <>
          <Icon name={icon} />
          { text }
          </>
        )}
      </h4>
      { children }
    </div>
  );
};

const PrimaryHeading = ({ iconType, icon, text, children }) => {

  return (
    <div className="standard_flex_between standard_heading_padding">
      <h2 className="standard_flex_start no_margin">
        { iconType == 'emotion' && (
          <>
          <EmotionIcon name={icon} />
          { text }
          </>
        )}
        { !iconType && (
          <>
          <Icon name={icon} />
          { text }
          </>
        )}
      </h2>
      { children }
    </div>
  );
};

export default PrimaryHeading;
