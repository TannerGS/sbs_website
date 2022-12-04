import React from 'react'

// images
import tannerHeadshot from "../images/headshot.png"

const Team = () => {
  return (
    <div>
        <section className="pt-10 pb-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-10">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Meet Our Team
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  We are dedicated to providing you the best customer experience while we tailor business specific solutions designed to increase your customers!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={tannerHeadshot}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Tanner Simpkins
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Software Engineer / Marketing Specialist
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={tannerHeadshot}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Austin Cooper
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Accountant / Financial Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Team