import React from 'react'
import styled from 'styled-components';
import Section from "./Section";
import ModelS from "../images/model-s.jpg"
import ModelY from "../images/model-y.jpg"
import ModelX from "../images/model-x.jpg"
import Model3 from "../images/model-3.jpg"
import SolarPanel from "../images/solar-panel.jpg"
import SolarRoof from "../images/solar-roof.jpg"
import Accessories from "../images/accessories.jpg"

const Container = styled.div`
height: 100vh;
`

const Home = () => {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg={ModelS}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg={ModelY}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg={Model3}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg={ModelX}
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Lower Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg={SolarPanel}
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg={SolarRoof}
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            backgroundImg={Accessories}
            leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home;