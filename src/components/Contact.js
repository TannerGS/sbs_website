import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="relative block pb-10 md:pb-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mt-20 mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold text-center pb-2">
                    Free Consultation, Click Below!
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600 text-center">
                    Send us an email and we will get back to you in 24 hours!
                  </p>
                  <div className="text-center mt-6">
                    <a href="mailto:austin.cooper@atsbsolutions.com ">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Contact Us!
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
