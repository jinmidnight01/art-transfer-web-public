import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "How to Work",
    paragraph: "간단한 과정으로 하나뿐인 그림을 만들어보세요",
  };

  const imgCircle = {
    
  }

  return (
    <section {...props} className={outerClasses} >
      <div className="container">
        <Image
          src={require("./../../assets/images/tree.png")}
          alt="Features split 01"
          width={528}
          height={396}
          style={{position:`absolute`, opacity:`0.2`, top:`24px`}}
        />
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item" style={{marginTop:`40px`}}>
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{color:`#B48034`, fontWeight:`bold`}}>
                  STEP 1
                </div>
                <h3 className="mt-0 mb-12">이미지 업로드</h3>
                <p className="step1">
                  풍경, 인물, 반려동물 등 그림으로 변환하고 싶은 <br /> 사진을
                  업로드 해주세요
                </p>
                <p className="step1_mobile">
                  풍경, 인물, 반려동물 등 <br /> 그림으로 변환하고 싶은 사진을
                  업로드 해주세요
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",

                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/step1_circle.png")}
                  alt="Features split 01"
                  className="imgCircle"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{color:`#B48034`, fontWeight:`bold`}}>
                  STEP 2
                </div>
                <h3 className="mt-0 mb-12">화풍 선택</h3>
                <p className="step1">
                  적용하고 싶은 화가의 화풍을 선택해주세요
                </p>
                <p className="step1_mobile">
                  적용하고 싶은 화가의
                  <br /> 화풍을 선택해주세요
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/step2_circle.png")}
                  alt="Features split 02"
                  className="imgCircle"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{color:`#B48034`, fontWeight:`bold`}}>
                  STEP 3
                </div>
                <h3 className="mt-0 mb-12">변환 완료</h3>
                <p className="step1">
                  사진이 그림으로 변환된 모습을 확인해주세요
                </p>
                <p className="step1_mobile">
                  사진이 그림으로 변환된 <br /> 모습을 확인해주세요
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/step3_circle.png")}
                  alt="Features split 03"
                  className="imgCircle"

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
