$(document).ready(function(){


var cycle = [
	['monthly', 12],
	['bimonthly', 6],
];

cycle.forEach(function(value){
	$("#cycle").append($("<option></option>").text(value[0]).val(value[1]));


});

$("#button").click(function(){
var loanBalance = $("#loanBalance").val();
var interestRate = $("#interestRate").val();
var loanTerm = $("#loanTerm").val();
var period = $("select option:selected").val();

// alert(period);  }); });

	// monthly interest rate       
     var monthlyInterestRate = (interestRate / 100) / period;         

    // number of payments
    var numberOfPayments = loanTerm * period; 

    // compounded interest rate
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

      // interest quotient
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1)


    // final calculation
    var monthlyPayment = loanBalance * interestQuotient;  
   

$("#result").text ("Your monthly mortgage payment is " + Math.round(monthlyPayment) + ". Good Luck.");

});
});


