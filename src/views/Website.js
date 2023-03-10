import React from 'react'

// component imports
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { Card, ReverseCard } from './Card.js';
import Header from './Header.js';

// image imports
import Template from '../images/template.jpg';
import Custom from '../images/custom.jpg';
import Accounting from '../images/accounting.jpg';
import SEO from '../images/seo.jpg';
import Analytics from '../images/analytics.jpg';

const Website = () => {
  return (
    <div>
      <Navbar transparent/>
      <div>
          <div className="relative pt-16 h-4/5 flex content-center items-center justify-center">
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
                }}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto pb-20">
                
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
            </div>
          </div>
      </div>
      <Header image={Accounting} mainText='Website Design and ' subText='Development' paragraph="We design and develop customized websites and website templates that are visually appealing, user-friendly, and optimized for search engines. We ensure the website is mobile-responsive, secure, and integrates seamlessly with the client's marketing efforts. Our team provides ongoing maintenance and support to ensure the website remains up-to-date and meets the client's evolving needs." />
      <ReverseCard image={Template} title='Pre-made Templates' mainText='As a company that offers website development solutions to small businesses, we understand that custom website development can be expensive. To save our clients money, we offer premade website templates that are cost-effective and can be customized to suit their needs. Our team works with the client to select a template that aligns with their brand identity, and then customize it with their content, images, and branding to create a unique website that meets their business goals. By using premade templates, we can help small businesses save money while still achieving an effective online presence.'  />
      <Card image={Custom} title='Custom Website' mainText='We understand that some clients prioritize an exceptional online presence over budget. To achieve amazing results for such clients, we offer custom website development that is tailored to their unique needs and goals. Our team works closely with the client to understand their brand identity, target audience, and business objectives, and then designs and develops a website that is visually stunning, user-friendly, and optimized for search engines. By leveraging the latest technologies and design trends, we aim to help small businesses achieve an exceptional online presence that engages their target audience and drives conversions.' />
      <ReverseCard image={SEO} title='Search Engine Optimization (SEO)' mainText="We begin by conducting keyword research to identify the target audience's search queries and optimize the website's content, metadata, and structure accordingly. We also focus on building quality backlinks and improving the website's loading speed, mobile responsiveness, and user experience to improve its search engine rankings and reach a wider audience."  />
      <Card image={Analytics} title='Google Analytics' mainText='We use Google Analytics to track traffic to the website, including the number of visitors, page views, bounce rate, and other metrics as well! We are able to track traffic on the website, including the most visited pages and links, and analyze the data to identify trends and opportunities for improvement. By leveraging Google Analytics, we help small businesses make data-driven decisions and optimize their website for better results.' />
      <Footer />
    </div>
  )
}

export default Website