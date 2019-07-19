
// In order to get the quotes you can call the getStockQuote function as shown below:

// getStockQuote(pass in the symbol of the stock)

// available symbols are below:
// APLE
// AMAZ
// ALBAB
// GOOG
// FB

let quotes = {
    "APLE":{name : "Apple", price : 0},
    "AMAZ":{name : "Amazon", price :0},
    "ALBAB":{name : "Ali Baba", price :0},
    "GOOG":{name : "Google", price :0},
    "FB":{name : "Facebook", price :0}
  }
  
  function getStockQuote(symbol) {
  
    let stock = quotes[symbol]
    stock.price = getRandomInt(100,500)
    return quotes[symbol]
  }
  
  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }




let displayedQuotesDiv = document.getElementById("displayedQuotes")

//creating the value to pass through the function
let userInputQuote = document.getElementById("userInputQuote")

//creating the button var
let getQuoteButton = document.getElementById("getQuoteButton")




getQuoteButton.addEventListener('click', function(){

     let quoteValue = userInputQuote.value   

      window.setInterval(() => {
     
      quote = getStockQuote(quoteValue)

      //console.log(quote)

      let displayInfo = `<div>${quote.name}: ${quote.price}</div> `
      

      displayedQuotesDiv.innerHTML = displayInfo


        //console.log("set interval is fired")
        //displayedQuotesDiv.replaceWith(displayInfo.value)
  
        
      }, 2000)




})

