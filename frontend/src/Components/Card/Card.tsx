import React, { JSX } from 'react'
import "./Card.css";
import { JsxElement } from 'typescript';

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
  return (
    <div className ="card">
        <img
        src ="https://t4.ftcdn.net/jpg/02/66/31/75/360_F_266317554_kr7DPOoM5Uty0YCeFU9nDZTt4a2LeMJF.jpg"
        alt ="Image"
        />
        <div className ="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className ="info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, alias?
        </p>
    </div>
  )
}

export default Card;