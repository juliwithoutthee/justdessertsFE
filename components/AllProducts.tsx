import React, { useState } from "react";

const testData = [
    {
        productName: "Cake",
        description: "A delicious three-tiered cake with buttercream frosting",
        price: 3000,
        quantity: 0,
        image: ""
    },
    {
        productName: "Brownies",
        description: "Chocolatey brownies",
        price: 2000,
        quantity: 0,
        image: ""
    },
    {
        productName: "Cookies",
        description: "Assorted cookies",
        price: 1500,
        quantity: 0,
        image: ""
    }
];



export default function AllProducts() {

    return <>
        <div>
            {testData.map((el: any) => {
                return <div className="item"> <h2>{el.productName}</h2>
                    <h3>{el.description}</h3>
                    <h3>{el.price}</h3> </div>;
            })}
        </div>
    </>
}