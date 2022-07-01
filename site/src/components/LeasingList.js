import React from 'react'

// car data
import cars from "../data/cars.json";

const LeasingList = () => {
    return (
        <section className="text-gray-600 body-font" id="leasingSuggestions">
            <div className="container px-5 pb-12 lg:pb-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mx-4">
                    {cars.map((car, key) => {
                        return (
                            <div className="p-4 w-full" key={key}>
                                <a href={car.link} target={"_blank"} rel={"noreferrer"} className="block relative h-48 rounded overflow-hidden">
                                    <img alt={car.name} className="object-cover object-center w-full h-full block" src={car.imageLink} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-600 title-font text-sm tracking-widest font-medium">{car.date}</h2>
                                    <h2 className="text-gray-900 title-font tracking-wider text-lg font-medium">{car.name}</h2>
                                    {car.monthly ?
                                        <p className="mt-1">{car.price} DKK pr. md.</p> : 
                                        <p className="mt-1">{car.price} DKK</p>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default LeasingList