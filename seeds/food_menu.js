/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Remove the data in the food_items
  await knex('food_items').del();

  // Remove the data in the food_types
  await knex('food_types').del();

  // Insert the data to food_types
  await knex('food_types').insert([
    {
      type: 'Appetizer & Salad',
      priority: 0
    },
    {
      type: 'Tempura',
      priority: 1
    },
    {
      type: 'Noodles',
      priority: 2
    },
    {
      type: 'Cooked Don',
      priority: 3
    },
    {
      type: 'Sashimi Don',
      priority: 4
    },
    {
      type: 'Nigiri Sushi',
      priority: 5
    },
    {
      type: 'Maki & Roll',
      priority: 6
    },
    {
      type: 'Temaki',
      priority: 7
    },
    {
      type: 'A La Carte',
      priority: 8
    },
    {
      type: 'Sashimi',
      priority: 9
    },
    {
      type: 'Combination',
      priority: 10
    },
    {
      type: 'Bluefin Special',
      priority: 11
    },
    {
      type: 'Party Setto',
      priority: 12
    },
    {
      type: 'Drinks',
      priority: 13
    }
  ]);

  // Insert the data food_items (Appetizer & Salad)
  await knex('food_items').insert([
    {
      name: "Miso",
      description: "Green onion, tofu.",
      price: 2.0,
      priority: 0,
      type: 'Appetizer & Salad'
    },
    {
      name: "Chicken Karaage",
      description: "Special seasoned boneless fried chicken.",
      price: 10.25,
      priority: 1,
      type: 'Appetizer & Salad'
    },
    {
      name: "Ika Karaage",
      description: "Special seasoned deep-fried squid.",
      price: 12.5,
      priority: 2,
      type: 'Appetizer & Salad'
    },
    {
      name: "Croquette",
      description: "Deep-fried kabocha with a boiled egg thousand island sauce on top.",
      price: 8.5,
      priority: 3,
      type: 'Appetizer & Salad'
    },
    {
      name: "Takoyaki",
      description: "Deep-fried octopus ball on top g- onion, fish flakes, mayo with teriyaki sauce.",
      price: 6.0,
      priority: 4,
      type: 'Appetizer & Salad'
    },
    {
      name: "Gyoza",
      description: "Pan-fried pork dumplings six pieces.",
      price: 7.5,
      priority: 5,
      type: 'Appetizer & Salad'
    },
    {
      name: "Spicy Gyoza",
      description: "Pan-fried pork dumplings six pieces with house spicy sauce.",
      price: 8.25,
      priority: 6,
      type: 'Appetizer & Salad'
    },
    {
      name: "Crispy Gyoza",
      description: "Deep-fried pork dumplings six pieces.",
      price: 7.75,
      priority: 7,
      type: 'Appetizer & Salad'
    },
    {
      name: "Agedashi Tofu",
      description: "Deep-fried tofu, green onion, fish flakes.",
      price: 7.35,
      priority: 8,
      type: 'Appetizer & Salad'
    },
    {
      name: "Chicken Nanban",
      description: "Deep fried Chicken w/house soy sauce, Tartar sauce",
      price: 10.25,
      priority: 9,
      type: 'Appetizer & Salad'
    },
    {
      name: "Gomae",
      description: "Spinach salad with peanut and sesame paste.",
      price: 6.25,
      priority: 10,
      type: 'Appetizer & Salad'
    },
    {
      name: "Edamame",
      description: "Boiled green soybean.",
      price: 6.0,
      priority: 11,
      type: 'Appetizer & Salad'
    },
    {
      name: "Wakame Salad",
      description: "Seaweed salad.",
      price: 5.75,
      priority: 12,
      type: 'Appetizer & Salad'
    },
    {
      name: "Vegetable Sunomono",
      description: "Japanese vinegared salad with vegetables, rice noodle.",
      price: 4.85,
      priority: 13,
      type: 'Appetizer & Salad'
    },
    {
      name: "Ebi Sunomono",
      description: "Japanese vinegared salad with shrimp, rice noodle.",
      price: 5.85,
      priority: 14,
      type: 'Appetizer & Salad'
    },
    {
      name: "Tako Sunomono",
      description: "Japanese vinegared salad with octopus, rice noodle.",
      price: 5.85,
      priority: 15,
      type: 'Appetizer & Salad'
    },
    {
      name: "Seafood Sunomono",
      description: "Japanese vinegared salad with hokkigai, ebi, tako, rice noodle.",
      price: 6.25,
      priority: 16,
      type: 'Appetizer & Salad'
    },
    {
      name: "House Green Salad",
      description: "Fresh mixed vegetables with house dressing.",
      price: 6.75,
      priority: 17,
      type: 'Appetizer & Salad'
    },
    {
      name: "Smoked Salmon Tomato Salad",
      description: "Smoked salmon, slice tomato, onion, organic spring mix, crispy garlic, potato flakes, sweet soy dressing.",
      price: 14.95,
      priority: 18,
      type: 'Appetizer & Salad'
    },
    {
      name: "Seafood Salad",
      description: "Tako, smoked salmon, ebi, crab meat, fish roe, rice noodle, wasabi mayo, house dressing.",
      price: 11.95,
      priority: 19,
      type: 'Appetizer & Salad'
    },
    {
      name: "Udon Salad",
      description: "Cold udon noodle, spring mix, egg, prawn, mussel, hokkigai, scallop.",
      price: 13.95,
      priority: 20,
      type: 'Appetizer & Salad'
    },
    {
      name: "Steamed Rice",
      description: "",
      price: 2.5,
      priority: 21,
      type: 'Appetizer & Salad'
    },
    {
      name: "Sweet and Sour Chicken",
      description: "",
      price: 17.95,
      priority: 22,
      type: 'Appetizer & Salad'
    },
    {
      name: "Spicy Agedashi Tofu",
      description: "Deep-fried tofu, green onion, fish flakes and Spicy Sauce.",
      price: 7.5,
      priority: 23,
      type: 'Appetizer & Salad'
    }
  ]);

  // Insert the data food_items (Tempura)
  await knex('food_items').insert([
    {
      name: "Prawn Tempura (7pcs)",
      description: "",
      price: 13.95,
      image: "",
      priority: 0,
      type: 'Tempura'
    },
    {
      name: "Prawn & Yam Tempura (8pcs)",
      description: "",
      price: 13.95,
      image: "",
      priority: 1,
      type: 'Tempura'
    },
    {
      name: "Assorted Tempura - Full",
      description: "8pcs. Prawn, broccoli, asparagus, yam, zucchini.",
      price: 13.95,
      image: "",
      priority: 2,
      type: 'Tempura'
    },
    {
      name: "Vegetable Tempura - Full",
      description: "8pcs.",
      price: 12.75,
      image: "",
      priority: 3,
      type: 'Tempura'
    },
    {
      name: "Yam Tempura - Full",
      description: "8pcs.",
      price: 12.75,
      image: "",
      priority: 4,
      type: 'Tempura'
    }
  ]);

  // Insert the data food_items (Noodles)
  await knex('food_items').insert([
    {
      name: "Nabeyaki Udon",
      description: "Chicken, pork, egg, prawn tempura, vegetable with stone bowl.",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Noodles'
    },
    {
      name: "Tempura Udon",
      description: "Plain udon with four pieces tempura.",
      price: 12.95,
      image: "",
      priority: 1,
      type: 'Noodles'
    },
    {
      name: "Kitsune Udon",
      description: "Plain.",
      price: 10.95,
      image: "",
      priority: 2,
      type: 'Noodles'
    },
    {
      name: "Cheese Kimchi Udon",
      description: "Hot stone bowl with kimchi, pork, mozzarella cheese, pollack roe.",
      price: 15.5,
      image: "",
      priority: 3,
      type: 'Noodles'
    },
    {
      name: "Creamy Rose' Linguine",
      description: "Japanese style pan-fried seafood udon with olive oil and house tomato sauce.",
      price: 18.25,
      image: "",
      priority: 4,
      type: 'Noodles'
    },
    {
      name: "Mentaiko Tiger Prawn Linguine",
      description: "Cod roe, tiger prawn, scallop, cream sauce.",
      price: 18.25,
      image: "",
      priority: 5,
      type: 'Noodles'
    },
    {
      name: "Chicken Udon",
      description: "",
      price: 13.95,
      image: "",
      priority: 6,
      type: 'Noodles'
    },
    {
      name: "Beef Udon",
      description: "",
      price: 13.95,
      image: "",
      priority: 7,
      type: 'Noodles'
    },
    {
      name: "Veggie Udon",
      description: "",
      price: 10.95,
      image: "",
      priority: 8,
      type: 'Noodles'
    },
    {
      name: "Beef Yakiudon",
      description: "Pan-fried noodles with mushroom, green onion, seaweed.",
      price: 14.5,
      image: "",
      priority: 9,
      type: 'Noodles'
    },
    {
      name: "Chicken Yakiudon",
      description: "Pan-fried noodles with mushroom, green onion, seaweed.",
      price: 14.5,
      image: "",
      priority: 10,
      type: 'Noodles'
    },
    {
      name: "Spicy Yakiudon",
      description: "Beef, vegetable with special spicy sauce.",
      price: 15.5,
      image: "",
      priority: 11,
      type: 'Noodles'
    }
  ]);

  // Insert the data food_items (Cooked Don)
  await knex('food_items').insert([
    {
      name: "Beef Don",
      description: "",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Beef Teriyaki Don",
      description: "",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Chicken Don",
      description: "",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Chicken Teriyaki Don",
      description: "",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Chicken Katsu Don",
      description: "",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Karaage Don",
      description: "Special seasoned boneless fried chicken on rice.",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Chicken Soboro",
      description: "Hot stone bowl with grilled chicken, vege, tempura bits, omelets, sp mayo, teri sauce on rice.",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Kimchi Yaki Rice",
      description: "Hot stone bowl w/ fried kimchi, ham, pork, egg on rice",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    },
    {
      name: "Omurice",
      description: "",
      price: 18.99,
      image: "",
      priority: 0,
      type: 'Cooked Don'
    }
  ]);

  // Insert the data food_items (Sashimi Don)
  await knex('food_items').insert([
    {
      name: "Chirashi Don",
      description: "Assorted sashimi on rice.",
      price: 28.5,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Deluxe Chirashi Don",
      description: "Deluxe sashimi and fish roe on rice.",
      price: 43.5,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Korean Chirashi Don",
      description: "Assorted sashimi on rice with vegetables.",
      price: 29.0,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Salmon Don",
      description: "",
      price: 21.95,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Spicy Salmon Don",
      description: "",
      price: 23.25,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Unagi Don",
      description: "Grilled eel on rice.",
      price: 21.5,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Mixed Spicy Tuna & Salmon Don",
      description: "",
      price: 23.25,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Spicy Tuna Sashimi Don",
      description: "",
      price: 23.25,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Tuna & Salmon Don",
      description: "",
      price: 21.95,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    },
    {
      name: "Tuna Don",
      description: "",
      price: 21.95,
      image: "",
      priority: 0,
      type: 'Sashimi Don'
    }
  ]);

  // Insert the data food_items (Nigiri Sushi)
  await knex('food_items').insert([
    {
      name: "Salmon Nigiri",
      description: "Atlantic.",
      price: 2.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Chopped Scallop Nigiri",
      description: "",
      price: 3.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Unagi Nigiri",
      description: "Eel.",
      price: 3.75,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Tamago Nigiri",
      description: "Egg.",
      price: 2.1,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Ikura Nigiri",
      description: "Salmon roe.",
      price: 3.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Ebi Nigiri",
      description: "Cooked shrimp.",
      price: 2.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Ika Nigiri",
      description: "Squid.",
      price: 3.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Tobiko Nigiri",
      description: "Flying fish eggs.",
      price: 2.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Hamachi Nigiri",
      description: "Yellowtail.",
      price: 4.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Inari Nigiri",
      description: "Bean curd.",
      price: 2.1,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Hotategai Nigiri",
      description: "Scallop.",
      price: 3.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Amaebi Nigiri",
      description: "Sweet shrimp.",
      price: 2.8,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Hokkigai Nigiri",
      description: "Arctic surf clam.",
      price: 2.1,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Masago Nigiri",
      description: "Smelt egg.",
      price: 2.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Wakame Nigiri",
      description: "Seaweed salad.",
      price: 2.1,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Smoked Salmon Nigiri",
      description: "",
      price: 3.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Tako Nigiri",
      description: "Octopus.",
      price: 3.25,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Spicy Chopped Scallop Nigiri",
      description: "",
      price: 3.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Tuna Nigiri",
      description: "Albacore.",
      price: 2.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Toro Nigiri",
      description: "Tuna belly",
      price: 0.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Uni Nigiri",
      description: "Uni Nigiri",
      price: 0.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Hirame Nigiri",
      description: "",
      price: 4.5,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    },
    {
      name: "Shimaaji Nigiri",
      description: "",
      price: 5.0,
      image: "",
      priority: 0,
      type: 'Nigiri Sushi'
    }
  ]);

  // Insert the data food_items (Maki & Roll)
  await knex('food_items').insert([
    {
      name: "Alaska Roll",
      description: "Avocado, cucumber, fish roe, mayo topped with salmon and house dressing.",
      price: 7.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Salmon Mountain Roll",
      description: "Avocado, cucumber, fish roe, prawn tempura, topped with mashed salmon, temp flakes, special mayo, wasabi mayo, teri sauce.",
      price: 13.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Spicy Salmon Roll",
      description: "",
      price: 6.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Double Cheese Roll",
      description: "",
      price: 11.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "California Roll",
      description: "Cucumber, avocado, crabmeat, mayo.",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Dynamite Roll",
      description: "Lettuce, cucumber, avocado, masago, prawn tempura, thousand island sauce.",
      price: 7.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Crunch California Roll",
      description: "Deep-fried California roll with teriyaki sauce.",
      price: 8.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Crunch Calamari Roll",
      description: "Fried squids, chopped celery, onions, mayo, radish sprouts, topped with special mayo, teri sauce, fish roe, potato flake.",
      price: 14.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Salmon King",
      description: "Avocado, cucumber, chopped salmon with special mayo and torched salmon, fish roe, furikake, garlic mayo and special mayo.",
      price: 13.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Crunch House Roll",
      description: "Wrapped seaweed and deep-fried with tuna, salmon, avocado, crabmeat, teriyaki sauce.",
      price: 10.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Dragon Roll",
      description: "Cucumber, tamago, crab meat, topped with unagi, avocado, cooked shrimp, fish roe, teri sauce, mayo, green onions.",
      price: 14.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Caterpillar Roll",
      description: "Prawn tempura, cucumber, mayo, topped with sliced avocado, fish roe, teri sauce.",
      price: 14.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Chicken Teriyaki Roll",
      description: "Chicken teriyaki, lettuce, cucumber, teriyaki sauce.",
      price: 7.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Smoked Salmon Cream Cheese Roll",
      description: "Cream cheese, red pepper, mango, crab meat, mayo, smoked salmon on top.",
      price: 8.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Smoked Salmon Cream Cheese Roll (2)",
      description: "Inari, tamago, bean tempura, cream cheese, cucumber. Smoked salmon on top.",
      price: 8.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Las Vegas Roll",
      description: "Yam, avo, cucumber, crabmeat, sp mayo, fish roe, teri sauce.",
      price: 7.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Sweet Mango Paradise",
      description: "Avocado, cucumber, crab meat, red pepper, mayo, topped with mango, ebi, fish roe, sweet mango sauce.",
      price: 13.25,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Double Spicy Salmon Roll",
      description: "Spicy Salmon, Cucumber, Topped with mashed spicy salmon and crispy flakes.",
      price: 8.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "House Roll",
      description: "Avocado, cucumber, crabmeat, tuna, salmon, tamago, lettuce, mayo, fish roe.",
      price: 9.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Avocado Roll",
      description: "Vegetarian. Avocado, cucumber with mayo.",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Salmon Avocado Roll",
      description: "Cucumber, salmon, avocado.",
      price: 6.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Yam Tempura Roll",
      description: "Vegetarian. Deep-fried yam, avocado, cucumber, lettuce, mayo.",
      price: 6.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Chicken Katsu Roll",
      description: "Chicken cutlet, cabbage, carrot, oshinko, house sauce, sea weed out side.",
      price: 12.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Spicy Bomb Roll",
      description: "Cream cheese, asparagus, deep-fried tuna, green onion, teri and special sauce on top.",
      price: 11.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Crispy Avo Roll",
      description: "Avocado, spicy mayo, teriyaki sauce, crispy flakes on top.",
      price: 7.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Chopped Scallop Roll",
      description: "Chopped scallop with fish roe and mayo.",
      price: 6.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Red Fox Roll",
      description: "2pcs prawn tempura, cucumber, avocado, crabmeat, mayo, mashed Spicy tuna & crispy flake, teri sauce",
      price: 13.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Beef Teriyaki Roll",
      description: "Beef, lettuce, cucumber, avocado, mayo, teri sauce.",
      price: 7.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "French Kiss Roll",
      description: "Crabmeat, cream cheese, avocado, mayo, Salmon, masago, black spicy mayo sauce, fish & tempura flake",
      price: 12.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "BC Roll",
      description: "Grilled salmon skin, crab meat, cucumber, mayo, lettuce, fish roe, unagi sauce on top.",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Rainbow Roll",
      description: "Tamago, cucumber, mayo, topped with tuna, salmon, tako, hokki, cooked shrimp.",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Smoked Salmon Garlic",
      description: "Fish roe, cucumber, avocado, prawn tempura, special mayo. Topped with smoked salmon, crispy garlic.",
      price: 8.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Ultimate Dynamite Roll",
      description: "Lettuce, cucumber, avocado, fish roe, prawn tempura, spicy tuna, thousand island",
      price: 14.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Holla Jalapeño Roll",
      description: "Pickled jalapeño, cucumber, crab stick, bean tempura on top salmon, fish roe, spicy mayo.",
      price: 10.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Salmon Roll",
      description: "",
      price: 3.45,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Mexicana Roll",
      description: "Avocado, cucumber, pickled jalapeño, cream cheese, temp flakes, special mayo.",
      price: 8.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Kappa Roll",
      description: "Cucumber.",
      price: 3.45,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Unagi Roll",
      description: "Grilled eel and cucumber.",
      price: 8.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Smoked Salmon Roll",
      description: "Avocado, lettuce, cucumber, fish roe, mayo, crabmeat, topped with smoked salmon.",
      price: 7.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Vegetable Roll",
      description: "Vegetarian. Avocado with mayo, red pepper, Japanese pickle, carrot, lettuce, cucumber, cabbage, Kanpyo",
      price: 6.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Vege Vege Roll",
      description: "Vegetarian. Mayo, cucumber, deep-fried zucchini, yam, carrot, onion, lettuce.",
      price: 6.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Bill's Roll",
      description: "Smoked salmon, cucumber, lettuce, mayo, deep-fried yam.",
      price: 7.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Spicy Chopped Scallop Roll",
      description: "Chopped Scallop with fish roe and spicy Korean Hot Sauce",
      price: 6.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Tamago Roll",
      description: "Tamago, mayo.",
      price: 3.45,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Don Katsu Roll",
      description: "Deep fried pork, cabbage, carrot, oshinko, house sauce",
      price: 12.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Mango Lassi Roll",
      description: "Cucumber, Masago, Prawn Tempura, Smoked Salmon, Mango, Mango sauce, Wasabi sauce",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Manila Bay Roll",
      description: "Cucumber, Masago, Prawn Tempura, Mayo w/ Torched Salmon, Jalapeno, Mango sauce, Wasabi sauce",
      price: 11.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Smokey Bear Roll",
      description: "California Roll Base w/ Torched chop, SP Mayo, Wasabi Mayo",
      price: 9.0,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Spider Futomaki",
      description: "5oz Soft shell crab, lettuce, cucumber, avocado, Fish Roe, Mayo, Sesame oil.",
      price: 18.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Tiger Roll",
      description: "cucumber, avocado, crabmeat, 2pcs prawn tempura out: avocado, 2pcs cooked ebi, teriyaki & spicy mayo",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Energy Roll",
      description: "Asparagus, avocado, fish roe, mayo. Topped with unagi, teriyaki sauce, and special wasabi mayo sauce.",
      price: 10.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Box Sushi",
      description: "Smoked salmon, cooked shrimp, scallop, avocado, and sliced lemon.",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Russian Roulette",
      description: "Avocado, fish roe, cucumber, banana pepper, prawn tempura, topped with mashed salmon, pickled jalapeño, teri sauce.",
      price: 13.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Unagi Kaba Roll",
      description: "Cucumber, BBQ Unagi, Avocado, Tobiko, Wasabi Mayo, Black Sauce.",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Unagi Ten Roll",
      description: "Asparagus, cucumber, mayo, fish roe, grilled salmon skin topped with deep-fried unagi, green onion, teriyaki sauce, sesame seed.",
      price: 14.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Smoked Salmon Mayo",
      description: "Avocado, crab stick, fish roe, cucumber, prawn tempura, topped with torched smoked salmon and garlic mayo, fish flakes, Teri, spicy mayo.",
      price: 13.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Tuna Battera",
      description: "Topped with torched chopped spicy tuna, pickled jalapeño, garlic mayo.",
      price: 12.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Negihama Roll",
      description: "Chopped hamachi, green onion",
      price: 4.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Osaka Tako Roll",
      description: "Deep fried tako, hokkigai, vegetables topped w/ mayo, bulldog sauce, fish flakes",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Spicy Tuna Roll",
      description: "Spicy tuna, cucumber.",
      price: 6.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Double Spicy Tuna Roll",
      description: "Spicy tuna, cucumber, topped with mashed spicy tuna and crispy flakes.",
      price: 8.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Tuna Roll",
      description: "",
      price: 3.45,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Kiwi Roll",
      description: "",
      price: 10.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Negitoro Roll",
      description: "Chopped toro, green onion.",
      price: 4.75,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Salmonster Roll",
      description: "",
      price: 10.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Aburi Salmon Roll",
      description: "",
      price: 11.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Blue Yuzu Roll",
      description: "",
      price: 12.95,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Scallop Asparagus Tempura Roll",
      description: "Deep fried spicy scallop and tuna, asparagus wrapped in seaweed topped w/ teriyaki sauce, mayo, fish flakes",
      price: 12.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    },
    {
      name: "Pure Boost Roll",
      description: "",
      price: 10.5,
      image: "",
      priority: 0,
      type: 'Maki & Roll'
    }
  ]);

  // Insert the data food_items (Temaki)
  await knex('food_items').insert([
    {
      name: "Chopped Scallop Cone",
      description: "",
      price: 6.35,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Spicy Chopped Scallop Cone",
      description: "",
      price: 6.35,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "California Cone",
      description: "",
      price: 5.65,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Dynamite Cone",
      description: "",
      price: 6.95,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Avo Cone",
      description: "Avocado",
      price: 5.5,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "BC Cone",
      description: "",
      price: 5.65,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Ebi Cone",
      description: "",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Unagi Cone",
      description: "",
      price: 7.95,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Spicy Salmon Cone",
      description: "",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Spicy Tuna Cone",
      description: "",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Negitoro Cone",
      description: "",
      price: 5.5,
      image: "",
      priority: 0,
      type: 'Temaki'
    },
    {
      name: "Uni Cone",
      description: "sea urchins",
      price: 12.95,
      image: "",
      priority: 0,
      type: 'Temaki'
    }
  ]);

  // Insert the data food_items (A La Carte)
  await knex('food_items').insert([
    {
      name: "Grilled Salmon Teriyaki",
      description: "Lightly cooked vegetables with teri sauce on top.",
      price: 16.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    },
    {
      name: "Beef Teriyaki",
      description: "Lightly cooked vegetables w/ teri sauce on top. Rice included.",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    },
    {
      name: "Chicken Teriyaki",
      description: "Lightly cooked vegetables w/ teri sauce on top. Rice included.",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    },
    {
      name: "Tofu Teriyaki",
      description: "",
      price: 13.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    },
    {
      name: "Don katsu",
      description: "Deep-Fried Pork Loin House Sauce On Top",
      price: 16.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    },
    {
      name: "Chicken Katsu",
      description: "Deep-Fried Chicken House Sauce On Top",
      price: 16.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    },
    {
      name: "Tuna Tataki",
      description: "",
      price: 15.95,
      image: "",
      priority: 0,
      type: 'A La Carte'
    }
  ]);

  // Insert the data food_items (Sashimi)
  await knex('food_items').insert([
    {
      name: "Deluxe Assorted Sashimi",
      description: "Chef's Choice Daily fresh Sashimi.",
      price: 47.95,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Tuna & Salmon Sashimi - Full",
      description: "Albacore And Atlantic.",
      price: 20.5,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Spicy Salmon Sashimi - Full",
      description: "",
      price: 21.95,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Spicy Tuna Sashimi - Full",
      description: "Albacore.",
      price: 21.95,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Spicy Tuna & Salmon Sashimi - Full",
      description: "",
      price: 21.95,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Hokkigai Sashimi - Full",
      description: "Arctic surf clam.",
      price: 20.5,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Assorted Sashimi",
      description: "Tuna, salmon, red tuna, tako, hokki, amaebi.",
      price: 35.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Salmon Sashimi - Full",
      description: "Atlantic.",
      price: 20.5,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Tuna Sashimi - Full",
      description: "Albacore.",
      price: 20.5,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Tako Sashimi - Full",
      description: "Octopus.",
      price: 25.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Amaebi Sashimi - Full",
      description: "Sweet shrimp.",
      price: 29.85,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Hamachi Sashimi - Full",
      description: "Yellowtail.",
      price: 29.95,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Toro Sashimi - Full",
      description: "",
      price: 0.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Uni Sashimi - Full",
      description: "",
      price: 0.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Hirame Sashimi - Full",
      description: "",
      price: 30.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Shimaaji Sashimi - Full",
      description: "",
      price: 35.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    },
    {
      name: "Premium Assorted Sashimi",
      description: "",
      price: 75.0,
      image: "",
      priority: 0,
      type: 'Sashimi'
    }
  ]);

  // Insert the data food_items (Combination)
  await knex('food_items').insert([
    {
      name: "Deluxe Assorted Sushi Combo",
      description: "One piece each of ebi, tuna, salmon, ika, amaebi, tako, hokkigai, masago, unagi, hamachi, chopped scallop, 1/2 tuna roll, and 1/2 salmon roll.",
      price: 34.25,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "BC Combo",
      description: "B.C. roll, Alaska roll, one piece tuna, one piece salmon.",
      price: 18.0,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Roll Master",
      description: "Box sushi, salmon mountain half, caterpillar half.",
      price: 22.5,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Dynamite Combo",
      description: "Dynamite roll, one piece ebi, one piece tuna, two pieces salmon.",
      price: 16.95,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "California Combo",
      description: "Cali roll, one piece ebi, one piece tuna, two pieces salmon.",
      price: 14.95,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Assorted Sushi Combo",
      description: "One piece each of ebi, tuna, salmon, ika, amaebi, tako, hokkigai, masago, tuna, and salmon roll.",
      price: 23.95,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Roll Combo",
      description: "Cali roll, half each of tuna, salmon and kappa roll.",
      price: 10.95,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Vegetable Combo",
      description: "Vegetable roll, kappa roll, oshinko roll.",
      price: 12.95,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Dinner For 2",
      description: "House green salad, five pieces tempura, assorted sushi, one each of Cali or dyna roll, two bowls of miso.",
      price: 48.85,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Spicy Salmon Combo",
      description: "",
      price: 20.5,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Spicy Tuna Combo",
      description: "Spicy tuna roll, kappa roll, spicy tuna sashimi.",
      price: 20.5,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Tuna & Salmon Combo",
      description: "Tuna two pieces, salmon two pieces, tuna roll, salmon roll.",
      price: 16.0,
      image: "",
      priority: 0,
      type: 'Combination'
    },
    {
      name: "Sashimi & Sushi Combo",
      description: "Two pieces each of tuna and salmon sashimi, one piece ebi, one piece tuna, one piece salmon, one piece hokkigai, one piece chopped scallop.",
      price: 20.95,
      image: "",
      priority: 0,
      type: 'Combination'
    }
  ]);

  // Insert the data food_items (Bluefin Special)
  await knex('food_items').insert([
    {
      name: "Bluefin Nigiri Set",
      description: "3 pieces",
      price: 18.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "Bluefin Sashimi Set",
      description: "4 pieces",
      price: 27.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "Bluefin Donburi",
      description: "6 pieces",
      price: 37.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "Negi Bluefin Roll",
      description: "",
      price: 5.95,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "Bluefin Cone",
      description: "",
      price: 0.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "O-Toro Nigiri",
      description: "",
      price: 8.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "Chu-Toro Nigiri",
      description: "",
      price: 7.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    },
    {
      name: "Akami Nigiri",
      description: "",
      price: 6.0,
      image: "",
      priority: 0,
      type: 'Bluefin Special'
    }
  ]);

  // Insert the data food_items (Party Setto)
  await knex('food_items').insert([
    {
      name: "Party Set (Large)",
      description: "For four to five people. Ebi three pieces, tuna three pieces, salmon three pieces, unagi three pieces, chopped scallop three pieces, masago three pieces, California roll, house roll, dynamite roll, smoked salmon roll, spicy tuna roll, Alaska roll 60 pieces.",
      price: 92.5,
      image: "",
      priority: 0,
      type: 'Party Setto'
    },
    {
      name: "Party Set (Medium)",
      description: "For three to four people. Ebi two pieces, tuna three pieces, salmon three pieces, hokkigai two pieces, masago two pieces, California roll, spicy tuna roll, dynamite roll, b.c. roll, chopped scallop roll 48 pieces.",
      price: 61.5,
      image: "",
      priority: 1,
      type: 'Party Setto'
    },
    {
      name: "Party Set (Small)",
      description: "For two people. Ebi one piece, tuna three pieces, salmon three pieces, hokkigai one piece, masago one piece, California roll, dynamite roll, kitsune udon 23 pieces.",
      price: 42.5,
      image: "",
      priority: 2,
      type: 'Party Setto'
    }
  ]);

  // Insert the data food_items (Drinks)
  await knex('food_items').insert([
    {
      name: "Canada Dry",
      description: "",
      price: 2.75,
      image: "",
      priority: 0,
      type: 'Drinks'
    },
    {
      name: "Diet Coke",
      description: "",
      price: 2.75,
      image: "",
      priority: 1,
      type: 'Drinks'
    },
    {
      name: "Coca Cola",
      description: "",
      price: 2.75,
      image: "",
      priority: 2,
      type: 'Drinks'
    },
    {
      name: "Sprite",
      description: "",
      price: 2.75,
      image: "",
      priority: 3,
      type: 'Drinks'
    },
    {
      name: "Nestea",
      description: "",
      price: 2.75,
      image: "",
      priority: 4,
      type: 'Drinks'
    },
    {
      name: "Orange Juice",
      description: "",
      price: 0.0,
      image: "",
      priority: 5,
      type: 'Drinks'
    }
  ]);
}
