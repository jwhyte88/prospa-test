const mockData = {
  currentAccount: {
    type: "current",
    title: "Current Account",
    bank: "PROVIDUS BANK",
    accountNumber: "9906533917",
    balance: "814,800.45"
  },
  savingsAccount: {
    type: "savings",
    title: "Savings Account",
    bank: "SUB ACCOUNT",
    accountNumber: "12346789",
    balance: "39,342.45"
  },
  cashOutflow: {
    title: "Cash outflow",
    outflow: [
      {
        type: "bank",
        title: "Bank Fees",
        amountSpent: "250,000",
        percentage: "90"
      },
      {
        type: "internet",
        title: "Internet",
        amountSpent: "250,000",
        percentage: "70"
      },
      {
        type: "marketing",
        title: "Marketing",
        amountSpent: "250,000",
        percentage: "35"
      },
      {
        type: "transfer",
        title: "Transfer",
        amountSpent: "250,000",
        percentage: "20"
      }
    ]
  },
  recentTransactions: {
    title: "Recent transactions",
    seeAllBtn: "See all",
    transactions: [
      {
        type: "bank",
        title: "Transfer Fee",
        amount: "145.90",
        timeStamp: "12:49 AM"
      },
      {
        type: "transfer",
        title: "Adam Chapman",
        amount: "2,000.00",
        timeStamp: "12:49 AM"
      },
      {
        type: "transfer",
        title: "Shirley Barnes",
        amount: "2,000.00",
        timeStamp: "12:49 AM"
      },
      {
        type: "transfer",
        title: "Shirley Barnes",
        amount: "2,000.00",
        timeStamp: "12:49 AM"
      }
    ]
  }
}

export default mockData