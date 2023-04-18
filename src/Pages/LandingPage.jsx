import React from "react";
import NavBar from "../Components/NavBar";
import PhoneImage from '../Components/images/phone_14_01 [Converted]-01.png' 
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
      <CreateEvent className="create-event container-sm">
      <h1>Create your event with the best online ticketing system</h1>
        <div className="row flex-1">
          <div className="col-md-5 phone-col">
            <PhoneImg src={PhoneImage} alt="phoneImage" />
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6" style={{width: "300px"}}>
                <h4>Event creation and ticketing tools</h4>
                <p className="mt-3">
                Selling tickets online with Billette is easier than ever. Post your event, build your own professional online ticketing system, and create tickets for both in-person and virtual events in just minutes.                </p>
              </div>
              <div className="col-md-6" style={{width: "300px"}}>
              <h4>Customizable event pages</h4>
                <p className="mt-3">
                Provide a seamless online ticket purchasing experience for your attendees with customizable event pages that that engage and inform your audience, from the first headline to checkout.                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6" style={{width: "300px"}}>
                <h4>Flexible event payouts</h4>
                <p className="mt-3">
                Set up online ticket payouts for your events on a custom schedule of your choice and get paid quickly.                </p>
              </div>
              <div className="col-md-6" style={{width: "300px"}}>
                <h4>Billette Organizer App</h4>
                <p className="mt-3">
                Monitor on-site and online ticket sales, complete attendee check-ins, and view real-time data on the go with our easy-to-use mobile app.                </p>
              </div>
            </div>
            <CreateButton>Create an event</CreateButton>
          </div>
        </div>
      </CreateEvent>
      <CreateEvent className="create-event  b-bk">
      <div className="container-sm">
        <h1>An event ticketing platform built for growth</h1>
        <div className="row">
        <div className="col-md-6 p-lg-5">
            <div className="w-300">
              <h4 className="">Attendee discovery</h4>
              <p className="mt-3">Event-goers searching for unique things to do account for 1 out of 4 tickets sold on Eventbrite with personalized recommendations in our consumer app and newsletters.</p>
            </div>
            <div className="w-300">
              <h4 className="mt-5">Billette Boost</h4>
              <p className="mt-3">Power your growth with our all-in-one marketing platform designed specifically for events. Utilize time-saving social media ad tools to reach more people with smart audience targeting capabilities.</p>
            </div>
            <div className="w-300">
              <h4 className="mt-5">Share on social</h4>
              <p className="mt-3">Easily share your events on Facebook or LinkedIn directly from your Eventbrite account and position yourself as the top online ticket seller in your industry with more impressions, clicks, and shares.</p>
            </div>
          </div>
          <div className="col-md-6">
            <PhoneImg alt="placeImage"/>
          </div>
        </div>
        </div>
      </CreateEvent>
      <CreateEvent className="create-event container-sm">
      <h1>Build your community</h1>
      <div className="row">
        <div className="col-md-6">
          <PhoneImg alt="placeImage"/>
        </div>
        <div className="col-md-6 p-lg-5">
          <div className="w-300">
            <h4>Email marketing tools</h4>
            <p className="mt-3">Subscribe to Eventbrite Boost to quickly and easily send emails to your community with no contact limits and up to 10,000 daily sends. Our open rates are 59% higher than the industry average.</p>
          </div>
          <div className="w-300">
            <h4 className="mt-5">Audience reports & insights</h4>
            <p className="mt-3">Discover where your ticket sales are coming from, and get detailed information about your ticket buyers, event attendance, and more.</p>
          </div>
          <div className="w-300">
            <h4 className="mt-5">Automated event notifications</h4>
            <p className="mt-3">Keep your community engaged and your events top-of-mind with automated event reminders and updates when event-goers attend, “Follow” or “Like” your events.</p>
          </div>
          
          <CreateButton>Build your community</CreateButton>
        </div>
      </div>
      </CreateEvent>
      <SaleTools>
        <div className="container-sm">


        <h1>More tools to sell tickets to your event</h1>

        <div className="row">
          <div className="col-md-3">
            <img src="" alt="pic" />
            <div className="sale-ticket-text">
              <h4>Embedded checkout</h4>
              <p>Sell tickets online with Eventbrite's easy-to-use Embedded Checkout functionality. Your attendees can complete their online ticket purchase without ever having to leave your event website or blog.</p>
            </div>
          </div>
          <div className="col-md-3">
          <img src="" alt="pic" />
            <div className="sale-ticket-text">
              <h4>Scheduled payouts</h4>
              <p>Receive an advance of ticket sales before your events take place — on a customized schedule of your choice.</p>
            </div>
          </div>
          <div className="col-md-3">
          <img src="" alt="pic" />
            <div className="sale-ticket-text">
              <h4>Collections</h4>
              <p>Group your related events onto individual collection pages to make it easier for attendees to find what they're looking for — and make their online ticket purchase seamless.</p>
            </div>
          </div>
          <div className="col-md-3">
          <img src="" alt="pic" />
            <div className="sale-ticket-text">
              <h4>Promo codes</h4>
              <p>Grow your following with an online ticketing platform that offers exclusive discounts, limited-time deals, and special access to your event with a quick scan on your attendees' smart device.</p>
            </div>
          </div>
        </div>
        </div>
      </SaleTools>
      <Reference>
        <div className="container-sm">
        <div className="row">
          <div className="col-md-6">
            <h2>
              <span className="large">"</span><br />
              As someone who completely relies on people buying tickets to (our) event to get the word out, Billette plays a huge part in my business."
            </h2>
          </div>
          <div className="col-md-6"></div>
        </div>
        </div>
      </Reference>
    </Viewport>

  );
}
const Viewport = styled.div`
display: block;
position: relative;
  height: 1000px;
  position: relative;
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  .w-300{
    max-width: 350px;
  }
  .b-bk{
    background-color: #16ce721d;

    h1{
      color: #16ce72;
      padding-top: 30px;
    }
  }

  h1{
    font-size: 50px;
    font-weight: bolder;
    width: 800px;
    text-align: center;
    margin: 50px auto ;
  }
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
const CreateEvent = styled.div`
  min-height: 80vh;
  p{
    font-size: 14px;
  }

  h1 {
    color: #1a85e5;
    font-weight: bolder;
    text-align: center;
    margin-top: 50px;
  }

  h4{
  }

.flex-1{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .phone-col{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`
const PhoneImg = styled.img`
  width: 260px;
  position: relative;
`
const CreateButton = styled.button`
  padding: 7px 20px;
  margin-top: 50px;
  border: none;
  background-color: #1a85e5;
  color: white;
  font-size: small;
`

const SaleTools = styled.div`
  display: block;
  padding-bottom: 50px;

  .sale-ticket-text{
    text-align: center;
    scale: .8;
    margin-top: 30px;
  }
`

const Reference = styled.div`
  padding: 50px 10px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16ce72;
  color: white;

  h2{
    color: white;
    font-weight: bolder;
    font-size: 40px;
  }
  .large{
    display: block;
    font-size: 120px;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    margin: 0px;
    height: 40px;
    color: white;
    padding: 0px;
  }
  
`
export default LandingPage;
