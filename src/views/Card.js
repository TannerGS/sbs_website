import React from 'react'

export const Card = ({ image, title, mainText, subText }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12 lg:ml-10 xs:ml-5">
                    <img src={image} alt="pic" loading="lazy" width="" height=""/>
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{title}</h2>
                    <p className="mt-20 text-gray-600 text-lg">{mainText}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export const ReverseCard = ({ image, title, mainText, subText }) => {
    return (
        <div className="py-16 bg-white">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:7/12 lg:w-6/12 lg:ml-10 xs:ml-5">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{title}</h2>
                    <p className="mt-20 text-gray-600 text-lg">{mainText}</p>
                </div>
                <div className="md:5/12 lg:w-5/12">
                    <img src={image} alt="pic" loading="lazy" width="" height=""/>
                </div>
            </div>
        </div>
    </div>
    )
}
