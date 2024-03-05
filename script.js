let points = 0;
const accountBalance = 210000;

function getRequired() {
  let inputField = document.getElementById("userLoanAmount");
  let input = inputField.value;
  if (input === "") {
    inputField.style.borderColor = "red";
    let error = document.getElementById("errorMessageLoanAmount");
    error.style.color = "red";
    error.textContent = "Enter Your Loan Amount";
    error.style.fontSize = "12px";
    return false;
  } else if (input <= accountBalance * 0.45) {
    points += 10;
  } else {
    points -= 10;
  }
}

document
  .getElementById("creditHistory")
  .addEventListener("change", function () {
    let creditScore = document.getElementById("creditHistory");

    if (creditScore.value !== "") {
      creditScore.classList.remove("error");
      return false;
    }
  });

function creditScoreChecker() {
  let creditScore = document.getElementById("creditHistory");
  if (creditScore.value === "") {
    creditScore.classList.add("error");
    errorMessageCredit.textContent = "Select an option";
    return false;
    // errorMessageCredit.append(errorMessageCredit);
  } else if (creditScore >= 1) {
    points = +10;
    console.log(points);
  }
}

document.getElementById("depositDate").addEventListener("change", function () {
  let lastDepositValue = document.getElementById("depositDate");

  if (lastDepositValue.value !== "") {
    lastDepositValue.classList.remove("error");
    return false;
  }
});

function lastDepositDate() {
  let lastDepositValue = document.getElementById("depositDate");
  if (lastDepositValue.value === "") {
    lastDepositValue.classList.add("error");
     let error = document.getElementById("errorMessageDate");
     error.style.color = "red";
     error.textContent = "Enter Your Last deposit date";
     error.style.fontSize = "12px";
    return false;
  } else {
    let userDepositDate = new Date(lastDepositValue);
    let today = new Date();

    let differenceInMs = today - userDepositDate;

    let differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    if (differenceInDays <= 30) {
      points += 5;
    }
  }
}

document.getElementById("lastLoan").addEventListener("change", function () {
  let lastLoanValue = document.getElementById("lastLoan");

  if (lastLoanValue.value !== "") {
    lastLoanValue.classList.remove("error");
    return false;
  }
});

function lastLoanDate() {
  let lastLoanValue = document.getElementById("lastLoan");
  if (lastLoanValue.value === "") {
    lastLoanValue.classList.add("error");
let error = document.getElementById("errorMessageCollectDate");
error.style.color = "red";
error.textContent = "Enter Your Last Loan Collection date";
error.style.fontSize = "12px";
    return false;
  } else {
    let lastLoanValue = document.getElementById("lastLoan").value;
    let userLoanDate = new Date(lastLoanValue);
    let today = new Date();

    let differenceInMs = today - userLoanDate;

    let differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    if (differenceInDays >= 180) {
      points += 10;
    }
    console.log(points);
  }
}

document
  .getElementById("loanRepayment")
  .addEventListener("change", function () {
    let loanRepaymentValue = document.getElementById("loanRepayment");

    if (loanRepaymentValue.value !== "") {
      loanRepaymentValue.classList.remove("error");
    }
  });

function loanRepaymentDate() {
  let loanRepaymentValue = document.getElementById("loanRepayment");
  if (loanRepaymentValue.value === "") {
    loanRepaymentValue.classList.add("error");
    let error = document.getElementById("errorMessagePaymentDate");
    error.style.color = "red";
    error.textContent = "Enter Your Loan Payment date";
    error.style.fontSize = "12px";
    return false;
  } else {
    let loanRepaymentValue = document.getElementById("loanRepayment").value;
    let userLoanTenure = new Date(loanRepaymentValue);
    let today = new Date();

    let differenceInMs = userLoanTenure - today;

    let differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    if (differenceInDays <= 180) {
      points += 10;
    }
  }
}

document.getElementById("accounttype").addEventListener("change", function () {
  let accType = document.getElementById("accounttype");

  if (accType.value !== "") {
    accType.classList.remove("error");
    return false;
  }
});

function accountTypeChecker() {
  let accType = document.getElementById("accounttype");
  if (accType.value === "") {
    accType.classList.add("error");
    errorMessageAcc.textContent = "Select an option";
    return false;
  } else if (accType >= 1) {
    points += 10;
  } else {
    points += 5;
  }
}

function getLoan() {
  getRequired();
  creditScoreChecker();
  lastDepositDate();
  lastLoanDate();
  loanRepaymentDate();
  accountTypeChecker();
  if (
    getRequired == false ||
    creditScoreChecker == false ||
    lastDepositDate == false ||
    lastLoanDate == false ||
    loanRepaymentDate == false ||
    accountTypeChecker == false
  ) {
    window.location.href = "form.html";
  } else if (points >= 30) {
    window.location.href = "approved.html";
  } else if (points < 5) {
    return;
  } else if (points <= 30) {
    window.location.href = "Unapproved.html";
  }
}
