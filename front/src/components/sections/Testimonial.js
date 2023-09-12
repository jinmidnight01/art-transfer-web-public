import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import {Link} from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'How to Store',
    paragraph: '변환한 그림을 다양한 굿즈들을 통해 보관해보세요'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" >
        <div className={innerClasses} style={{paddingTop:`80px`, paddingBottom:`50px`}}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <Image
                    src={require('./../../assets/images/ecobag_paint.png')}
                    alt="Features split 01"
                    width={528}
                    height={396} />

              {/* <div className="tiles-item-inner"> */}
                {/* <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div> */}
                {/* <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"> */}
                  {/* <span className="testimonial-item-name text-color-high">Roman Level</span>
                  <span className="text-color-low"> / </span> */}
                  {/* <div className="testimonial-item-link" style={{textAlign:`center`, fontSize: 20}}>
                    Eco Bag
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>

            <div className="tiles-item reveal-from-bottom">
                <Image
                  src={require('./../../assets/images/mugcup_paint.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              {/* <div className="tiles-item-inner"> */}
                  {/* <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                        </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Roman Level</span>
                    <span className="text-color-low"> / </span>
                    <div className="testimonial-item-link" style={{textAlign:`center`, fontSize: 20}}>
                      Mobile Phone Case
                    </div>
                  </div> */}
                {/* </div> */}
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">

              <Image
                  src={require('./../../assets/images/tshirts_paint.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              {/* <div className="tiles-item-inner"> */}
                  {/* <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                        </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">Roman Level</span>
                    <span className="text-color-low"> / </span>
                    <div className="testimonial-item-link" style={{textAlign:`center`, fontSize: 20}}>
                      T-Shirts
                    </div>
                  </div> */}
                {/* </div> */}
            </div>

          </div>
        </div>
      </div>


    </section>
    
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;