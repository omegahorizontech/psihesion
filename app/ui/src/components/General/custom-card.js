import React from 'react';
import { edgeTypeLookup, fieldBuilderLookup } from '../../config/lookup'

import Card from 'react-bootstrap/Card';

import Icon, { EmotionIcon } from '../../icons/Icons';

export const CustomFilterCard = ({
  iconType, icon, title, img, text, inv, extraClass, variant, children
}) => {
  let cardClassNames = [];
  /*
   * Generate a dynamic card className based on props
   * and relies on 'css/general.css' for styles
   */

  cardClassNames.push('general--card_filter')
  cardClassNames.push('standard_half_margin')
  cardClassNames.push(inv ? 'inv' : 'reg')
  // extraClass ? cardClassNames.push(extraClass) : ''

  return (
    <Card className={cardClassNames.join(' ')}>
      <Card.ImgOverlay>
        { title && (
          <Card.Title
            className="general--card-title standard_flex_center">
            { iconType == 'emotion' && (
              <>
              <EmotionIcon name={icon} />
              { title }
              </>
            )}
            { !iconType && (
              <>
              <Icon name={icon} />
              { title }
              </>
            )}
          </Card.Title>
        )}
        { text && <Card.Text>{ text }</Card.Text> }
        { children }
      </Card.ImgOverlay>
    </Card>
  );
};

export const CustomFormCard = ({
  iconType, icon, title, img, text, inv, extraClass, variant, children
}) => {
  let cardClassNames = [];
  /*
   * Generate a dynamic card className based on props
   * and relies on 'css/general.css' for styles
   */

  cardClassNames.push('general--card_form' + (variant ? '_' + variant : ''))
  cardClassNames.push('standard_half_margin')
  cardClassNames.push(inv ? 'inv' : 'reg')
  // extraClass ? cardClassNames.push(extraClass) : ''

  return (
    <Card className={cardClassNames.join(' ')}>
      <Card.Img
        className="general--card-image"
        src={img}/>
      <Card.ImgOverlay>
        { title && (
          <Card.Title
            className="general--card-title">
            { iconType == 'emotion' && (
              <>
              <EmotionIcon name={icon} />
              { title }
              </>
            )}
            { !iconType && (
              <>
              <Icon name={icon} />
              { title }
              </>
            )}
          </Card.Title>
        )}
        { text && <Card.Text>{ text }</Card.Text> }
        { children }
      </Card.ImgOverlay>
    </Card>
  );
};

export const CustomLargeCard = ({
  iconType, icon, title, img, text, inv, extraClass, variant, children
}) => {
  let cardClassNames = [];
  /*
   * Generate a dynamic card className based on props
   * and relies on 'css/general.css' for styles
   */

  cardClassNames.push('general--card_large' + (variant ? '_' + variant : ''))
  cardClassNames.push('standard_half_margin')
  cardClassNames.push(inv ? 'inv' : 'reg')
  // extraClass ? cardClassNames.push(extraClass) : ''

  return (
    <Card className={cardClassNames.join(' ')}>
      <Card.Img
        className="general--card-image"
        src={img}/>
      <Card.ImgOverlay>
        { title && (
          <Card.Title
            className="general--card-title">
            { iconType == 'emotion' && (
              <>
              <EmotionIcon name={icon} />
              { title }
              </>
            )}
            { !iconType && (
              <>
              <Icon name={icon} />
              { title }
              </>
            )}
          </Card.Title>
        )}
        { text && <Card.Text>{ text }</Card.Text> }
        { children }
      </Card.ImgOverlay>
    </Card>
  );
};

