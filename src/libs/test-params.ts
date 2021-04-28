export const params = {
  merchantCode: 'MX26070',
  payItemID: 'Default_Payable_MX26070',
  customerEmail: 'johndoe@gmail.com',
  redirectURL: 'http://localhost:3000',
  text: 'Pay Now',
  mode: 'TEST',
  transactionReference: Date.now().toString(),
  amount: '10000',
  style: {
    width: '200px',
    height: '40px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#ff0000'
  },
  callback: (response: any) => {
    console.log('response: ', response)
  }
}
