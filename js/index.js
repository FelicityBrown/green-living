var availableTags = ['Plastic Free', 'Plant Based', 'Health & Wellbeing', 'Sustainable Dining', 'Upcycling', 'Other']

var places = [
  {
    name: "Harriet's of Hove",
    coords: [50.8313074,-0.1751294],
    address: "48 Blatchington Road, Hove, BN3 3YH",
    shortDescription: "Plastic free pantry and refill store",
    thumbnail: "Images/media/harrietsofhove1.jpg",
    businessLogo: "Images/media/harrietsofhoveroundlogo.png",
    openingHours: [
      "Mon-Thurs 9am-5pm",
      "Fri 9am-7pm",
      "Sat 10am-5pm",
      "Sun 11am-4pm",
    ],
    websiteLink: "https://harrietsofhove.com/",
    longDescription: [
      "Harriet’s of Hove is a food, toiletries and kitchen products refills store with a difference. It is the only completely plastic free packaging shop in Hove and offers shoppers a new experience.",
      "As well as refills, Harriet’s of Hove offers unpackaged seasonal vegetables, a wide range of bamboo products and many more sustainable items for people to rid unnecessary plastics from their daily lives. Whether you are a sustainability expert or simply curious about the environment, Harriet’s of Hove will offer something for everyone, with the focus on helping our Planet.",
    ],
    photos: [
      "Images/media/harrietsofhove2.jpg",
      "Images/media/harrietsofhove3.jpg",
    ],
    tags: [
      "Plastic Free",	
    ],
  },
  {
    name: "HISBE",
    coords: [50.8288957,-0.1357773],
    address: "20-21 York Place, Brighton, BN1 4GU",
    shortDescription: "Plastic free pantry and refill store",
    thumbnail: "Images/media/hisbefrontstore.jpg",
    businessLogo: "Images/media/hisbelogo.jpg",
    openingHours: [
      "Everyday 8am – 9pm",
      "",
    ],
    websiteLink: "https://hisbe.co.uk/",
    longDescription: [
      "HISBE is a shop that aims to do things differently. Instead of bombarding you with hundreds of products all owned by a handful of giant corporations they focus instead on having a range of everyday groceries thoughtfully sourced from small, local producers and brands that trade responsibly, fairly and sustainably.",
      "HISBE has a large selection of package free fruit and vegetables, as well as other packaged free items. So round up you totes and jars to fill up at this vibrant store.",
    ],
    photos: [
      "Images/media/hisbe2.jpg",
      "Images/media/hisbe3.jpg",
    ],
    tags: [
      "Plastic Free",	
    ],
  },
  {
    name: "Wastenot",
    coords: [50.831654,-0.1354634],
    address: "Unit 9, Brighton Open Market, Marshalls Row, BN1 4JU",
    shortDescription: "Plastic free pantry and refill store",
    thumbnail: "Images/media/wastenot.jpg",	
    businessLogo: "Images/media/wastenotlogo.jpg",
    openingHours: [
      "Mon, Tues, Sat",
      "9.30am-5.30pm",
      "",
      "Wed 9am-1pm",
      "",
      "Thurs, Fri 9am-6pm",
      "",
      "Sun and Bank holidays",
      "11am-4pm",
    ],
    websiteLink: "https://wastenot.shop/",
    longDescription: [
      "A fully zero waste shop selling bulk produce, and household items to help you cut down on your waste and reduce your impact on the planet.",
    ],
    photos: [
      "Images/media/wastenot1.jpg",
      "Images/media/wastenot3.jpg",
    ],
    tags: [
      "Plastic Free",	
    ],
  },
  {
    name: "Store",
    coords: [50.8429385,-0.1350116],
    address: "253E Ditchling Road, Brighton, BN1 6JD",
    shortDescription: "Plastic free pantry and refill store",
    thumbnail: "Images/media/storebrightonlogo.png",
    businessLogo: "Images/media/storebrightonlogo.png",
    openingHours: [
      "Mon-Fri 9am-5.30pm",
      "Sat 10am-5.30pm",      
      "Sun 10am-2pm",
    ],
    websiteLink: "https://www.storebrighton.co.uk/",
    longDescription: [
      "Store allows the opportunity for customers to buy  dried food, household essentials, toiletries and bodycare without the need for single use plastic packaging.",
      "Customers are encouraged to bring their own containers (jars, bottles, bags, tubs etc) to refill by weight, only paying for the product, not the packaging.",
    ],
    photos: [
      "Images/media/store1.jpg",
      "Images/media/store2.jpg",
      "Images/media/store3.jpg",
    ],
    tags: [
      "Plastic Free",	
    ],	
  },
  {
    name: "The Captain Pig",
    coords: [50.8243355,-0.1405033],
    address: "10 Church Street, Brighton, BN1 1US",
    shortDescription: "Vegan store with refill section and plastic free options",
    thumbnail: "Images/media/thecaptainpig.jpg",
    businessLogo: "Images/media/thecaptainpiglogo.jpg",
    openingHours: [
      "Mon CLOSED",
      "Tues-Sat 10am-6pm",      
      "Sun 11am-5pm",
      "",
      "",
    ],
    longDescription: [
      "Brighton's 1st Vegan grogery store. Here you can find vegan staples and goodies, an opportunity to buy local produce, organic fruit and vegetables, all at a minimum waste, with a refill station.",
    ],
    photos: [
      "Images/media/thecaptainpig1.jpg",
      "Images/media/thecaptainpig2.jpg",
      "Images/media/thecaptainpig3.jpg",
    ],
    tags: [
      "Plant Based", 
      "Plastic Free",	
    ],	
    displayTags: [
      "Plant Based", 
      "Plastic Free Options",
    ]
  },
  {
    name: "The Earth & Stars Pub",
    coords: [50.8248751,-0.1421102],
    address: "46 Windsor Street, Brighton, BN1 1RJ",
    shortDescription: "Eco-friendly pub with plenty of vegan options",
    thumbnail: "Images/media/earthandstars.jpg",
    businessLogo: "Images/media/earthandstarslogo.png",
    openingHours: [
      "Sun-Thurs 12pm-midnight",
      "Fri-Sat 12pm-1am",      
    ],
    websiteLink: "https://www.earthandstars.pub/",
    longDescription: [
      "Environmentally friendly pub in Brighton, the Earth and Stars is powered by a solar panels, serving organic lager, cider, spirits and wine, offering a rare chance to help save the planet by getting another round in.",
      "This pub also offers a wide range of plant-based meal options.",
    ],
    photos: [
      "Images/media/earthandstars1.jpg",
    ],
    tags: [
      "Plant Based",	
      "Sustainable Dining",	
    ],	
    displayTags: [
      "Plant Based Options", 
      "Sustainable Dining",
    ]	
  },
  {
    name: "The Wood Store Brighton",
    coords: [50.832729, -0.138852],
    address: "Elder Place, Brighton, BN1 4GY",
    shortDescription: "Recycled and reclaimed wood and furniture",
    thumbnail: "Images/media/woodstorefront.jpg",
    tags: [
      "Upcycling",
    ],	
  },
  {
    name: "BackWood Sustainable Café",
    coords: [50.833398, -0.139837],
    address: "3-4 Circus Parade, Brighton, BN1 4GW",
    shortDescription: "Zero waste to landfill, sustainable produce café",
    thumbnail: "Images/media/backwoodcafe.jpg",	
    tags: [
      "Sustainable Dining",
      "Plant Based"	
    ],
    displayTags: [
      "Plant Based Options", 
      "Sustainable Dining",
    ]
  },
  {
    name: "Responsible Travel",
    coords: [50.8231163,-0.1403466],
    address: "46 Windsor Street, Brighton, BN1 1RJ",
    shortDescription: "Travel company with a strong emphasis on eco-friendly and ethnical travel",
    thumbnail: "Images/media/responsibletravel.jpg",
    tags: [
      "Other",	
    ],
  },
  {
    name: "V360 Icecreams",
    coords: [50.8210303,-0.1480986],
    address: "Kings Road Arches, 112, Brighton BN1 2LN",
    shortDescription: "Vegan icecream and sorbet shop",
    thumbnail: "Images/media/v360.jpg",
    tags: [
      "Plant Based",	
    ],
  },
  {
    name: "Eco Gym",
    coords: [50.8206885,-0.1324551],
    address: "39-40 St James’s Street, Brighton, BN2 1RG",
    shortDescription: "Advocating making a positive difference for the planet and a healthy lifestyle",
    thumbnail: "Images/media/ecogym.png",
    tags: [
      "Health & Wellbeing",	
    ],
  },
  {
    name: "Magpie Recycling Co-Operative",
    shortDescription: "Offering a wide range of recycling services, furniture collections and their furniture shop, Shabitat.",
    thumbnail: "Images/media/magpierecycling.jpeg",
    tags: [
      "Other",	
    ],
  },
]

