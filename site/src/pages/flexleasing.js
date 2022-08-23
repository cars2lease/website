import React from 'react'
import { Link } from 'gatsby'


// components
import Layout from '../components/layout'
import Seo from '../components/seo'
import LeasingList from '../components/LeasingList'

// icons
import {FiStar ,FiAward } from "react-icons/fi";

const Flexleasing = ({location}) => {
  return (
    <Layout path={location.pathname}>
      <Seo title="Flexleasing" />
      <section className="text-gray-600 body-font flex">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex items-top  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-20 sm:h-20 h-16 w-16 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                <FiStar className='' size={32}/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Hvorfor Flexlease?</h2>
              <p className="leading-relaxed text-base">
                Flexleasing - tidsbegrænset leasingperiode af bil, hvor der alene beregnes og betales dansk registreringsafgift af køretøjet på grundlag af leasingperiodens varighed.
                Oversat betyder det, at du sparer den fulde registreringsafgift på bilen, og alene betaler dansk afgift af bilen på månedsbasis, for den periode du vælger at lease.
                Igen, - du kan vælge præcis den bil du ønsker for sommeren og igen skifte til en anden i vinterhalvåret, - du bestemmer.
                Flexleasing er en særdeles egnet løsning for dig, som ønsker at skifte bil ofte eller bare vil have en helt speciel bil en del af året.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex items-top mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-20 sm:h-20 h-16 w-16 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <FiAward size={32}/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">En fornuftigt pris</h2>
              <p className="leading-relaxed text-base">
                Når du har valgt at flexlease ved CTL Leasing ApS kan du ikke alene glæde dig over ikke at skulle betale fuld registreringsafgift af din drømmebil, du har som erhvervsdrivende skattefordel ved fradrag for registreringsafgiften og leasingydelserne.
                Eje, leje eller lease, - det koster, - også selvom der afregnes registreringsafgift på månedsbasis. Flexleasing er den billigste løsning, når valget af bil er i den dyre ende af bilmærkerne.
                Og fordelen bliver ikke mindre af, at du måske foretrækker at flexlease en autocamper eller en motorcykel. På siden <Link to="/pricing" className="text-red-300">Hvad koster det?</Link> kan du se hvor meget du har råd til at spare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1 className='text-2xl font-semibold text-red-500 mb-8'>Forslag til leasing</h1>
        <LeasingList />
      </section>
    </Layout>
  )
}

export default Flexleasing