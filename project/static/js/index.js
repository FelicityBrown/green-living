var availableTags = ['Plastic Free', 'Plastic Free', 'Plant Based', 'Health & Wellbeing', 'Sustainable Dining', 'Upcycling', 'Clothing', 'Food Waste', 'Other']

var places = []

var mymap = null
var markerGroup = null

var isMobile = false
var mobileShowingMap = false

var initialCoordinatesDesktop = [50.840983, -0.137393]
var initialZoom = 13
var initialCoordinatesMobile = [50.8333872,-0.1526689]

// Sort the array of places alphabetically by name
function compare(a, b) {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();

  var comparison = 0;
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
  if (document.getElementById("chkClothing").checked) {
    selected.push('Clothing');
  } 
  if (document.getElementById("chkChildren").checked) {
    selected.push('Children');
  } 
  if (document.getElementById("chkFoodWaste").checked) {
    selected.push('Food Waste');
  }
  showListings(selected)
  centerMap()
}

function centerMap() {
  if (isMobile) {
    mymap.setView(initialCoordinatesMobile, 13.3);
  }
  else {
    mymap.setView(initialCoordinatesDesktop, 13.3);
  }
}

function resetFilters(e) {
  // Set all filters back to defaults and update the list view
  showListings(availableTags)
  centerMap()
}