var mymap = null
var markerGroup = null

var isMobile = false
var mobileShowingMap = false


// Sort the array of places alphabetically by name
function compare(a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  }
  else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

places.sort(compare);

function filter() {
  var selected=[]
  if (document.getElementById("chkPlasticFree").checked) {
      selected.push('Plastic Free');
  }
  if (document.getElementById("chkPlantBased").checked) {
      selected.push('Plant Based');
  }
  if (document.getElementById("chkHealthandWellbeing").checked) {
      selected.push('Health & Wellbeing');
  }
  if (document.getElementById("chkSustainableDining").checked) {
      selected.push('Sustainable Dining');
  }
  if (document.getElementById("chkUpcycling").checked) {
      selected.push('Upcycling');
  }
  if (document.getElementById("chkOther").checked) {
      selected.push('Other');
  }
  showListings(selected)
}

function resetFilters(e) {
  // Set all filters back to deafaults and update the list view
  showListings(availableTags)
}

function showHiddenSidebar(index) {
  // Given an index of a place, update the sidebar details with the place info, then display it
  var el = document.getElementById('sidebarcolumn')
  var place = places[index]
  document.getElementById('sidebarplacename').innerText = place.name

  // Tags
  var tags = place.tags
  if (place.displayTags) {
    tags = place.displayTags
  }
  var tagsHtml = ''
  for (tag of tags) {
    tagsHtml += "<span>" + tag + "</span>"
  }
  document.getElementById('sidebartags').innerHTML = tagsHtml

  // Address
  document.getElementById('storeaddress').innerText = place.address
  document.getElementById('storeaddress').innerHTML = null
  if (place.address) {
    var addressHtml = '<img src="Images/static/business.svg"><ul>'+place.address+'</ul>'
    document.getElementById('storeaddress').innerHTML = addressHtml
  }

  // Logo
  document.getElementById('businesslogo').innerHTML = null
  if (place.businessLogo) {
    document.getElementById('businesslogo').innerHTML = '<img src="'+place.businessLogo+'" />'
  }
  
  // Opening hours
  document.getElementById('openinghours').innerHTML = null
  if (place.openingHours) {
    var openingHoursHtml = '<img src="Images/static/calendarsymbol.svg"><ul>'
    for (var line of place.openingHours) {
      openingHoursHtml += line + '<br/>'
    }
    openingHoursHtml += '</ul>'
    document.getElementById('openinghours').innerHTML = openingHoursHtml
  }

  // Website link
  document.getElementById('websitelink').innerHTML = null
  if (place.websiteLink) {
    var websiteLink = '<a href="'+place.websiteLink+'">'+place.websiteLink+'</a>'
    document.getElementById('websitelink').innerHTML = websiteLink
  }

  // Long description
  document.getElementById('longdescription').innerHTML = null
  if (place.longDescription) {
    var longDescriptionHtml = ''
    for (var line of place.longDescription) {
      longDescriptionHtml += '<p>'+line +'</p>'
    }
    document.getElementById('longdescription').innerHTML = longDescriptionHtml
  }

  // Images
  document.getElementById('hiddenimagesrow').innerHTML = null
  if (place.photos) {
    var photosHtml = ''
    for (var photo of place.photos) {
      photosHtml += '<img class="hiddenimages" src="'+photo+'"/>'
    }
    document.getElementById('hiddenimagesrow').innerHTML = photosHtml
  }

  // Add class name, causing CSS to reveal the detailed content
  el.className = 'showinghidden'

  if (isMobile) {
    // Hide FAB as is has fixed positioning
    document.getElementById('fab').style.opacity = '0'
    setTimeout(function() {
      document.getElementById('fab').style.display = 'none'
    }, 200)
  }
}

