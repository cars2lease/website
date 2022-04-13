import React from 'react'

const cars = [
    {
        name: "honda"
    }, {
        name: "ford"
    }, {
        name: "fiesta"
    }, {
        name: "Mercedes"
    },
]

const LeasingList = () => {
    return (
        <section className="text-gray-600 body-font" id="leasingSuggestions">
            <div className="container px-5 pb-12 lg:pb-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mx-4">

                    {cars.map((car, key) => {
                        return (
                            <div className="p-4 w-full" key={key}>
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{car.name}</h2>
                                    <p className="mt-1">$18.40</p>
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