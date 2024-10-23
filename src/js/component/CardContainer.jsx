import React from "react";
import Card from "./Card";

function CardContainer() {
    const cardData = [
        {
            title: "Card Title 1",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!"
        },
        {
            title: "Card Title 2",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!"
        },
        {
            title: "Card Title 3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!"
        },
        {
            title: "Card Title 4",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!"
        }
    ];

    return (
    
        <div className="container">
            <div className="row gy-4">
                {cardData.map((card, index) => (
                    <div className="col-md-3" key={index}>
                        <Card title={card.title} text={card.text} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardContainer;