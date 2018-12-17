import CreditCard from './model/CreditCards.js';
import EmvData from './model/EmvData.js';
import MagData from './model/MagData.js';
import Order from './model/Order.js';
import Payment from './model/Payment.js';

import nodeExcel from 'excel-export';
import fs from 'fs';

const conf = {};
conf.name = "DBData";
conf.cols = [{
  caption:'Name',
  type:'string'
},{
  caption:'Type',
  type:'string'
}];

conf.rows = [];

let createExcelData = (model) => {
  const properties = model.schema.properties;
  const keysArr = Object.keys(properties);
  const typesArr = keysArr.map((k) => {
    if (properties[k].type) {
      return properties[k].type;
    } else if (properties[k].indexOf('?') !== -1) {
      return properties[k].substring(0, properties[k].indexOf('?'))
    } else {
      return properties[k];
    }
  });
  conf.rows.push([model.schema.name, '']);
  conf.rows.push(...keysArr.map((k, index) => [k, typesArr[index]]));
  conf.rows.push(['', ''])
};

createExcelData(CreditCard);
createExcelData(EmvData);
createExcelData(MagData);
createExcelData(Order);
createExcelData(Payment);

const result = nodeExcel.execute(conf);
console.log(result);

fs.writeFile(`${__dirname}/test.xlsx`, result, 'binary', (err) => {
  err ? console.log(err) : null;
});