function showHiddenSidebar(index, pushHistory) {
  if (pushHistory === undefined) {
    pushHistory = true
  }

  // Given an index of a place, update the sidebar details with the place info, then display it
  var el = document.getElementById('sidebarcolumn')
  var place = places[index]

  document.title = place.name +  ' — Green Living Brighton'
  if (history && pushHistory) {
    history.pushState({placeSlug: place.slug}, place.name +  ' — Green Living Brighton', '/place/' + place.slug + '/')
  }

  // Title
  document.getElementById('sidebarplacename').innerHTML = place.name

  // Tags
  var tags = place.tags
  if (place.displayTags) {
    tags = place.displayTags
  }
  var tagsHtml = ''
  for (var i=0; i < tags.length; i++) {
    var tag = tags[i]
    tagsHtml += "<span>" + tag + "</span>"
  }
  document.getElementById('sidebartags').innerHTML = tagsHtml

  // Address
  document.getElementById('storeaddress').innerText = place.address
  document.getElementById('storeaddress').innerHTML = null
  if (place.address) {
    var addressHtml = '<img src="/static/img/business.svg"><ul itemprop="address">'+place.address+'</ul>'
    if (place.coords) {
      addressHtml + '<meta itemprop="latitude" content="' + place.coords[0] + '" /><meta itemprop="longitude" content="' + place.coords[1] + '" />'
    }
    document.getElementById('storeaddress').innerHTML = addressHtml
  }

  // Logo
  document.getElementById('businesslogo').innerHTML = null
  if (place.businessLogo) {
    document.getElementById('businesslogo').innerHTML = '<img src="'+place.businessLogo+'" itemprop="logo" />'
  }
  
  // Opening hours
  document.getElementById('openinghours').innerHTML = null
  if (place.openingHours) {
    var openingHoursHtml = '<img src="/static/img/calendarsymbol.svg"><ul itemprop="openingHours">'
    for (var line of place.openingHours) {
      openingHoursHtml += line + '<br/>'
    }
    openingHoursHtml += '</ul>'
    document.getElementById('openinghours').innerHTML = openingHoursHtml
  }

  // Website link
  document.getElementById('websitelink').innerHTML = null
  if (place.websiteLink) {
    var websiteLink = '<a href="'+place.websiteLink+'" itemprop="url">'+place.websiteLink+'</a>'
    document.getElementById('websitelink').innerHTML = websiteLink
  }

  // Long description
  document.getElementById('longdescription').innerHTML = null
  if (place.longDescription) {
    var longDescriptionHtml = ''
    for (var i=0; i < place.longDescription.length; i++) {
      var line = place.longDescription[i]
      longDescriptionHtml += '<p>'+line +'</p>'
    }
    document.getElementById('longdescription').innerHTML = longDescriptionHtml
  }

  // Images
  document.getElementById('hiddenimagesrow').innerHTML = null
  if (place.photos) {
    var photosHtml = ''
    for (var i=0; i < place.photos.length; i++) {
      var photo = place.photos[i]
      photosHtml += '<img class="hiddenimages" src="'+photo+'" itemprop="image"/>'
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

function slowHiddenSidebarBySlug(slug, pushHistory) {
  if (pushHistory === undefined) {
    pushHistory = true
  }
  places.find(function(element, index) {
    if (element.slug == slug) {
      showHiddenSidebar(index, pushHistory)
    }
  })
}

function hideHiddenSidebar(pushHistory) {
  if (pushHistory === undefined) {
    pushHistory = true
  }
  // Remove class name, causing CSS to hide the detailed content and go back to the list/map view
  var el = document.getElementById('sidebarcolumn')
  el.className = ''

  document.title = 'Green Living Brighton'
  if (history && pushHistory) {
    history.pushState({placeSlug: null}, 'Green Living Brighton', '/')
  }

  if (isMobile) {
    // Show FAB again
    document.getElementById('fab').style.display = 'block'
    setTimeout(function() {
      document.getElementById('fab').style.opacity = '1'
    }, 200)
  }
  else{
    resetZoom()
  }
}

function initMap() {
  if (isMobile) {
    mymap = L.map('mapmobile').setView(initialCoordinatesMobile, initialZoom);
  }
  else {
    mymap = L.map('mapdesktop').setView(initialCoordinatesDesktop, initialZoom);
  }

  L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    maxZoom: 25,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    id: 'mapbox.streets',
  }).addTo(mymap)

  markerGroup = L.layerGroup().addTo(mymap);
}

// Update list view and map markers
function showListings(selections) {
  // debugger
  // Clear map markers
  markerGroup.clearLayers()
  
  // Clear detail list results
  var results = document.getElementById("sidebarlistitems")
  results.innerHTML=''

  // Loop over places, adding them to list and map if they match the selected filters
  for (var index=0; index < places.length; index++) {
    var place = places[index]
    var show = false
    for (var i=0; i < selections.length; i++) {
      var selection = selections[i]
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
      for (var i=0; i < tags.length; i++) {
        var tag = tags[i]
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
        if (!isMobile) {
          zoomToMarker(index)
        }
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

        place.marker = L.marker(place.coords)
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
    document.getElementById('sidebarlistitemscontainer').style.display = 'block'
    document.getElementById('mapmobile').style.display = 'none'
  }
  else {
    mobileShowingMap = true
    document.getElementById('fabmap').style.display = 'none'
    document.getElementById('fablist').style.display = 'block'
    document.getElementById('sidebarlistitemscontainer').style.display = 'none'
    document.getElementById('mapmobile').style.display = 'block'
  }
}

function zoomToMarker(index) {
  var place = places[index]
  if (place.coords) {
    mymap.flyTo(place.coords, 17.5, {duration: 1.2});
    setTimeout(
      function() {place.marker.bounce(3)
    }, 1200)
  }
}

function zoomToMarkerBySlug(slug) {
  places.find(function(element, index) {
    if (element.slug == slug) {
      zoomToMarker(index)
    }
  })
}

function resetZoom() {
  mymap.flyTo(initialCoordinatesDesktop, initialZoom, {duration: 1.2});
}

function onHistoryChange(event) {
  if (event.state) {
    console.log(event.state)
    if (event.state.placeSlug) {
      slowHiddenSidebarBySlug(event.state.placeSlug, false)
      zoomToMarkerBySlug(event.state.placeSlug)
    }
    else {
      hideHiddenSidebar(false)
      resetZoom()
    }
  }
}

function initModal() {
  if (window.location.search.indexOf('thankyou') > -1) {
    var modalBtn = document.getElementById("modal-btn")
    var modal = document.querySelector(".modal")
    var closeBtn = document.querySelector(".close-btn")
    modal.style.display = "block"
    
    closeBtn.onclick = function(){
      modal.style.display = "none"
    }
    window.onclick = function(e){
      if(e.target == modal){
        modal.style.display = "none"
      }
    }
  }
}

// Initialise app
function init() {
  detectIsMobile()

  if (isMobile) {
    document.getElementById('sidebarlistitemscontainer').style.display = 'none'
    document.getElementById('mapmobile').style.display = 'block'
    initMap()
    document.getElementById('sidebarlistitemscontainer').style.display = 'block'
    document.getElementById('mapmobile').style.display = 'none'
  }
  else {
    initMap()
  }
    
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/places.json')
  xhr.responseType = 'json'
  xhr.send()

  xhr.onload = function() {
    if (xhr.status == 200) {
      places = xhr.response
      showListings(availableTags)
      initModal()
    }
  }

  window.onpopstate = onHistoryChange
}

init()
