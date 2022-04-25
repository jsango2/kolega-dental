import styled from "styled-components"

export const WrapSavjetiSection = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 220px 0 100px 124px;

  @media screen and (max-width: 1300px) {
    height: auto;
    padding: 140px 0 140px 0px;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    padding: 140px 0 0px 0px;
  }
`
export const WrapImage1 = styled.div`
  position: absolute;
  width: 600px;
  height: auto;
  right: 0;
  top: 221px;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`
export const WrapImage2 = styled.div`
  position: absolute;
  width: 400px;
  height: auto;
  right: 0;
  bottom: 121px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
