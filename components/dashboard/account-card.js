import Image from 'next/image'

export default function AccountCard(props) {

  return (
    <div className="account-card">
      <div className="account-card__row">
        <div>
          {props.mockData && props.mockData.title  && 
            <div className="account-card__title">
              {props.mockData.title}
            </div>
          }

          {props.mockData && props.mockData.bank  && 
            <div className="account-card__bank-details">
              {props.mockData.bank} {props.mockData.accountNumber && " - " + props.mockData.accountNumber}
            </div>
          }
        </div>
        <div>
          <Image src={"/icons/" + props.mockData.type + "-account.svg"} alt={props.mockData.type + " account icon"} width={40} height={40} />
        </div>
      </div>

      {props.mockData && props.mockData.balance  && 
        <div className="account-card__balance">
          {"\u20A6" + props.mockData.balance}
        </div>
      }   
    </div>
  )
}
