async function getDrinks() {

    try {

        const response = await fetch(`${BASE_URL}/drinks`);

        const drinks = await response.json();

        console.log(drinks);

        renderDrinks(drinks);

    } catch (error) {

        console.log(error);

    }

}

function renderDrinks(drinks) {

    let html = "";

    drinks.forEach(drink => {

        html += `
            <div class="col-md-3 mb-4">

                <div class="card shadow h-100">

                    <img src="${drink.image}" 
                         class="card-img-top"
                         height="250"
                         style="object-fit: cover;">

                    <div class="card-body">

                        <h5>${drink.name}</h5>

                        <p>${drink.price} VNĐ</p>

                    </div>

                </div>

            </div>
        `;
    });

    document.getElementById("drinkList").innerHTML = html;

}

getDrinks();