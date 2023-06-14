import React, { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
  image: string;
  title: string;
  description: string;
}

const MyCard: React.FC<CardProps> = ({
  children,
  image,
  title,
  description,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="Card" />
        <div className="card-title">{title}</div>
      </div>
      <div className="row">
        <div className="col-6">
          <h3 className="cardHeading">The Title</h3>
        </div>
        <div className="col-6">{children}</div>
      </div>

      {/* <h3 className="cardHeading">The Title</h3> */}
      <div className="card-description">{description}</div>
    </div>
  );
};

export default MyCard;
