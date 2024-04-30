document.addEventListener("DOMContentLoaded", function() {
    const veggies = [
        { name: "Tomato", image: "https://via.placeholder.com/100", desc: "Rich in vitamin C and K." },
        { name: "Carrot", image: "https://via.placeholder.com/100", desc: "Great source of beta carotene." },
        { name: "Spinach", image: "https://via.placeholder.com/100", desc: "Loaded with tons of nutrients in a low-calorie package." }
    ];

    const container = document.getElementById('vegetables');
    veggies.forEach(veg => {
        const vegElement = document.createElement('div');
        vegElement.innerHTML = `
            <img src="${veg.image}" alt="${veg.name}">
            <h3>${veg.name}</h3>
            <p>${veg.desc}</p>
        `;
        container.appendChild(vegElement);
    });
});
