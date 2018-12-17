class CreditCards {
  static get schema() {
    return {
      name: 'CreditCards',
      properties: {
        dcc_currency: 'string?',
        dcc_amount: 'string?',
        dcc_tip_amount: 'string?',
        number_of_installment: 'string?',
        consume_mode: 'string?',
        holder_name: 'string?',
        card_reader_mode: 'string?',
        amount: 'string?',
        number: 'string?',
        exp_month: 'string?',
        exp_year: 'string?',
        mag_data: 'MagData?',
        emv_data: 'EmvData?',
      },
    };
  }
}

export default CreditCards;
