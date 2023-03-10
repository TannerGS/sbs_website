import React from "react";

// image imports
import Design from "../images/design.jpg";

const Header = ({ image, mainText, subText, paragraph }) => {
  return (
    <div className="relative w-4/5 mx-auto mt-10">
      <div>
        <div className="container m-auto px-6 xs:pt-10 md:pt-0 md:px-12 lg:px-7">
          <div className="flex items-center flex-wrap gap-12 px-2 md:px-0">
            <div className="lg:w-6/12 lg:-ml-7">
              <div className="relative">
                <img
                  src={Design}
                  alt="pic"
                  loading="lazy"
                  width="640"
                  height="640"
                />
              </div>
            </div>

            <div className="relative lg:w-6/12 lg:-ml-20 right-7">
              <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-6xl">
                {mainText}
                <span className="text-pink-500">{subText}</span>.
              </h1>
              <div className="mt-16 space-y-8 lg:ml-32">
                <p className="text-gray-700">{paragraph}</p>
                <div className="flex space-x-4 ">
                  <button
                    type="button"
                    onClick={() => (window.location.href = "/contact")}
                    title="Contact Us!"
                    className="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 sm:w-max"
                  >
                    <span className="block text-gray-800 text-sm">
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>
              '
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