const CustomCard = ({
  iconType, icon, title, img, text, inv, extraClass, variant, children
}) => {
  let cardClassNames = [];
  /*
   * Generate a dynamic card className based on props
   * and relies on 'css/general.css' for styles
   */

  cardClassNames.push('general--card' + (variant ? '_' + variant : ''))
  cardClassNames.push(inv ? 'inv' : 'reg')
  // extraClass ? cardClassNames.push(extraClass) : ''

  return (
    <Card className={cardClassNames.join(' ')}>
      <Card.Img
        className="general--card-image"
        src={img}/>
      <Card.ImgOverlay>
        { title && (
          <Card.Title
            className="general--card-title">
            { iconType == 'emotion' && (
              <>
              <EmotionIcon name={icon} />
              { title }
              </>
            )}
            { !iconType && (
              <>
              <Icon name={icon} />
              { title }
              </>
            )}
          </Card.Title>
        )}
        { text && <Card.Text>{ text }</Card.Text> }
        { children }
      </Card.ImgOverlay>
    </Card>
  );
};

export const DiscoveryCard = ({ data, type, context, currentIds, updateRequestData, chooseCard, cardImg }) => {
  let displayName = '',
      text = '',
      icon = '',
      _id = '';

  switch (type) {
    case 'node':
    case 'single-node':
    case 'single-form-node':
      displayName = data['display_name'];
      _id = data['_id']['$oid'];
      text = "No additional Information";
      icon = 'permIdentity';
      break;
    case 'edge':
    case 'single-edge':
    case 'single-form-edge':
      displayName = edgeTypeLookup[data['edge_type']];
      _id = data['_id']['$oid'];
      text = data['value'];
      icon = 'receipt';
      break;
    case 'single-relationship':
    case 'relationship':
      displayName = data['node']['display_name'];
      _id = data['_id']['$oid'];
      text = edgeTypeLookup[data['edge']['edge_type']] + ': ' + data['edge']['value'];
      icon = 'receipt';
      break;
    case 'single-field':
    case 'viz-field':
      displayName = data['display_name'] ? data['display_name'] : '';
      break;
    case 'filter':
      displayName = data['display_text']
      break;
    default:
      break;

  }

  const handleClickEvent = (data, type, context) => {
    if (context.includes('builder')) {
      chooseCard(data, type)
    } else if (context === 'display') {
      // NOOP: Clicking on the card if it is used for displaying information
    } else {
      updateRequestData(type, data)
    }
  }


  if (type.includes('field')) { // e.g. 'viz-field' or 'single-field'
    // IDEA: Load dimensions dynamically
    const dimensions = {
      width: 240,
      height: 216,
      margin: {
        top: 24,
        right: 24,
        bottom: 24,
        left: 24
      }
    };


    return (
      <div>
        <a onClick={() => handleClickEvent(data, type, context)}>
          <CustomLargeCard
            img={cardImg}
            iconType={''}
            icon={icon}
            title={displayName}
            inv={currentIds.includes(data['_id']['$oid']) ? true : false}
            variant={'square'}
            text={text}>
            {/* Load the data visualization 
            <FieldGraph
              data={data}
              dimensions={dimensions}
              config={fieldBuilderLookup['config']} />
            */}
          </CustomLargeCard>
        </a>
      </div>
    )
  }

  if (type.indexOf('form') !== -1) { // e.g. 'single-form-node'
    return (
      <div>
        <a onClick={() => handleClickEvent(data, type, context)}>
          <CustomFormCard
            img={cardImg}
            iconType={''}
            icon={icon}
            title={displayName}
            variant={'square'}
            text={text} />
        </a>
      </div>
    )
  }

  if (type === 'filter') {
    return (
      <div>
        <a onClick={() => handleClickEvent(data, type, context)}>
          <CustomFilterCard
            img={cardImg}
            iconType={''}
            icon={icon}
            title={displayName}
            inv={currentIds.includes(data['_id']['$oid']) ? true : false}
            text={text} />
        </a>
      </div>
    )
  }

  return (
    <div>
      <a onClick={() => handleClickEvent(data, type, context)}>
        <CustomCard
          img={cardImg}
          iconType={''}
          icon={icon}
          title={displayName}
          inv={currentIds.includes(data['_id']['$oid']) ? true : false}
          variant={'square'}
          text={text} />
      </a>
    </div>
  )
}

export default CustomCard;
