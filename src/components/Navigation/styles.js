import styled from "styled-components"

export const NavbarWrap = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 111px;
  display: flex;
  align-items: center;
  padding-right: 90px;
  @media screen and (max-width: 1050px) {
    width: 100vw;
    padding-right: 40px;
  }
`
export const LogoWrap = styled.div`
  position: relative;
  width: 374px;
  min-width: 230px;

  @media screen and (max-width: 1050px) {
    width: 250px;
  }
`

export const LinkWrap = styled.div`
  margin-left: auto;
  position: relative;
  width: 800px;
  min-width: 800px;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const Hamburger = styled.div`
  position: absolute;
  z-index: 10;
  right: 40px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1001px) {
    display: none;
  }
  @media screen and (max-width: 400px) {
    right: 25px;
  }
`
export const CloseIcon = styled.div`
  position: absolute;
  z-index: 10;
  top: 52px;
  right: 40px;
  height: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`
export const LineX1 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(45deg);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`
export const LineX2 = styled.div`
  position: relative;
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  transform: rotate(315deg) translate(6px, -7px);
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`
export const Line = styled.div`
  height: 3px;
  width: 23px;
  background-color: #32bde3;
  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #aea8b2;
    margin: 0 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
