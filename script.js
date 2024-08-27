
const recipes= [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://img-global.cpcdn.com/recipes/2f8496835725af3d/680x482cq70/veggies-delight-pizza-recipe-main-photo.webp",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/4._grilled_chicken_with_spicy_guacamole_and_corn_chips-58e1f87.jpg?quality=90&resize=556,505",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcs4VafdtaEK83REdzR7iEYItuDxxgiZUiZw&s",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUqm-KYsC8wxgoivNEC2drQKwgUHFQcb46w&s",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlX1HpzvH7O-7XLup00vpGisbKKy7WyOs89w&s",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hdBJ0-iBfFnxh82o3VfybcjB-fTqS11KQg&s",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazWO2qGAx5W1pJMXgVaE3mDIvwjT3xDTNYg&s",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://www.lilvienna.com/wp-content/uploads/Recipe-easy-mushroom-risotto.jpg",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-KgP0qvEhL-4ibHAq8rKJvJC-3O_5TCJ7Q&s",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQef919EBMAOyD24MVc0diS7e2zAz6tGJDRNw&s",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5oPjuLD94jwOIBHlgRLrPUwzNV9AnoekQA&s",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-eknTr6-IvHWzzqDxgaC7olDTgKkY8Y0qQ&s",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6u2iBO1_N-FqNsChuXsNC7NEA-Bt6zEyQA&s",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JtuhZfwGP3NtJhVxYRjJrvccWFUEBR1WfA&s",
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
