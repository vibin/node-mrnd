
describe("JSIntro Test Suite", function(){
	var JSIntro = require("../../src/JSIntro");

	describe("JSIntro-Sum", function(){

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.Sum(2,3);
			expect(i).toEqual(5);
		});

		it("sum of -1 and 3 is 2", function(){

			var i = JSIntro.Sum(-1,3);
			expect(i).toEqual(2);
		});

	});

	describe("JSIntro-SumOfArray", function(){

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.SumOfArray([2,3]);
			expect(i).toEqual(5);
		});

	});

	describe("JSIntro-SumOfUniqueNumbers", function(){

		it("sum of 2,3,3,2 is 5", function(){

			var i = JSIntro.SumOfUniqueNumbers([2,3,3,2]);
			expect(i).toEqual(5);
		});

		it("sum of 2,3,4 is 9", function(){

			var i = JSIntro.SumOfUniqueNumbers([2,3,4]);
			expect(i).toEqual(9);
		});
		it("sum of 1,2,3,4,3,3 is 10", function(){

			var i = JSIntro.SumOfUniqueNumbers([1,2,3,4,3,3]);
			expect(i).toEqual(10);
		});
	});

	describe("JSIntro-ReverseArrayOfStrings", function(){
		it("[c,b,a] reversed is [a,b,c]", function(){
			var arr = JSIntro.ReverseArrayOfStrings(["c","b","a"]);
			expect(arr).toEqual(["a","b","c"]);
		});

		it("[c] reversed is [c]", function(){
			var arr = JSIntro.ReverseArrayOfStrings(["c"]);
			expect(arr).toEqual(["c"]);
		});

		it("[a,a,a] reversed is [a,a,a]", function(){
			var arr = JSIntro.ReverseArrayOfStrings(["a","a","a"]);
			expect(arr).toEqual(["a","a","a"]);
		});
	});

	describe("JSIntro-ReverseString", function(){

		it("abc reversed is cba", function(){

			var str = JSIntro.ReverseString("abc");
			expect(str).toEqual("cba");
		});

		it("abcd reversed is dcba", function(){

			var str = JSIntro.ReverseString("abcd");
			expect(str).toEqual("dcba");
		});

		it("a reversed is a", function(){

			var str = JSIntro.ReverseString("a");
			expect(str).toEqual("a");
		});
	});
});
