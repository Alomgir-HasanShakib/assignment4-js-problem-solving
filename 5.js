function monthlySavings(arr, livingCost) {
  //   in this if conditon check  all the value is valid or not

  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  // in there count total salary and total tax

  const livingCosts = livingCost;
  let payment = 0;
  let tax = 0;
  for (const salary of arr) {
    payment += salary;
    if (salary >= 3000) {
      tax = (salary / 100) * 20;
    }
  }
  //   in here calculate the total savings

  const afterTaxPayment = payment - tax;
  const savings = afterTaxPayment - livingCosts;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
