export const json = {
  "title": "Owner Relinquishment Request",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "Contact Information",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "title": "First name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question2",
          "title": "Last name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Address",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question5",
          "title": "City",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question6",
          "title": "State/Province",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question7",
          "title": "Zip/Postal code",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question8",
          "title": "Email",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question9",
          "title": "Home phone",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question10",
          "title": "Cell phone",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page2",
      "title": "Dog Information",
      "elements": [
        {
          "type": "boolean",
          "name": "question4",
          "title": "You will be required to send photos of the dog. They must include the following: 1. Front end 2. Back tail 3. Right side 4. Left side. Send directly to relinquish@mokanbcrescue.org Your request will NOT be processed unless adequate photos are sent. Do you agree?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question11",
          "title": "Dog's name",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "question12",
          "title": "Sex of dog",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Male"
            },
            {
              "value": "Item 2",
              "text": "Female"
            }
          ]
        },
        {
          "type": "text",
          "name": "question13",
          "title": "List the dog's age in years/months, height at shoulders and weight. If registered, please list registry and number.",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question14",
          "title": "Color",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Black/White (with or without tri)"
            },
            {
              "value": "Item 2",
              "text": "Blue Merle, Red Merle"
            },
            {
              "value": "Item 3",
              "text": "Red/White (with or without tri)"
            },
            {
              "value": "Item 4",
              "text": "Other"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question15",
          "title": "Purebred or mixed",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Mixed"
            },
            {
              "value": "Item 2",
              "text": "Purebred"
            }
          ]
        },
        {
          "type": "text",
          "name": "question16",
          "title": "Reason for relinquishing the dog",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question17",
          "title": "As the dog’s owner/caregiver, how far are you willing to drive to assist your dog getting into rescue and towards its foster home? Shelters, is any transportation assistance available?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question18",
          "title": "Did you purchase the dog? When and how long have you owned the dog? Please list the name of the previous owner/ breeder / shelter / rescue's name. Include their address and phone number. Have you contacted the previous owner / breeder to take the dog back? If not, why?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question19",
          "title": "Has the dog ever bitten a person? If yes, please list first three and last three bites, who the person was (gender and age), circumstances around them and if medical attention was sought.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question20",
          "title": "Has the dog ever air snapped or nipped? What were the circumstances around it? Please explain the first 3 and last 2 incidents.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question21",
          "title": "Does the dog have any known conditions or health concerns?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "question22",
          "title": "Dog's veterinary history (check all that apply.)",
          "choices": [
            {
              "value": "Item 1",
              "text": "Current on Distemper Combo"
            },
            {
              "value": "Item 2",
              "text": "House Trained"
            },
            {
              "value": "Item 3",
              "text": "Spayed or Neutered"
            },
            {
              "value": "Item 4",
              "text": "Tested for Heartworm (positive)"
            },
            {
              "value": "Item 5",
              "text": "Current on Rabies"
            },
            {
              "value": "Item 6",
              "text": "Not tested for Heartworm"
            },
            {
              "value": "Item 7",
              "text": "Tested for Heartworm (negative)"
            }
          ]
        },
        {
          "type": "text",
          "name": "question23",
          "title": "Did the heartworm test include testing for tickborne disease? If yes, what were the results - negative or positive? If heartworm or tickborne disease positive please list disease and if treatment has started.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question24",
          "title": "If known, how does the dog respond to kids? What ages? Has the dog lived with kids?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "question25",
          "title": "Does the dog react in a negative way (such as growling, showing teeth, lunging or rigid body with tail and ears still and erect and weight forward over the shoulders) to any of the following? If known, please check all that apply.",
          "choices": [
            {
              "value": "Item 1",
              "text": "Cats"
            },
            {
              "value": "Item 2",
              "text": "Crates"
            },
            {
              "value": "Item 3",
              "text": "Giving a treat"
            },
            {
              "value": "Item 4",
              "text": "Loud noises"
            },
            {
              "value": "Item 5",
              "text": "Other dogs"
            },
            {
              "value": "Item 6",
              "text": "Stepping into dog's space"
            },
            {
              "value": "Item 7",
              "text": "Taking away a toy"
            },
            {
              "value": "Item 8",
              "text": "Touching feet"
            },
            {
              "value": "Item 9",
              "text": "Women"
            },
            {
              "value": "Item 10",
              "text": "Children"
            },
            {
              "value": "Item 11",
              "text": "Direct eye contact"
            },
            {
              "value": "Item 12",
              "text": "Guarding Food"
            },
            {
              "value": "Item 13",
              "text": "Men"
            },
            {
              "value": "Item 14",
              "text": "Petting"
            },
            {
              "value": "Item 15",
              "text": "Strangers"
            },
            {
              "value": "Item 16",
              "text": "Thunderstorms"
            },
            {
              "value": "Item 17",
              "text": "Touching tail"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "question26",
          "title": "The dog reacts in a fearful way (such as hiding, moving away from, lowered/slow moving tail, head down. tongue flicks or yawning, blinking or averted eyes, cowering, etc.) to the following. Please check all that apply.",
          "choices": [
            {
              "value": "Item 1",
              "text": "Cats"
            },
            {
              "value": "Item 2",
              "text": "Crates"
            },
            {
              "value": "Item 3",
              "text": "Giving a treat"
            },
            {
              "value": "Item 4",
              "text": "Loud noises"
            },
            {
              "value": "Item 5",
              "text": "Other dogs"
            },
            {
              "value": "Item 6",
              "text": "Stepping into dog's space"
            },
            {
              "value": "Item 7",
              "text": "Taking away a toy"
            },
            {
              "value": "Item 8",
              "text": "Touching feet"
            },
            {
              "value": "Item 9",
              "text": "Women"
            },
            {
              "value": "Item 10",
              "text": "Children"
            },
            {
              "value": "Item 11",
              "text": "Direct eye contact"
            },
            {
              "value": "Item 12",
              "text": "Guarding food"
            },
            {
              "value": "Item 13",
              "text": "Men"
            },
            {
              "value": "Item 14",
              "text": "Petting"
            },
            {
              "value": "Item 15",
              "text": "Strangers"
            },
            {
              "value": "Item 16",
              "text": "Thunderstorms"
            },
            {
              "value": "Item 17",
              "text": "Touching tail"
            }
          ]
        },
        {
          "type": "text",
          "name": "question27",
          "title": "If the dog reacts negatively or is fearful of people (including children) or other dogs, please give details, including a physical description of the person or type of dog. If there is no pattern or the dog does not discriminate, please note that.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question28",
          "title": "Does the dog respond to storms, fireworks or loud noises (motorcycles, lawn mowers, vacuum, small engines etc.). If yes, please describe the specific past scenarios.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question29",
          "title": "Does the dog respond to movement, frenetic, rapid or otherwise (eg. bikes, runners, little kids, sweeping, shoveling or raking, etc.)? If yes, please describe specific past scenarios.",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "question30",
          "title": "What cues / behaviors does the dog know? Please check all that apply.",
          "choices": [
            {
              "value": "Item 1",
              "text": "Come / Recall"
            },
            {
              "value": "Item 2",
              "text": "Kennel / Crate"
            },
            {
              "value": "Item 3",
              "text": "Lie Down"
            },
            {
              "value": "Item 4",
              "text": "No"
            },
            {
              "value": "Item 5",
              "text": "Release Word"
            },
            {
              "value": "Item 6",
              "text": "Stand"
            },
            {
              "value": "Item 7",
              "text": "Drop It"
            },
            {
              "value": "Item 8",
              "text": "Leave It"
            },
            {
              "value": "Item 9",
              "text": "Loose Leash Walking / Heel"
            },
            {
              "value": "Item 10",
              "text": "Off (down)"
            },
            {
              "value": "Item 11",
              "text": "Sit"
            },
            {
              "value": "Item 12",
              "text": "Stay / Wait"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "question31",
          "title": "Which of the following would you use to describe the dog. Please check all that apply.",
          "choices": [
            {
              "value": "Item 1",
              "text": "Affectionate"
            },
            {
              "value": "Item 2",
              "text": "Anxious"
            },
            {
              "value": "Item 3",
              "text": "Calm"
            },
            {
              "value": "Item 4",
              "text": "Defensive"
            },
            {
              "value": "Item 5",
              "text": "Difficult"
            },
            {
              "value": "Item 6",
              "text": "Driven"
            },
            {
              "value": "Item 7",
              "text": "Friendly"
            },
            {
              "value": "Item 8",
              "text": "Hyper"
            },
            {
              "value": "Item 9",
              "text": "Obedient"
            },
            {
              "value": "Item 10",
              "text": "Protective"
            },
            {
              "value": "Item 11",
              "text": "Scared"
            },
            {
              "value": "Item 12",
              "text": "Stubborn"
            },
            {
              "value": "Item 13",
              "text": "Suspicious"
            },
            {
              "value": "Item 14",
              "text": "Aggressive"
            },
            {
              "value": "Item 15",
              "text": "Biddable / Trainable"
            },
            {
              "value": "Item 16",
              "text": "Cautious"
            },
            {
              "value": "Item 17",
              "text": "Destructive"
            },
            {
              "value": "Item 18",
              "text": "Dominant"
            },
            {
              "value": "Item 19",
              "text": "Fearful"
            },
            {
              "value": "Item 20",
              "text": "Happy Go Lucky"
            },
            {
              "value": "Item 21",
              "text": "Lethargic"
            },
            {
              "value": "Item 22",
              "text": "Outgoing"
            },
            {
              "value": "Item 23",
              "text": "Quiet"
            },
            {
              "value": "Item 24",
              "text": "Shy"
            },
            {
              "value": "Item 25",
              "text": "Submissive"
            }
          ]
        },
        {
          "type": "text",
          "name": "question32",
          "title": "If you marked aggressive, defensive, protective, fearful or dominant, please give examples of when the dog has behaved this way.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question33",
          "title": "Please list any behaviors that need improving for this dog (ie. barking, jumping on people, recall, fearful of noises, etc.)",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "question34",
          "title": "Where does the dog predominantly (12 hours or more) live?",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Inside the home"
            },
            {
              "value": "Item 2",
              "text": "Outside the home"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "question35",
          "title": "Where does the dog stay when home alone?",
          "choices": [
            {
              "value": "Item 1",
              "text": "Garage"
            },
            {
              "value": "Item 2",
              "text": "Loose in the house"
            },
            {
              "value": "Item 3",
              "text": "Metal crate"
            },
            {
              "value": "Item 4",
              "text": "Other type of crate"
            },
            {
              "value": "Item 5",
              "text": "Tied outside"
            },
            {
              "value": "Item 6",
              "text": "In one room"
            },
            {
              "value": "Item 7",
              "text": "Loose outside"
            },
            {
              "value": "Item 8",
              "text": "Other"
            },
            {
              "value": "Item 9",
              "text": "Plastic type crate"
            },
            {
              "value": "Item 10",
              "text": "Unknown"
            }
          ]
        },
        {
          "type": "text",
          "name": "question36",
          "title": "How long is the dog typically crated?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "question37",
          "title": "What does the dog do when crated? Please check all that apply.",
          "choices": [
            {
              "value": "Item 1",
              "text": "Bark"
            },
            {
              "value": "Item 2",
              "text": "Digs, scratches at floor or walls"
            },
            {
              "value": "Item 3",
              "text": "Looks out window"
            },
            {
              "value": "Item 4",
              "text": "Plays with toy in crate / chews bone"
            },
            {
              "value": "Item 5",
              "text": "Tries to escape"
            },
            {
              "value": "Item 6",
              "text": "Chews crate"
            },
            {
              "value": "Item 7",
              "text": "Lies down / naps"
            },
            {
              "value": "Item 8",
              "text": "Never crated"
            },
            {
              "value": "Item 9",
              "text": "Spins"
            },
            {
              "value": "Item 10",
              "text": "Whines"
            }
          ]
        },
        {
          "type": "text",
          "name": "question38",
          "title": "If the dog is upset by crating, please describe the dog's behavior and explain if the dog continuously displays this behaviors or calms down. If the dog calms down, how long does it take?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "question39",
          "title": "Does the dog live with other animals? Please check all that apply",
          "choices": [
            {
              "value": "Item 1",
              "text": "Cat(s)"
            },
            {
              "value": "Item 2",
              "text": "Dog(s)"
            },
            {
              "value": "Item 3",
              "text": "No other animals in household"
            },
            {
              "value": "Item 4",
              "text": "Other animals"
            }
          ]
        }
      ]
    },
    {
      "name": "page3",
      "title": "Attest",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question40",
          "title": "I/we hereby affirm that all of the above information is true and correct.",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Yes"
            },
            {
              "value": "Item 2",
              "text": "No"
            }
          ]
        }
      ]
    }
  ]
};