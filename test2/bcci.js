'use strict';

// id="monthly-salary"
//           name="salary"
//           type="value"
//           placeholder="Your Mothly Salary"
//           required

// const sssResult = function () {
//   let ms = parseInt(document.getElementById('monthly-salary').value);
//   let sal = ms;
//   let n = 80;
//   let x = 2250;

//   if (sal > 2249.99) {
//     while (x <= sal) {
//       x += 500;
//       n += 20;
//     }
//   } else {
//     n = 80;
//   }
//   return n;
// };

// let res = (document.getElementById('submit').onclick = sssResult());

// document.querySelector('.sss-contri').innerHTML = 'hello' + ms;

// console.log(sssResult());
// let ms = document.getElementById('monthly-salary').value;

/////////// SSS RESULT ///////////////
const sssResult = function () {
  let ms = document.getElementById('monthly-salary').value;
  let sal = ms;
  let n = 80;
  let x = 2250;
  console.log(ms);
  if (sal > 2249.99 && sal < 19750.0) {
    while (x <= sal) {
      x += 500;
      n += 20;
      console.log(x);
      console.log(n);
    }
  } else if (sal > 19750.0) {
    n += 720;
  } else {
    n = 80;
  }

  return n.toFixed(2);
};

/////////// PHILHEALTH RESULT ///////////////
const philResult = function () {
  let ms = document.getElementById('monthly-salary').value;
  let sal = ms;
  let n = 100;
  let x = 8999.99;
  if (sal > 8999.99 && sal < 35000.0) {
    while (x <= sal) {
      x += 1000;
      n += 12.5;
    }
  } else if (sal >= 35000.0) {
    n += 337.5;
  } else {
    n = 100;
  }
  return n.toFixed(2);
};

/////////// PAG-IBIG RESULT ///////////////
const pagIbigResult = function () {
  let ms = document.getElementById('monthly-salary').value;
  let sal = ms;
  let n;
  if (sal <= 1500) {
    n = sal * 0.01;
  } else {
    n = sal * 0.02;
  }

  return n.toFixed(2);
};

/////////// INCOME TAX RESULT ///////////////
const incomeTaxResult = function () {
  let ms = document.getElementById('monthly-salary').value * 12;
  let sal = ms;
  let n;
  if (sal < 250000) {
    n = 0;
  } else if (sal >= 250000 && sal < 400000) {
    n = (sal - 250000) * 0.2;
  } else if (sal >= 400000 && sal < 800000) {
    n = (sal - 400000) * 0.25 + 30000;
  } else if (sal >= 800000 && sal < 2000000) {
    n = (sal - 800000) * 0.3 + 130000;
  } else if (sal >= 2000000 && sal < 8000000) {
    n = (sal - 2000000) * 0.32 + 490000;
  } else {
    n = (sal - 8000000) * 0.35 + 2410000;
  }

  n /= 12;
  return n.toFixed(2);
};

const empInfo = document.querySelector('#name');
const companyInfo = document.querySelector('#company-name');
const monthlySalary = document.querySelector('#monthly-salary');
//////// ON CLICK BUTTON /////////////
document
  .getElementById('submit')
  .addEventListener('click', function calcFunc() {
    //// HIDDEN ////
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector('.submit3').classList.remove('hidden');
    // document.querySelector('.hidden').classList.remove('hidden');

    /// INFO ////
    let empMessege = document.querySelector('.empname');
    let companyMessege = document.querySelector('.compname');
    let monthlySalaryMessege = document.querySelector('.sal');

    empMessege.textContent = 'EMPLOYEE NAME: ' + empInfo.value;
    companyMessege.textContent = 'COMPANY NAME: ' + companyInfo.value;
    monthlySalaryMessege.textContent = 'MONTHLY SALARY: ' + monthlySalary.value;

    //// RESULT ////
    // let msInput = document.getElementById('monthly-salary');
    let sssMessage = document.querySelector('.sss-contri');
    let philMessage = document.querySelector('.philhealth');
    let pagIbigMessage = document.querySelector('.pag-ibig');
    let incomeTaxMessage = document.querySelector('.income-tax');

    sssMessage.textContent = 'SSS CONTRIBUTION: ' + sssResult();
    philMessage.textContent = 'PHILHEALTH: ' + philResult();
    pagIbigMessage.textContent = 'PHILHEALTH: ' + pagIbigResult();
    incomeTaxMessage.textContent = 'INCOME TAX: ' + incomeTaxResult();
  });

document.querySelector('.submit3').addEventListener('click', function remove() {
  // document.querySelector('.hidden').classList.add('hidden');
  document.querySelector('.result').classList.add('hidden');
  document.querySelector('.submit3').classList.add('hidden');
  document.getElementById('survey-form').classList.add('hidden');
  document.querySelector('.divmsg').classList.remove('hidden');
  document.querySelector('.header').classList.add('hidden');
});

// function calcFunc() {
//   let msInput = document.getElementById('monthly-salary');
//   let message = document.getElementById('sss-contri');

//   message.innerHTML = 'wahahaha' + msInput.value;
// }
