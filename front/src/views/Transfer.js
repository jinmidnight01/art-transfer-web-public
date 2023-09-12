import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";

import ImageUploadSection from "../components/sections/ImageUploadSection";
import TransferResultSection from "../components/sections/TransferResultSection";
import Loading from "../components/elements/Loading";

// import axios from "../lib/axios";
import axios from "axios";

const Transfer = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [beforeImgSize, setBeforeImgSize] = useState(null);
  const [beforeImg, setBeforeImg] = useState(null);
  const [beforeImgData, setBeforeImgData] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isNowTransfering, setIsNowTransfering] = useState(false);

  // const [transferResult, setTransferResult] = useState({
  //   // url: "https://img.hankyung.com/photo/202112/AA.28336740.1.jpg",
  //    url: "https://w.namu.la/s/53190c232a6af80e7cc807f6c11b0fe45b5e8b76e3c0b2bcccae2e299a77b8c70900d9d6918ab3e697303b83fb45e19026845c815148e56aed3a51cea4c15ad68846cbae6662582d462db835778b0df2bcc7ff8d6210c1030bebf30d998afa2bdf7582ff3dcacf6867702118d7b4b7b6",
  //   name: "Gogh",
  // });
  const [transferResult, setTransferResult] = useState(null);

  // const [isNowTransfering, setIsNowTransfering] = useState(true);

  // const [beforeImg, setBeforeImg] = useState(preview_img);
  // const [afterImg, setAfterImg] = useState(null);

  useEffect(() => {
    if (selectedStyle) {
      let form = beforeImgData;
      form.append("artist", selectedStyle);
      console.log("폼 바꼈어요", form);

      setBeforeImgData(form);
    }
  }, [selectedStyle, beforeImgData]);

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const TransferButton = styled.div`
    background-color: #33363a;
    /* background-color: #6163ff; */
    margin-top: 30px;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
    font-size: 18;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
  `;

  const onTransferButtonClick = async () => {
    setIsNowTransfering(true);
    // console.log("데이터 보자", beforeImgData);

    await axios
      .post("http://localhost:8000/api/image_translate/", beforeImgData)
      .then((res) => {
        setIsNowTransfering(false);
        console.log("리턴!", res.data);

        setTransferResult({
          url: "http://localhost:8000" + res.data.output_url,
        });
      })
      .catch((err) => {
        alert("에러 발생 !");
        console.log("에러", err);
      });

    // setTimeout(() => {
    //   const urls = [
    //     "https://w.namu.la/s/53190c232a6af80e7cc807f6c11b0fe45b5e8b76e3c0b2bcccae2e299a77b8c70900d9d6918ab3e697303b83fb45e19026845c815148e56aed3a51cea4c15ad68846cbae6662582d462db835778b0df2bcc7ff8d6210c1030bebf30d998afa2bdf7582ff3dcacf6867702118d7b4b7b6",
    //     "https://p4.wallpaperbetter.com/wallpaper/704/132/878/vertical-portrait-display-wallpaper-preview.jpg",
    //     "https://w.namu.la/s/6f490388edd0eb0595b633808b7f9d4a4251ef5f33052b34a8f104a7b872676191869533df4148d6b540c5191c3651c6e492c4cb1502b8f1a62ba16a194f75b83a6cb146f39d20cbf23d4fc2fefa5e4d9e119bf213d3cafa0839a45f13348468824d7d4278c3985fa72f0a3fef4518a6",
    //     "https://img.freepik.com/premium-photo/day-sky-with-clouds-vertical-photo_182793-602.jpg?w=900",
    //     "https://cdn.kormedi.com/wp-content/uploads/2022/04/ck_tica1010005154_l.jpg",
    //   ];
    //   setIsNowTransfering(false);
    //   setTransferResult({
    //     url: urls[Math.floor(Math.random() * urls.length)],
    //     name: "Gogh",
    //   });
    // }, 1000);
  };

  const setFormData = (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("enctype", "multipart/form-data");

    // let formObject = Object.fromEntries(form.entries());

    setBeforeImgData(form);
  };

  const onBeforeImgLoad = (imgRef) => {
    const height = imgRef.current.clientHeight;
    const width = imgRef.current.clientWidth;
    const ratio = width / height;

    setBeforeImgSize({ height: height, width: width, ratio: ratio });
  };

  return (
    <section className={outerClasses}>
      {isNowTransfering ? <Loading /> : null}
      <div className="container-sm" style={{ width: "100%", maxWidth: "100%" }}>
        <div
          className={innerClasses}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 className="reveal-from-bottom">
            {"그림으로 남기고 싶은 추억을 선택해주세요."}
          </h1>

          <ImageUploadSection
            beforeImg={beforeImg}
            setBeforeImg={setBeforeImg}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setFormData={setFormData}
            onBeforeImgLoad={onBeforeImgLoad}
          ></ImageUploadSection>
          {beforeImg && selectedStyle ? (
            <TransferButton onClick={onTransferButtonClick}>
              변환하기
            </TransferButton>
          ) : null}

          {transferResult ? (
            <TransferResultSection
              result={transferResult}
            ></TransferResultSection>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Transfer;
