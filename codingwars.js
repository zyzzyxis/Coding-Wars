const taco = {id:1, name:'chicken', price:20, about:'Yummy'}
const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}
const taco2 = {id:3, name:'fish', price:30, about:'So good'}

const tacos = [taco, taco1, taco2]



//// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
// where it takes one or the other or both. //
//would want to have it put out a new object. but the only differece is tha tthe name would chnage, 
// so like would change chicken to 'new name' like the explicitly give it a new id, with like push
// let x = {...tacoNameChange, name:"changed"}



const newName = (tacoObj, id) => {
  let newTaco = {...tacoObj, name:"changed", id: id}
  console.log(newTaco)
}

newName(taco1, 4)
console.log(taco1)


//// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)
// only return one of the taco objects (like taco2)
console.log('---------------------')
const formatTacoHTML = (tacoObj) => {
  const {id, name, price, about} = tacoObj
  return (
    `<div>
      <h1>ID:${id}. Dish:${name}. Cost:${price}. About:${about}</h1>
    </div>`
  )
}

console.log(formatTacoHTML(taco2))

//// write a function that takes an tacoOBJ and return formatted price with
// .00 
console.log('---------------------')
const priceFormat = (tacoObj) => {
  return tacoObj.price + ".00"
}

console.log(priceFormat(taco1))


//// create a new array where all of the prices is formatted with .00
//this one will be a map function
console.log('---------------------')

const priceFormatAll = (tacoObj) => {
  let priceEach = tacos.map(
    (element)=>{
      return {...element, price: (element.price.toFixed(2))}
    }
  )
  return priceEach
}

let priceAll = priceFormatAll()
console.log(priceAll)

                // let example = {
                //   a: 10, 
                //   b: 20,
                //   a: 30
                // }
                // console.log(example)

//// write a function that takes an array and logs each item in the array
// hint forEach
console.log('---------------------')

const foodLog = (taco) => {
  console.log(taco)
}
tacos.forEach(foodLog)

//// use the find method to return the object with id:1
console.log('---------------------')
let obj = tacos.find(o => o.id === 1 )
console.log(obj);

// return a new array with all prices greater than 19
//this will have an if statement






// return a new array with a 'about' key where it is a combo of name price and about







///CRUD
// don't change tacos array or change objects
// can hard code data (Don't need to get it from the users)
// READ (array of obj to array of html) 

//// Update (update a taco) 
console.log('---------------------')
let x = {...taco1, name:'it is new now'}
console.log(x)
console.log(taco1)

// Remove (delete a taco) 

// Create (add a taco) 
console.log('---------------------')
let c = {id:4, name:'pork', price:45, about:'Meh'}
console.log(c)

// bonus use reduce to return the sum of prices in tacos array
console.log('BONUS -------------')
// bonus do in rails

// bonus create your own
