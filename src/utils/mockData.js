export const resData = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "83633",
        title: "North Indian",
        description: "Indulge with the best of North Indian cuisines.",
        imageId:
          "COLLECTIONS/IMAGES/MERCH/2025/1/24/820cca8e-ff06-4509-9855-2586384497f4_Northindian.png",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian,north%20indian,layout_NorthIndian,ads_pc_north_indian",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "500 restaurants",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.FilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 500,
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "902577",
          name: "Charcoal Eats - Biryani & Beyond",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/a5d0e04e-cc4c-4c94-ac51-b2a8e9c42ccb_902577.jpg",
          locality: "Gautam Buddha Nagar",
          areaName: "Sector 66",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Kebabs", "Desserts"],
          avgRating: 4.1,
          parentId: "5338",
          avgRatingString: "4.1",
          totalRatingsString: "287",
          promoted: true,
          adTrackingId:
            "cid=1777bd36-6355-491a-8fa9-2e28c4632909~p=0~adgrpid=1777bd36-6355-491a-8fa9-2e28c4632909#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=902577~plpr=COLLECTION~eid=bb4f764c-1477-487b-9929-8a8e48abc949~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "1777bd36-6355-491a-8fa9-2e28c4632909",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=902577&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "66117",
          name: "Foodiness",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/3/37f06489-a5bf-462f-8d29-5c097f5f1826_66117.jpg",
          locality: "D Block",
          areaName: "Sector 63",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Thalis",
            "Biryani and Beverages",
            "Indian",
          ],
          avgRating: 4.2,
          parentId: "13710",
          avgRatingString: "4.2",
          totalRatingsString: "12K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.1,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=66117&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1028230",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/20/7c557720-436a-4618-bd4e-288e6f2caae4_1028230.jpg",
          locality: "GautamBudh Nagar Tahsil-I",
          areaName: "Sector- 63",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.3,
          parentId: "434792",
          avgRatingString: "4.3",
          totalRatingsString: "176",
          promoted: true,
          adTrackingId:
            "cid=30318056~p=1~adgrpid=30318056#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1028230~plpr=COLLECTION~eid=5e9265b7-edf7-4f20-a7fe-6f989dc4a287~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-26 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "30318056",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1028230&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "412244",
          name: "Mithaas",
          cloudinaryImageId: "mrgd2t4moafrnmdxsw6w",
          locality: "B Block",
          areaName: "Sector 62",
          costForTwo: "₹300 for two",
          cuisines: ["Sweets", "Bakery", "Snacks"],
          avgRating: 4.4,
          veg: true,
          parentId: "4150",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 22:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Mithai.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Mithai.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=412244&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1001122",
          name: "Kulcha Lal Paratha Das",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/17/8b3932ba-d1a1-45aa-a170-e21889fc55cc_1001122.jpg",
          locality: "Indirapuram",
          areaName: "Indirapuram",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Thalis", "Street Food", "Beverages"],
          avgRating: 3.9,
          veg: true,
          parentId: "121579",
          avgRatingString: "3.9",
          totalRatingsString: "750",
          promoted: true,
          adTrackingId:
            "cid=0b16992c-da3e-4d2c-a671-a98b1cf31a8b~p=3~adgrpid=0b16992c-da3e-4d2c-a671-a98b1cf31a8b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1001122~plpr=COLLECTION~eid=882e0ef1-9173-42f6-bc3c-b31cd12e9f29~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-26 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹19",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "0b16992c-da3e-4d2c-a671-a98b1cf31a8b",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1001122&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "381774",
          name: "Punjabi Food Junction",
          cloudinaryImageId: "aad8vobpkrlqjcxvyccg",
          locality: "Gautam Buddha Nagar",
          areaName: "SECTOR-63",
          costForTwo: "₹150 for two",
          cuisines: ["Punjabi", "North Indian"],
          avgRating: 4,
          veg: true,
          parentId: "162277",
          avgRatingString: "4.0",
          totalRatingsString: "3.8K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-26 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹1000",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=381774&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "650301",
          name: "Punjabi Angithi (Vegorama Group)",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/4454454c-baf8-466a-9a93-5ff7b53923a4_650301.jpg",
          locality: "Aditya Mall",
          areaName: "Indirapuram",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian", "Chinese", "Tandoor", "rolls"],
          avgRating: 4.3,
          veg: true,
          parentId: "465050",
          avgRatingString: "4.3",
          totalRatingsString: "19K+",
          promoted: true,
          adTrackingId:
            "cid=e66c615a-4db1-4262-8e6c-96c0fe846ca0~p=4~adgrpid=e66c615a-4db1-4262-8e6c-96c0fe846ca0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=650301~plpr=COLLECTION~eid=688ce4ed-9134-49ba-a678-be36c39ba624~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "e66c615a-4db1-4262-8e6c-96c0fe846ca0",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=650301&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "603254",
          name: "Kaleva",
          cloudinaryImageId: "u825vvs6iakuz7vfvgw0",
          locality: "Sector 63",
          areaName: "Sector 63",
          costForTwo: "₹300 for two",
          cuisines: [
            "Sweets",
            "North Indian",
            "Chaat",
            "South Indian",
            "Street Food",
            "Beverages",
            "Thalis",
          ],
          avgRating: 4.4,
          parentId: "2216",
          avgRatingString: "4.4",
          totalRatingsString: "1.9K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 22:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "153",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=603254&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "579096",
          name: "EatFit",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/b77180f3-43ae-4d78-85ff-d850ddf5298b_579096.jpg",
          locality: "C Block",
          areaName: "Sector 63",
          costForTwo: "₹270 for two",
          cuisines: [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani",
          ],
          avgRating: 4.5,
          parentId: "76139",
          avgRatingString: "4.5",
          totalRatingsString: "3.4K+",
          promoted: true,
          adTrackingId:
            "cid=30312587~p=5~adgrpid=30312587#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=579096~plpr=COLLECTION~eid=b2dce215-e05e-4c41-86c3-310803623196~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-26 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20RX%20listing%2018px.png",
                description: "bolt!",
              },
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20RX%20listing%2018px.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "30312587",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=579096&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "579094",
          name: "Ghar ka Khana by EatFit",
          cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
          locality: "C Block",
          areaName: "Sector 63",
          costForTwo: "₹250 for two",
          cuisines: [
            "North Indian",
            "Home Food",
            "Healthy Food",
            "Indian",
            "Punjabi",
            "South Indian",
            "Rajasthani",
            "Maharashtrian",
            "Snacks",
            "Desserts",
          ],
          avgRating: 4.3,
          veg: true,
          parentId: "422576",
          avgRatingString: "4.3",
          totalRatingsString: "954",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-26 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20RX%20listing%2018px.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/big%20RX%20listing%2018px.png",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=579094&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "62991",
          name: "LunchBox - Meals and Thalis",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/d7d6e5ef-b37d-4c4d-867d-0ccb50927fca_62991.jpg",
          locality: "Bharat Complex",
          areaName: "Sector 59 Noida",
          costForTwo: "₹200 for two",
          cuisines: ["Thalis", "North Indian", "Biryani"],
          avgRating: 4.3,
          parentId: "4925",
          avgRatingString: "4.3",
          totalRatingsString: "5.8K+",
          promoted: true,
          adTrackingId:
            "cid=30375236~p=7~adgrpid=30375236#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=62991~plpr=COLLECTION~eid=06bc2865-657e-4ef1-a91f-7d577149dc2f~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "30375236",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=62991&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "797070",
          name: "Khadak Singh Da Dhaba",
          cloudinaryImageId: "31647e07970870b403f5eb7045f60c89",
          locality: "Sector 62",
          areaName: "Sector 62",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Chinese", "Mughlai"],
          avgRating: 4.3,
          parentId: "13170",
          avgRatingString: "4.3",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-26 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.6",
              ratingCount: "69",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=797070&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "161423",
          name: "The Good Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/9a761a27-55bf-489b-9222-c27e15b3aa36_161423.jpg",
          locality: "Bharat Complex",
          areaName: "Sector 59, Gurgaon",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
          avgRating: 4.3,
          parentId: "7918",
          avgRatingString: "4.3",
          totalRatingsString: "3.9K+",
          promoted: true,
          adTrackingId:
            "cid=30375218~p=8~adgrpid=30375218#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=161423~plpr=COLLECTION~eid=5d3a3495-16d4-4477-ae3a-e2823341a76f~srvts=1750847288897~collid=83633",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-25 23:59:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "30375218",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=161423&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
];

