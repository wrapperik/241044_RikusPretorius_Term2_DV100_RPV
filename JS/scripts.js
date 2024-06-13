
let filterarray = [];

let gallaryarray = [
  {
    id: 1,
    name: "Mars",
    src: "../Assets/Images/flighhtMars.png",
    desc: "Embark on a Mars vacation: red deserts, ancient relics, and towering canyons await. Enjoy low-gravity hiking, rover trips to Olympus Mons, and stargazing under Phobos and Deimos. Unforgettable adventures beckon on the rust-colored landscapes of the Red Planet.",
  },
  {
    id: 2,
    name: "Neptune",
    src: "../Assets/Images/flightNeptune.png",
    desc: "Embark on a voyage to Neptune aboard the 'Neptune Voyager.' Witness surreal vistas of swirling clouds and rings. Experience weightlessness and explore frigid oceans. Engage in thrilling spacewalks, observe celestial phenomena, and savor gourmet space cuisine. An unforgettable adventure awaits, blending luxury with cosmic exploration."
  },
  {
    id: 3,
    name: "Jupiter",
    src: "../Assets/Images/flightJupiter.png",
    desc: "Embark on a Jupiter voyage aboard the 'Jupiter Odyssey.' Witness its majestic storms and swirling atmosphere. Dive into metallic hydrogen oceans. Explore its moons, each a world unto itself. Engage in gravity surfing, comet chasing, and space excursions. Experience cosmic wonder in luxury, blending exploration with adventure."
  },
  {
    id: 4,
    name: "Saturn",
    src: "../Assets/Images/flightSaturn.png",
    desc: "Embark on a thrilling voyage to Saturn aboard the 'Saturn Explorer.' Marvel at its iconic rings and turbulent storms. Explore its diverse moons, from icy Enceladus to mysterious Titan, with activities including rover expeditions and cave exploration. Experience the wonders of the cosmos amidst luxurious accommodations, where the thrill of discovery intertwines seamlessly with the excitement of adventure."
  },
  {
    id: 5,
    name: "Uranus",
    src: "../Assets/Images/flightUranus.png",
    desc: "Embark on a cosmic adventure to Uranus with our 'Uranus Unveiled' tour. Explore its icy atmosphere and captivating moons. Experience thrilling zero-gravity excursions, witness mesmerizing auroras, and immerse yourself in celestial photography workshops. With luxury accommodations and expert guides, discover the wonders of Uranus in a journey of a lifetime."
  },
  {
    id: 6,
    name: "Moon",
    src: "../Assets/Images/flightMoon.png",
    desc: "Experience the ultimate lunar getaway with our 'Moonlight Meander' package. Depart Earth's atmosphere aboard the 'Celestial Cruiser' for a short but unforgettable journey to the Moon. Enjoy lunar walks, breathtaking views of Earthrise, and stargazing under the moon's serene glow. Immerse yourself in luxury accommodations amidst the tranquility of space."
  }
];

showgallery(gallaryarray);

function showgallery(currarray) {
  const dropdownContainer = document.getElementById("dropdownContainer");
  dropdownContainer.innerHTML = "";

  for (let i = 0; i < currarray.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card-dropdown");
    card.innerHTML = `
      <h4 class="text-capitalize">${currarray[i].name}</h4>
      <p>${currarray[i].desc}</p>
      <button class="btn btn-primary w-100 mx-auto" onclick="navigateToSection(${currarray[i].id})">Go</button>
    `;
    dropdownContainer.appendChild(card);
  }
}

function navigateToSection(id) {
  const sectionId = `linkTo${gallaryarray[id - 1].name.replace(/ /g, '')}`;
  window.location.href = `../PAGES/flights.html#${sectionId}`;
}

document.getElementById("myInput").addEventListener("keyup", function() {
  let text = document.getElementById("myInput").value.toLowerCase();
  let dropdownContainer = document.getElementById("dropdownContainer");

  if (text === "") {
    dropdownContainer.innerHTML = ""; 
    dropdownContainer.style.display = "none";
  } else {
    filterarray = gallaryarray.filter(function(item) {
      return item.name.toLowerCase().includes(text);
    });

    if (filterarray.length === 0) {
      dropdownContainer.innerHTML = "";
      dropdownContainer.style.display = "none";
    } else {
      showgallery(filterarray);
      dropdownContainer.style.display = "block";
    }
  }
});



