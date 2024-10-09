export const json = {
    "title": "Test Survey",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "name",
            "title": "What is your name"
          },
          {
            "type": "radiogroup",
            "name": "foodType",
            "title": "Pancakes, waffles, or crepes?",
            "choices": [
              {
                "value": "pancakes",
                "text": "Pancakes"
              },
              {
                "value": "waffles",
                "text": "Waffles"
              },
              {
                "value": "crepes",
                "text": "Crepes"
              }
            ]
          },
          {
            "type": "checkbox",
            "name": "toppings",
            "title": "What toppings would you like?",
            "choices": [
              {
                "value": "fruit",
                "text": "Fruit"
              },
              {
                "value": "syrup",
                "text": "Syrup"
              },
              {
                "value": "peanutButter",
                "text": "Peanut butter"
              }
            ]
          }
        ]
      }
    ]
  }