import Image from 'next/image'

export default function RecentTransactions(props) {
  console.log('\n\n\n\n props', props)

  return (
    <div className="recent-transactions">
      <div className="recent-transactions__row">
        {props.mockData && props.mockData.title  && 
          <div className="recent-transactions__title">
            {props.mockData.title}
          </div>
        }
        <div>
          <button className="btn btn--white btn--small">
            {props.mockData.seeAllBtn}
          </button>
        </div>
      </div>

      {props.mockData.transactions.map((transaction) => (
        <div className="transaction">
          <div className="transaction__details">
            <div>
              <Image src={"/icons/recent--" + transaction.type + ".svg"} alt="Profile image." width={40} height={40} />
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
      ))}

    </div>
  )
}
