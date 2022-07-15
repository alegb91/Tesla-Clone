import React, { useState } from 'react'
import styled from 'styled-components';
import { Menu, Close } from '@material-ui/icons';
import LogoImg from "../images/logo.svg"

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const MiddleMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0px 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
        display: flex;
        align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(Menu)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s ease-in;
    
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;

        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(Close)`
    cursor: pointer;
`



const Header = () => {

    const [burgerStatus, setBurgerStatus ] = useState(false);


  return (
    <Container>
       <a>
            <img src={LogoImg} alt="" />
       </a>
       <MiddleMenu>
       <a href="#">Model S</a>
       <a href="#">Model 3</a>
       <a href="#">Model X</a>
       <a href="#">Model Y</a>
       </MiddleMenu>
       <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true)}/>
       </RightMenu>
       <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrapper>   
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
       </BurgerNav>
    </Container>
  )
}

export default Header;