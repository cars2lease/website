import { Link } from 'gatsby'
import React from 'react'

const Feature = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
                    CTL Leasing kan hjælpe dig med at gøre drøm til virkelighed
                    <br className="hidden sm:block" />
                </h2>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">Flexleasing</h3>
                            <p className="leading-relaxed text-base">Flexleasing - tidsbegrænset leasingperiode af bil, hvor der alene beregnes og betales dansk registreringsafgift af køretøjet på grundlag af leasingperiodens varighed. Oversat betyder det, at du sparer den fulde registreringsafgift på bilen, og alene betaler dansk afgift af bilen på månedsbasis.</p>
                            <Link to="/flexleasing" className="mt-3 text-red-500 inline-flex items-center">Se mere om leasing
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">Hvad koster det?</h3>
                            <p className="leading-relaxed text-base">Når du har valgt at flexlease ved CTL Leasing ApS, udarbejder vi leasingkontrakt og varetager alle opgaver herved indtil vi kan udleveres en nøgle til din bil.
                                Bilens pris uden registreringsafgift som du betaler, er den samme pris som CTL Leasing ApS afregner til </p>
                            <Link to="/pricing" className="mt-3 text-red-500 inline-flex items-center">Se mere om priser
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">Se vores udvalg</h3>
                            <p className="leading-relaxed text-base">
                                Du kan flexlease både en ny eller brugt bil, valget er dit, eneste forudsætning er dog at bilen er uden dansk registreringsafgift. Eksemplerne er vejledende. Pris variationer vil opstå, pga. valg af udstyr, og kilometer.
                            </p>
                            <Link to="/flexleasing#suggestedLeasing" className="mt-3 text-red-500 inline-flex items-center">Se forslag
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature