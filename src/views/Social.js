import React from "react";

// component imports
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Card, ReverseCard } from "./Card.js";

// image imports
import Computer from "../images/computer.jpg";
import Digital from "../images/digital.jpg";
import Email from "../images/email.jpg";

const Social = () => {
  return (
    <div>
      <Navbar transparent />
      <div>
        <div className="relative pt-16 h-4/5 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto pb-20"></div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          ></div>
        </div>
      </div>
      <div className="p-20 content-center items-center justify-center text-center">
        <p className="mb-10 text-xl font-black">Digital Marketing</p>
        <p className="text-lg">
          Our company provides customized digital marketing solutions for small
          businesses, beginning with an initial consultation to understand their
          needs and goals. We then develop and implement a customized marketing
          plan that includes a strategy for each digital marketing channel. We
          continually analyze and optimize the campaigns using data analytics,
          provide regular reports to the client, and provide ongoing support to
          ensure their marketing efforts are effective.
        </p>
      </div>
      <ReverseCard
        image={Computer}
        title="Social Media Marketing"
        mainText="We focus on creating engaging and relevant content that resonates with the target audience and promotes brand awareness. Our team would use social media platforms to build relationships with customers, foster brand loyalty, and drive traffic to the client's website. By following this approach, we aim to help small businesses maximize their social media presence and achieve their marketing goals."
      />
      <Card
        image={Email}
        title="Targeted Email Campaigns"
        mainText="Our team focuses on creating visually appealing and mobile-responsive email templates that align with the client's brand identity and messaging. We would use A/B testing to refine the messaging and optimize the email campaigns for better results. Additionally, we would provide guidance on growing the client's email list through lead generation tactics such as website opt-ins, landing pages, and social media campaigns."
      />
      <ReverseCard
        image={Digital}
        title="Digital Ads"
        mainText="We develop a customized digital advertising strategy that includes selecting the appropriate digital ad platform, creating compelling ad creatives, and optimizing the campaigns for better results. By following this approach, we aim to help small businesses maximize their return on investment (ROI) through effective digital advertising campaigns."
      />
      <Footer />
    </div>
  );
};

export default Social;
