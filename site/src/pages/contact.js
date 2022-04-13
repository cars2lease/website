import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

// icons
import { BsTelephoneFill } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"

const Contact = ({location}) => {
  return (
    <Layout path={location.pathname}>
      <Seo title="Kontakt os" />
      <section className="text-gray-600 body-font relative my-12">
        <div className="absolute inset-0 bg-gray-300">
          <iframe className="contact-map" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.9786939319247!2d9.867798916012497!3d55.46303812176999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c95427ee700b1%3A0xaa3c757fde9f875d!2sIndustrivej%208%2C%205580%20N%C3%B8rre%20Aaby!5e0!3m2!1sda!2sdk!4v1649835363778!5m2!1sda!2sdk" width="100%" height="100%" allowFullScreen="no" loading="lazy" referrerPolicy="no-referrer-when-downgrade" frameBorder="0"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-red-500 text-lg mb-2 font-medium title-font">Kontakt os i dag</h2>

            <ul className='text-center py-4'>
              <li className='font-semibold'>CTL Cars to lease AB</li>
              <li>Industrivej 9</li>
              <li>5580 Nr. Åby</li>
              <li>Danmark</li>
            </ul>

            <p className="leading-relaxed my-5 text-gray-600">Ring eller skriv til os for et uforpligtende tilbud.</p>

            <div className="flex flex-col space-y-2 relative mb-4">
              <a href="tel:+4526301436" className="text-white w-full underline text-center bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                <span className='flex flex-row items-center justify-center space-x-3'>
                  <BsTelephoneFill size={16} />
                  <span className='underline'>+45 2530 1436 </span>
                </span>

              </a>
              <a href="mailto:pe@cars2lease.dk" className="text-white w-full text-center bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                <span className='flex flex-row items-center justify-center space-x-3'>
                  <IoMdMail size={16}/>
                  <span className='underline'>pe@cars2lease.dk</span>
                </span>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Contact