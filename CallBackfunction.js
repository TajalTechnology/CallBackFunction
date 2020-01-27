/*function hello(name, print){
	print(name);
}

hello(0'Tajal Islam', function(name){
	console.log('Hello'+ name);
});
hello('Sopnil Islam', function(name){
	console.log('Hello'+ name);
});
hello('Sabina Islam', function(name){
	console.log('Hello'+ name);
});*/
/*var me={
	name:'Tajal islam',
	age:24,
	email:'tajal@gmail.com'
}
function printMyself(person, callback){
	console.log('Person: '+ person.name + '('+ person.age+')');
	if(person.age >= 18){
		callback(person.email);
	}
	else{
		console.log('Wrong input');
	}

}
printMyself(me, function(email){
	console.log('Email send to '+ email)
})*/

/*Callback Practice*/


/*function print(data,callback1,callback2){
	console.log('Orginal Data: ' + data);
	callback1(data);
	callback2(data);
}
print('Tajal callback1', function(data){
	var data = data.toUpperCase();
	console.log(data);
}, function(data){
	var data=data.toLowerCase();
	console.log(data);
});*/

/*function print(n1,n2,callback,callback2){
	console.log('Orginal Data: ' + n1 +' And '+ n2);
	callback(n1,n2);
	callback2(n1,n2);
	
}
print(2,4, function(n1,n2){
	var add=n1*n2;
	console.log(add);
}, function(n1,n2){
	var add2=n1+n2;
	console.log(add2);
});*/

/*1*/

/*let add = (a, b) => console.log(a + b);
let mul = (a, b) => console.log(a * b);


let func1 = function (n, callback) {
  // return callback(n)
    console.log(n);
};
 


func1(add(10, 10), mul(20, 5));*/
/*let logCall=function(){
	console.log("LogCall was called back.");
};*/
/*setTimeout(function(){
console.log("LogCall was called back.");

},3000)*/
/*let btn=document.querySelector("#item1");
btn.addEventListener("click" ,function(e){
	console.log("LogCall was called back.");
});
*/
