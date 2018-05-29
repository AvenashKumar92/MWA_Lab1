'use strict'; 
const applyCoupon=category => discount => item =>{
	if(item.category===category){
		item.price=item.price-(item.price*discount);
	}
	return item;
}

const item={
	name:"Biscuits",
	type:"regular",
	category:"food",
	price:2.0
}
console.log('Item before discount: '+JSON.stringify(item));
const afterDiscount=applyCoupon("food")(0.1)(item);
console.log('Item after discount: '+JSON.stringify(afterDiscount));
console.log('Item after discount price: '+afterDiscount.price);
