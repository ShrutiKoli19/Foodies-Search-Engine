const application_id = '9ef90b43'
const search = "pizza"
const application_key = '90e85fa3a05eeacb0754f1e8617f2f75'

const input = document.querySelector('#search input')
const button = document.querySelector('#search button')

const container = document.querySelector('div.recipe_container')
const getRecipe = async (query) => {

  const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${application_key}`

  const res = await fetch(endpoint)
  const data = await res.json()
  console.log(data)
  const {hits} = data
  return hits
}

input.addEventListener('keydown', e=>{
  const key = e.key
  if(key==='Enter'){
    handleSearch()
  }
})

const handleSearch = async() =>{
    container.innerHTML = null
    const query = input.value
    const hits = await getRecipe(query)
    hits.forEach(hit => {
        const {recipe, url} = hit
        const {image, url:recipe_url} = recipe
        const a = document.createElement('a')
        a.src = recipe_url
        const ele = document.createElement('img')
        ele.src = image
        a.appendChild(ele)
        console.log(ele)
        container.appendChild(ele)
    })
}

button.addEventListener('click', handleSearch)