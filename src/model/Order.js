class Order {
  static get schema() {
    return {
      name: 'Order',
      primaryKey: 'uuid',
      properties: {
        payment: 'Payment',
        uuid: 'string',
        reversalCount: 'int',
      },
    };
  }
}

export default Order;
