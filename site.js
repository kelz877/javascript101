/*
- Create a Palindrome app in Javascript which will print whether a string is a palindrome or not

*/

let word = "testword"


function reverseWord(word){
  wordReverse = ""
  for(let index = word.length - 1; index >= 0; index--){
    wordReverse += word[index]
  }
    return wordReverse
} 
let wordReverse = reverseWord(word)

function palindromeCheck(word, wordReverse){
  if(word == wordReverse){
    return "These words are palindromes"
  } else {
    return "These are not palindromes"
  }
} 


testRun = palindromeCheck("teeeeeeet","teeeeeeet")
console.log(testRun)


let array = ["John","Mary", "Alex", "Steve", "Mary", "John"] 


//- Create an app whichs returns true/false depending on if the item is in the array 

let array = ["John","Mary", "Alex", "Steve", "Mary", "John"] 


function removeDuplicate(array){
    newArray = []
    //initialize loop to go through the list of Names
    for(let index = 0; index < array.length; index++){
    //if the list of names is not in New Array add it to new Array.
      //if(array[index]) not in newArray
      if(!newArray.includes(array[index])){
        newArray.push(array[index])
      }
    //if name is already in newArray, skip adding it. 
    //return new array

    }return newArray
    
  }


let testRun = removeDuplicate(array)
console.log(testRun) 


//- Create an app whichs returns true/false depending on if the item is in the array 
let names = ["John","Mary","Alex","Steve"] 

function itemInArray(item, array){
    for(let index = 0; index < array.length; index++){
      if(array[index] == item){
        return true
      }
    }
  }

let testSubject = itemInArray("John", names)
console.log(testSubject)


//- Create an app which finds the largest number in an array 


let numbers = [1,2,3,40,5,6,7,8]

function largestNumber(array){
  number = 0
  for(let index = 0; index < array.length; index++){
    if(array[index] >= number){
      number = array[index]
    }
  }return number
}


let testSubject = largestNumber(numbers)

console.log(testSubject)


//- Create an app which finds the largest number in an array 


let numbers = [1,-2,3,40,5,6,7,8]

function smallestNumber(array){
  number = 0
  for(let index = 0; index < array.length; index++){
    if(array[index] <= number){
      number = array[index]
    }
  }return number
}


let testSubject = smallestNumber(numbers)

console.log(testSubject)


//- Create FizzBuzz app 

function fizzBuzz(number){
    if (number % 5 === 0 && number % 3 === 0){
      return "FIZZBUZZ"
    } else if(number % 3 === 0){
      return "FIZZ"
    } else if(number % 5 === 0){
      return "Buzz"
    } else{
      return "Does not work"
    }
  }
  
  let functionTester = fizzBuzz(7)
  
  console.log(functionTester)



//- Create an app which determines whether the number is even or odd. 

function oddOrEven(number){
    if(number % 2 === 0){
      return "Even"
    }else {
      return "Odd"
    }
  }
  
  let functionTester = oddOrEven(0)
  
  console.log(functionTester)

  // Take the array [3,4,56,7,8,1] and sort them in ascending and descending order. 

let newList = [3,4,56,7,8,1]
function arraySort(newList){
  let newerList = newList.sort(function(a, b){return a - b})
  return newerList
}


let functionTester = arraySort(newList)
  
console.log(functionTester)

function arrayDescend(newList){
  let descendList = newList.sort(function(a, b){return b - a})
  return descendList
}

let functionTest = arrayDescend(newList)
  
console.log(functionTester)




/* Here are the features that needs to be implement: 
- A user should be able to open a bank account provided 
they have the initial balance of $100

- User should be able to transfer money from one bank 
account to another  

- A user should be able to withdraw money from the
bank account 

- The app should charge $-35 fees if the bank account is below $0
*/


/* Here are the features that needs to be implement: 
- A user should be able to open a bank account provided 
they have the initial balance of $100

- User should be able to transfer money from one bank 
account to another  

- A user should be able to withdraw money from the
bank account 

- The app should charge $-35 fees if the bank account is below $0
*/


class BankAccount {
    constructor(){
      this.firstName = ""
      this.lastName = ""
      this.middleName = ""
      this.accountType = ""
      this.balance = ""
      this.actStatus = ""
    
    }
    openAccount(){
      let amount = window.prompt("How much $ are you depositing?")
      if(amount >= 100){
        alert("You can open your account today!")
      }
      else if(amount < 100){
      alert("You cannot open an account until you have $100")
      }
    }
    
    withdraw(){
      let toWithdraw = prompt("How much would you like to withdraw?")
      if(toWithdraw > this.balance){
        alert("You will overdraft!")
        this.balance = (this.balance - toWithdraw - 35)
      }
      else if(toWithdraw <= this.balance){
        this.balance - toWithdraw
      }
    }
    
  }

