console.log("hello");



var input = document.getElementById('input');
console.log(input);
var result = document.getElementById('result');

var inputType = document.getElementById('inputType');
console.log(inputType);
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		
		result.value = Number(input.value) * 0.001;
        console.log(result);
	}else if(option_from === "meter" && option_to==="Centimeter"){

		
		result.value = Number(input.value) * 100;

	}else if(option_from === "meter" && option_to==="meter"){
		
		result.value = input.value
	}



	if(option_from === "kilometer" && option_to==="meter"){
	
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
	
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
	
		result.value = input.value
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
	
		result.value = input.value
	}
}
