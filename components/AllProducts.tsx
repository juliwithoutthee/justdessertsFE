import React, { useState } from "react";
import Image from "next/image";

export default function AllProducts() {
    const testData = [
        {
            productName: "Carrot Cake",
            description: "Cake is a lie",
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
        {
            productName: "Apple Pie",
            description: "A Pie with Apples",
            price: 3500,
            quantity: 0,
            image: "/images/ApplePie.jpeg",
        }
    ];

    return (
        <>
            <div className="items">
                {testData.map((el: any) => {
                    return (
                        <div>
                            <h2>{el.productName}</h2>
                            <Image
                                height={200}
                                width={200}
                                src={el.image}
                                alt={el.productName}
                            />
                            <h3>{el.description}</h3>
                            <h3>¥{el.price}</h3>
                            <div>
                                <select value="quantity">Quantity
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <button>Submit</button>
                                </div>
                                <button>Add to Cart</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}