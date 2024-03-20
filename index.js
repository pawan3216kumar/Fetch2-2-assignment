let productList = document.getElementById("productlist")


let allProduct = async() =>{
    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json();
    displayData(data)
    return data
}

let data;

let controller = async () => {

  data = await allProduct()
  displayData(data)
  console.log(data)

}

controller()

function displayData(data){

  productList.innerHTML = ""
   
    data.forEach((ele) =>{
      let div = document.createElement("div")

      let image = document.createElement("img")
      image.src = ele.image;

      let title = document.createElement("h3")
      title.innerHTML = ele.title;

      let price = document.createElement("p")
      price.innerHTML = ele.price;

      let category = document.createElement("p")
      category.innerHTML = ele.category;

      let description = document.createElement("p")
      description.innerHTML = ele.description

      div.append(image , title , price , category , description)

      productList.append(div)
    })
}
allProduct()



async function sortProduct(sortBy){
  if(sortBy == "Price_asc"){
    data.sort((a, b) => a.price -b.price)
  }else if(sortBy == "Price_des"){
    data.sort((a,b) => b.price -a.price)
  }
  displayData(data)
}

document.getElementById("sortSelect").addEventListener("change" , function(){
   sortProduct(this.value)
})

let pawan;

let input = document.querySelector("input")
input.addEventListener("input", (event) => search(event.target.value))

const search = (searchValue) => {

  if(pawan){
    clearInterval(pawan)
  }
    productList.innerHTML = "<h1>Loading data ,....</h1>"
  if(searchValue){
    pawan = setInterval(() => {
      let result = data.filter(ele => ele.category === searchValue)
      displayData(result)
    }, 3000);
  }else if(searchValue){
      let result1 = data.filter((ele) => {
         ele.title === searchValue},1000)
      displayData(result1)
  }
  else{
    displayData(data)
  }
}









