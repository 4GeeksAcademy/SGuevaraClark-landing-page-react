import React from "react";

function Card({ title, text }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}

export default Card;