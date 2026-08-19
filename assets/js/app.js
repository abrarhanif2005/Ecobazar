const searchTrigger = document.querySelector(`.search-button`)
const SmallsearchTrigger = document.querySelector(`.small-search-button`)
const search = document.querySelector(`.search`)
const menuTrigger = document.querySelector(`.menu`)
const menuSlider = document.querySelector(`.slider`)
const menuBlur = document.querySelector(`.offcanvus`)
const profileTrigger = document.querySelector(`.profile`)
const profileSlider = document.querySelector(`.profile-slider`)
const profileBlur = document.querySelector(`.profile-canvus`)
const SmallprofileTrigger = document.querySelector(`.small-profile`)

const cartTrigger = document.querySelector(`.cartTrigger`)
const cartSlider = document.querySelector(`.cart-slider`)
const cartBlur = document.querySelector(`.cart`)
const SmallcartTrigger = document.querySelector(`.cart-profile`)

searchTrigger.addEventListener(`click`, () => {
  search.classList.add(`active`)
})
SmallsearchTrigger.addEventListener(`click`, () => {
  search.classList.add(`active`)
})
menuTrigger.addEventListener(`click`, () => {
  menuBlur.classList.add(`active`)
  menuSlider.classList.add(`active`)
})
profileTrigger.addEventListener(`click`, () => {
  profileSlider.classList.add(`active`)
  profileBlur.classList.add(`active`)
})
cartTrigger.addEventListener(`click`, () => {
  cartBlur.classList.add(`active`)
  cartSlider.classList.add(`active`)
})
SmallprofileTrigger.addEventListener(`click`, () => {
  profileSlider.classList.add(`active`)
  profileBlur.classList.add(`active`)
})
SmallcartTrigger.addEventListener(`click`, () => {
  cartSlider.classList.add(`active`)
  cartBlur.classList.add(`active`)
})
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) {
    search.classList.remove('active');
    menuBlur.classList.remove(`active`)
    menuSlider.classList.remove(`active`)
    profileBlur.classList.remove(`active`)
    profileSlider.classList.remove(`active`)
    cartSlider.classList.remove(`active`)
    cartBlur.classList.remove(`active`)

  }
});



// cart total counter
function totalCounter() {
  const totalProduct = document.querySelectorAll(`.cart h6`)
  let total = 0;

  totalProduct.forEach(e => {
    let text = e.textContent
    let cleanAmount = text.replace(`$`, ``).trim()
    let amount = Number(cleanAmount)

    if (!isNaN(amount)) {
      total += amount
    }


  });
  document.querySelector(`.cartamount`).textContent = `Your total amount is $${total.toFixed(2)}`
}
function remove(e) {
  e.closest('.row').remove();

  totalCounter()
}


totalCounter()

// menu bar hidden for scroll

let lastScrolly=window.scrollY
const bottomMenu= document.querySelector(`.menu-icon`)

window.addEventListener(`scroll`,()=>{
  const currentScrolly=window.scrollY

  if(currentScrolly > lastScrolly && currentScrolly > 20){
    bottomMenu.classList.add(`menu-hidden`)
  }
  else {
    
    bottomMenu.classList.remove('menu-hidden');
  }

  lastScrolly = currentScrolly
  }

)