/*The code below creates the slide show for the home page*/
var photos = ["m_a_chase.jpg", "m_a_chase2.png", "m_a_chase3.jpg"];
var currentSlideIndex = 0;

$("#slide").attr("src", "m_a_chase.jpg");

function displaySlide() {
  var file = photos[ currentSlideIndex ];
  $("#slide").attr("src",file);
}

function nextSlide() {
  currentSlideIndex++;
  if( currentSlideIndex >= photos.length ) {
    currentSlideIndex = 0;
  }
  displaySlide();
}

setInterval(nextSlide, 4000);

/*code for the slider on the background page controls map and content*/
var values = ["1869", "1893", "1901", "1904", "1913", "1918", "1924",
"1930", "1963"];
var blurbs = [" Mary Agnes Chase was born on April 29, 1869 in Iroquois Country, Illinois",
"In 1893 she visited the Colombian Exposition in Chicago with her nephew, who was a botanist, and this inspired her to study plants in Northern Illinois",
"In 1901, Chase became a botanical assistant at the Field Museum of Natural History under Charles Frederick Millspaugh, where her work was featured in two museum publications: Plantae Utowanae (1900) and Plantae Yucatanae",
"In 1904 Agnes Chase was hired as a botanical illustrator by the USDA Division of Grain and Forage Plant Investigations in Washington, DC",
"In 1913 Chase embarked on her first research expedition to Brazil.",
"In 1918 Chase was arrested  at the Silent Sentinels rally picketing the White House; she refused bail and was held for 10 days, where she instigated a hunger-strike and was force-fed.",
"In 1924 Chase too her last trip to Brazil where she collected over 20,000 specimens in areas largely ignored by botanists. She increased the worldS knowledge of Brazilian greases by at least 10 percent",
"In 1930 Chase began working at the United States Natural Museum grass .",
"Mary Agnes Chase dies in Bethesda, Maryland in 1963 at the age of 94."
];

var slider = document.getElementById("timeline");
var output = document.getElementById("displayRange");
var output2 = document.getElementById("displayBlurb");
output.innerHTML = values[slider.value];
output2.innerHTML = blurbs[slider.value];
window.onload = function(){
  displayMapByAddress(); //display a map of relevant location
}

slider.oninput = function() {
  output.innerHTML = values[slider.value]; //display the year
  output2.innerHTML = blurbs[slider.value]; //display a blurb about that year

  displayMapByAddress(); //display a map of relevant location
}

function initializeByAddress(location){
  var myOptions={
    zoom: 15,
    center: location,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map= new google.maps.Map(document.getElementById("basic_map"), myOptions);
  var marker= new google.maps.Marker({position: location, map: map});
}

function displayMapByAddress(){
  var locations = ["Iriquois County", "Midway Plaisance Chicago",
  "Field Museum of Natural History", "1400 Independence ave SW Washington, DC",
  "Brazil", "White House", "Brazil", "10th st. and constitution ave nw",
  "Bethesda, MD"];
  var address = locations[slider.value];
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': address},
  function(results, status)
  {
    initializeByAddress(results[0].geometry.location);
  });
}