function hideHiddenSidebar() {
  // Remove class name, causing CSS to hide the detailed content and go back to the list/map view
  var el = document.getElementById('sidebarcolumn')
  el.className = ''

  if (isMobile) {
    // Show FAB again
    document.getElementById('fab').style.display = 'block'
    setTimeout(function() {
      document.getElementById('fab').style.opacity = '1'
    }, 200)
  }
}

function initMap() {
  // debugger
  if (isMobile) {
    mymap = L.map('mapmobile').setView([50.840983, -0.137393], 13.3);
  }
  else {
    mymap = L.map('mapdesktop').setView([50.840983, -0.137393], 13.3);
  }

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 25,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

  markerGroup = L.layerGroup().addTo(mymap);
}

// Update list view and map markers
function showListings(selections) {
  // Clear map markers
  markerGroup.clearLayers()
  
  // Clear detail list results
  var results = document.getElementById("sidebarlistitems")
  results.innerHTML=''

  // Loop over places, adding them to list and map if they match the selected filters
  for (var index in places) {
    var place = places[index]
    var show = false
    for (var selection of selections) {
      if (place.tags.indexOf(selection) > -1) {
        show=true
      }
    }

    // Add place to results if show == true
    if (show) {	
      var result = document.createElement("div")
      var address = ''
      if (place.address) {
        address = '<p class="address">' + place.address + '</p>'
      }
      var tags = place.tags
      if (place.displayTags) {
        tags = place.displayTags
      }
      var tagsHtml = ''
      for (tag of tags) {
        tagsHtml += "<span>" + tag + "</span>"
      }
      result.className = "sidebarlistitem"
      result.innerHTML = "<img src=\"" + place.thumbnail + "\"/>\
                          <div class=\"sidebartext\">\
                              <h3>" + place.name + "</h3>"
                              + address +
                              "<p class=\"growparagraph\">" + place.shortDescription + "</p>" +
                              "<div class=\"filtertags\">" + tagsHtml + "</div>"
                          "</div>"
      
      // onClick event calls showHiddenSidebar() with current place index
      result.onclick=function(index) {
        showHiddenSidebar(index)
      }.bind(this, index)

      // Add result to DOM
      results.appendChild(result)
      
      // Add marker pin to markerGroup so it shows on map and can be cleared later
      if (place.coords) {
        var markerContent = '<img src="' + place.thumbnail + '" onclick="showHiddenSidebar(' + index + ')" />'
        markerContent += '<div>'

        markerContent += '<h2 onclick="showHiddenSidebar(' + index + ')">' + place.name + '</h2>'
        if (isMobile) {
          markerContent += '<span class="link" onclick="showHiddenSidebar(' + index + ')">Show more</span>'
        }
        markerContent += '</div>'
        markerContent = '<div class="markercontent">' + markerContent + '</div>'

        L.marker(place.coords)
          .bindPopup(markerContent)
          // onClick event which also calls showHiddenSidebar() with current place index
          .on('click', function(index) {
            if (!isMobile) {
              showHiddenSidebar(index)
            }
          }.bind(this, index))
          .addTo(markerGroup);
      }
    }
  }
}

function detectIsMobile() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  console.log('viewport width = ' + w)
  if (w <= 768) {
    isMobile = true
  }
  else {
    isMobile = false
  }
}

function toggleMobileListMap() {
  if (mobileShowingMap) {
    mobileShowingMap = false
    document.getElementById('fablist').style.display = 'none'
    document.getElementById('fabmap').style.display = 'block'
    document.getElementById('sidebarlistitems').style.display = 'block'
    document.getElementById('mapmobile').style.display = 'none'
  }
  else {
    mobileShowingMap = true
    document.getElementById('fabmap').style.display = 'none'
    document.getElementById('fablist').style.display = 'block'
    document.getElementById('sidebarlistitems').style.display = 'none'
    document.getElementById('mapmobile').style.display = 'block'
  }
}

// Initialise app
function init() {
  detectIsMobile()
  initMap()
  if (isMobile) {
    document.getElementById('mapmobile').style.display = 'none'
  }
  showListings(availableTags)
}

init()
