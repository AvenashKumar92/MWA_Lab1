'use strict'; 
var weeksInfo = ['weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend', 'weekend']
function isWeekend(){
	const todayDate = new Date();
	const day=todayDate.getDay();
	
	//Print current date
	console.log(todayDate);
	
	//Because array's starting index is 0, that's why subtracting 1 from it.
	return weeksInfo[day-1];
}

console.log(`Today is ${isWeekend()}`);
