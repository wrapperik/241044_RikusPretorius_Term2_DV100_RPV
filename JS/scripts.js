let filterarray = [];

let gallaryarray = [
  {
    id: 1,
    name: "The Classic Mars Experience",
    src: "../Assets/Images/flighhtMars.png",
    desc: "Embark on a Mars vacation: red deserts, ancient relics, and towering canyons await. Enjoy low-gravity hiking, rover trips to Olympus Mons, and stargazing under Phobos and Deimos. Unforgettable adventures beckon on the rust-colored landscapes of the Red Planet."
  },

  {
    id: 2,
    name: "Neptune’s Cosmic Dive",
    src: "../Assets/Images/flightNeptune.png",
    desc: "Embark on a voyage to Neptune aboard the 'Neptune Voyager.' Witness surreal vistas of swirling clouds and rings. Experience weightlessness and explore frigid oceans. Engage in thrilling spacewalks, observe celestial phenomena, and savor gourmet space cuisine. An unforgettable adventure awaits, blending luxury with cosmic exploration."
  },

  {
    id: 3,
    name: "The Giant’s Journey (Jupiter)",
    src: "../Assets/Images/flightJupiter.png",
    desc: "Embark on a Jupiter voyage aboard the 'Jupiter Odyssey.' Witness its majestic storms and swirling atmosphere. Dive into metallic hydrogen oceans. Explore its moons, each a world unto itself. Engage in gravity surfing, comet chasing, and space excursions. Experience cosmic wonder in luxury, blending exploration with adventure."
  },

  {
    id: 4,
    name: "Ring Around a Saturn",
    src: "../Assets/Images/flightSaturn.png",
    desc: "Embark on a thrilling voyage to Saturn aboard the 'Saturn Explorer.' Marvel at its iconic rings and turbulent storms. Explore its diverse moons, from icy Enceladus to mysterious Titan, with activities including rover expeditions and cave exploration. Experience the wonders of the cosmos amidst luxurious accommodations, where the thrill of discovery intertwines seamlessly with the excitement of adventure."
  },

  {
    id: 5,
    name: "Uranus Uncharted",
    src: "../Assets/Images/flightUranus.png",
    desc: "Embark on a cosmic adventure to Uranus with our 'Uranus Unveiled' tour. Explore its icy atmosphere and captivating moons. Experience thrilling zero-gravity excursions, witness mesmerizing auroras, and immerse yourself in celestial photography workshops. With luxury accommodations and expert guides, discover the wonders of Uranus in a journey of a lifetime."
  },

  {
    id: 6,
    name: "Moonlight Meander (Moon)",
    src: "../Assets/Images/flightMoon.png",
    desc: "Experience the ultimate lunar getaway with our 'Moonlight Meander' package. Depart Earth's atmosphere aboard the 'Celestial Cruiser' for a short but unforgettable journey to the Moon. Enjoy lunar walks, breathtaking views of Earthrise, and stargazing under the moon's serene glow. Immerse yourself in luxury accommodations amidst the tranquility of space."
  }
];


showgallery(gallaryarray);
document.getElementById("card").innerText = "";

function showgallery(currarray){
  document.getElementById("card").innerHTML = "";
    for(var i=0;i<currarray.length;i++){
      document.getElementById("card").innerHTML += `
      <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
          <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
          <p class="mt-2">${currarray[i].desc}</p>
          <button class="btn btn-primary w-100 mx-auto">Go</button>
        </div>
      </div>
      `
    }
};
//<img src="${currarray[i].src}" width="100%" height="320px" />

document.getElementById("myInput").addEventListener("keyup", function(){
  let text = document.getElementById("myInput").value.toLowerCase();

  filterarray = gallaryarray.filter(function (item) {
    return item.name.toLowerCase().includes(text);
  });

  if(text ===""){
    showgallery(gallaryarray);
  }
  else{
    if(filterarray.lenght === 0){
      document.getElementById("para").style.display = 'block';
      document.getElementById("card").innerHTML = "";
    }
    else{
      showgallery(filterarray);
      document.getElementById("para").style.display = 'none';
    }
  }
});