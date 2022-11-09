const currencyOne = document.getElementById('coin-one')
const currencyTwo = document.getElementById('coin-two')
const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

    // axios fetch

    function convertion(){
         const currencyOneExchange = currencyOne.value
         const currencyTwoExchange = currencyTwo.value

         axios.get(`https://v6.exchangerate-api.com/v6/b6edb288b0535491325e2b79/latest/${currencyOneExchange}`).then(res => {
            const response = res.data.conversion_rates[currencyTwoExchange]
            rateEl.innerHTML = `<div class="result">
            1 ${currencyOneExchange} = ${response} ${currencyTwoExchange}
            </div>`
            amountTwo.value = (amountOne.value * response).toFixed(2)
         })
    }

 currencyOne.addEventListener('change', convertion)
 currencyTwo.addEventListener('change', convertion)  
 amountOne.addEventListener('input', convertion)
 amountTwo.addEventListener('input', convertion)
swap.addEventListener('click', () => {
    const temp = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = temp
    amountOne.value = '1'
    convertion()
})
 convertion()
 