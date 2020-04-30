const talkingCalendar = function(date) {
  // Find value for year
  let year = date[0] + date[1] + date[2] + date[3];
  // Then, find value for month
  let month = '';
  switch (date[5] + date[6]) {
  case '01':
    month = 'January';
    break;
  case '02':
    month = 'February';
    break;
  case '03':
    month = 'March';
    break;
  case '04':
    month = 'April';
    break;
  case '05':
    month = 'May';
    break;
  case '06':
    month = 'June';
    break;
  case '07':
    month = 'July';
    break;
  case '08':
    month = 'August';
    break;
  case '09':
    month = 'September';
    break;
  case '10':
    month = 'October';
    break;
  case '11':
    month = 'November';
    break;
  case '12':
    month = 'December';
    break;
  }
  // Then, find value for day
  let day = '';
  // Set conditions for 1st, 2nd, 3rd, and rest of single digit dates (i.e. you have to remove the '0')
  if (date[8] === '0') {
    if (date[9] === '1') {
      day = '1st';
    } else if (date[9] === '2') {
      day = '2nd';
    } else if (date[9] === '3') {
      day = '3rd';
    } else {
      day = date[9] + 'th';
    }
  // Set conditions for 21st and 31st
  } else if ((date[8] === '2' || date[8] === '3') && date[9] === '1') {
    day = date[8] + date[9] + 'st';
  // Set conditions for 22nd and 23rd
  } else if (date[8] === '2' && (date[9] === '2' || date[9] === '3')) {
    if (date[9] === '2') {
      day = date[8] + date[9] + 'nd';
    } else if (date[9] === '3') {
      day = date[8] + date[9] + 'rd';
    }
  // Set condition for all other days
  } else {
    day = date[8] + date[9] + 'th';
  }
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));