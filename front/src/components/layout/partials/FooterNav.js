import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">

        <li style={{marginBottom:5}}>
          <Link to="#0"><FontAwesomeIcon icon={faPhone} style={{marginTop:4.5}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;010-2044-4630</Link>
        </li>
        <li style={{marginBottom:5}}>
          <Link to="#0"><FontAwesomeIcon icon={faEnvelope} style={{marginTop:4.5}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jinmidnight01@gmail.com</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;