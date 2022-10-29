$(document).ready(function () {
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "visible")
    })
});
/************************ Nav-Open-Close ************************/
$(".open-close")[0].addEventListener("click", Nav)
function Nav() {
    if ($("nav").css("left") != "-250px") {
        closeNav()
    }
    else {
        $("nav").animate({ "left": "0px" }, 500)
        $(".navBtn").animate({ "left": "250px" }, 500)
        $("aside ul li").animate({ "opacity": "1", "padding-top": "25px" }, 1500);
        $(".open-close-icon").html('<i class="fa fa-align-justify fa-times"></i>')
    }
}
function closeNav() {
    {
        $(".open-close-icon").html('<i class="fa fa-align-justify"></i>')
        $("nav").animate({ "left": "-250px" }, 500)
        $(".navBtn").animate({ "left": "0px" }, 500)
        $("aside ul li").animate({ "opacity": "0", "padding-top": "500" }, 500);
    }
}
/************************ End Nav-Open-Close ************************/


/************************ MainPage ************************/
async function fatchApi() {
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${""}`
    let response = await fetch(api)
    response = await response.json()
    return response.meals
}
async function showMeals(e) {
    let males = await fatchApi()
    let showMeals = ""
    for (let i = 0; i < males.length; i++) {
        showMeals += `<div class="col-md-6 my-3 col-lg-3 shadow">
     <div class="item">
         <img class="w-100 rounded" src="${males[i].strMealThumb}" alt="${males[i].idMeal}">
         <div class="layer">
             <h2 class="p-2">${males[i].strMeal}</h2>
         </div>
     </div>
 </div>`
    }
    $(".items").html(showMeals)
    getinging()
}
showMeals()
$("#search")[0].addEventListener("click", openSerch)
function openSerch() {
    $("#search-row").css("visibility", "visible")
    $(".items").css("display", "none")
    $("#contact").css("display", "none")
    closeNav()
}
/************************ End MainPage ************************/
/************************Start Search ************************/
let searchWithName = document.getElementById("searchName")
searchWithName.addEventListener("keyup", searchName)
searchWithName.value = ""
async function searchName() {
    $(".loading").fadeIn(100)
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWithName.value}`
    let response = await fetch(api)
    response = await response.json()
    response = response.meals
    $(".loading").fadeOut(100)
    $(".items").css("display", "flex")
    let showMeals = ""
    for (let i = 0; i < response.length; i++) {
        showMeals += `<div class="col-md-6 col-lg-3 my-3 shadow">
     <div class="item">
         <img class="w-100 rounded" src="${response[i].strMealThumb}" alt="${response[i].idMeal}">
         <div class="layer">
             <h2 class="p-2">${response[i].strMeal}</h2>
         </div>
     </div>
 </div>`
    }
    $(".items").html(showMeals)
    let index = $('.item').index(this);
    getinging()
}
let searchWithLetter = document.getElementById("searchLetter")
searchWithLetter.addEventListener("keyup", SearchWithLetter)
async function SearchWithLetter() {
    $(".loading").fadeIn(100)
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchWithLetter.value}`
    let response = await fetch(api)
    response = await response.json()
    response = response.meals
    $(".loading").fadeOut(100)
    $(".items").css("display", "flex")
    let showMeals = ""
    for (let i = 0; i < response.length; i++) {
        showMeals += `<div class="col-md-6 col-lg-3 my-3 shadow">
     <div class="item">
         <img class="w-100 rounded" src="${response[i].strMealThumb}" alt="${response[i].idMeal}">
         <div class="layer">
             <h2 class="p-2">${response[i].strMeal}</h2>
         </div>
     </div>
 </div>`
    }
    $(".items").html(showMeals)
    getinging()
}
function getinging() {
    $(".item").click(async function () {
        let that = $(this).find("img").attr("alt")
        let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${that}`
        let catResponse = await fetch(api)
        catResponse = await catResponse.json()
        catResponse = catResponse.meals[0]
        let ing = ""
        ing += `<div class="col-md-6 col-lg-3 ">
        <div>
        <img class="w-100" src="${catResponse.strMealThumb}" alt=""><br>
            <h1 class="text-white text-center ">${catResponse.strMeal}</h1>
        </div>
    </div>
    <div class="col-md-8">
        <div class="text-white">
            <h2>Instructions</h2>
            <p>${catResponse.strInstructions}</p>
            <p><b class="fw-bolder">Area :</b> ${catResponse.strArea}</p>
            <p><b class="fw-bolder">Category :</b> ${catResponse.strCategory}</p>
            <h3>Recipes :</h3>
            <div id="recipes"><p class="my-3  recipes-color rounded">${catResponse.strMeasure1 + catResponse.strIngredient1}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure2 + catResponse.strIngredient2}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure3 + catResponse.strIngredient3}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure4 + catResponse.strIngredient4}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure5 + catResponse.strIngredient5}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure6 + catResponse.strIngredient6}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure7 + catResponse.strIngredient7}</p><p class="my-3 recipes-color rounded">${catResponse.strMeasure8 + catResponse.strIngredient8}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure9 + catResponse.strIngredient9}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure10 + catResponse.strIngredient10}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure11 + catResponse.strIngredient11}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure12 + catResponse.strIngredient12}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure13 + catResponse.strIngredient13}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure14 + catResponse.strIngredient14}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure15 + catResponse.strIngredient15}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure16 + catResponse.strIngredient16}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure17 + catResponse.strIngredient17}</p><p class="my-3 recipes-color rounded">${catResponse.strMeasure18 + catResponse.strIngredient18}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure19 + catResponse.strIngredient19}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure20 + catResponse.strIngredient20}</p>
            </div>
            <h3 class="my-2 mx-1 p-1">Tags :</h3>
            <p class="tags-color">${catResponse.strTags}</p><br>
            <a class="btn btn-success my-5 text-white" target="_blank"
                href="${catResponse.strSource}">Source</a>
            <a class="btn btn-danger text-white" target="_blank"
                href="${catResponse.strYoutube}">Youtub</a>
        </div>
    </div>
        `
        $(".items").html(ing)
        $(".items").css("display", "flex")
        $("#contact").css("display", "none")
    }
    )
}

