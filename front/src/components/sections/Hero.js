import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { Link } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses} style={{ paddingTop: `5px` }}>
          <div className="hero-content">
            <div
              className="m-0 mb-32 reveal-from-bottom"
              data-reveal-delay="50"
            >
              <Image
                src={require("./../../assets/images/intro.png")}
                alt="Features tile icon 01"
                width={280}
                height={280}
              />
            </div>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400" style={{paddingTop:`5px`}}>
              내 인생 사진을 <span className="text-color-primary" style={{color:`#B48034`}}>그림으로</span>
            </h1>
            <div className="container-xs">
              <div
                className="m-0 mb-32 reveal-from-bottom"
                style={{ color: `rgb(119, 119, 119)`, fontFamily: `Arial` }}
                data-reveal-delay="400"
              >
                Make Your Photo to Art
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button color="primary" style={{backgroundColor:`#33363a`, borderRadius: `12px`, width:`250px`}} wideMobile>
                    <Link to = "/transfer" style={{fontSize: 20}}>
                        체험하기
                    </Link>
                  </Button>
                  {/* <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="400"
            style={{ marginBottom: `35px` }}
          >
            <div style={{ opacity: `0.8` }}>
              <Image
                src={require("./../../assets/images/sun.png")}
                alt="Features tile icon 01"
                width={800}
                height={360}
              />

              {/* <video muted autoPlay loop>
                <source src={require('./../../assets/videos/painting_video.mp4')} type="video/mp4"/>
              </video> */}
            </div>
            <div
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                width: `100%`,
                position: `absolute`,
                top: `25%`,
                transform: `translateY(-50%)`,
                textAlign: `center`,
              }}
            >
              <h1
                className="mt-0 mb-16 reveal-from-top serviceTitle"
                data-reveal-delay="600"
                style={{fontFamily:`EBSJSKMedium`}}
              >
                한:담
              </h1>
            </div>
          </div>
          {/* <a
              data-video="./../../assets/videos/painting_video.mov"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video={require('./../../assets/videos/painting_video.mov')}
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
