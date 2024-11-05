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
          "name": "owner_first_name",
          "title": "First name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_last_name",
          "title": "Last name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_st_address",
          "title": "Address",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_city",
          "title": "City",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_state",
          "title": "State/Province",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_zip",
          "title": "Zip/Postal code",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_email",
          "title": "Email",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_home_phone",
          "title": "Home phone",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "owner_cell_phone",
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
          "type": "file",
          "name": "photos",
          "title": "Please upload photos of the dog. They must include the following: 1. Front end 2. Back tail 3. Right side 4. Left side",
          "isRequired": false
        },
        {
          "type": "text",
          "name": "dog_name",
          "title": "Dog's name",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "dog_sex",
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
          "name": "dog_age",
          "title": "List the dog's age in years/months, height at shoulders and weight. If registered, please list registry and number.",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "dog_color",
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
          "name": "dog_breed",
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
          "name": "relinquish_reason",
          "title": "Reason for relinquishing the dog",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "how_far_owner",
          "title": "As the dog’s owner/caregiver, how far are you willing to drive to assist your dog getting into rescue and towards its foster home? Shelters, is any transportation assistance available?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_purchase",
          "title": "Did you purchase the dog? When and how long have you owned the dog? Please list the name of the previous owner/ breeder / shelter / rescue's name. Include their address and phone number. Have you contacted the previous owner / breeder to take the dog back? If not, why?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_bite",
          "title": "Has the dog ever bitten a person? If yes, please list first three and last three bites, who the person was (gender and age), circumstances around them and if medical attention was sought.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_nip",
          "title": "Has the dog ever air snapped or nipped? What were the circumstances around it? Please explain the first 3 and last 2 incidents.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_health",
          "title": "Does the dog have any known conditions or health concerns?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "dog_vet_hist",
          "title": "Dog's veterinary history (check all that apply.)",
          "choices": [
            {
              "value": "Current on Distemper Combo",
              "text": "Current on Distemper Combo"
            },
            {
              "value": "House Trained",
              "text": "House Trained"
            },
            {
              "value": "Spayed or Neutered",
              "text": "Spayed or Neutered"
            },
            {
              "value": "Tested for Heartworm (positive)",
              "text": "Tested for Heartworm (positive)"
            },
            {
              "value": "Current on Rabies",
              "text": "Current on Rabies"
            },
            {
              "value": "Not tested for Heartworm",
              "text": "Not tested for Heartworm"
            },
            {
              "value": "Tested for Heartworm (negative)",
              "text": "Tested for Heartworm (negative)"
            }
          ]
        },
        {
          "type": "text",
          "name": "dog_heartform",
          "title": "Did the heartworm test include testing for tickborne disease? If yes, what were the results - negative or positive? If heartworm or tickborne disease positive please list disease and if treatment has started.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_kids",
          "title": "If known, how does the dog respond to kids? What ages? Has the dog lived with kids?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "dog_negative",
          "title": "Does the dog react in a negative way (such as growling, showing teeth, lunging or rigid body with tail and ears still and erect and weight forward over the shoulders) to any of the following? If known, please check all that apply.",
          "choices": [
            {
              "value": "Cats",
              "text": "Cats"
            },
            {
              "value": "Crates",
              "text": "Crates"
            },
            {
              "value": "Giving a treat",
              "text": "Giving a treat"
            },
            {
              "value": "Loud noises",
              "text": "Loud noises"
            },
            {
              "value": "Other dogs",
              "text": "Other dogs"
            },
            {
              "value": "Stepping into dog's space",
              "text": "Stepping into dog's space"
            },
            {
              "value": "Taking away a toy",
              "text": "Taking away a toy"
            },
            {
              "value": "Touching feet",
              "text": "Touching feet"
            },
            {
              "value": "Women",
              "text": "Women"
            },
            {
              "value": "Children",
              "text": "Children"
            },
            {
              "value": "Direct eye contact",
              "text": "Direct eye contact"
            },
            {
              "value": "Guarding Food",
              "text": "Guarding Food"
            },
            {
              "value": "Men",
              "text": "Men"
            },
            {
              "value": "Petting",
              "text": "Petting"
            },
            {
              "value": "Strangers",
              "text": "Strangers"
            },
            {
              "value": "Thunderstorms",
              "text": "Thunderstorms"
            },
            {
              "value": "Touching tail",
              "text": "Touching tail"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "dog_fearful",
          "title": "The dog reacts in a fearful way (such as hiding, moving away from, lowered/slow moving tail, head down. tongue flicks or yawning, blinking or averted eyes, cowering, etc.) to the following. Please check all that apply.",
          "choices": [
            {
              "value": "Cats",
              "text": "Cats"
            },
            {
              "value": "Crates",
              "text": "Crates"
            },
            {
              "value": "Giving a treat",
              "text": "Giving a treat"
            },
            {
              "value": "Loud noises",
              "text": "Loud noises"
            },
            {
              "value": "Other dogs",
              "text": "Other dogs"
            },
            {
              "value": "Stepping into dog's space",
              "text": "Stepping into dog's space"
            },
            {
              "value": "Taking away a toy",
              "text": "Taking away a toy"
            },
            {
              "value": "Touching feet",
              "text": "Touching feet"
            },
            {
              "value": "Women",
              "text": "Women"
            },
            {
              "value": "Children",
              "text": "Children"
            },
            {
              "value": "Direct eye contact",
              "text": "Direct eye contact"
            },
            {
              "value": "Guarding food",
              "text": "Guarding food"
            },
            {
              "value": "Men",
              "text": "Men"
            },
            {
              "value": "Petting",
              "text": "Petting"
            },
            {
              "value": "Strangers",
              "text": "Strangers"
            },
            {
              "value": "hunderstorms",
              "text": "Thunderstorms"
            },
            {
              "value": "Touching tail",
              "text": "Touching tail"
            }
          ]
        },
        {
          "type": "text",
          "name": "dog_negative_deets",
          "title": "If the dog reacts negatively or is fearful of people (including children) or other dogs, please give details, including a physical description of the person or type of dog. If there is no pattern or the dog does not discriminate, please note that.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_noises",
          "title": "Does the dog respond to storms, fireworks or loud noises (motorcycles, lawn mowers, vacuum, small engines etc.). If yes, please describe the specific past scenarios.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_movement",
          "title": "Does the dog respond to movement, frenetic, rapid or otherwise (eg. bikes, runners, little kids, sweeping, shoveling or raking, etc.)? If yes, please describe specific past scenarios.",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "dog_tricks",
          "title": "What cues / behaviors does the dog know? Please check all that apply.",
          "choices": [
            {
              "value": "Come / Recall",
              "text": "Come / Recall"
            },
            {
              "value": "Kennel / Crate",
              "text": "Kennel / Crate"
            },
            {
              "value": "Lie Down",
              "text": "Lie Down"
            },
            {
              "value": "No",
              "text": "No"
            },
            {
              "value": "Release Word",
              "text": "Release Word"
            },
            {
              "value": "Stand",
              "text": "Stand"
            },
            {
              "value": "Drop It",
              "text": "Drop It"
            },
            {
              "value": "Leave It",
              "text": "Leave It"
            },
            {
              "value": "Loose Leash Walking / Heel",
              "text": "Loose Leash Walking / Heel"
            },
            {
              "value": "Off (down)",
              "text": "Off (down)"
            },
            {
              "value": "Sit",
              "text": "Sit"
            },
            {
              "value": "Stay / Wait",
              "text": "Stay / Wait"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "dog_adjectives",
          "title": "Which of the following would you use to describe the dog. Please check all that apply.",
          "choices": [
            {
              "value": "Affectionate",
              "text": "Affectionate"
            },
            {
              "value": "Anxious",
              "text": "Anxious"
            },
            {
              "value": "Calm",
              "text": "Calm"
            },
            {
              "value": "Defensive",
              "text": "Defensive"
            },
            {
              "value": "Difficult",
              "text": "Difficult"
            },
            {
              "value": "Driven",
              "text": "Driven"
            },
            {
              "value": "Friendly",
              "text": "Friendly"
            },
            {
              "value": "Hyper",
              "text": "Hyper"
            },
            {
              "value": "Obedient",
              "text": "Obedient"
            },
            {
              "value": "Protective",
              "text": "Protective"
            },
            {
              "value": "Scared",
              "text": "Scared"
            },
            {
              "value": "Stubborn",
              "text": "Stubborn"
            },
            {
              "value": "Suspicious",
              "text": "Suspicious"
            },
            {
              "value": "Aggressive",
              "text": "Aggressive"
            },
            {
              "value": "Biddable / Trainable",
              "text": "Biddable / Trainable"
            },
            {
              "value": "Cautious",
              "text": "Cautious"
            },
            {
              "value": "Destructive",
              "text": "Destructive"
            },
            {
              "value": "Dominant",
              "text": "Dominant"
            },
            {
              "value": "Fearful",
              "text": "Fearful"
            },
            {
              "value": "Happy Go Lucky",
              "text": "Happy Go Lucky"
            },
            {
              "value": "Lethargic",
              "text": "Lethargic"
            },
            {
              "value": "Outgoing",
              "text": "Outgoing"
            },
            {
              "value": "Quiet",
              "text": "Quiet"
            },
            {
              "value": "Shy",
              "text": "Shy"
            },
            {
              "value": "Submissive",
              "text": "Submissive"
            }
          ]
        },
        {
          "type": "text",
          "name": "dog_agro_examples",
          "title": "If you marked aggressive, defensive, protective, fearful or dominant, please give examples of when the dog has behaved this way.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dog_improvement",
          "title": "Please list any behaviors that need improving for this dog (ie. barking, jumping on people, recall, fearful of noises, etc.)",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "dog_location",
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
          "name": "dog_alone",
          "title": "Where does the dog stay when home alone?",
          "choices": [
            {
              "value": "Garage",
              "text": "Garage"
            },
            {
              "value": "Loose in the house",
              "text": "Loose in the house"
            },
            {
              "value": "Metal crate",
              "text": "Metal crate"
            },
            {
              "value": "Other type of crate",
              "text": "Other type of crate"
            },
            {
              "value": "Tied outside",
              "text": "Tied outside"
            },
            {
              "value": "In one room",
              "text": "In one room"
            },
            {
              "value": "Loose outside",
              "text": "Loose outside"
            },
            {
              "value": "Other",
              "text": "Other"
            },
            {
              "value": "Plastic type crate",
              "text": "Plastic type crate"
            },
            {
              "value": "Unknown",
              "text": "Unknown"
            }
          ]
        },
        {
          "type": "text",
          "name": "dog_crate_time",
          "title": "How long is the dog typically crated?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "dog_crate_behavior",
          "title": "What does the dog do when crated? Please check all that apply.",
          "choices": [
            {
              "value": "Bark",
              "text": "Bark"
            },
            {
              "value": "Digs, scratches at floor or walls",
              "text": "Digs, scratches at floor or walls"
            },
            {
              "value": "Looks out window",
              "text": "Looks out window"
            },
            {
              "value": "Plays with toy in crate / chews bone",
              "text": "Plays with toy in crate / chews bone"
            },
            {
              "value": "Tries to escape",
              "text": "Tries to escape"
            },
            {
              "value": "Chews crate",
              "text": "Chews crate"
            },
            {
              "value": "Lies down / naps",
              "text": "Lies down / naps"
            },
            {
              "value": "Never crated",
              "text": "Never crated"
            },
            {
              "value": "Spins",
              "text": "Spins"
            },
            {
              "value": "Whines",
              "text": "Whines"
            }
          ]
        },
        {
          "type": "text",
          "name": "dog_crate_behavior_deets",
          "title": "If the dog is upset by crating, please describe the dog's behavior and explain if the dog continuously displays this behaviors or calms down. If the dog calms down, how long does it take?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "dog_animals",
          "title": "Does the dog live with other animals? Please check all that apply",
          "choices": [
            {
              "value": "Cat(s)",
              "text": "Cat(s)"
            },
            {
              "value": "Dog(s)",
              "text": "Dog(s)"
            },
            {
              "value": "No other animals in household",
              "text": "No other animals in household"
            },
            {
              "value": "Other animals",
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
          "name": "attest",
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