/************************ End search ************************/
/************************Start Category ************************/
async function fatchApiCat() {
    let api = `https://www.themealdb.com/api/json/v1/1/categories.php`
    let catResponse = await fetch(api)
    catResponse = await catResponse.json()
    return catResponse.categories
}
fatchApiCat()
async function cat() {
    $(".loading").fadeIn(100)
    let cat = await fatchApiCat()
    $(".loading").fadeOut(100)
    let showCat = ""
    for (let i = 0; i < cat.length; i++) {
        showCat += `<div class="col-md-6 col-lg-3 my-3 shadow">
     <div class="cat">
         <img class="w-100 rounded" src="${cat[i].strCategoryThumb}" alt="">
         <div class="layer">
             <h2 class="p-2">${cat[i].strCategory}</h2>
             <p>${cat[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
         </div>
     </div>
 </div>`
    }
    $(".items").html(showCat)
    $(".items").css("display", "flex")
    $("#search-row").css("visibility", "hidden")
    $("#contact").css("display", "none")
    getstrCategory()
    closeNav()
}
document.getElementById("Categories").addEventListener("click", cat)

function getstrCategory() {
    $(".cat").click(async function () {
        let that = this
        let strCategory = $(that).find("h2").text()
        $(".loading").fadeIn(100)
        let api = `https://themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
        let catResponse = await fetch(api)
        catResponse = await catResponse.json()
        catResponse = catResponse.meals
        $(".loading").fadeOut(100)
        let showCat = ""
        for (let i = 0; i < catResponse.length; i++) {
            showCat += `<div class="col-md-6 col-lg-3 my-3 shadow">
     <div class="catstr">
         <img class="w-100 rounded" src="${catResponse[i].strMealThumb}" alt="${catResponse[i].idMeal}">
         <div class="layer d-flex align-items-center">
             <h2 class="p-2 text-center">${catResponse[i].strMeal}</h2>
         </div>
     </div>
 </div>`
        }
        $(".items").html(showCat)
        $(".items").css("display", "flex")
        $("#search-row").css("visibility", "hidden")
        $("#contact").css("display", "none")
        geting()
    })
}
function geting() {
    $(".catstr").click(async function () {
        let that = $(this).find("img").attr("alt")
        $(".loading").fadeIn(100)
        let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${that}`
        let catResponse = await fetch(api)
        catResponse = await catResponse.json()
        catResponse = catResponse.meals[0]
        $(".loading").fadeOut(100)
        let ing = ""
        ing += `<div class="col-md-4">
        <div>
        <img class="w-100" src="${catResponse.strMealThumb}" alt=""><br>
            <h1 class="text-white text-center ">${catResponse.strMeal}</h1>
        </div>
    </div>
    <div class="col-md-8">
        <div class="text-white">
            <h2>Instructions</h2>
            <p>${catResponse.strInstructions}</p>
            <p><b class="fw-bolder">Area :</b> ${catResponse.strArea}</p>
            <p><b class="fw-bolder">Category :</b> ${catResponse.strCategory}</p>
            <h3>Recipes :</h3>
            <div id="recipes"><p class="my-3  recipes-color rounded">${catResponse.strMeasure1 + catResponse.strIngredient1}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure2 + catResponse.strIngredient2}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure3 + catResponse.strIngredient3}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure4 + catResponse.strIngredient4}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure5 + catResponse.strIngredient5}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure6 + catResponse.strIngredient6}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure7 + catResponse.strIngredient7}</p><p class="my-3 recipes-color rounded">${catResponse.strMeasure8 + catResponse.strIngredient8}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure9 + catResponse.strIngredient9}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure10 + catResponse.strIngredient10}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure11 + catResponse.strIngredient11}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure12 + catResponse.strIngredient12}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure13 + catResponse.strIngredient13}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure14 + catResponse.strIngredient14}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure15 + catResponse.strIngredient15}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure16 + catResponse.strIngredient16}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure17 + catResponse.strIngredient17}</p><p class="my-3 recipes-color rounded">${catResponse.strMeasure18 + catResponse.strIngredient18}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure19 + catResponse.strIngredient19}</p><p class="my-3  recipes-color rounded">${catResponse.strMeasure20 + catResponse.strIngredient20}</p>
            </div>
            <h3 class="my-2 mx-1 p-1">Tags :</h3>
            <p class="tags-color">${catResponse.strTags}</p><br>
            <a class="btn btn-success my-5 text-white" target="_blank"
                href="${catResponse.strSource}">Source</a>
            <a class="btn btn-danger text-white" target="_blank"
                href="${catResponse.strYoutube}">Youtub</a>
        </div>
    </div>
        `
        $(".items").html(ing)
        $(".items").css("display", "flex")
        $("#search-row").css("visibility", "hidden")
        $("#contact").css("display", "none")
    })
}
/************************ End Category ************************/
/************************ Start Area ************************/
async function fatchApiArea() {
    let api = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    let areaResponse = await fetch(api)
    areaResponse = await areaResponse.json()
    return areaResponse.meals
}
fatchApiArea()
async function areas() {
    closeNav()
    $(".loading").fadeIn(100)
    let area = await fatchApiArea()
    $(".loading").fadeOut(100)
    let areas = ""
    for (let i = 0; i < 20; i++) {
        areas += `<div class="col-md-6 col-lg-3 my-3 shadow area text-center">
        <i class="fa-solid fa-city fa-3x"></i>
     <div">
         <h2 class="text-white" >${area[i].strArea}</h2>
     </div>
 </div>`
    }
    $(".items").html(areas)
    $(".items").css("display", "flex")
    $("#search-row").css("visibility", "hidden")
    $("#contact").css("display", "none")
    getarea()
}
document.getElementById("Area").addEventListener("click", areas)

