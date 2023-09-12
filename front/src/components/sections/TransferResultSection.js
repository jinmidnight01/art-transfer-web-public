import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import frame from "../../assets/images/empty_frame_w.png";
import tshirt from "../../assets/images/tshirt.png";
import cup from "../../assets/images/cup.png";
import ecobag from "../../assets/images/ecobag2.png";

const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 100%;
`;

const TransferResultSection = ({ result }) => {
  const imgRef = useRef(null);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [ratio, setRatio] = useState(1);
  const [imgSize, setImgSize] = useState(null);

  const onImgLoad = (url) => {
    const height = imgRef.current.clientHeight;
    const width = imgRef.current.clientWidth;
    const ratio = width / height;
    setRatio(ratio);

    if (ratio > 1) {
      setIsHorizontal(true);
    }

    const size = { height: null, width: null, ratio: ratio };

    if (ratio > 1) {
      //horizontal
      size.width = 180;
      size.height = 180 / ratio;
    } else {
      size.height = 250;
      size.width = 250 * ratio;
    }
    console.log("사이즈", size);
    setImgSize(size);
  };

  // 나중에 ratio 고정하기.. => result 에 따라서 수정
  return (
    <Container>
      <h2>완료되었습니다!</h2>
      <h2 style={{ marginTop: "-10px" }}>
        당신의 추억에 담긴 한국의 아름다움을 확인해보세요.
      </h2>
      {/* <img src={frame} /> */}
      <img
        ref={imgRef}
        src={result?.url}
        onLoad={() => {
          onImgLoad(result?.url);
        }}
        alt={"transfer result"}
      />
      {/* <div>반 고흐의 시선으로 바라본 아름다운 세계 같네요!</div> */}

      {imgSize?.width && imgSize?.height ? (
        <>
          <h3 style={{ marginTop: "100px" }}>
            나만의 하나뿐인 기념품은 어떠세요?
          </h3>
          <div
            style={{
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative" }}>
              <img src={tshirt} style={{ width: 495 }} />
              {/* 495 × 600 */}

              <img
                src={result?.url}
                style={{
                  // maxWidth: 180,
                  width: imgSize?.width,
                  height: imgSize?.height,

                  position: "absolute",
                  left: 495 / 2 - imgSize?.width / 2,
                  top: 300 - imgSize?.height / 2,
                }}
              />
            </div>

            <div
              style={{
                // backgroundColor: "green",
                position: "relative",
                marginTop: 40,
              }}
            >
              <img src={cup} style={{ width: 500 }} />
              {/* 500 * 500 */}
              <img
                src={result?.url}
                style={{
                  // maxWidth: 180,
                  width: imgSize?.width * 0.9,
                  height: imgSize?.height * 0.9,
                  position: "absolute",
                  left: 215 - (imgSize?.width * 0.9) / 2,
                  top: 280 - (imgSize?.height * 0.9) / 2,
                }}
              />
            </div>

            <div
              style={{
                // backgroundColor: "green",
                position: "relative",
                marginTop: 40,
              }}
            >
              <img src={ecobag} style={{ width: 600 }} />
              {/* 600 × 600 */}
              <img
                src={result?.url}
                style={{
                  width: imgSize?.width * 0.8,
                  height: imgSize?.height * 0.8,
                  position: "absolute",
                  left: 300 - (imgSize?.width * 0.8) / 2,
                  top: 400 - (imgSize?.height * 0.8) / 2,
                }}
              />
            </div>
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default TransferResultSection;
