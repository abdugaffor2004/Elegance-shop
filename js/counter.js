// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const counter_result = document.querySelector('.counter_result')



//     plus.addEventListener('click', () => {
//         console.log('plus') 
//         console.log(counter_result.innerText)
//         counter_result.innerText = ++counter_result.innerText;
//         })

       

//     minus.addEventListener('click', () => { 

//         if( parseInt(counter_result.innerText) > 0){

//             console.log('minus')
//             counter_result.innerText = --counter_result.innerText
//         }
//     })

        

 

window.addEventListener( 'click', (event) => {

    const counterWrapper = event.target.closest('.product_counter')  
    const counter = counterWrapper.querySelector( '[data-counter]' )

    if(event.target.dataset.action === "plus"){

        ++counter.innerText 

    }

    if(event.target.dataset.action === "minus"){ 

        if(parseInt(counter.innerText) > 0){
            --counter.innerText 
        }

    }

} )