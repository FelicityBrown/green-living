var availableTags = ['Plastic Free', 'Plastic Free', 'Plant Based', 'Health & Wellbeing', 'Sustainable Dining', 'Upcycling', 'Clothing', 'Other']

var places = [
  {
    name: "Harriet's of Hove",
    coords: [50.8313074,-0.1751294],
    address: "48 Blatchington Road, Hove, BN3 3YH",
    shortDescription: "Plastic free pantry and refill store",
    thumbnail: "/media/img/harrietsofhove1.jpg",
    businessLogo: "/media/img/harrietsofhoveroundlogo.png",
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
      "/media/img/harrietsofhove2.jpg",
      "/media/img/harrietsofhove3.jpg",
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
    thumbnail: "/media/img/hisbefrontstore.jpg",
    businessLogo: "/media/img/hisbelogo.jpg",
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
      "/media/img/hisbe2.jpg",
      "/media/img/hisbe3.jpg",
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
    thumbnail: "/media/img/wastenot.jpg",	
    businessLogo: "/media/img/wastenotlogo.jpg",
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
      "/media/img/wastenot1.jpg",
      "/media/img/wastenot3.jpg",
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
    thumbnail: "/media/img/store1.jpg",
    businessLogo: "/media/img/storebrightonlogo.png",
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
      "/media/img/store1.jpg",
      "/media/img/store2.jpg",
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
    thumbnail: "/media/img/thecaptainpig.jpg",
    businessLogo: "/media/img/thecaptainpiglogo.png",
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
      "/media/img/thecaptainpig2.jpg",
      "/media/img/thecaptainpig3.jpg",
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
    thumbnail: "/media/img/earthandstars.jpg",
    businessLogo: "/media/img/earthandstarslogo.png",
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
      "/media/img/earthandstars1.jpg",
      "/media/img/earthandstars2.jpeg",
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
    thumbnail: "/media/img/woodstorefront.jpg",
    businessLogo: "/media/img/woodstorelogo.jpg",  
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
      "/media/img/woodstore2.jpg",
      "/media/img/woodstore3.jpg",
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
    thumbnail: "/media/img/backwoodcafe.jpg",	
    businessLogo: "/media/img/backwoodcafelogo.jpg",
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
      "/media/img/backwood1.jpeg",
      "/media/img/backwood2.jpeg"
    ],
    tags: [
      "Sustainable Dining",
      "Plant Based",	
      "Plastic Free",
    ],
    displayTags: [
      "Plant Based Options", 
      "Sustainable Dining",
      "Plastic Free",
    ]
  },
  {
    name: "V360 Icecreams",
    coords: [50.8210303,-0.1480986],
    address: "Kings Road Arches, 112, Brighton BN1 2LN",
    shortDescription: "Vegan icecream and sorbet shop",
    thumbnail: "/media/img/v360.jpg",
    businessLogo: "/media/img/v360logo.jpg",  
    openingHours: [
      "Mon-Thurs 12pm-5.45pm",    
      "Fri-Sun 12pm-6.45pm",
    ],  
    websiteLink: "https://www.facebook.com/v360vegancafe",
    longDescription: [
      "An all vegan icecream and sorbet shop, including their own locally made plant-based Mr Whippys.",
    ],
    photos: [
      "/media/img/v3601.jpg",
      "/media/img/v3602.jpg",
    ],
    tags: [
      "Plant Based",	
    ],
  },
  {
    name: "Green Gym Group",
    coords: [50.8206885,-0.1324551],
    address: "39-40 St James’s Street, Brighton, BN2 1RG",
    shortDescription: "Advocating making a positive difference for the planet and a healthy lifestyle",
    thumbnail: "media/img/greengymgroup1.jpg",
    businessLogo: "media/img/greengymgrouplogo.jpg",  
    openingHours: [
      "Everyday 6am-10pm",
    ],  
    websiteLink: "https://www.greengymgroup.com",
    longDescription: [
      "The sustainable option. At the Green Gym Group, they believe that taking care of our health should not come at the expense of the planet.",
      "Through state-of-the-art fitness equipment they harness the power of your workout and convert it in to clean reusable electricity.",
      "Working together we can reduce our C02 emissions and the impact we have on the environment.",
      "the Gym is also taking steps towards reducing unnecessary waste.",
      "But don’t let your energy go to waste!",
    ],
    photos: [
      "/media/img/greengymgroup1.jpg",
      "/media/img/ecogym2.jpeg",
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
    thumbnail: "/media/img/magpierecycling.jpeg",
    businessLogo: "/media/img/magpierecycling.jpeg",  
    openingHours: [
      "Shabitat Opening Hours",
      "Mon-Fri 9am-5pm",
      "Sat-Sun 11am-5pm",
    ],  
    websiteLink: "https://magpie.coop/",
    longDescription: [
      "Magpie collects your reusable unwanted furniture at their warehouse, Shabitat.",
      "Shabitat is their warehouse shop where you can find affordable furniture, electrical goods, quality second-hand clothes and homeware, as well as Magpie Recycling giving back to the local community through their Homeless Furniture Project",
      "Magpie Recycling also offer both a Greenbox and recycling opt-in scheme, collected by their converted green, electric milk floats where possible. They collect a wider range of materials than the council recycling, including taking most types of plastics, textiles, tetra packs/juice cartons & aluminium tin foil. Being that you can ensure that these items are not being put into household waste", 
      "As well as this they don't ship any of the collected materials abroad ensuring everything collected is recycled as locally as possible.",
      "Magpie Recylcing also offer recycling serves for the Brighton & Hove area.This service includes confidential shredding, collection of a variety of grades of office paper, cans, plastics, tetra pak, foil, cardboard, and much more.",
    ],
    photos: [
      "/media/img/magpie1.jpg",
      "/media/img/magpie2.jpg",
    ],
    tags: [
      "Other",
      "Clothing",	
    ],
  },
  {
    name: "Kernel of Hove",
    coords: [50.825083, -0.175211],
    address: "2 Victoria Terrace, Hove BN3 2WB",
    shortDescription: "Vegetarian & vegan wholefood shop, offering a great selection of healthy and alternative products.",
    thumbnail: "/media/img/kernelofhove.jpg",
    businessLogo: "/media/img/kernelofhove.jpg",  
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
      "/media/img/kernelofhove1.jpg",
      "/media/img/kernelofhove2.jpg",
    ],
    tags: [
      "Plant Based",	
      "Plastic Free",
    ],
    displayTags: [
      "Plant Based Options", 
      "Plastic Free Options",
    ]
  },
  {
    name: "Down to Earth",
    coords: [50.833081, -0.184046],
    address: "128 Portland Rd, Hove BN3 5QL",
    shortDescription: "Independent vegetarian health food store renowned for providing high quality and innovative natural health products.",
    thumbnail: "/media/img/downtoearth.jpg",
    businessLogo: "/media/img/downtoearth.jpg",  
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
      "/media/img/downtoearth1.jpg",
      "/media/img/downtoearth2.jpg",
    ],
    tags: [
      "Plant Based",	
      "Plastic Free",
    ],
    displayTags: [
      "Plant Based Options",	
      "Plastic Free Options",
    ]
  },
  {
    name: "Purezza Brighton",
    coords: [50.821088, -0.135173],
    address: "12 St James's St, Brighton, BN2 1RE",
    shortDescription: "Plant-based pizza restaurant wood firing its own sour, hemp and gluten free doughs.",
    thumbnail: "/media/img/purezza.jpg",
    businessLogo: "/media/img/purezzalogo.jpg",  
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
      "/media/img/purezza1.jpg",
      "/media/img/purezza2.jpg",
    ],
    tags: [
      "Plant Based",
    ],
  },
  {
    name: "Eden Perfumes",
    coords: [50.825461, -0.139380],
    address: "26 Gardner Street, Brighton, BN1 1UP",
    shortDescription: "Cruelty free and vegan alternative to your favourite perfume fragrances.",
    thumbnail: "/media/img/edenperfumes.jpg",
    businessLogo: "/media/img/edenperfumeslogo.png",  
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
      "/media/img/edenperfumes1.jpeg",
      "/media/img/edenperfumes2.jpg",
    ],
    tags: [
      "Health & Wellbeing",	
      "Plant Based",
      "Plastic Free",
    ],
  },
  {
    name: "Eden Perfumes",
    coords: [50.8242267,-0.1499512],
    address: "69 Western Road, Brighton, BN1 2HA",
    shortDescription: "Cruelty free and vegan alternative to your favourite perfume fragrances.",
    thumbnail: "/media/img/edenperfumes.jpg",
    businessLogo: "/media/img/edenperfumeslogo.png",  
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
      "/media/img/edenperfumes1.jpeg",
      "/media/img/edenperfumes2.jpg",
    ],
    tags: [
      "Health & Wellbeing",	
      "Plant Based",
      "Plastic Free",
    ],
  },
  {
    name: "Bird & Blend Tea Co.",
    coords: [50.825035, -0.139383],
    address: "41 Gardner Street, Brighton, BN1 1UN",
    shortDescription: "Bird & Blend Tea Co. is an independent, award-winning, tea company on a mission to spread happiness & reimagine tea.",
    thumbnail: "/media/img/birdandblend2.jpeg",
    businessLogo: "/media/img/birdandblend.png",  
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
      "/media/img/birdandblend1.jpg",
      "/media/img/birdandblend2.jpeg",
    ],
    tags: [	
      "Plant Based",
      "Plastic Free",
    ],
    displayTags: [
      "Plant Based Options",	
      "Plastic Free Options",
    ]
  },
  {
    name: "Infinity Foods Co-operative",
    coords: [50.8256064,-0.1396397],
    address: "25 North Road, Brighton, BN1 1YA",
    shortDescription: "Organic and ethically led supermarket for vegetarian and vegan produce, plus artisan bakery.",
    thumbnail: "/media/img/infinityfoods1.jpg",
    businessLogo: "/media/img/infinityfoodslogo.jpg",  
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
      "/media/img/infinityfoods2.jpg",
      "/media/img/infinityfoods3.jpg",
    ],
    tags: [	
      "Plant Based",
      "Plastic Free",
    ],
    displayTags: [
      "Plant Based Options",	
      "Plastic Free Options",
    ]
  },
  {
    name: "Olio",
    shortDescription: "Olio is a mobile app for food-sharing, aiming to reduce food waste.",
    thumbnail: "media/img/olio3.png",
    businessLogo: "/media/img/olio1.jpg",  
    websiteLink: "https://olioex.com/",
    longDescription: [
      "OLIO is an app that connects neighbours with each other and with local businesses so surplus food can be shared, not thrown away. This could be food nearing its sell-by date in local stores, spare home-grown vegetables, bread from your baker, or the groceries in your fridge when you go away. For your convenience, OLIO can also be used for non-food household items too.",
      "OLIO is super easy! To make an item available, simply open the app, add a photo, description, and when and where the item is available for pick-up.",
      "To access items, simply browse the listings available near you, request whatever takes your fancy and arrange a pick-up via private messaging.",
    ],
    photos: [
      "/media/img/olio3.jpg",
      "/media/img/olio2.png",
    ],
    tags: [	
      "Plastic Free",
      "Other",
    ],
  },
  {
    name: "Too Good To Go",
    shortDescription: "Too Good To Go is an app fighting food waste.",
    thumbnail: "/media/img/toogoodtogologo.jpg",
    businessLogo: "/media/img/toogoodtogologo.jpg",
    websiteLink: "https://toogoodtogo.co.uk",
    longDescription: [
        "Join millions of food waste warriors by downloading Too Good To Go that is fighting food waste. You can buy quality local food for as little as £2 - great food that would otherwise have gone to waste.",
        "Each year, one-third of all food produced worldwide is thrown away. Too Good To Go want to put an end to food waste by creating a world where food produced is food consumed.",
        "On the app you are able to view food items advertised by businesseses that haven't been purchases in the day and need to be eaten, or if you are a business you are able to advertise food items.",
    ],
    photos: [
      "/media/img/toogoodtogo.jpg",
      "/media/img/toogoodtogo2.jpg",
    ],
    tags: [	
      "Plastic Free",
      "Other",
    ],
  },
  {
    name: "Cuttlefish Eco Hair Salon",
    coords: [50.8269828,-0.139307],
    address: "31 Gloucester Road, Brighton, BN1 4AQ",
    shortDescription: "Brighton’s first 'Eco Salon'.",
    thumbnail: "/media/img/cuttlefishsalon3.jpg", 
    businessLogo: "/media/img/cuttlefishsalon.png",  
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
      "/media/img/cuttlefishsalon2.jpg",
      "/media/img/cuttlefishsalon3.jpg",
    ],
    tags: [	
      "Health & Wellbeing",
    ],
  },
  {
    name: "Bright Moon Weaving Studio",
    shortDescription: "Artist Weaving Studio selling beautiful products made from sustainably sourced wool and other natural materials.",
    thumbnail: "/media/img/brightmoon2.jpg",
    businessLogo: "/media/img/brightmoon2.jpg",
    websiteLink: "https://www.brightmoonweaving.com/",
    longDescription: [
      "Imogen Di Sapia is a British weaver and exhibiting artist-maker in textiles, working with hand-weaving combined with storytelling, folklore and heritage crafts to create her studio textiles.", 
      "At the heart of Imogen’s practice lies the story of the wool, ethical and traceable, from field to final piece.  It starts with a rescue flock of South Downs sheep, whose wool once sheared in Spring would otherwise be destined for compost.",  
      "Instead their fleeces are sent to Cornwall where they are washed in environmentally-friendly processes.",
      "Hand-spinning allows a freedom in blending the soft and springy wool with other ethical fibres, such as flax and silk.",
      "All pieces are made in studio batches; the be placed on the preview list, please email  weaving@brightmoon.co",
    ],
    photos: [
      "/media/img/brightmoon1.jpg",
      "/media/img/brightmoon3.jpg",
    ],
    tags: [
      "Plastic Free",
    ],	
  },
  {
    name: "Brighton Repair Cafe",
    coords: [50.8286042,-0.1291036],
    address: "The Hanover Centre, 33 Southover St, Brighton, BN2 9UD",
    shortDescription: "Bringing people together to give broken objects a second lease of life, all whilst having a chat and have a cuppa.",
    thumbnail: "/media/img/brightonrepaircafe2.jpg",
    businessLogo: "/media/img/brightonrepaircafe2.jpg",
    websiteLink: "https://www.facebook.com/brightonrepcafe",
    openingHours: [
      "Last Saturday of every month",
      "(except December",
      "10.30am-12,30pm",
    ],
    longDescription: [
      "A community spirited and eco-friendly monthly event bringing people together to give broken objects a second lease of life, all whilst having a chat and have a cuppa.",
      "Each month may vary in what expertise is avaliable, so please check what repairs will be avaliable before each event.",
    ],
    photos: [
      "/media/img/brightonrepaircafe3.jpg",
      "/media/img/brightonrepaircafe4.jpg",
    ],
    tags: [
      "Other",
      "Plastic Free",
    ],	
  },
  {
    name: "Neighbour Cafe",
    coords: [50.8271486,-0.1392135],
    address: "95 Gloucester Road, Brighton, BN1 4AP",
    shortDescription: "Modern plant-based & vegetarian cafe bar.",
    thumbnail: "/media/img/neighbourhoodlogo.jpg",
    businessLogo: "/media/img/neighbourhoodlogo.jpg",
    websiteLink: "https://www.neighbourhoodbrighton.co.uk/",
    openingHours: [
      "Sun-Thurs open until 5pm",
      "Fri-Sat open until 10pm"
    ],
    longDescription: [
      "Neighbourhood Cafe was created to bring something a little different to Brighton's North Laine. A friendly neighbourhood cafe bar with a relaxed atmosphere and at its heart a mission to be part of the conversation around good food, looking after our planet and its people.",
      "They love fresh organic food, the School of Life, yoga, Permaculture, cycle rides, being in nature, ethical spending, and sometimes no spending at all, and aim to bring fresh food direct from local farms, field to plate, and get as much veg as they can direct from Ashurst Organics just outside Lewes, and are building relationships with other local organic growers.", 
      "Our other suppliers include Infinity, Ecotricity, the Phone Coop (broadband), they pay Living Wage as a minimum (most paid more) and strive to put sustainability at the heart of the business.",
    ],
    photos: [
      "/media/img/neighbourhood1.jpg",
      "/media/img/neighbourhood2.jpg",
    ],
    tags: [
      "Plant Based",
      "Plastic Free",
    ],	
  },
  {
    name: "Timeless Toys",
    coords: [50.833200, -0.182826],
    address: "103 Portland Road, Hove, BN3 5DP",
    shortDescription: "Made ethical, wooden children's toys.",
    thumbnail: "/media/img/timelesstoys3.jpg",
    businessLogo: "/media/img/timelesstoys.png",
    websiteLink: "https://www.facebook.com/timelesstoysUK/?ref=page_internal",
    openingHours: [
      "Tues-Sat 10am-5pm",
    ],
    longDescription: [
     "Selling the best wooden toys available on the market today for 0-6yr olds. Plastic-free, planet-friendly, sustainable and ethical toys.", 
     "Handcrafted, independently produced. Montessori & Waldorf inspired. Powered by children, not batteries.",
    ],
    photos: [
      "/media/img/timelesstoys1.jpg",
      "/media/img/timelesstoys2.jpg",
    ],
    tags: [
      "Children",
      "Plastic Free",
    ],	
  },
  {
    name: "Sussex Cloth Nappy Library",
    shortDescription: "To help support parents and carers to put their babies and little ones in cloth nappies for a brighter future for all.",
    thumbnail: "/media/img/sussexnappylibrary1.jpg",
    businessLogo: "/media/img/sussexnappylibrary.jpg",
    websiteLink: "https://www.sussexnappylibrary.com/",
    longDescription: [
      "Based in Worthing, Sussex Cloth Nappy Library is a non-profit organization voluntarily run by three mums who are all passionate about cloth nappies, dedicated to help you understand the world of reusable nappies.",
      "They currently have 3 newborn kits, which contain approximately 15 nappies. We also have 9 birth to potty kits, which contain approximately 20 nappies. They include accessories such as liners, reusable wipes and wet bags in the kits.", 
      "To ensure you have a range of nappies to try they have added five different types to the kits. These are pockets, all-in-ones, all-in-twos, two-parters, and flat nappies, and also aim to introduce to use to a number of different brands such as TotsBots, Close Parent Pop-ins, Little Lamb and TJ's Cloth Nappies. This may seem like nappy jargon to you, but don't worry, their team are here to help you grow in knowledge and confidence.",
      "A kit can be hired for a month for £15 and £25 refundable deposit and collected at one of our drop-ins.",
      "To make sure you get the most benefit of your kit SusNappies deliver a thorough consultation at handover, giving you the chance to ask any questions you may have and learn how cloth nappies can work for you and your little one.", 
      "Whilst you are hiring the kits they will send you emails to provide you with tips, advice and discount codes to help you build your own nappy stash, and are also available online to answer any questions and to help resolve any issues you may experience.",
    ],
    photos: [
      "/media/img/sussexnappylibrary1.jpg",
      "/media/img/sussexnappylibrary3.jpg",
    ],
    tags: [
      "Children",
      "Plastic Free",
    ],	
  },
  {
    name: "UK Nappy Network",
    shortDescription: "The UK has a network of Cloth Nappy Libraries that aim to help parents find a nappy solution that works for them.",
    thumbnail: "/media/img/uknappynetworklogo.jpg",
    businessLogo: "/media/img/uknappynetworklogo.jpg",
    websiteLink: "http://www.uknappynetwork.org/",
    longDescription: [
      "Helping you find your local nappy library with their interactive map, as well as providing lots of useful information and tips on their website.",
    ],
    photos: [
      "/media/img/uknappynetwork2.jpg",
      "/media/img/uknappynetwork1.JPG",
    ],
    tags: [
      "Children",
      "Plastic Free",
    ],	
  },
  {
    name: "Brighton Sling Babies",
    coords: [50.8289184,-0.1354623],
    address: "2 Phoenix Place, Brighton, BN2 9ND",
    shortDescription: "A meeting of mums and dads with some babywearing experience who would like to use their gained knowledge to help others progress on their babywearing journey.",
    thumbnail: "/media/img/brightonslingbaby1.JPG",
    businessLogo: "/media/img/brightonslingbaby2.jpg",
    websiteLink: "https://www.facebook.com/brightonslingbabies/",
    openingHours: [
      "Meets first Friday",
      "of every month",
    ],
    longDescription: [
      "A meeting of mums and dads with some babywearing experience who would like to use their gained knowledge to help others progress on their babywearing journey.",
      "They do not sell, promote or endorse any specific carrier type or brand, and we are not affiliated with any sellers. Any and all recommendations are impartial (and sometimes contrary to our individual preferences) and aimed to suit your needs.",
    ],
    photos: [
      "/media/img/brightonslingbaby2.jpg",
      "/media/img/brightonslingbaby1.JPG",
    ],
    tags: [
      "Children",
    ],	
  },
  {
    name: "The Amyverse",
    address: "Shoreham-by-Sea",
    shortDescription: "Wedding stationery, calligraphy, illustrations and handmade cards with minimimal waste.",
    thumbnail: "/media/img/amyverse3.jpeg",
    businessLogo: "/media/img/theamyverselogo.jpg",
    websiteLink: "http://www.theamyverse.com",
    longDescription: [
      "The Amyverse is based in Shoreham-by-Sea and has a unique and fun collection of greeting cards, prints and personalised gifts featuring Amy’s illustrations and beautiful calligraphy.",
      "Amyverse greeting card designs are a little insight to personality, they are playful, silly and sarcastic.",
      "As a small business the Amyverse is committed to minimising waste and being as eco-friendly as possible.",
      "The Amyverse is proud to have taken the Naked Card Pledge and all cards, prints and gifts are packaged and sold without single use plastic cello bags. All designs are printed on card made from 100% recycled paper, turning waste into something new.",
      "The Amyverse is a proud ‘Just a Card Warrior2. The Just a card campaign works to encourage people to support and buy from small and independent businesses",
      "You can buy the Amyverse prints on Etsy www.etsy.com/shop/amyverse",
    ],
    photos: [
      "/media/img/amyverse2.jpg",
      "/media/img/amyverse1.jpg",
    ],
    tags: [
      "Plastic Free",
      // "Independent Business",
    ],
  },  
  {
  name: "Charity Shops",
  shortDescription: "There is a wide variety of charity shops around Brighton & Hove that each have a unique range of preloved items including clothing and homeware.",
  thumbnail: "/media/img/charityshop2.jpg",
  businessLogo: "/media/img/charityshop4.jpg",
  openingHours: [
    "Various opening",
    "hours dependent",
    "upon the shop.",
  ],
  longDescription: [
    "There is a wide variety of charity shops around Brighton & Hove that each have a unisue range of preloved items including clothing and homeware.",
    "By purchasing in charity shops you are also directly supporting charities and the work that they do in the community."
  ],
  photos: [
    "/media/img/charityshop1.jpg",
    "/media/img/charityshop3.jpg",
  ],
  tags: [
    "Clothing",
    "Other",
    "Children",
  ],	
},
{
  name: "The Source Bulk Foods",
  coords : [50.824772, -0.1508854],
  address: "142 Western Road, Brighton, BN1 2LA",
  shortDescription: "The Source is a bulk food shop whereby you can take your own containers, buying as much or as little as you want.",
  thumbnail: "/media/img/thesource1.jpg",
  businessLogo: "/media/img/thesourcelogo.jpg",
  openingHours: [
  "Mon-Fri 9am-8pm",
  "Sat 9am-7pm",
  "Sun 10am-6pm",
  ],
  websiteLink: "www.thesourcebulkfoods.co.uk",
  longDescription: [
  "The Source is a bulk food store helping you to make healthy choices and fight against waste. The store offers hundreds of bulk foods including organic wholefoods, spices, cooking liquids, and oils, healthy snacks and sustainable personal household products. All items are plastic free to make your zero waste journey easier.",
  "You are encouraged to bring your own containers and buy as much as you need, or use the paper bags available.",
  ],
  photos: [
  "/media/img/thesource2.jpg",
  "/media/img/thesource3.jpg",
  ],
  tags: [
  "Plastic Free",
  "Plant Based",
  ],
  displayTags: [
  "Plastic Free", 
  "Plant Based Options",
  ],
},
{
  name: "Kindly of Brighton",
  coords : [50.8312829,-0.1475562],
  address: "110-114 Dyke Road, Hove, BN1 3TE",
  shortDescription: "A sustainable supermarket for the thoughtful people of Brighton.",
  thumbnail: "/media/img/kindly1.jpg",
  businessLogo: "/media/img/kindlylogo.jpg",
  openingHours: [
  "Everyday 9am-9pm ",
  ],
  websiteLink: "www.facebook.com/kindlybrighton",
  // longDescription: [
  // "",
  // ],
  photos: [
  "/media/img/zerowaste1.jpg",
  "/media/img/zerowaste2.jpg",
  ],
  tags: [
  "Plastic Free",
  "Plant Based",
  ],
  displayTags: [
  "Plant Based Options",
  "Plastic Free Options",
  ],
},
{
  name: "Flock Vintage & Handmade",
  coords : [50.826962, -0.137910],
  address: "46 Sydney Street, Brighton, BN1 4EP",
  shortDescription: "Flock specialises in vintage and handmade clothes, stocking a selection of local labels, as well as shelves of vintage textiles haberdashery, and jewellery.",
  thumbnail: "/media/img/flock3.jpg",
  businessLogo: "/media/img/flocklogo.jpg",
  openingHours: [
  "Mon-Fri 10.30am-6pm",
  "Sat 10am-6pm",
  "Sun 11am-5pm",
  ],
  websiteLink: "www.flockbrighton.co.uk",
  longDescription: [
  "Nestled in the heart of Brighton Flock has a fantastic range of vintage clothing and items, alongside hand-tailored clothes and accessories.",
  "Flock stocks the local labels: Pick up Sticks Vintage, Palomita (Amazonian inspired jewellery), The Emperor’s Old Clothes (handmade clothing & accessories with vintage fabrics), Hearts and Guns (clothing made from vintage fabrics), Maria Tilyard Designs (cushions handmade from vintage fabrics), Brighton Lace (underwear made from lace remnants) and Hal of Hove (handmade fragrances and toiletries).",
  ],
  photos: [
  "/media/img/flock4.jpg",
  "/media/img/flock2.jpg",
  ],
  tags: [
  "Upcycling",
  "Clothing",
  "Other",
  ],
},
{
  name: "The Fair shop",
  coords : [50.825323, -0.142882],
  address: "21 Queens Road, Brighton, BN1 3XA",
  shortDescription: "FAIR is one of the only shops in the country to specialise in Fair Trade and ethical fashion, with a great range of womenswear, an expanding range of menswear and products for the home.",
  thumbnail: "media/img/fair3.jpg",
  businessLogo: "media/img/fairlogo.jpg",
  openingHours: [
  "Mon 10am-5pm",
  "Tues-Sat 10am-6pm",
  "Sun 12pm-5pm",
  ],
  websiteLink: "https://thefairshop.co.uk",
  longDescription: [
  "FAIR stock a range of brands with strong ethical credentials, who not only support Fair Trade, but also use environmentally friendly materials and production processes.",
  "FAIR show that there is an alternative to ‘fast fashion’ which has tremendous impact upon the workers and the planet. FAIR focus on ensuring that both people and the planet get the respect that they deserve.",
  "FAIR lovingly select beautiful, individual, quality items for you, your wardrobe, your family and your home to show that Fair Trade and ethical fashion and household goods are stylish, functional and affordable.",
  ],
  photos: [
  "media/img/fair2.jpg",
  "media/img/fair3.jpg",
  ],
  tags: [
  "Clothing",
  ],
  },
  {
    name: "Vegetarian Shoes",
    coords : [50.826447, -0.140065],
    address: "27 Foundry Street, Brighton, BN1 4AT",
    shortDescription: "The Vegetarian Shoe shop is located in the heart of the lanes in Brighton, offering cruelty free friendly footwear.",
    thumbnail: "media/img/vegshoeshop1.jpg",
    businessLogo: "media/img/vegshoeshop.png",
    openingHours: [
    "Mon-Tues, Thurs-Sat 10am-6pm",
    "Wed 1pm-6pm",
    "Sun 11am-5pm",
    ],
    websiteLink: "www.vegetarian-shoes.co.uk",
    longDescription: [
    "The Vegetarian Shoe shop is located in the heart of the lanes in Brighton, offering cruelty free friendly footwear.",
    ],
    photos: [
    "media/img/vegshoeshop1.jpg",
    "media/img/vegshoeshop2.jpg",
    ],
    tags: [
    "Plant Based",
    "Clothing",
    ],
    },
    {
      name: "Our Daily Edit",
      coords : [50.822030, -0.141743],
      address: "23 Ship Street, Brighton, BN1 1AD",
      shortDescription: "ODE stock and support both independent and young designers, who place importance on sustainability and gender-neutral clothing.",
      thumbnail: "media/img/ode2.jpg",
      businessLogo: "media/img/ode.png",
      openingHours: [
      "Mon-Sat 10am-6pm",
      "Sun 11am-5pm",
      ],
      websiteLink: "www.ourdailyedit.com",
      longDescription: [
      "With a carefully curated selection of menswear, womenswear and lifestyle products from across the globe, ODE has cemented its place in the Brighton Lanes – creating a welcoming and laid-back store.",
      "ODE stock and support both independent and young designers, who place importance on sustainability and gender-neutral clothing.",
      ],
      photos: [
      "media/img/ode1.jpg",
      "media/img/ode2.jpg",
      ],
      tags: [
      "Clothing",
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

function showHiddenSidebar(index) {
  // Given an index of a place, update the sidebar details with the place info, then display it
  var el = document.getElementById('sidebarcolumn')
  var place = places[index]
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
    var addressHtml = '<img src="/static/img/business.svg"><ul>'+place.address+'</ul>'
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
    var openingHoursHtml = '<img src="/static/img/calendarsymbol.svg"><ul>'
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

function resetZoom() {
  mymap.flyTo(initialCoordinatesDesktop, initialZoom, {duration: 1.2});
}

function initModal() {
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('thankyou')) {
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
  initMap()

  if (isMobile) {
    document.getElementById('mapmobile').style.display = 'none'
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

}

init()
