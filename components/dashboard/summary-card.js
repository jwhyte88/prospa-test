import Image from 'next/image'
import { ProgressBar } from "react-bootstrap";

export default function CashOutflow(props) {

  return (
    <div className="summary-card">
      <div className="summary-card__row">
        {props.mockData && props.mockData.title  && 
          <div className="summary-card__title">
            {props.mockData.title}
          </div>
        }
      </div>

      <div className="summary">
        {props.mockData.summary.map((s) => (
          <div className="summary-breakdown">
            <div className="summary-title">
              {s.title}
            </div>
            <div className="summary-amount">
              {"\u20A6" + s.amount}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
