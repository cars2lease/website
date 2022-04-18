import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import PricingList from '../components/PricingList'
import Seo from "../components/seo"

// icons
import { HiShieldCheck, HiReceiptTax } from "react-icons/hi";

const Pricing = ({location}) => {
  return (
    <Layout path={location.pathname}>
      <Seo title="Priser" />
      <section className="text-gray-600 body-font flex lg:border-b lg:border-gray-200">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex items-top  mx-auto pb-10 sm:flex-row flex-col">
            <div className="sm:w-20 sm:h-20 h-16 w-16 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <HiShieldCheck className='' size={32} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Hvordan du fungerer det?</h2>
              <ul className='space-y-2'>
                <li className='leading-relaxed text-base'>Når du har valgt  flexleasing ved CTL Leasing ApS, udarbejder vi leasingkontrakt og varetager alle opgaver herved indtil vi kan udlevere en nøgle til din bil.</li>
                <li className='leading-relaxed text-base'>Bilens pris uden registreringsafgift som du betaler leasingydelse af, er den samme pris som CTL Leasing ApS afregner til leverandør.</li>
                <li className='leading-relaxed text-base'>Udgifter til kontraktoprettelse, levering og hjemtagelsesomkostninger af bil afregnes samtidig med en sikkerhedsstillelse på den valgte bil.</li>
              </ul>
              <Link to="/contact" className="mt-3 text-red-500 inline-flex items-center">Kontakt for yderligere
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex items-top mx-auto pb-10 sm:flex-row flex-col">
            <div className="sm:w-20 sm:h-20 h-16 w-16 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <HiReceiptTax size={32} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Hvor meget skal SKAT så afregnes?</h2>
              <ul className='space-y-2'>
                <li className='leading-relaxed text-base'>Registreringsafgiften beregnes alene ud fra hvilken alder bilen har og hvad den koster.</li>
                <li className='leading-relaxed text-base'>Er bilen over eller under 3 år gammel. For biler under 3 år, siden 1. indregistreringsdato, skal afregnes 1 % og for biler over 3 år 0,5 % i registreringsafgift pr. måned af bilens total vurderede danske registreringsafgift.</li>
                <li className='leading-relaxed text-base'>SKAT tager sig også betalt for denne øvelse,  der skal afregnes rentetillæg for restafgift.</li>
                <li className='leading-relaxed text-base'>Som tommelfingerregel er satsen 1,5 % for biler under 3 år, og over er satsen 1 %.</li>
              </ul>
              <Link to="/contact" className="mt-3 text-red-500 inline-flex items-center">Kontakt for yderligere
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PricingList />
    </Layout>
  )
}

export default Pricing