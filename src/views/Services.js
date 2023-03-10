import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Contact from "../components/Contact.js";

// images
import workflow from "../images/workflow.jpg";

const Services = () => {
  return (
    <div>
      <Navbar transparent />
      <div>
        <div className="relative pt-40 h-4/5 flex content-center items-center justify-center">
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
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
        </div>
      </div>

      <section class="text-white bg-gray-900 pt-20">
        <div class="max-w-screen-xl px-4 pt-6 pb-16 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-8xl mx-auto text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Explore Our Services</h2>

            <p class="my-10 text-gray-300">
              A&T Small Business Solutions offers a range of services to help
              small businesses succeed in the digital world. We provide expert
              website design and development to create professional and
              user-friendly websites that showcase your business's services and
              provide important information to potential clients. We also offer
              digital marketing services to increase your online visibility,
              generate leads, and drive sales. In addition, we provide
              accounting services to help you manage your finances, track your
              income and expenses, and make informed financial decisions.
              Contact us today to learn more about how we can help your business
              grow and succeed.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/accounting"
            >
              <div class="w-1/2 m-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>

              <h3 class="mt-4 text-xl font-bold text-white text-center">
                Accounting
              </h3>
            </a>

            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10 justify-center"
              href="/website"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 class="mt-4 text-xl font-bold text-white text-center">
                Website Design and Development
              </h3>
            </a>

            <a
              class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
              href="/social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 class="mt-4 text-xl font-bold text-white display-inline text-center">
                Digital Marketing
              </h3>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
              <img
                class="absolute inset-0 object-cover w-full h-full"
                src={workflow}
                alt="Man using a computer"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">Our Process</h2>

              <p class="my-10 text-gray-600">
                <h2>
                  At A&T Small Business Solutions, we take a collaborative and
                  personalized approach to developing solutions for small
                  businesses. Here is an overview of our process:
                </h2>
                At ATSB Solutions, we take a collaborative and personalized
                approach to developing solutions for small businesses. Here is
                an overview of our process:<br /><p class="font-bold inline">Initial consultation:</p> We start by
                meeting with you to understand your business goals, challenges,
                and needs. This helps us develop a custom plan that is tailored
                to your unique situation. <br /><p class="font-bold inline">Solution development:</p> Our team then
                works together to develop a comprehensive solution that includes
                website design and development, digital marketing, and
                accounting services. We take into account your business's
                specific goals and objectives to create a plan that is effective
                and efficient. <br /><p class="font-bold inline">Implementation:</p> Once the solution is finalized,
                our team will work closely with you to implement the plan and
                ensure that it is executed smoothly. This may involve setting up
                your website, developing a digital marketing strategy, or
                providing ongoing accounting support. <br /><p class="font-bold inline">Ongoing support:</p> We
                understand that the needs of small businesses can change over
                time. That's why we offer ongoing support and consultation to
                help you adjust your plan as needed and continue to grow and
                succeed. Overall, our goal is to provide personalized and
                effective solutions that help small businesses thrive in the
                digital world.
              </p>

              <a
                class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                href="/contact"
              >
                <span class="text-sm font-medium"> Contact Us </span>

                <svg
                  class="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="p-10 mb-10 text-gray-600">
        <ul class="grid place-content-center sm:grid-cols-2 gap-8 ml-40">
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">01.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Research</div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                We love numbers! We collect data and insights, analyze them then
                take the time to learn about your objectives, ask the right
                questions to understand your business.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">02.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Strategy</div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                Solutions are born from proper research, hard work, and strong
                strategy. We build data-driven roadmaps for every project to
                pave the way to success.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">03.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Design</div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                We design the right solution for your business. We craft
                beautiful, intuitive, and user-friendly interfaces that are easy
                to use and easy to maintain.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">04.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Development</div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                Our development process involves a collaborative approach that
                begins with the prior steps and is followed by the development
                of customized solutions that meet our clients' specific business
                objectives.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">05.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Deployment</div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                We prioritize communication and transparency throughout the
                entire process to ensure our clients are fully engaged and
                satisfied with the end result.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">06.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Repeat</div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                We analyze the data from the prior deployment of services so
                that we can continue to tailor better solutions for your
                specific business needs!
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-60">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
