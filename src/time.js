const moment = require('moment');
moment().format();

export const currentMoment = moment();
export const sevenDaysAgo = moment().subtract(7, 'days');
export const fourteenDaysAgo = moment().subtract(14, 'days');
export const oneMonthAgo = moment().subtract(1, 'months');
export const threeMonthsAgo = moment().subtract(3, 'months');
export const sixMonthsAgo = moment().subtract(6, 'months');
export const oneYearAgo = moment().subtract(1, 'years');


