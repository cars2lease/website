import React from 'react'

const cars = [
    {
        name: "honda",
        price: 12000,
        link: "",
        imageLink: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

    }, {
        name: "ford",
        price: 12000,
        link: "",
        imageLink: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }, {
        name: "fiesta",
        price: 12000,
        link: "",
        imageLink: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }, {
        name: "Mercedes",
        price: 12000,
        link: "",
        imageLink: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
                                <a href={car.link} target={"_blank"} rel={"noreferrer"} className="block relative h-48 rounded overflow-hidden">
                                    <img alt={car.name} className="object-cover object-center w-full h-full block" src={car.imageLink} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{car.name}</h2>
                                    <p className="mt-1">{car.price} DKK</p>
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