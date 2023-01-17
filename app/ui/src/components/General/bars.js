import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Icon, { EmotionIcon } from '../../icons/Icons';
// All Mighty Clock!
import Clock from './clock';

import {
  ROOT_ROUTE,
  DISCOVERY_ROUTE,
  SAMPLE_AUTH_ROUTE,
} from '../../config/routes';

const LeftBar = () => {
  const [activeSidebarState, setActiveSidebarState] = useState(false);

  let sideBarClasses = [
    'general--sidebar',
    'general--left_sidebar',
    'standard_flex_column',
    'standard_flex_start',
  ]

  if (activeSidebarState) {
    sideBarClasses.push('active');
  }

  return (
    <div className={sideBarClasses.join(' ')}>
      <div className="general--sidebar_header standard_flex_end">
        <a onClick={() => setActiveSidebarState(!activeSidebarState)} >
          <div>
            <Icon className="general--sidebar_toggle standard_pointer"
                  name={activeSidebarState ? "menuOpen" : "menu"} />
          </div>
        </a>
      </div>
      { !activeSidebarState &&
        <div className="general--nav_item_group">
          <Link to={DISCOVERY_ROUTE}>
            {/* IDEA: Consolidate the long repetitive classNmae either as a variable or a single class */}
            <div className="general--nav_item-icon_cell standard_flex_start standard_pointer"
                 title="Social Discovery">
                <Icon name={"bioTech"} />
            </div>
          </Link>
          <Link to={SAMPLE_AUTH_ROUTE}>
            <div className="general--nav_item-icon_cell standard_flex_start standard_pointer"
                 title="Sample Auth">
              <Icon name={"lockSecure"} />
            </div>
          </Link>
        </div>
      }
      { activeSidebarState &&
        <div className="general--nav_item_group">
          <div>
            <Link to={DISCOVERY_ROUTE}>
              <div className="general--nav_item-icon_cell standard_flex_start standard_pointer">
                <Icon name={"bioTech"} />
                Social Discovery
              </div>
            </Link>
          </div>
          <div>
            <Link to={SAMPLE_AUTH_ROUTE}>
              <div className="general--nav_item-icon_cell standard_flex_start standard_pointer">
                <Icon name={"lockSecure"} />
                Sample Auth
              </div>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

const RightBar = () => {
  return (
    <div></div>
  )
}

const EmptyRightBar = () => {
  return (
    <div className="general--sidebar-empty general--right_sidebar-empty" />
  )
}

const BottomBar = () => {
  return (
    <div className="general--bottom_bar standard_flex_center">
      <div>
        © 2018-Present &#8226;
      </div>
      <i>
        Made with hope for a better future
      </i>
      <div>
        &#8226; Omega Horizon Technologies LLC
      </div>
    </div>
  )
}

const TopBar = ({user}) => {
  // The object is only valid when the object has multiple keys
  const activeUser = Object.keys(user).length > 0 ? true : false;

  return (
    <div className="general--top_bar standard_flex_between">
      <div className="general--top_bar-left">
      </div>
      <div className="general--top_bar-center">
        <Link to="/">
          Psihesion
        </Link>
      </div>
      <div className="general--top_bar-right standard_flex_end">
        <Clock alignment="right"/>
        {!activeUser && (
          <Link to={SAMPLE_AUTH_ROUTE}>
            <div className="general--top_bar-right-action standard_flex_start">
              <Icon name={'loginDoor'} />
              <div>
                Log In
              </div>
            </div>
          </Link>
        )}
        {activeUser && (
          <Link to={ROOT_ROUTE}>
            <div className="standard_flex_start">
              <Icon name={'signupCard'} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

const Bars = ({user}) => {
  return (
    <>
      <TopBar user={user}/>
      <LeftBar />
      <EmptyRightBar />
      <BottomBar />
    </>
  )
}

export default Bars;
