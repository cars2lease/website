import { Link } from 'gatsby'
import React from 'react'

import { HiKey, HiTag } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai"

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
                            <HiKey size={20} />
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
                            <HiTag size={20} />
                        </div>
                        <div className="flex-grow pl-6">
                            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">Hvad koster det?</h3>
                            <p className="leading-relaxed text-base">Når du har valgt at flexlease ved CTL Leasing ApS, udarbejder vi leasingkontrakt og varetager alle opgaver herved indtil vi kan udlevere en nøgle til din bil.</p>
                            <Link to="/pricing" className="mt-3 text-red-500 inline-flex items-center">Se mere om priser
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4 flex-shrink-0">
                            <AiFillCar size={20} />
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