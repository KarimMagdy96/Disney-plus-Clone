import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Nav>
      <Logo>
        <img src="../../public/images/logo.svg"></img>
      </Logo>
      <NavMenu>
        <a href="/home">
            <img src="../../public/images/home-icon.svg" alt="" />
        <span>Home</span>
        </a>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    flex-flow:  row nowrap;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            
        }
        span{
            color: rgb(249, 249 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height:100.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        }
        &::before{
            background-color: red;
            content: '';
            border-radius:0px 0px 4px 4px;
            bottom: -6px;
            opacity: 0;
            position: absolute;
            right: 0;
            transform-origin:left center ;
            transform: scaleX(0);
            transition:  all 250ms cubic-bezier(0.25,0.64,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    @media (max-width:768px) {
        display: none;
    }
`
