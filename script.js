'use strict';
/////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];




// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements,sort=false){
  containerMovements.innerHTML=''
  // const movs = sort ? movements.slice().sort((a,b)=>a-b) : movements ;
  const movs = sort ? movements.slice().sort((a,b) => a - b) :  movements;
  console.log(sort)
  

  movs.forEach(function(mov,id){
    const op = mov >0 ? 'deposit ' : 'withdrawal';
    const html = `
     <div class="movements__row">
        <div class="movements__type movements__type--${op}">${id+1} ${op}</div>
        <div class="movements__value">${mov}€</div>
      </div>`
    containerMovements.insertAdjacentHTML('afterbegin',html);
  })
}


// const user = 'Steven Thomas Williams';
// const username = user
 
//sort
let sorted = false
btnSort.addEventListener('click',function(e){
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted =!sorted
})
// btnSort.addEventListener('click',function(){
//   const sort =movements.sort((a,b)=> b-a)
//   console.log(sort)
//   containerMovements.textContent =sort
// })
// console.log(username);
const createname =function(accs){
  //username = acounts
  //acc=acount1.owrner ="Jonas Schmedtmann" =jonas shmedtman =['jonas','schmedthman']=map.nam[0]{first lettre}=jonas shmedthman =js
  accs.forEach(function(acc){
    acc.username=acc.owner
    .toLocaleLowerCase().split(' ')
    .map(name=>name[0])
    .join('');
  })
}
accounts.forEach(function(acc){
  const usernames=acc.owner.toLocaleLowerCase().split(' ').map((name)=>name[0]).join('')
  console.log([usernames])
})

createname(accounts)
console.log(accounts)
 accounts.forEach(function(acc){
  console.log(acc); 
 })
 //call function
 const UpdateUi = function(acc){
  displayMovements(acc.movements)
    //displaybalance
    balances(acc)
    //summary
    totalsummary(acc)

 }
 const names = ['mohamed','gadri','achraf','mohamed']
 const result1 = names.filter(nam =>nam === 'mohamed')
 const result2 = names.find(nam =>nam === 'mohamed')
 console.log(result1,result2)

 
 //find methode specifique var in all arrays
