import React from "react";

const About = () => {
  return (
    <div>
      <section className="relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white mt-10 mb-6">
                We can help maximize your business!
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Increase Online Presence
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                We can create responsive, visually
                appealing websites that are easy to navigate and engage
                customers, improving their overall online experience.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow Your Market
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                We can design and execute targeted campaigns that build brand
                awareness, increase sales, and foster long-term customer
                loyalty.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Simplify Your Accounting
              </h5>
              <p className="mt-2 mb-4 text-gray-500 mb-10">
                With our accounting services, we can help our clients streamline
                their financial operations, identify cost savings opportunities,
                and develop sound financial strategies that support their
                business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
