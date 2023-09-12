import React from 'react';
import classNames from 'classnames';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import {Link} from 'react-router-dom';

const Experience = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
    
    return (
        <section
          {...props}
          className={outerClasses}
          style={{marginBottom:`200px`}}
        >
            <div className="container-xs">
                <div className="reveal-from-bottom">
                <ButtonGroup>
                    <Button color="primary" style={{backgroundColor:`#33363a`, borderRadius: `12px`, width:`250px`}} wideMobile>
                        <Link to="/transfer" style={{fontSize: 20}}>
                        체험하기
                        </Link>
                    </Button>
                </ButtonGroup>
                </div>
            </div>
        </section>
      );
    
};

export default Experience;