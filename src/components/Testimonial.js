import React from "react";

// images
import accounting from "../images/accounting.jpg";
import computer from "../images/computer.jpg";
import email from "../images/email.jpg";
import group from "../images/group.jpg";

const Testimonial = () => {
  return (
    <div>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <img
                    alt="..."
                    src={computer}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <h6 className="text-xl font-semibold pt-10">
                    Website Design and Development
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    We can design a custom website built specifically for your
                    business needs! We also have options like custom templates
                    for business with a tighter marketing budget!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <img
                    alt="..."
                    src={accounting}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <h6 className="text-xl font-semibold pt-10">Accounting</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Bogged down with payroll, invoicing, or bookkeeping? With
                    our experienced accountant we can handle all the dollars for
                    you!
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <img
                    alt="..."
                    src={email}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <h6 className="text-xl font-semibold pt-10">
                    Targeted Email Campaigns
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Want to communicate with your customer base or potential
                    customers to increase website traffic? Using our targeted
                    email campaigns we can design an eye-catching, clean,
                    professional email targeted at specific demographics to
                    increase engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-28">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Testimonials
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <p className="font-bold">
                  Cara Rapp <br /> Baked by Cara{" "}
                </p>
                "ATSB helped me focus on my day-to-day business and get back to
                what I love doing!"
              </p>
              <p className="text-lg font-light leading-relaxed mt-8 mb-4 text-gray-700">
                <p className="font-bold">
                  Jaeden Richards <br /> B&J Landworks{" "}
                </p>
                "Working with ATSB has been an absolute pleasure as their
                exceptional professionalism and efficiency, coupled with their
                tailored solutions, timely communication, and deep understanding
                of our business needs, make them an outstanding partner for any
                organization seeking top-notch services."
              </p>
              <a href="/contact" className="font-bold text-gray-800 mt-8">
                Contact Us!
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-400">
                <img
                  alt="..."
                  src={group}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-400 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Service
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We strive to give our clients the best customer service
                    while we work together to design a solution specific to your
                    business!
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
