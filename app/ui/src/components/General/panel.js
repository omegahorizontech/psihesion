import React from 'react';

import { Link } from 'react-router-dom';
import { DISCOVERY_ROUTE } from '../../config/routes'

import CustomButton from '../General/custom-button'

export const Panel = ({ children }) => {

  return (
    <div class="general--panel">
        { children }
        <a className="standard_pointer">
            <Link to={DISCOVERY_ROUTE}>
                <CustomButton icon={'bioTech'} text={'Search People'}/>
            </Link>
        </a>
    </div>
  );
};

export default Panel;
