


fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
.then(res => res.json())
.then (data => {
    // console.log(data)
    displayMealData(data.meals)
   
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});



const displayMealData = (meals) => {
    const mealContainer = document.getElementById("meal-container")

    meals.forEach(meal => {
        const div = document.createElement("div")
        div.classList.add("col-md-3");
        div.classList.add("mt-2");
        div.innerHTML = `
        <div class="card p-3 py-4">
        <div class="text-center"> 
		<img src="${meal.strMealThumb}" width="100" class="rounded-circle">
            <h6 class="mt-2 text-info">${meal.strMeal}</h6>
			<span class="mt-1 clearfix text-light">${meal.strTags}</span>
			
			<div class="row mt-3 mb-3">

                <div class="col-md-6">
                <h6  class="text-info">Meal ID</h6>
                <span class="num"> ${meal.idMeal} </span>
                </div>
			  
			  <div class="col-md-6">
			  <h6 class="text-info">Area</h6>
				<span class="num">${meal.strArea}</span>
			  </div>
			
			</div>
			
			<hr class="line">
			
			
            
			 <div class="profile mt-5">
		</div>
        <button onclick= "mealDetails('${meal.idMeal}')" class="profile_button px-5 btn btn-info text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"> View details</button>
        
        </div>
    </div>
        `
        mealContainer.appendChild(div);


    })
}

const mealDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then (res => res.json())
    .then (data => { 
        const mealDetails = document.getElementById("mealDetails")
        const div = document.createElement("div")
        // console.log(data.meals)
        data.meals.forEach( details => {
            console.log(details.idMeal) 

            document.getElementById("mealId").innerText = details.idMeal
            document.getElementById("meal-img").src = details.strMealThumb
            document.getElementById("mealName").innerText = details.strMeal
            document.getElementById("mealDescription").innerText = details.strInstructions
        })
    })
}


document.getElementById("submitBtn").addEventListener(
    "click" , (event) => {
        const inputSearch = document.getElementById("inputSearch").value;
        fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`)
        .then(res => res.json())
        .then (data => {
            const searchResult = document.getElementById("searchResult");
            console.log(data)
            if(data.meals == null){
                const h4 = document.createElement("h4")
                h4.classList.add("text-center")
                h4.classList.add("text-info")
                h4.innerHTML=`No Meals Found `
                searchResult.appendChild(h4);

            }
            data.meals.forEach(meal => {
                const div = document.createElement("div")
                div.classList.add("col-md-3");
                div.classList.add("mt-2");
        
                div.innerHTML = `
                <div class="card p-3 py-4">
                <div class="text-center"> 
                <img src="${meal.strMealThumb}" width="100" class="rounded-circle">
                    <h6 class="mt-2 text-info">${meal.strMeal}</h6>
                    <span class="mt-1 clearfix text-light">${meal.strTags}</span>
                    
                    <div class="row mt-3 mb-3">

                        <div class="col-md-6">
                        <h6  class="text-info">Meal ID</h6>
                        <span class="num"> ${meal.idMeal} </span>
                        </div>
                    
                    <div class="col-md-6">
                    <h6 class="text-info">Area</h6>
                        <span class="num">${meal.strArea}</span>
                    </div>
                    
                    </div>
                    
                    <hr class="line">
                    
                    
                    
                    <div class="profile mt-5">
                </div>
                <button onclick= "mealDetails('${meal.idMeal}')" class="profile_button px-5 btn btn-info text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"> View details</button>
                
                </div>
            </div>
                `
                searchResult.appendChild(div);
            })

        })
    }
)































// fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//       displayProduct(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


//     const displayProduct = (products) => {
        
//         products.forEach((product) => {
//           console.log(product);
          
//         });
//       };
