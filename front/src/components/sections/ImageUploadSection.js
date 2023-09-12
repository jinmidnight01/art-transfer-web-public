import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// import Button from "../elements/Button";
import preview_img from "../../assets/images/preview_img.jpg";
import styleList from "../../data/styleList";

const Container = styled.div`
  margin-top: 32px;
  /* padding-left: 12px; */
  /* padding-right: 12px; */
  /* padding-top: 32px; */
  /* padding-bottom: 32px; */

  display: flex;
  flex-direction: row;
  /* background-color: red; */
  width: 70%;
  /* height: 100%; */
  /* border-radius: 8px; */
  border: 3px solid black;
  /* justify-content: center; */
  justify-content: space-between;
  align-content: center;
`;

const ImgBox = styled.div`
  /* background-color: white; */
  /* background-color: #eceded; */
  /* border-radius: 12px; */
  /* border : 1px solid white; */
  width: 50%;
  /* height: 300px; */
  /* height: 100%; */
  /* flex: 1; */
  /* display: flex; */
  /* flex-direction: column; */
  /* min-height: 300px; */
  /* justify-content: center; */
  /* align-items: center; */

  border-right: 2px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  /* flex: 1; */
`;
const Image = styled.img`
  align-self: center;

  /* width: 100%; */
  /* height: 100%; */
  /* resize: ; */
`;

const RightBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: flex-start;
  align-items: flex-start;
  /* background-color: red; */
`;

const InputBox = styled.div`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
  padding-right: 20px;
  // backgroundColor: "red",
`;

const UploadButton = styled.label`
  display: inline-block;
  border-radius: 20px;
  background-color: #33363a;
  /* background-color: #6163ff; */
  padding-left: 32px;
  padding-right: 32px;
  /* padding-top: 8px; */
  /* padding-bottom: 8px; */
  color: white;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

const TitleText = styled.div`
  font-size: 18;
  font-weight: 700;
  color: black;
  text-align: start;
`;

const IntroText = styled.div`
  color: #3f3f3f;
  font-size: 16;
  text-align: start;
`;

const StylingBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

const StyleImgContainer = styled.div`
  /* flex-direction: column; */
  /* display: flex; */
  width: 100%;
  /* background-color: red; */
  margin-top: 10px;
  /* flex-wrap: wrap; */
  overflow-y: scroll;
  height: 500px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #494949;
  }
`;

const StyleImg = styled.div`
  /* width: 300px; */
  /* height: 300px; */
  margin-right: 10px;
  margin-bottom: 40px;
  /* background-color: red; */
`;

const StyleImgLabel = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  /* background-color: green; */

  img {
    width: 50px;
    height: 50px;
    /* background-color: yellow; */
    margin-right: 10px;
  }
`;

const StyleListBox = styled.div``;

const ImageUploadSection = ({
  beforeImg,
  setBeforeImg,
  selectedStyle,
  setSelectedStyle,
  setFormData,
  onBeforeImgLoad,
  ...props
}) => {
  const imgRef = useRef(null);
  const beforeImgRef = useRef(null);
  const [beforeImgName, setBeforeImgName] = useState("파일명");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setBeforeImg(reader.result);
        setBeforeImgName(fileBlob.name);
        resolve();
      };
    });
  };

  const onFileChange = (e) => {
    console.log("온 파일 체인지", e.target.files[0]);
    setFormData(e.target.files[0]);
    encodeFileToBase64(e.target.files[0]);
    e.preventDefault();
  };

  const onStyleClick = (name) => {
    if (beforeImg) {
      setSelectedStyle(name);
    }
  };

  return (
    <Container>
      <ImgBox>
        <div
          style={{
            display: "flex",
            // backgroundColor: "red",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "pre-line",
            lineHeight: 2,
            color: "#33363A",
          }}
        >
          {beforeImg ? (
            <Image
              // ref={imgRef}
              // onLoad={() => {
              //   onBeforeImgLoad(imgRef);
              // }}
              src={beforeImg ? beforeImg : preview_img}
              alt={"image_preview"}
            />
          ) : (
            <div>
              한담과 함께{"\n"}소중한 나의 추억을{"\n"}한 폭의 그림으로
              만들어보세요
            </div>
          )}
        </div>
      </ImgBox>

      <RightBox>
        <InputBox>
          <TitleText>변경할 사진</TitleText>
          <IntroText>그림으로 남기고 싶은 사진을 선택해주세요.</IntroText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              width: "100%",
              // backgroundColor: 'yellow',
            }}
          >
            <UploadButton htmlFor="before_file">파일 선택</UploadButton>

            <input
              ref={beforeImgRef}
              id="before_file"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onFileChange}
            />
            <div
              style={{
                overflow: "hidden",
                flex: 1,
                textOverflow: "ellipsis",
                fontSize: 12,
                textAlign: "start",
                color: "#3f3f3f",
              }}
            >
              {beforeImgName}
            </div>
          </div>
        </InputBox>
        <StylingBox>
          <TitleText>바꾸고 싶은 스타일</TitleText>
          <IntroText>원하는 화풍을 선택해주세요.</IntroText>
          <StyleImgContainer>
            {styleList.map((el) => {
              const selected = selectedStyle == el.name;
              return (
                <StyleImg
                  onClick={() => {
                    onStyleClick(el.name);
                  }}
                  key={el.name}
                  style={{
                    cursor: beforeImg ? "pointer" : null,

                    border: selected
                      ? "3px solid #D4AD74"
                      : "3px solid #E0E1E5",
                  }}
                >
                  <img
                    src={el.url}
                    alt={"style img"}
                    style={{ width: "100%" }}
                  />
                  <StyleImgLabel>
                    {selected ? (
                      <div>
                        <img
                          src={require("../../assets/images/icons/dancheong2.png")}
                          alt="dancheong"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={require("../../assets/images/icons/gray_dancheong2.png")}
                          alt="dancheong"
                          style={{ opacity: 0.3 }}
                        />
                      </div>
                    )}

                    <div
                      style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: 700,
                        // backgroundColor: "red",
                      }}
                    >
                      {el.label}
                    </div>
                  </StyleImgLabel>
                </StyleImg>
              );
            })}
          </StyleImgContainer>
        </StylingBox>
      </RightBox>
    </Container>
  );
};

export default ImageUploadSection;