//  const findc = accounts.find(mov=>mov.username)
//  console.log(findc)
 let currentAccount;
 btnLogin.addEventListener('click',function(e){
  e.preventDefault()
 currentAccount=accounts.find(mov=>mov.username === inputLoginUsername.value)
 console.log(currentAccount)
 //currentAcount = username :js or jd or slt ... =user
  if(currentAccount?.pin===Number(inputLoginPin.value))
  {
    labelWelcome.textContent=`welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity=100
    UpdateUi(currentAccount)

  }
 })

 //btn request
 btnLoan.addEventListener('click',function(e){
  e.preventDefault()
  const anmout =+inputLoanAmount.value
  currentAccount.movements.some(mov=>mov>=anmout *0.1)
  if(anmout>=0 && currentAccount.movements.some(mov=>mov>=anmout *0.1)){
    currentAccount.movements.push(anmout)
     UpdateUi(currentAccount)
    }
  inputLoanAmount.value=''
})
 //btn transfer
 btnTransfer.addEventListener('click',function(e){
  e.preventDefault()
  const anmout =+inputTransferAmount.value
  const receveAcount = accounts.find(acc=>acc.username===inputTransferTo.value)

  console.log(anmout,receveAcount)
  if(anmout>0 && currentAccount.balance>=anmout && receveAcount && receveAcount?.username!==currentAccount.username){
    currentAccount.movements.push(-anmout)
    receveAcount.movements.push(anmout)
    UpdateUi(currentAccount)
  }
 })

 //btncloser
 btnClose.addEventListener('click',function(e){
  e.preventDefault()
  inputCloseUsername==inputClosePin==' ';
  if(inputCloseUsername.value ===currentAccount.username 
    && +(inputClosePin.value)===currentAccount.pin){
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //delete acounts  
    accounts.splice(index,1)
    // console.log(accounts)
    containerApp.style.opacity=0;
  }

 }
 )
//  const filte = movements.map
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const find =accounts.find(acc=>acc)
console.log(find)

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function(movement){
  if(movement > 0){
  console.log(`la positive movement cest ${movement}`)
  }
  else{
    console.log(`negative movement c est ${movement}`)
  }
})
console.log('------------for-----------')
for (const movement1 of movements) {
  if(movement1>0){
  console.log(`la positive movement cest ${movement1}`)
  }
  else{
    console.log(`negative movement c est ${movement1}`)
  }

  
}
displayMovements(account1.movements)
const balances = function(acc){
  acc.balance =acc.movements.reduce((acc,curr)=>
   acc +curr)
  labelBalance.textContent = `${acc.balance}$`   
  
}


// balances(movements);

const Julia = [3, 5, 2, 12, 7]
const Kate = [4, 1, 15, 8, 3]
const Julia1 = [9, 16, 6, 8, 3]
const kate1 = [10, 5, 6, 1, 4]

console.log(Julia)
const checkdogs = function(dogsJulia,dogsKate){
  Julia.slice
  Julia.splice(0,1)

}
const euroUsd =1.1;
// const convertUsbtoeuro=movements.map(function(mov){
// })
const convertUsbtoeuro =movements.map(mov=> 
  euroUsd * mov
)
console.log(movements);
console.log(convertUsbtoeuro);

const convert =[];
for(const mov of movements) convert.push(mov *euroUsd)
console.log(convert);
const convetdes = movements.map(
  (mov,i)=>
  mov>0 ? `la positive movement cest ${movements}` : `negative movement c est ${movements} `
)

var n =1;
var n =2;
console.log(n)

const ar1 =[1,2,3,4],
arr2 =[5,6,7,8,9];
console.log(...ar1,...arr2);
const arr =[1,2,3,4,5,6,7,8]
const fil = arr.filter(el=> el%2===0)
console.log(fil)
const fil1 = arr.map(el=>
  el%2===0 ? el : "")
console.log(fil1)
const result = arr.filter(Element=>Element>4)
console.log(result);
const mynum = [1,2,3,4,5,6,7,8]
const reduce =mynum.reduce(function(acc,current,index,arr){
console.log(`acc cest ${acc}`);
console.log(`current cest ${current}`);
console.log(`index cest ${index}`)
console.log(`array cest ${arr}`)
return acc + current
},5)
console.log(reduce);
const newnum = [];
const res = mynum.map(Element=>Element*Element)
console.log(res)

const resul = 'GaDri';
const res23=resul.split('')
console.log(res23)
const nat = resul.split('').map(ele =>
  ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  ).join('')
  console.log(nat);
const mynum1 = 'num123'
const rs = mynum1.split('').map(ele=>
  ele =  isNaN(parseInt(ele)) ? ele : ''
  ).join('');
  console.log(rs);
  const sentece = 'i love foood too playing much';
  const cor =sentece.split(' ').filter(ele=>
    ele.length<5).join(' ');
  console.log(cor)
const word = ['bla','prppaganda','egyption','marocaine'];
const red = word.reduce(function(acc,current){
  console.log(`acc cest ${acc}`);
  console.log(`current cest ${current}`);  
  return acc.length> current.length ? acc : current
})
console.log(red)
const join = ['g','@','a','@','d','@','@','r','@','i']
const worj = join.reduce(function(acc,current){
  console.log(`acc cest ${acc}`);
  console.log(`current cest ${current}`);  
 
})
  

const oppsite =movements.filter((mov)=>mov>0)
console.log(movements)

console.log(oppsite)
for(const opp of movements ){
  if(opp>0){
    console.log(opp)
  }else{
     ''
  }
  
}
const withdrawals = []
const deposit = []
for(const eithr of movements){
  if (eithr <0) {
    withdrawals.push(eithr);
  }else{
    deposit.push(eithr)
  }
}
console.log(withdrawals);
console.log(deposit);
const withdrawal = []
const withdra = movements.filter(function(mov){
  return mov<0
  
}).reduce((nbr,current)=> nbr + current);
console.log(withdra);
//  const redu = withdra.reduce(function(nbr,current){return nbr + current;
//  })
//  console.log(redu)


const max = movements.filter(function(acc){
  return acc < 0
});
console.log(max)
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
// console.log(humanAges)

// }
console.log(movements)

//  const agess =[5, 2, 4, 1, 15, 8, 3]
//  const chaining =function(ages){
//   return ages.map((age) =>age<2 ? 2* age :16 +age*2)
//   .filter(age=>age>=18)
//   .reduce((acc,age,arr)=>acc+age/arr.length,0)
//  }
//  const chain =chaining(agess)
//  console.log(chain)
const chaining =agess=>
  agess.map((age)=> age<2 ? 2*age : 16+age *4)
  .filter((age)=>age>=18)
  .reduce((acc,cur,i,arr)=>acc+cur/arr.length,0)

const numAge =chaining([5, 2, 4, 1, 15, 8, 3])
console.log(numAge)

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1)
const withdrawal2 = movements.filter(mov=>mov<0);
const withdrawal3 = movements.find(mov=>mov<0);
const gh = accounts.find(acc=>acc.pin===2222)
console.log(gh)
console.log(movements)
console.log(withdrawal2)
console.log(withdrawal3)

// for(const element of accounts){
//   element.find(function(mov){
//   return mov==='Jessica Davis'}
 
// )}
//  const calcAverageHumanAge = function (ages) {
//    const humanAges = ages.map((age)=> age<2 ? 2*age : 16+age*4)
//    console.log(humanAges)
//    const filter = humanAges.filter(age=>age>=18)
//    console.log(filter)
//    const reduce =filter.reduce((acc,cuur)=>
//       acc +cuur,0) / filter.length
//     console.log(reduce)
//  }
//  calcAverageHumanAge(ages)  
// const ages =[5, 2, 4, 1, 15, 8, 3]
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   console.log(average)
// }
// calcAverageHumanAge(ages)
const eurotousd = 1.1
const totaldeposit = movements
.filter(mov=>mov>0)
.map(function(mov,i,arr){
  // console.log(arr)
  return mov *eurotousd
})
const totalsummary = function(accc){
  const incomes = accc.movements.filter(mov=>mov >0).reduce((acc,curr)=>acc+curr)
  labelSumIn.textContent=`${incomes}€`
  const withdrawals =accc.movements.filter(mov=>mov <0).reduce((acc,curr)=>acc+curr)
  labelSumOut.textContent=`${-withdrawals}€`
  const interset = accc.movements
                            .filter(mov=>mov>0)
                            .map(deposit=>(deposit*accc.interestRate)/100)
                            .reduce((acc,int)=>Math.trunc(acc+int),0)
                            labelSumInterest.textContent=`${interset}€`
}
// .reduce((acc,cur)=>acc+cur)
// labelSumIn.textContent =Math.abs(totaldeposit);
// console.log(totaldeposit)
// const totalwithdrawls = movements
// .filter(mov=>mov<0)
// .reduce((acc,cur)=>acc+cur)
// labelSumOut.textContent =Math.abs(totalwithdrawls);

// console.log(totalwithdrawls)
//classes_________________-_________________________-
console.log('---------------------------classes--------------------------')
class employe{
  constructor(firstName,lastName){
  this.firstName=firstName
  this.lastName=lastName
  }
  affiche(){
    return 'the firstname ='+this.firstName+'the lastName ='+this.lastName
  }
}
const myemp=new employe('mohamed','gadri')
console.log(myemp);
console.log(myemp.affiche())
console.log('---------------------------tp2--------------------------')
class person{
  constructor(id,fn){
    this.id=id;
    this.fn=fn
  }
  affiche(){
    return 'id ='+this.id+'fullname='+this.fn
    }
}

class employ extends person{
  constructor(id,fn,s){
    super(id,fn)
    this.salary =s
  }
  displaye(){
    return 'la salary ='+this.salary
  }
}
const employe12 =new employ('1000','gadrimohamed',1900)
console.log(employe12)

const list = ['nourdine','fatima','aicha'];
const newlist =[]
for (const element of list) {
  newlist.push(element);
}
console.log(newlist);
const listname=['<li>noureddine</li>','<li>fatima</li>','<li>aicha</li>']
console.log(listname
)
const mapname = list.map(x=>`<li> ${x} </li>`)
console.log(mapname)
const hello =()=>'hello'
console.log(hello)
const somme =(x,y)=>x+y
console.log(somme(2,4))
const max1 =(x,y)=> {
  if(x>y){
    return x
  }else{
    return y
  }
}
console.log(max1(9,3));
const myArr = ['al','je','dk']
const arritem =[]
for(let i=0; i<myArr.length; i++){
  arritem.push(myArr[i].length);
}
const myfr = ['banane','apple','orange']

console.log(arritem);
const newmap =myfr.map(item=>(item.length))
console.log(newmap);
const livre = {
  id :1111,
  name : 'react js',
  nbrPage :150,
  displaye(){
    return 'id ' +this.id +
    'le name the books' +this.name +
    'and le nombre the page'+this.nbrPage
  }
}
console.log(livre.displaye());
export class point{
  constructor(x,y){
    this.x=x
    this.y=y
  }
  afficher(){
    return this.x + this.y
  }
  calculedistance(){
    return Math.sqrt(this.x**2+this.y**2)
  }
}
const point1 =new point(4,5)

console.log(point1)
console.log(point1.calculedistance())

export class prenom{
  constructor(name,prenom){
    this.name=name
    this.prenom=prenom
  }
  affichN(){
    return this.name+' '+this.prenom;
  }
}
const fullname =new prenom('mohamed','gadri')
console.log(fullname.affichN());

console.log('----------------------------flat------------------------')
const arr1 = [[1,2,3,[[4,5,6]],[7,8,9]]]
console.log(arr1.flat(3))
// const acountsmovment = accounts.map(mov=>mov.movements)
// const allmovement = acountsmovment.flat()
// console.log(allmovement)
/*
//explaine 
:
const accounts = [account1, account2, account3, account4];
mov=acounts=mov.movements
*/
// console.log(accounts)
// console.log(acountsmovment)
const overwellBalance =accounts
.map(mov=>mov.movements)
.flat()
.reduce((acc,curr)=>acc+curr,0)
console.log(overwellBalance)
const overwellBalance1 =accounts
.flatMap(mov=>mov.movements)

.reduce((acc,curr)=>acc+curr,0)
console.log(overwellBalance1)
console.log(movements)
movements.sort((a,b)=>{
  // a> b a,b
  //a<b a b
   if(a>b)
    return 1
   if(a<b)
  return -1
})
console.log(movements)

const g = Array.from({length:100},(cur,i)=>i+1)
console.log(g)
const movementsUI =Array.from(document.querySelectorAll('.movements__value'))
console.log(movementsUI)
labelBalance.addEventListener('click',function(){
  const movementsUI =Array.from(document.querySelectorAll('.movements__value'))
  console.log(movementsUI.map(el=>el.textContent.replace('€','')))

})
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
dogs.forEach(function(dogs1){
  const weigth =dogs1.weight ** 0.75 * 28*10**2
  console.log(Math.trunc(weigth))
})
dogs.forEach(function(dogs){
  console.log(dogs)
})
dogs.forEach(function(dogs1){
  const weigth =dogs1.owners[0]
  console.log((weigth))
  const woner = weigth.curFood
  console.log(woner)
  
})

const sarahdog =dogs.find(mov=>mov.owners.includes('Sarah'))
console.log(sarahdog)
console.log(`sara dog eat to ${sarahdog.curFood > sarahdog.weight ? 'much' : 'little'} `)
console.log(25**(1/2))

// if(Number.isNaN('oppp')){
//   alert('hello🤪🥶')
// }else{
//   alert('this is number🤪🥶')


 
const randmath =(min,max)=>
Math.trunc(Math.random()*(max-min)+1)+min;
console.log(randmath(10,60))
console.log(Math.trunc(23.4))
console.log(Math.round(23.4))
console.log(Math.floor(23.5))
console.log(Math.trunc(23.4))
console.log(Math.ceil(23.5))
console.log(Math.ceil(23.4))
console.log(6%2)

const iseven =n=>n%2===0
console.log(iseven(8))
console.log(iseven(9))
console.log(iseven(4))
console.log(iseven(16))

labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
  if(i%2===0){
    row.style.backgroundColor='red';
  }else if(i % 3 ===0){
    row.style.backgroundColor='orange';


  }

})
})


 