const food = [
    { name: 'baguette', icon: '🥖', price: 10 },
    { name: 'tomato', icon: '🍅', price: 2 },
    { name: 'avocado', icon: '🥑', price: 80 }
]

const meat = [
    { name: 'bacon', icon: '🥓', price: 20 },
    { name: 'beef', icon: '🍖', price: 30 },
    { name: 'chicken', icon: '🍗', price: 25 }
]

const fruits = [
    { name: 'melon', icon: '🍈', price: 12 },
    { name: 'watermelon', icon: '🍉', price: 10 },
    { name: 'apple', icon: '🍎', price: 5 },
]

const menu = [
    food.slice(0,2).concat(meat[0]),
    food.slice(0,2).concat(meat[1]),
    food.slice(0,2).concat(meat[2]),
    food.slice(0,2).concat(meat.slice(0,2)),
    food.slice(0,2).concat(meat[0]).concat(meat[2]),
    food.concat(meat[1]),
    food.concat(meat[2]),
    food.concat(meat.slice(0,2)),
    food.concat(meat[0]).concat(meat[2]),
    fruits
]

const menuChido = menu.map(e => ({
    description: `This is a${e.reduce((p, c) => `${p} ${c.name}`, '')} meal.`,
    image: e.reduce((p, c) => `${p} ${c.icon}`, ''),
    price: e.reduce((p, c) => p + c.price, 0)
}))

const menuDescription = menuChido.map(e => `${e.description}, it cost $${e.price} and i looks like this: ${e.image}`)

const allFood = [
    food.concat(meat,fruits)
]

const foodByColor = [
    { color : 'red', meals : food.slice(1,2).concat(meat[1], fruits.slice(1,3)) },
    { color : 'green', meals : food.slice(2,3).concat(fruits[0]) },
    { color : 'brownish?', meals : meat.slice(0,1).concat(meat[2]) },
    { color : 'orange', meals : [food[0]] }
]

const foodDescription = foodByColor.map(e => `${e.meals.map(f => ` ${f.name}`)} are color ${e.color}, look at them: ${e.meals.map(f => ` ${f.icon}`)}`)

console.log(foodDescription)

