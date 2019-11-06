var availableTags = ['Plastic Free', 'Zero Waste', 'Plant Based', 'Health & Wellbeing', 'Sustainable Dining', 'Upcycling', 'Other']

var places = [
  {
    name: "Harriet's of Hove",
    coords: [50.8313074,-0.1751294],
    address: "48 Blatchington Road, Hove, BN3 3YH",
    shortDescription: "Plastic free pantry and refill store",
    thumbnail: "Images/media/harrietsofhove1.jpg",
    businessLogo: "Images/media/harrietsofhoveroundlogo.png",
    openingHours: [
      "Mon-Wed 9am-5pm",
      "Thurs 9am-7pm",
      "Fri 9am-5pm",
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
      "Zero Waste",
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
      "Zero Waste",
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
      "Zero Waste",
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
    ],
    tags: [
      "Zero Waste",
    ],	
  },
  {
    name: "The Captain Pig",
    coords: [50.8243355,-0.1405033],
    address: "10 Church Street, Brighton, BN1 1US",
    shortDescription: "Vegan store with refill section and plastic free options",
    thumbnail: "Images/media/thecaptainpig.jpg",
    businessLogo: "Images/media/thecaptainpiglogo.png",
    openingHours: [
      "Mon CLOSED",
      "Tues-Sat 10am-6pm",      
      "Sun 11am-5pm",
    ],
    websiteLink: "https://www.facebook.com/TheCaptainPig.BrightonVeganShop/",
    longDescription: [
      "Brighton's 1st Vegan grogery store. Here you can find vegan staples and goodies, an opportunity to buy local produce, organic fruit and vegetables, all at a minimum waste, with a refill station.",
    ],
    photos: [
      "Images/media/thecaptainpig2.jpg",
      "Images/media/thecaptainpig3.jpg",
    ],
    tags: [
      "Plant Based", 
      "Zero Waste",	
    ],	
    displayTags: [
      "Plant Based", 
      "Zero Waste Options",
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
      "Images/media/earthandstars2.jpeg",
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
    businessLogo: "Images/media/woodstorelogo.jpg",  
    openingHours: [
      "Mon-Sat 9am-5pm",    
      "Sundays and Bank Holidays 11am-4pm",
    ],  
    websiteLink: "https://www.woodrecycling.org.uk/",
    longDescription: [
      "The Wood Store is the trading name of Brighton & Hove Wood Recycling Project. We are a not-for-profit social enterprise and our aims are to help protect the environment by saving resources, and to change lives by providing jobs, training and volunteering opportunities for local people - especially for those who might be marginalised from the job market or suffer other forms of social exclusion.",
      "Established in 1998, Brighton & Hove Wood Recycling Project was first scheme of its kind in the country; an organisation committed to finding a way to reuse waste timber….. seeing it for what it really is……. Not a waste but a precious resource!",
      "At the Wood Store you can buy a variety of wood for all your projects, as well as beautifully crafted furniture in their shop.",
    ],
    photos: [
      "Images/media/woodstore2.jpg",
      "Images/media/woodstore3.jpg",
    ],
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
    businessLogo: "Images/media/backwoodcafelogo.jpg",
    openingHours: [
      "Mon-Fri 7:30am-6pm",
      "Sat-Sun 8am-6pm"      
    ],
    websiteLink: "https://www.gobackwood.com/",
    longDescription: [
      "BackWood café/bar serves homemade food and drink made on site. BackWood is committed to sourcing our produce and ingredients sustainably, and locally where possible.",
      "They minimise waste, compost and encourage re-use, including setting up their own coffee cup loan scheme."
    ],
    photos: [
      "Images/media/backwood1.jpeg",
      "Images/media/backwood2.jpeg"
    ],
    tags: [
      "Sustainable Dining",
      "Plant Based",	
      "Zero Waste",
    ],
    displayTags: [
      "Plant Based Options", 
      "Sustainable Dining",
      "Zero Waste",
    ]
  },
  // {
  //   name: "Responsible Travel",
  //   coords: [50.8231784,-0.1424923],
  //   address: " 1st floor, Edge House, 42 Bond Street, Brighton, BN1 1RD, U",
  //   shortDescription: "Travel company with a strong emphasis on eco-friendly and ethnical travel",
  //   thumbnail: "Images/media/responsibletravel.jpg",
  //   businessLogo: "Images/media/responsibletravel.jpg",
  //   openingHours: [
  //     "Mon-Fri 9am-5pm",     
  //   ],
  //   websiteLink: "https://www.responsibletravel.com/",
  //   longDescription: [
  //     "Responsible Travel want to make tourism a more caring industry and lead by example in responsible tourism.",
  //     "They are an activist travel company offering responsible holidays and are transparent in their impact. They are passionate about campaiging for a more caring and to help protect the world, cultures and wildlife from unethical practices and irresponsible tourism.",
  //     "They sell holidays designed to maximise the benefit and minimise the harm involved in tourism. The holidays they offer are screened for their compliance with environmental, social and economic criteria with an emphasis on grassroot initiatives and local providers.",
  //   ],
  //   photos: [
  //     "Images/media/responsibletravel1.jpeg",
  //     "Images/media/responsibletravel2.jpeg"
  //   ],
  //   tags: [
  //     "Other",	
  //   ],
  // }, 
  {
    name: "V360 Icecreams",
    coords: [50.8210303,-0.1480986],
    address: "Kings Road Arches, 112, Brighton BN1 2LN",
    shortDescription: "Vegan icecream and sorbet shop",
    thumbnail: "Images/media/v360.jpg",
    businessLogo: "Images/media/v360logo.jpg",  
    openingHours: [
      "Mon-Thurs 12pm-5.45pm",    
      "Fri-Sun 12pm-6.45pm",
    ],  
    websiteLink: "https://www.facebook.com/v360vegancafe",
    longDescription: [
      "An all vegan icecream and sorbet shop, including their own locally made plant-based Mr Whippys.",
    ],
    photos: [
      "Images/media/v3601.jpg",
      "Images/media/v3602.jpg",
    ],
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
    businessLogo: "Images/media/ecogym.png",  
    openingHours: [
      "Mon-Fri 6am-9pm",
      "Sat-Sun 9am-6pm",
    ],  
    websiteLink: "http://eco-gym.co.uk/",
    longDescription: [
      "The Eco Gym in Brighton and Lancing advocating making a positive difference for the planet and a healthy lifestyle.",
    ],
    photos: [
      "Images/media/ecogym1.jpeg",
      "Images/media/ecogym2.jpeg",
    ],
    tags: [
      "Health & Wellbeing",	
    ],
  },
  {
    name: "Magpie Recycling Co-Operative",
    coords: [50.8384379,-0.1269937],
    address: "Shabitat, Saunders Park, Brighton, BN2 4AE",
    shortDescription: "Offering a wide range of recycling services, furniture collections and their second-hand furniture shop, Shabitat.",
    thumbnail: "Images/media/magpierecycling.jpeg",
    businessLogo: "Images/media/magpierecycling.jpeg",  
    openingHours: [
      "Shabitat Opening Hours",
      "Mon-Fri 9am-5pm",
      "Sat-Sun 11am-5pm",
    ],  
    websiteLink: "https://magpie.coop/",
    longDescription: [
      "Magpie collects your reusable unwanted furniture their warehouse, Shabitat.",
      "Shabitat is their warehouse shop where you can find affordable furniture, electrical goods, quality second-hand clothes and homeware, as well as Magpie Recycling giving back to the local community through their Homeless Furniture Project",
      "Magpie Recycling also offer both a Greenbox and recycling opt-in scheme, collected by their converted green, electric milk floats where possible. They collect a wider range of materials than the council recycling, including taking most types of plastics, textiles, tetra packs/juice cartons & aluminium tin foil. Being that you can ensure that these items are not being put into household waste", 
      "As well as this they don't ship any of the collected materials abroad ensuring everything collected is recycled as locally as possible.",
      "Magpie Recylcing also offer recycling serves for the Brighton & Hove area.This service includes confidential shredding, collection of a variety of grades of office paper, cans, plastics, tetra pak, foil, cardboard, and much more.",
    ],
    photos: [
      "Images/media/magpie1.jpg",
      "Images/media/magpie2.jpg",
    ],
    tags: [
      "Other",	
    ],
  },
  {
    name: "Kernel of Hove",
    coords: [50.825083, -0.175211],
    address: "2 Victoria Terrace, Hove BN3 2WB",
    shortDescription: "Vegetarian & vegan wholefood shop, offering a great selection of healthy and alternative products.",
    thumbnail: "Images/media/kernelofhove.jpg",
    businessLogo: "Images/media/kernelofhove.jpg",  
    openingHours: [
      "Mon-Sat 9am-6pm",
      "Sun 10am-4pm",
    ],  
    websiteLink: "https://www.facebook.com/pg/KernelofHove/about/?ref=page_internal",
    longDescription: [
        "Kernel of Hove is a new Vegetarian, Vegan and free-from wholefood shop offering a great selection of healthy and alternative products and supplements. This includes fresh organic fruit and vegetables.",
        "Every effort is made to stock locally sourced products,reducing food miles and supporting local producers.",
    ],
    photos: [
      "Images/media/kernelofhove1.jpg",
      "Images/media/kernelofhove2.jpg",
    ],
    tags: [
      "Plant Based",	
      "Zero Waste",
    ],
    displayTags: [
      "Plant Based Options", 
      "Zero Waste Options",
    ]
  },
  {
    name: "Down to Earth",
    coords: [50.833274, -0.184159],
    address: "128 Portland Rd, Hove BN3 5QL",
    shortDescription: "Independent vegetarian health food store renowned for providing high quality and innovative natural health products.",
    thumbnail: "Images/media/downtoearth.jpg",
    businessLogo: "Images/media/downtoearth.jpg",  
    openingHours: [
      "Mon-Fri 9am-6pm",
      "Sat 9am-5.30pm",
      "Sun 10am-4pm",
    ],  
    websiteLink: "http://www.downtoearth-hove.co.uk/",
    longDescription: [
      "Down to Earth is Brighton and Hove's premier independent vegetarian health food store renowned for providing high quality and innovative natural health products. Their aim is to provide quality organic, natural and ethical health products from the most trusted brands.",
      "Here they sell organic wholefoods, environmentally friendly household products, natural baby and skincare ranges, nutritional supplements, herbal remedies and much more.",
      "They also stock an increasing range of Fairtrade products supporting independent producers near and far.",
    ],
    photos: [
      "Images/media/downtoearth1.jpg",
      "Images/media/downtoearth2.jpg",
    ],
    tags: [
      "Plant Based",	
      "Zero Waste",
    ],
    displayTags: [
      "Plant Based Options",	
      "Zero Waste Options",
    ]
  },
  {
    name: "Purezza Brighton",
    coords: [50.821088, -0.135173],
    address: "12 St James's St, Brighton, BN2 1RE",
    shortDescription: "Plant-based pizza restaurant wood firing its own sour, hemp and gluten free doughs.",
    thumbnail: "Images/media/purezza.jpg",
    businessLogo: "Images/media/purezzalogo.jpg",  
    openingHours: [
      "Sun-Thurs 12pm-10pm",    
      "Fri-Sat 12pm-11pm",
    ],  
    websiteLink: "https://purezza.co.uk/",
    longDescription: [
      "Purezza was founded in 2015, becoming the first vegan pizzeria in the UK. They are plant pioneers, revolutionising Italian food through cruelty free ingredients. ",
      "At Purezza they have developed delicious cheeses including mozzarella, made from brown rice and cashew cheeses, that really melt.",
      "The dough is freshly made each day, and diners are given the choice of bases, including a gluten free option.",
      "Purezza also offer a range of plant-based sides, other Italian dishes, desserts and drinks.",
    ],
    photos: [
      "Images/media/purezza1.jpg",
      "Images/media/purezza2.jpg",
    ],
    tags: [
      "Plant Based",
    ],
  },
  {
    name: "Eden Perfumes",
    coords: [50.825461, -0.139380],
    address: "26 Gardner Street, Brighton, BN1 1UP",
    shortDescription: "Cruetly free and vegan alternative to your favourite perfume fragrances.",
    thumbnail: "Images/media/edenperfumes.jpg",
    businessLogo: "Images/media/edenperfumeslogo.png",  
    openingHours: [
      "Mon-Fri 10am-6pm",
      "Sat 10am-7pm",
      "Sun 11am-5pm",
    ],  
    websiteLink: "https://www.edenperfumes.co.uk/",
    longDescription: [
      "Eden Perfumes are 100% vegan ingredients and use botanticals and essential oils, with no nasty synthetic preservatives, no parabens, no phthalates to create perfumes and aftershaves similar to your favourite popular fragrance.",
      "Their fragrances come in glass bottles, that can be refilled, offering a discount to those that choose this option.",
    ],
    photos: [
      "Images/media/edenperfumes1.jpeg",
      "Images/media/edenperfumes2.jpg",
    ],
    tags: [
      "Health & Wellbeing",	
      "Plant Based",
      "Zero Waste",
    ],
  },
  {
    name: "Eden Perfumes",
    coords: [50.8242267,-0.1499512],
    address: "69 Western Road, Brighton, BN1 2HA",
    shortDescription: "Cruetly free and vegan alternative to your favourite perfume fragrances.",
    thumbnail: "Images/media/edenperfumes.jpg",
    businessLogo: "Images/media/edenperfumeslogo.png",  
    openingHours: [
      "Mon-Sat 10.30am-7pm",
      "Sun 11am-5pm",
    ],  
    websiteLink: "https://www.edenperfumes.co.uk/",
    longDescription: [
      "Eden Perfumes are 100% vegan ingredients and use botanticals and essential oils, with no nasty synthetic preservatives, no parabens, no phthalates to create perfumes and aftershaves similar to your favourite popular fragrance.",
      "Their fragrances come in glass bottles, that can be refilled, offering a discount to those that choose this option.",
    ],
    photos: [
      "Images/media/edenperfumes1.jpeg",
      "Images/media/edenperfumes2.jpg",
    ],
    tags: [
      "Health & Wellbeing",	
      "Plant Based",
      "Zero Waste",
    ],
  },
  {
    name: "Bird & Blend Tea Co.",
    coords: [50.825035, -0.139383],
    address: "41 Gardner Street, Brighton, BN1 1UN",
    shortDescription: "Bird & Blend Tea Co. is an independent, award-winning, tea company on a mission to spread happiness & reimagine tea.",
    thumbnail: "Images/media/birdandblend2.jpeg",
    businessLogo: "Images/media/birdandblend.png",  
    openingHours: [
      "Mon-Fri 10.30am-6pm",
      "Sat 10am-7pm",
      "Sun 11am-5.30pm",
    ],  
    websiteLink: "https://birdandblendtea.com",
    longDescription: [
      "Bird & Blend Tea Co. is an independent, award-winning, tea company on a mission to spread happiness & reimagine tea, with options to buy loose leaf teas, including refilling your own containers.",
    ],
    photos: [
      "Images/media/birdandblend1.jpg",
      "Images/media/birdandblend2.jpeg",
    ],
    tags: [	
      "Plant Based",
      "Zero Waste",
    ],
    displayTags: [
      "Plant Based Options",	
      "Zero Waste Options",
    ]
  },
  {
    name: "Infinity Foods Co-operative",
    coords: [50.8256064,-0.1396397],
    address: "25 North Road, Brighton, BN1 1YA",
    shortDescription: "Organic and ethically led supermarket for vegetarian and vegan produce, plus artisan bakery.",
    thumbnail: "Images/media/infinityfoods1.jpg",
    businessLogo: "Images/media/infinityfoodslogo.jpg",  
    openingHours: [
      "Mon-Sat 9.30am-6pm",
      "Sun 11am-5pm",
    ],  
    websiteLink: "https://infinityfoodsretail.coop/",
    longDescription: [
      "Set in the heart of Brighton’s North Laine, Infinity Foods Shop has large selection of organic and natural vegetarian and vegan foods, cosmetics and household items. Democratically run by its workers.",
      "The store includes sections throughout where you can purchase items without plastic packaging, including fruits and vegetables, pantry food items, household cleaning liquids, soaps, shampoo and condtioners.",
    ],
    photos: [
      "Images/media/infinityfoods2.jpg",
      "Images/media/infinityfoods3.jpg",
    ],
    tags: [	
      "Plant Based",
      "Zero Waste",
    ],
    displayTags: [
      "Plant Based Options",	
      "Zero Waste Options",
    ]
  },
  {
    name: "Olio",
    shortDescription: "Olio is a mobile app for food-sharing, aiming to reduce food waste.",
    thumbnail: "Images/media/olio1.jpg",
    businessLogo: "Images/media/olio1.jpg",  
    websiteLink: "https://olioex.com/",
    longDescription: [
      "OLIO is an app that connects neighbours with each other and with local businesses so surplus food can be shared, not thrown away. This could be food nearing its sell-by date in local stores, spare home-grown vegetables, bread from your baker, or the groceries in your fridge when you go away. For your convenience, OLIO can also be used for non-food household items too.",
      "OLIO is super easy! To make an item available, simply open the app, add a photo, description, and when and where the item is available for pick-up.",
      "To access items, simply browse the listings available near you, request whatever takes your fancy and arrange a pick-up via private messaging.",
    ],
    photos: [
      "Images/media/olio3.jpg",
      "Images/media/olio2.png",
    ],
    tags: [	
      "Zero Waste",
      "Other",
    ],
  },
  {
    name: "Too Good To Go",
    shortDescription: "Too Good To Go is an app fighting food waste.",
    thumbnail: "Images/media/toogoodtogologo.jpg",
    businessLogo: "Images/media/toogoodtogologo.jpg",
    openingHours: [
      "Mon-Sat 9.30am-6pm",
      "Sun 11am-5pm",
    ],    
    websiteLink: "https://toogoodtogo.co.uk",
    longDescription: [
        "Join millions of food waste warriors by downloading Too Good To Go that is fighting food waste. You can buy quality local food for as little as £2 - great food that would otherwise have gone to waste.",
        "Each year, one-third of all food produced worldwide is thrown away. Too Good To Go want to put an end to food waste by creating a world where food produced is food consumed.",
        "On the app you are able to view food items advertised by businesseses that haven't been purchases in the day and need to be eaten, or if you are a business you are able to advertise food items.",
    ],
    photos: [
      "Images/media/toogoodtogo.jpg",
      "Images/media/toogoodtogo2.jpg",
    ],
    tags: [	
      "Zero Waste",
      "Other",
    ],
  },
  {
    name: "Cuttlefish Eco Hair Salon",
    coords: [50.8269828,-0.139307],
    address: "31 Gloucester Road, Brighton, BN1 4AQ",
    shortDescription: "Brighton’s first 'Eco Salon'.",
    thumbnail: "Images/media/cuttlefishsalon.png", 
    businessLogo: "Images/media/cuttlefishsalon.png",  
    websiteLink: "https://www.cuttlefishecosalons.com/",
    openingHours: [
      "Mon, Tues, Sat 10am-6pm",
      "Wed 10am-4pm",
      "Thurs, Fri 10am-7pm",
      "Sun CLOSED",
    ],
    longDescription: [
      "Brighton’s first Eco Salon, Cuttlefish pride themselves on providing a bespoke, eco-friendly experience in a relaxed environment.",
      "Cuttlefish have a strong emphasis on caring for the environment and ensure that they are constantly sourcing what they believe are the cleanest and greenest products available, which are vegan, cruelty free and as sustainable as possible.",
    ],
    photos: [
      "Images/media/cuttlefishsalon2.jpg",
      "Images/media/cuttlefishsalon3.jpg",
    ],
    tags: [	
      "Health & Wellbeing",
    ],
  },
]

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
  if (document.getElementById("chkZeroWaste").checked) {
    selected.push('Zero Waste');
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
  // Set all filters back to deafaults and update the list view
  showListings(availableTags)
  centerMap()
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
  for (var i=0; i < tags.length; i++) {
    var tag = tags[i]
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
    for (var i=0; i < place.openingHours.length; i++) {
      var line = place.openingHours[i]
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
  else{
    resetZoom()
  }
}

function initMap() {
  // debugger
  if (isMobile) {
    mymap = L.map('mapmobile').setView(initialCoordinatesMobile, initialZoom);
  }
  else {
    mymap = L.map('mapdesktop').setView(initialCoordinatesDesktop, initialZoom);
  }

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}{r}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
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

function zoomToMarker(index) {
  var place = places[index]
  if (place.coords) {
    mymap.flyTo(place.coords, 16, {duration: 1.2});
    setTimeout(
      function() {place.marker.bounce(3)
    }, 1200)
  }
}

function resetZoom() {
  mymap.flyTo(initialCoordinatesDesktop, initialZoom, {duration: 1.2});
}

// Initialise app
function init() {
  detectIsMobile()
  initMap()

  if (isMobile) {
    document.getElementById('mapmobile').style.display = 'none'
  }
  showListings(availableTags)

  // if (navigator.userAgent.toLowerCase().indexOf('ipad') > -1) {
  //   var height = document.getElementById('primarysidebar').offsetHeight - document.getElementById('sidebarfilter').offsetHeight
  //   document.getElementById('sidebarlistitems').style.height = height + 'px';
  // }
}

init()
