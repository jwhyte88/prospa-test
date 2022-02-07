import Image from 'next/image'
import AccountCard from './account-card'
// import SummaryCard from './summary-card'
// import CashOutflow from './cash-outflow'
import RecentTransactions from './recent-transactions'
import MockData from './mock-data'

export default function Dashboard(props) {

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-container__header">
        <div className="dashboard-container__header__inner">
          <div className="dashboard-container__title">
            {props.headerTitle}
          </div>

          <div className="d-flex">
            <span className="dashboard-notifications-icon">
              <Image src="/icons/notifications.svg" alt="Notifications Icon." width={32} height={32} />
            </span>
            <span className="dashboard-profile-img">
              <Image src="/img/kathy.png" alt="Profile image." width={40} height={40} />
            </span>
          </div>

        </div>
      </div>

      <div className="dashboard-container__content">
        <div className="dashboard-container__content__inner">

          <div className="dashboard-container__intro">
            <div>
              <div className="dashboard-container__welcome">
                {props.welcome}
              </div>
              <div className="dashboard-container__recap">
                {props.recapMsg + " "}<span>7 days</span>
              </div>
            </div>
            <div>
              <button className="btn btn--pink">
                {props.addSubAccountBtn}
              </button>
            </div>
          </div>

          <div className="dashboard-container__data">

            <AccountCard mockData={MockData.currentAccount}/>

            <AccountCard mockData={MockData.savingsAccount}/>

            <RecentTransactions mockData={MockData.recentTransactions}/>

          </div>

        </div>
      </div>
    </div>
  )
}
