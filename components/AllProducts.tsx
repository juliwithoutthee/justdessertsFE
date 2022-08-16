import React, { useState } from "react";
//import Brownies from "./images/Brownies.jpeg";

const testData = [
    {
        productName: "Cake",
        description: "A delicious three-tiered cake with buttercream frosting",
        price: 3000,
        quantity: 0,
        image: "./images/CarrotCake.webp"
    },
    {
        productName: "Brownies",
        description: "Chocolatey brownies",
        price: 2000,
        quantity: 0,
        image: "./images/Brownies.jpeg"
    },
    {
        productName: "Cookies",
        description: "Assorted cookies",
        price: 1500,
        quantity: 0,
        image: "./images/ChocolateChipCookies.jpeg"
    }
];



export default function AllProducts() {

    return <>
        <div>
            <img src="./images/Brownies.jpeg" />
            {testData.map((el: any) => {
                return <div className="item"> <h2>{el.productName}</h2>
                    <h3>{el.description}</h3>
                    <h3>{el.price}</h3>
                    <img src={el.image} ></img>
                </div>;
            })}
        </div>
    </>
}