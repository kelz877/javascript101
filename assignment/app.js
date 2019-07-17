//let menuDiv = document.getElementById("menuDiv")
let startersDiv = document.getElementById("startersDiv")
let entreesDiv = document.getElementById("entreesDiv")
let dessertsDiv = document.getElementById("dessertsDiv")

//let menuItemDiv = dishes.map
//filter out the meal types
let starters = dishes.filter(mealType => mealType.course === "Starters");
let entrees = dishes.filter(mealType => mealType.course === "Entrees");
let desserts = dishes.filter(mealType => mealType.course === "Desserts");

//console.log(desserts)

let menuStarters = starters.map(menuItem => {

    let starterDiv = `<div class="uk-flex menuItemNew">
                        
                        <img class="itemPhoto  uk-visible@s uk-section-small" src="${menuItem.imageURL}"></img>
                        <div class="itemInfo">
                        <h4 class="itemTitle uk-flex uk-flex-between">${menuItem.title}</h4>
                        <p class="itemDescription uk-flex uk-flex-between">${menuItem.description}</p>
                        <span class="uk-flex uk-flex-between">$ ${menuItem.price}</span>     
                        </div>
                        </div>`
        return starterDiv
})

let menuEntrees = entrees.map(menuItem => {

    let entreeDiv = `<div class="uk-flex menuItemNew ">
                        
                        <img class="itemPhoto uk-visible@s uk-section-small" src="${menuItem.imageURL}"></img>
                        <div class="itemInfo">
                        <h4 class="itemTitle uk-flex uk-flex-between">${menuItem.title}</h4>
                        <p class="itemDescription uk-flex uk-flex-between">${menuItem.description}</p>
                        <span class="uk-flex uk-flex-between">$ ${menuItem.price}</span>     
                        </div>
                        </div>`
        return entreeDiv

})

let menuDesserts = desserts.map(menuItem => {

    let dessertDiv = `<div class="uk-flex menuItemNew">
                        
                        <img class="itemPhoto uk-visible@s uk-section-small" src="${menuItem.imageURL}"></img>
                        <div class="itemInfo">
                        <h4 class="itemTitle uk-flex uk-flex-between">${menuItem.title}</h4>
                        <p class="itemDescription uk-flex uk-flex-between">${menuItem.description}</p>
                        <span class="uk-flex uk-flex-between">$ ${menuItem.price}</span>     
                        </div>
                        </div>`
        return dessertDiv
})



startersDiv.innerHTML = menuStarters.join("")
entreesDiv.innerHTML = menuEntrees.join("")
dessertsDiv.innerHTML = menuDesserts.join("")




/* let menuDesserts = desserts.map(menuItem => {

    let dessertDiv = `<div>
                        <img class="itemPhoto" src="${menuItem.imageURL}"></img>
                        <h3 class="itemTitle">${menuItem.title}</h3>
                        <p class="itemDescription">${menuItem.description}</p>
                        <span>$ ${menuItem.price}</span>
                    </div>`
        return dessertDiv
})
*/