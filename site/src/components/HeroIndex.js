import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const HeroIndex = () => {
    return (
        <section className="text-gray-600 bg-gray-100 px-5 body-font rounded-lg">
            <div className="container mx-auto flex justify-between px-12 py-12 xl:py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 max-w-md lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Drømmebiler til drømmepriser.
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Vil du realisere din drømmebil til en konkurrencedygtig pris, så kontakt CTL Leasing ApS.
                        vi sidder klar til at hjælpe dig.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/contact" className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Kontakt os</Link>
                        <Link to="/flexleasing" className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-gray-300 rounded text-lg">Flexleasing</Link>
                    </div>
                </div>
                <div className="max-h-lg lg:w-full md:w-1/2 w-5/6">
                    <StaticImage
                        src="../images/cars-1.jpg"
                        className="object-cover object-center rounded"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Porsche"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroIndex