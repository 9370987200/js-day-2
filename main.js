const car={
    type:"fiat",
    model:"500",
    color:"white"
}
console.log(car.color)

// 
function person(first,last,age,eye){
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eyecolor=eye;
}
const mymother= new person("aruna","bhagyawant",40,"brown")
console.log(mymother)


// 
function mydispayer(sumthing){
    console.log(sumthing)
}
function mycalculater(num1,num2,mycallback){
    let sum=num1+num2
    mycallback(sum)
}
mycalculater(10,10,mydispayer)


// 
function brother(first,last,age){
    this.firstname=first
    this.lastname=last
    this.age=this.age
}
brother.prototype.nationality="english"
const mybrother= new brother("shubham","bhagyawant",25)
console.log('the nationality of my brother is '+ mybrother.nationality)

// 

function myfriend(first,last,age){
    this.firstname=first
    this.lastname=last
    this.age=age
}
const myfriend1=new myfriend("john","rally",20)
console.log(myfriend1.lastname)



