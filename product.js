import reactive from './reactive.js';


const sideEffect=(target)=>{
    const total = target.price * target.quantity
    console.log(`The total has changed to ${total}`)

}

const product = reactive({quantity:10, price:20}, sideEffect);


window.product = product;