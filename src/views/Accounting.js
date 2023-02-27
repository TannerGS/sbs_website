import React from "react";

// component imports
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Contact from "../components/Contact.js"

const Accounting = () => {
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
        <p className="mb-10 text-xl font-black">Accounting</p>
        <p className="text-lg px-20">
          Outsourcing accounting has many benefits including cost savings,
          access to expertise, improved accuracy and efficiency, and the ability
          to focus on core business operations.
        </p>
      </div>
      <div class="p-10 mb-10 text-gray-600">
        <ul class="grid place-content-center sm:grid-cols-2 gap-8 ml-40">
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">01.</div>
            <div>
              <div class="text-xl font-bold text-blue-700">
                Bookkeeping and Financial Reporting
              </div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                An accountant can help keep accurate financial records and
                prepare regular financial statements, including balance sheets,
                income statements, and cash flow statements.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">02.</div>
            <div>
              <div class="text-xl font-bold text-blue-700">
                Tax Preparation and Planning
              </div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                An accountant can help a small business stay compliant with tax
                laws and minimize its tax liabilities through effective tax
                planning.
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-600">03.</div>
            <div>
              <div class="text-xl font-bold text-blue-700">
                Budgeting and Financial planning
              </div>
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
              <div class="text-xl font-bold text-blue-700">
                Business Strategy and Decision-Making
              </div>
              <p class="max-w-xs py-2 text-sm text-indigo-900">
                An accountant can provide valuable insights and analysis to
                support informed business decisions and contribute to the
                overall success of the business.
              </p>
            </div>
          </li>
        </ul>
        <div class="p-10 flex m-auto w-600 justify-center">
          <div class="px-4 text-5xl font-extralight text-indigo-600">05.</div>
          <div>
            <div class="text-xl font-bold text-blue-700">Fraud prevention</div>
            <p class="max-w-xs py-2 text-sm text-indigo-900">
              An accountant can help prevent and detect fraudulent activities by
              implementing internal controls and monitoring financial
              transactions.
            </p>
          </div>
        </div>
      </div>
      <div class="relative flex py-5 px-20 mb-20 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">About Austin</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div class="mb-80 w-2/3 text-center m-auto">
        <p class="text-lg">
          Meet Austin Cooper, a highly qualified accountant with a unique
          background. He holds dual degrees in Accounting and Business
          Administration with a concentration in Entrepreneurship. Austin has
          several years of experience delivering accurate financial reports and
          is known for his excellent communication skills and innovative
          solutions. He is a trusted advisor to clients ranging from startups to
          established corporations.
        </p>
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Accounting;
