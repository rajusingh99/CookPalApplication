
const recipes= [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    card.appendChild(image);
    
    
    const type = document.createElement("p");
    type.textContent = recipe.type === "veg" ? "Veg" : "Non Veg";
    card.appendChild(type);
    
    const contentBox = document.createElement('div'); 
    contentBox.classList.add('content-box');

    const title = document.createElement("h3");
    title.textContent = recipe.name;
    contentBox.appendChild(title);

    const rating = document.createElement("p");
    const starIcon = document.createElement("span");
    starIcon.innerHTML = "&#9733;"; 
    starIcon.classList.add("star-icon");
    rating.appendChild(starIcon); 
    rating.innerHTML += ` ${recipe.rating}`; 
    contentBox.appendChild(rating);
    card.appendChild(contentBox);

    const timeLikeContainer = document.createElement("div");
    timeLikeContainer.classList.add("time-like-container");

    const time = document.createElement("h3");
    time.classList.add('time');
    time.textContent = `${recipe.time}`;
    timeLikeContainer.appendChild(time);

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-btn", "like")
    likeButton.innerHTML = recipe.isLiked ? "&#x2764;" : "&#x2661;";
    timeLikeContainer.appendChild(likeButton);

    card.appendChild(timeLikeContainer);

    likeButton.onclick = function () {
        recipe.isLiked = !recipe.isLiked;
        likeButton.innerHTML = recipe.isLiked ? "&#x2764;" : "&#x2661;";
    };
    return card;
}

function renderRecipeCards(recipeArray) {
    const recipeCardsContainer = document.getElementById("recipeCards");
    recipeCardsContainer.innerHTML = "";
    recipeArray.forEach((recipe) => {
        const card = createRecipeCard(recipe);
        recipeCardsContainer.appendChild(card);
    });
}
renderRecipeCards(recipes);

document.getElementById("search").addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery)
    );
    renderRecipeCards(filteredRecipes);
});

document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
        const type = this.dataset.type;
        console.log("ratingFilter",type)
        if (type === "all") {
            renderRecipeCards(recipes);
        } else {
            const filteredRecipes = recipes.filter((recipe) => recipe.type === type);
            renderRecipeCards(filteredRecipes);
        }
    });
});

document.querySelectorAll('input[name="rating"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        const ratingFilter = this.value;
        let filteredRecipes;

        if (ratingFilter === "above4.0") {
            filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
        } else if (ratingFilter === "below4.0") {
            filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
        } else {
            filteredRecipes = recipes;
        }
        renderRecipeCards(filteredRecipes);
    });
});
