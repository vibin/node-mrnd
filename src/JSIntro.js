
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum = 0; 
	arrayOfNums.forEach(function(i){
		sum+=i;
	});
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var unique = new Set(arrayOfNums); var sum=0;
	unique.forEach(function(i){
		sum+=i;
	});
	return sum;
}

exports.ReverseString = function(str){
	return str.split('').reverse().join('');
}

exports.ReverseArrayOfStrings = function(arrayOfStrings){
	arrayOfStrings.reverse();
	return arrayOfStrings;
}