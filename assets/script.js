// First, tell us your name
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
let yourName = "Sarah Wiedrich" 
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let ss = 0 // Sugar Sprinkle

//add buttons increasing quantity
const gbPlusBtn = document.querySelector('#add-gb')
let gbQuantity = document.querySelector('#qty-gb')
gbPlusBtn.addEventListener('click', function(){
    gb++
    gbQuantity.textContent = (gb)
})  

const ccPlusBtn = document.querySelector('#add-cc')
let ccQuantity = document.querySelector('#qty-cc')
ccPlusBtn.addEventListener('click', function(){
    cc++
    ccQuantity.textContent = (cc)
})

const sugarPlusBtn = document.querySelector('#add-sugar')
let sugarQuantity = document.querySelector('#qty-sugar')
sugarPlusBtn.addEventListener('click', function(){
    ss++
    sugarQuantity.textContent = (ss)
})

//minus buttons subtracting quantity
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(){
    if (gb > 0)
    gb--
    gbQuantity.textContent = (gb)
})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0)
    cc--
    ccQuantity.textContent = (cc)
})

const sugarMinusBtn = document.querySelector ('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(){
    if (ss > 0)
    ss--
    sugarQuantity.textContent = (ss)
})
