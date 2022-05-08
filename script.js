//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

    let drink = document.querySelector('input').value
                
    //get it so that spaces in drink names work
    // when you put in gin there's 20. can you make a carousel to show all.
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText =       
    data.drinks[0].strInstructions
        })
        
    .catch(err => {
    console.log(`error ${err}`)
        })

}

