import React from "react";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
  return (
    <Viewport>
      <NavBar />
      <Heading>
        <h1>billette</h1>
        <h2>Sell Tickets Now On the Best Tecketing Platform On The Internet</h2>
      </Heading>
      <WelcomePage className="conatiner-md">
        <h4>Welcome to Billette</h4>
        <h1>The best online tool to sell tickets faster and stress-free</h1>
        <p>
          Billette is a global event ticketing and marketing platform, powering
          millions of events in nearly 180 contries. We empower event organizers
          with industriel-leading tools and technology to create, manage, and
          promote unforgettable live experience around the world.
        </p>
      </WelcomePage>
      <div className="cover">
        <QuestionsTag className="py-5 container-md">
          <TextLink>
            <h2>Create Your Event</h2>
            <p>
              Easily create, manage, and a memorable in person or virtual event
              experience on trusted platform.
            </p>
            <div className="but-link">
              <p>Learn more</p>
            </div>
          </TextLink>
          <TextLink>
            <h2>Built for Growth</h2>
            <p>
              Tap into the world's greatest marketplace and expand your reach
              with social marketing tools powered by our exclusive data.
            </p>
            <div className="but-link">
              <p>Learn more</p>
            </div>
          </TextLink>
        </QuestionsTag>
      </div>
    </Viewport>
  );
}
const Viewport = styled.div`
  height: 1000px;
  position: relative;
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  .cover {
    width: 100vw;
    background-color: #f3f3f3;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;

  h1 {
    font-size: 130px;
    color: #1a85e5;
  }
  h2 {
    width: 600px;
    text-align: center;
    margin-top: 20px;
  }
`;
const WelcomePage = styled.div`
  background-color: #16ce72;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 50px;
  min-height: 80vh;
  * {
    max-width: 700px;
    text-align: center;
    margin-top: 20px;
    scale: 1.2;
    color: #1a85e5;
  }
  h1 {
    color: white;
    font-weight: bolder;
  }
  p {
    color: white;
  }
`;
const QuestionsTag = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextLink = styled.div`
  background-color: white;
  display: block;
  position: relative;
  min-height: 380px;
  min-width: 450px;
  padding: 60px 50px;
  margin: 10px 5px;
  * {
    width: 300px;
    color: #1a85e5;
  }
  h2 {
    font-weight: bolder;
    font-size: 40px;
    margin-bottom: 15px;
  }
  p {
    font-size: 13px;
  }
  .but-link {
    margin-top: 40px;
    width: 220px;
    height: 35px;
    background-color: none;
    border: solid 1px #1a85e5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    :hover p {
      color: white;
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
    }

    p {
      font-size: 12px;
      margin: 0px;
      padding: 0px;
      width: 61px;
      z-index: 2;
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
    }

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #1a85e5;
      transform: translateX(-230px);
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
    }
    :hover::before {
      transform: translateX(0px);
      transition: all 0.8s cubic-bezier(1, 0.2, 0.5, 1);
    }
  }
`;
export default LandingPage;
