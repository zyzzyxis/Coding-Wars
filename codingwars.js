const taco = {id:1, name:'chicken', price:20, about:'Yummy'}
const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}
const taco2 = {id:3, name:'fish', price:30, about:'So good'}

const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"

const tacoOBJ = 




// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)
    const formatTacoHTML = tacos.map((tacoOBJ) => {
      const {id, name, price, about} = tacoOBJ
      return `
        <div>
          <h1>ID:${id}. Dish:${name}. Cost:${price}. About:${about}</h1> 
        </div>
      `
    })
    console.log(formatTacoHTML)

    console.log('-----------------')


// write a function that takes an tacoOBJ and return formatted price with
// .00 

let priceFormat = 

console.log(taco1)


// create a new array where all of the prices is formatted with .00



// write a function that takes an array and logs each item in the array
// hint forEach



// use the find method to return the object with id:1



// return a new array with all prices greater than 19



// return a new array with a 'about' key where it is a combo of
// name price and about




///CRUD
// don't change tacos array or change objects
// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

// Update (update a taco) 
// let updatedTaco = taco.map((taco) => {
//   return {...taco, name:'DIFFERENT TACO'}
// })

// console.log(updatedTaco)
// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