function getarea() {
    $(".area").click(async function () {
        let that = $(this).find("h2").text()
        $(".loading").fadeIn(100)
        let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${that}`
        let catResponse = await fetch(api)
        catResponse = await catResponse.json()
        catResponse = catResponse.meals
        $(".loading").fadeOut(100)
        let showCat = ""
        for (let i = 0; i < catResponse.length; i++) {
            showCat += `<div class="col-md-6 col-lg-3 my-3 shadow">
     <div class="catstr">
         <img class="w-100 rounded" src="${catResponse[i].strMealThumb}" alt="${catResponse[i].idMeal}">
         <div class="layer d-flex align-items-center">
             <h2 class="p-2 text-center">${catResponse[i].strMeal}</h2>
         </div>
     </div>
 </div>`
        }
        $(".items").html(showCat)
        $(".items").css("display", "flex")
        $("#search-row").css("visibility", "hidden")
        $("#contact").css("display", "none")
        geting()
    }
    )
}
/************************ End Area ************************/
/************************Start ingredients ************************/
async function fatchApiIng() {
    let api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    let ingResponse = await fetch(api)
    ingResponse = await ingResponse.json()
    return ingResponse.meals
}
fatchApiIng()
async function Ingredients() {
    closeNav()
    $(".loading").fadeIn(100)
    let Ingredient = await fatchApiIng()
    $(".loading").fadeOut(100)
    let Ingredients = ""
    for (let i = 0; i < 20; i++) {
        Ingredients += ` <div class="col-md-6 col-lg-3 shadow text-center ing">
        <div class="ingre">
        <i class="fa-solid fa-bowl-food fa-3x"></i>
        <h2>${Ingredient[i].strIngredient}</h2>
        <p>${Ingredient[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
        </div>
    </div>`
    }
    $(".items").html(Ingredients)
    $(".items").css("display", "flex")
    $("#search-row").css("visibility", "hidden")
    $("#contact").css("display", "none")
    getfood()
}
document.getElementById("Ingredients").addEventListener("click", Ingredients)
function getfood() {
    $(".ingre").click(async function () {
        let that = $(this).find("h2").text()
        $(".loading").fadeIn(100)
        let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${that}`
        let catResponse = await fetch(api)
        catResponse = await catResponse.json()
        catResponse = catResponse.meals
        $(".loading").fadeOut(100)
        let showCat = ""
        for (let i = 0; i < catResponse.length; i++) {
            showCat += `<div class="col-md-6 col-lg-3 my-3 shadow">
         <div class="catstr">
             <img class="w-100 rounded" src="${catResponse[i].strMealThumb}" alt="${catResponse[i].idMeal}">
             <div class="layer d-flex align-items-center">
                 <h2 class="p-2 text-center">${catResponse[i].strMeal}</h2>
             </div>
         </div>
     </div>`
        }
        $(".items").html(showCat)
        $(".items").css("display", "flex")
        $("#search-row").css("visibility", "hidden")
        $("#contact").css("display", "none")
        geting()
    }
    )
}

/************************ end ingredients ************************/

/**********************  start contact ****************************/
document.getElementById("ContactUs").addEventListener("click", contact)
function contact() {
   closeNav() 
    $("#contact").css("display", "flex")
    $(".items").css("display", "none")
    $("#search-row").css("visibility", "hidden")
}
let rejexName =  /^([A-Z]|[a-z]){3,20}$/;
let inputName = document.getElementById("Name")
inputName.onkeyup = function () {
    if (rejexName.test(inputName.value) == true) {
        $("#name").css("display", "none");
        $("#Name").addClass("is-valid")
        $("#Name").removeClass("is-invalid")
    }
    else {
        $("#name").css("display", "block");
        $("#Name").addClass("is-invalid")
        $("#Name").removeClass("is-valid")
    }

}

let rejexEmail = /@([a-z]|[A-Z]){5,10}(\.com)$/;
let inputEmail = document.getElementById("Email")
inputEmail.onkeyup = function () {
    if (rejexEmail.test(inputEmail.value) == true) {
        $("#email").css("display", "none");
        $("#Email").addClass("is-valid")
        $("#Email").removeClass("is-invalid")
    }
    else {
        $("#email").css("display", "block");
        $("#Email").addClass("is-invalid")
        $("#Email").removeClass("is-valid")
    }
}
let rejexPhone = /^01[0125][0-9]{8}$/
let inputPhone = document.getElementById("Phone")
inputPhone.onkeyup = function () {
    if (rejexPhone.test(inputPhone.value) == true) {
        $("#phone").css("display", "none");
        $("#Phone").addClass("is-valid")
        $("#Phone").removeClass("is-invalid")
    }
    else {
        $("#phone").css("display", "block");
        $("#Phone").addClass("is-invalid")
        $("#Phone").removeClass("is-valid")
    }
}

let rejexAge = /^[1-9][0-9]?$|^100$/;
let inputAge = document.getElementById("Age")
inputAge.onkeyup = function () {
    if (rejexAge.test(inputAge.value) == true) {
        $("#age").css("display", "none");
        $("#Age").addClass("is-valid")
        $("#Age").removeClass("is-invalid")
    }
    else {
        $("#age").css("display", "block");
        $("#Age").addClass("is-invalid")
        $("#Age").removeClass("is-valid")
    }
}

let rejexPassword =/^.{5,15}$/;
let inputPassword = document.getElementById("Password")
inputPassword.onkeyup = function () {
    if (rejexPassword.test(inputPassword.value) == true) {
        $("#password").css("display", "none");
        $("#Password").addClass("is-valid")
        $("#Password").removeClass("is-invalid")
    }
    else {
        $("#password").css("display", "block");
        $("#Password").addClass("is-invalid")
        $("#Password").removeClass("is-valid")
    }
}

let inputRePassword = document.getElementById("Repassword")
inputRePassword.onkeyup = function () {
    if (inputPassword.value == inputRePassword.value) {
        $("#repassword").css("display", "none");
        $("#Repassword").addClass("is-valid")
        $("#Repassword").removeClass("is-invalid")
    }
    else {
        $("#repassword").css("display", "block");
        $("#Repassword").addClass("is-invalid")
        $("#Repassword").removeClass("is-valid")
    }
}
function sub() {
    if (rejexName.test(inputName.value) == true && rejexEmail.test(inputEmail.value) == true && rejexPhone.test(inputPhone.value) == true && rejexAge.test(inputAge.value) == true && rejexPassword.test(inputPassword.value) == true && inputPassword.value == inputRePassword.value) {
        document.getElementById("submitBtn").disabled = false;
    }
    else {
        document.getElementById("submitBtn").disabled = true;
    }
    setTimeout(sub, 100);
}
sub()
/********************** End contact ****************************/

