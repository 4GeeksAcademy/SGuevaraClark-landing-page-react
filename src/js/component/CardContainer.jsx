import React from "react";
import Card from "./Card";

function CardContainer() {
    return (
        <div className="container">
            <div className="row gy-4">
                <div className="col-md-3">
                    <Card 
                        title="Card Title 1" 
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!" 
                    />
                </div>
                <div className="col-md-3">
                    <Card 
                        title="Card Title 2" 
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!" 
                    />
                </div>
                <div className="col-md-3">
                    <Card 
                        title="Card Title 3" 
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!" 
                    />
                </div>
                <div className="col-md-3">
                    <Card 
                        title="Card Title 4" 
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nostrum, dolor aspernatur iste excepturi ipsa!" 
                    />
                </div>
            </div>
        </div>
    );
}

export default CardContainer;