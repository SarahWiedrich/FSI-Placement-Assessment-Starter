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
    total++
    totalqty.textContent = (total)
})  

const ccPlusBtn = document.querySelector('#add-cc')
let ccQuantity = document.querySelector('#qty-cc')
ccPlusBtn.addEventListener('click', function(){
    cc++
    ccQuantity.textContent = (cc)
    total++
    totalqty.textContent = (total)
})

const sugarPlusBtn = document.querySelector('#add-sugar')
let sugarQuantity = document.querySelector('#qty-sugar')
sugarPlusBtn.addEventListener('click', function(){
    ss++
    sugarQuantity.textContent = (ss)
    total++
    totalqty.textContent = (total)
})

//minus buttons subtracting quantity
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(){
    if (gb > 0){
        gb -= 1
        total -= 1
    }
    gbQuantity.textContent = (gb)

    totalqty.textContent = (total)
})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0){
        cc -= 1
        total -= 1
    }
    ccQuantity.textContent = (cc)
    totalqty.textContent = (total)
})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(){
    if (ss > 0){
        ss -= 1
        total -= 1
    }
    sugarQuantity.textContent = (ss)
    totalqty.textContent = (total)
})

//total
const totalqty = document.querySelector('#qty-total')
let total = 0
totalqty.textContent = (total)

