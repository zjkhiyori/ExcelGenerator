class Payment {
  static get schema() {
    return {
      name: 'Payment',
      properties: {
        credit_cards: 'CreditCards[]',
      },
    };
  }
}

export default Payment;
