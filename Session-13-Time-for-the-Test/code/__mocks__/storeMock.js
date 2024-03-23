const mockStoreInfo = {
  cart: {
    items: [
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "105214351",
            name: "Al Fungi Gourmet-Pizza",
            category: "New Launches",
            description:
              "Gourmet mushroom pizza on a cheesy Mozzarella base with jalapenos & cherry tomatoes.",
            imageId: "4ffebb537f043e94e09e928f48e640e9",
            inStock: 1,
            isVeg: 1,
            variants: {},
            variantsV2: {
              variantGroups: [
                {
                  groupId: "36839585",
                  name: "Crust",
                  variations: [
                    {
                      name: "New Hand Tossed",
                      default: 1,
                      id: "114779721",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                      dependantVariation: {
                        groupId: "36839586",
                        variationId: "114779723",
                      },
                    },
                  ],
                },
                {
                  groupId: "36839586",
                  name: "Size",
                  variations: [
                    {
                      name: "Medium",
                      default: 1,
                      id: "114779723",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                    {
                      name: "Large",
                      id: "114779725",
                      inStock: 1,
                      isVeg: 1,
                      isEnabled: 1,
                    },
                  ],
                },
              ],
              pricingModels: [
                {
                  variations: [
                    {
                      groupId: "36839585",
                      variationId: "114779721",
                    },
                    {
                      groupId: "36839586",
                      variationId: "114779723",
                    },
                  ],
                  price: 54900,
                },
                {
                  variations: [
                    {
                      groupId: "36839585",
                      variationId: "114779721",
                    },
                    {
                      groupId: "36839586",
                      variationId: "114779725",
                    },
                  ],
                  price: 84900,
                },
              ],
            },
            itemAttribute: {
              vegClassifier: "VEG",
            },
            defaultPrice: 54900,
            ribbon: {},
            type: "ITEM",
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {},
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "17854806",
            name: "Butterscotch Mousse Cake",
            category: "DESSERTS",
            description: "Sweet temptation! Butterscotch flavored mousse",
            imageId: "e91002ccf7239fffeceaab4956a15a3a",
            inStock: 1,
            isVeg: 1,
            price: 10381,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            type: "ITEM",
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "4.5",
                ratingCount: "205 ratings",
                ratingCountV2: "205",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "51306092",
            name: "Choco Lava Cake",
            category: "DESSERTS",
            description:
              "Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake",
            imageId: "517791a68253a9a5084664b470f6e115",
            inStock: 1,
            isVeg: 1,
            price: 10900,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {
              text: "Bestseller",
              textColor: "#ffffff",
              topBackgroundColor: "#d53d4c",
              bottomBackgroundColor: "#b02331",
            },
            type: "ITEM",
            itemBadge: {},
            badgesV2: {},
            isBestseller: true,
            ratings: {
              aggregatedRating: {
                rating: "4.6",
                ratingCount: "499 ratings",
                ratingCountV2: "499",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
    ],
  },
};

export default mockStoreInfo;
