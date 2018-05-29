'use strict'; 
function isDual(array){
	if(array.length % 2 !=0)
		return 0;
	
	let prevDualAns=0;
	for(let i=0; i<=array.length/2; i=i+2){
		let currSum=array[i]+array[i+1];
		if(prevDualAns !== currSum && i>0){
			return 0;
		}
		prevDualAns=currSum;
	}
	return 1;
}
	
var arr = [1,2,2,1,3,0];
console.log(isDual(arr));
