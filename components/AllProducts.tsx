import React, { useState } from "react";
import Image from "next/image";

export default function AllProducts() {
    const testData = [
        {
            productName: "Cake",
            description: "A delicious three-tiered cake with buttercream frosting",
            price: 3000,
            quantity: 0,
            image: "/images/CarrotCake.webp",
        },
        {
            productName: "Brownies",
            description: "Chocolatey brownies",
            price: 2000,
            quantity: 0,
            image: "/images/Brownies.jpeg",
        },
        {
            productName: "Cookies",
            description: "Assorted cookies",
            price: 1500,
            quantity: 0,
            image: "/images/ChocolateChipCookies.jpeg",
        },
    ];

    return (
        <>
            <div>
                {testData.map((el: any) => {
                    return (
                        <div className="item">
                            <h2>{el.productName}</h2>
                            <h3>{el.description}</h3>
                            <h3>{el.price}</h3>
                            <Image
                                height={200}
                                width={200}
                                src={el.image}
                                alt={el.productName}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}