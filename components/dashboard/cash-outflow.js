import Image from 'next/image'
import { ProgressBar } from "react-bootstrap";

export default function CashOutflow(props) {

  return (
    <div className="cash-outflow">
      <div className="cash-outflow__row">
        {props.mockData && props.mockData.title  && 
          <div className="cash-outflow__title">
            {props.mockData.title}
          </div>
        }
      </div>

      {props.mockData.outflow.map((outflow) => (
        <div className="outflow">
          <div className="outflow__inline">
            <div className="d-flex">
              <div className="outflow__icon">
                <Image src={"/icons/outflow--" + outflow.type + ".svg"} alt={outflow.type + " icon"} width={24} height={24} />
              </div>
              <div className="outflow__title">
               {outflow.amountSpent}
              </div>
            </div>
          </div>
          <div className="outflow__progress">
            <span>{"-" + "\u20A6" + outflow.amountSpent}</span>
            <ProgressBar now={outflow.percentage} />
          </div>
        </div>
      ))}

    </div>
  )
}
