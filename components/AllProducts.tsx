import React, { useState } from "react";
import Image from "next/image";
import StripeCheckout from "./StripeCheckout";

export default function AllProducts() {
    const testData = [
        {
            productName: "Carrot Cake",
            description: "Cake is a Lie",
            price: 3000,
            quantity: 0,
            image: "/images/CarrotCake.webp",
        },
        {
            productName: "Brownies",
            description: "Chocolatey Brownies",
            price: 2000,
            quantity: 0,
            image: "/images/Brownies.jpeg",
        },
        {
            productName: "Cookies",
            description: "Assorted Cookies",
            price: 1500,
            quantity: 0,
            image: "/images/ChocolateChipCookies.jpeg",
        },
        {
            productName: "Apple Pie",
            description: "A Pie with Apples",
            price: 3500,
            quantity: 0,
            image: "/images/ApplePie.jpeg",
        },
        {
            productName: "Strawberry Cake",
            description: "Cake with Strawberries",
            price: 4500,
            quantity: 0,
            image: "/images/StrawberryShortCake.jpeg",
        }
    ];

    return (
        <>
            <div className="items">
                {testData.map((el: any, key: Number) => {
                    return (
                        <div>
                            <h2>{el.productName}</h2>
                            <Image
                                height={230}
                                width={230}
                                objectFit={'cover'}
                                src={el.image}
                                alt={el.productName}
                            />
                            <h3>{el.description}</h3>
                            <h3>¥{el.price}</h3>
                            <div> Quantity: 
                                <select value="quantity">Quantity
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                                <StripeCheckout/>
                        </div>
                    );
                })}
            </div>
        </>
    );
}