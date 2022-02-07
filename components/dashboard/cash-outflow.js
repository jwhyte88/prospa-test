import Image from 'next/image'
import { ProgressBar } from "react-bootstrap";

export default function RecentTransactions(props) {
  console.log('\n\n\n\n props', props)

  return (
    <div className="cash-outflow">
      <div className="cash-outflow__row">
        {props.mockData && props.mockData.title  && 
          <div className="cash-outflow__title">
            {props.mockData.title}
          </div>
        }
      </div>

{/*      {props.mockData.transactions.map((transaction) => (
        <div className="transaction">
          <div className="transaction__details">
            <div>
              <Image src={"/icons/recent--" + transaction.type + ".svg"} alt="ADD ALT TEXT" width={40} height={40} />
            </div>
            <div className="transaction__details__text">
              <div className="transaction__details__title">
                {transaction.title}
              </div>
              <div className="transaction__details__timestamp">
                {transaction.timeStamp}
              </div>
            </div>
          </div>
          <div className="transaction__amount">
            {"-" + "\u20A6" + transaction.amount}
          </div>
        </div>
      ))}*/}

      {props.mockData.outflow.map((outflow) => (
        <div className="outflow">
          <div className="outflow__inline">
            <div className="d-flex">
              <div className="outflow__icon">
                <Image src={"/icons/outflow--" + outflow.type + ".svg"} alt="ADD ALT TEXT" width={24} height={24} />
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