//Followed a youtube tutorial for the above code: (https://youtu.be/gBluXDKo6d4?si=OEjgQH5cn4CDBS1H)
//Followed a series of youtube tutorials for the code below: (https://youtube.com/playlist?list=PLD9SRxG6ST3HignjcXUX6w8RcT0_b5ihV&si=uuAcjMwVyl9Yo_1c)

let carts = document.querySelectorAll('.bookATripNow');

let flights = [
  {
    name: "The Classic Mars Experience",
    tag: 'marsTrip',
    price: 25000,
    inCart: 0,
  },
  {
    name: "Neptune’s Cosmic Dive",
    tag: 'neptuneTrip',
    price: 45000,
    inCart: 0,
  },
  {
    name: "The Giant’s Journey (Jupiter)",
    tag: 'jupiterTrip',
    price: 65000,
    inCart: 0,
  },
  {
    name: "Ring Around a Saturn",
    tag: 'saturnTrip',
    price: 40000,
    inCart: 0,
  },
  {
    name: "Uranus Uncharted",
    tag: 'uranusTrip',
    price: 65000,
    inCart: 0,
  },
  {
    name: "Moonlight Meander (Moon)",
    tag: 'moonTrip',
    price: 15000,
    inCart: 0,
  }
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(flights[i]);
    totalCost(flights[i]);
    displayCart();
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(flight, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (action === "decrease") {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.querySelector('.cart span').textContent = productNumbers - 1;
  } else {
    if (productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1;
    }
  }

  setItems(flight);
}

function setItems(flight) {
  let cartItems = localStorage.getItem('flightsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[flight.tag] == undefined) {
      flight.inCart = 0;
      cartItems = {
        ...cartItems,
        [flight.tag]: flight
      }
    }
    cartItems[flight.tag].inCart += 1;
  } else {
    flight.inCart = 1;
    cartItems = {
      [flight.tag]: flight
    }
  }

  localStorage.setItem("flightsInCart", JSON.stringify(cartItems));
  displayCart();
}

function totalCost(flight, action) {
  let cartCost = localStorage.getItem('totalCost');

  if (action === "decrease") {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - flight.price);
  } else {
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + flight.price);
    } else {
      localStorage.setItem("totalCost", flight.price);
    }
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("flightsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).forEach(item => {
      productContainer.innerHTML += `
        <div class="product" data-tag="${item.tag}">
            <div class="product-title-container">
                <i class="fa-solid fa-circle-xmark" style="color: #7000a3;"></i>
                <span>${item.name}</span>
            </div>
            <div class="price">R${item.price}</div>
            <div class="quantity">
                <i class="fa-solid fa-circle-chevron-left"></i>
                <span>${item.inCart}</span>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
            <div class="total">R${item.inCart * item.price},00</div>
        </div>
      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">Cart Total</h4>
          <h4 class="basketTotal">R${cartCost}</h4>
      </div>
    `;

    manageQuantity();
    deleteButtons();
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.fa-circle-chevron-left');
  let increaseButtons = document.querySelectorAll('.fa-circle-chevron-right');
  let cartItems = localStorage.getItem('flightsInCart');
  cartItems = JSON.parse(cartItems);

  decreaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      let productTag = button.parentElement.parentElement.dataset.tag;
      if (cartItems[productTag].inCart > 1) {
        cartItems[productTag].inCart -= 1;
        cartNumbers(cartItems[productTag], "decrease");
        totalCost(cartItems[productTag], "decrease");
        localStorage.setItem('flightsInCart', JSON.stringify(cartItems));
        displayCart();
      }
    });
  });

  increaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      let productTag = button.parentElement.parentElement.dataset.tag;
      cartItems[productTag].inCart += 1;
      cartNumbers(cartItems[productTag]);
      totalCost(cartItems[productTag]);
      localStorage.setItem('flightsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  });
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.fa-circle-xmark');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('flightsInCart');
  cartItems = JSON.parse(cartItems);

  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      let productTag = button.parentElement.parentElement.dataset.tag;
      let product = cartItems[productTag];
      localStorage.setItem('cartNumbers', productNumbers - product.inCart);
      localStorage.setItem('totalCost', cartCost - (product.price * product.inCart));
      delete cartItems[productTag];
      localStorage.setItem('flightsInCart', JSON.stringify(cartItems));
      displayCart();
      onLoadCartNumbers();
    });
  });
}

onLoadCartNumbers();
displayCart();

//Code for my slider on homepage

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("marsImage");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

