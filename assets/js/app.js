const searchTrigger =document.querySelector(`.search-button`)
const search=document.querySelector(`.search`)

searchTrigger.addEventListener(`click`,()=>{
    search.classList.add(`active`)
})
