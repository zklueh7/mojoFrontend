export const json = {
    "title": "Volunteer Survey",
    "description": "All volunteers should fill out the general questions sections. For the subsequent sections, please only fill the out sections for the type of volunteer work you are interested in.",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "title": "General Questions",
        "elements": [
          {
            "type": "text",
            "name": "name",
            "title": "Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "address",
            "title": "Address",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "phone",
            "title": "Phone number",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "email",
            "title": "Email",
            "isRequired": true
          }
        ]
      },
      {
        "name": "page2",
        "title": "Foster Volunteer Survey",
        "description": "Please fill out this section if you are interested in volunteering as a foster.",
        "elements": [
          {
            "type": "text",
            "name": "fence",
            "title": "Do you have a fence? If so, what type and approximately how tall?"
          },
          {
            "type": "text",
            "name": "dogs",
            "title": "Do you have any other dogs? If so what are their ages?"
          },
          {
            "type": "text",
            "name": "cats",
            "title": "Do you have any cats?"
          },
          {
            "type": "text",
            "name": "animals",
            "title": "Do you have any other animals? (Including livestock)"
          },
          {
            "type": "text",
            "name": "children",
            "title": "Do you have children or grandchildren who live with you or who visit often? If so, what are their ages?"
          },
          {
            "type": "text",
            "name": "overnight",
            "title": "Are you willing to provide overnights for dogs on transports, or short-term fostering until the dog can go to his/her permanent foster?"
          },
          {
            "type": "text",
            "name": "restrictions",
            "title": "Please list any restrictions for your foster dogs (i.e. puppies only, no puppies, male only, female only, must be submissive, etc) "
          },
          {
            "type": "text",
            "name": "pickup",
            "title": "Are you willing to drive to meet the dog on transport to you, or pick up at a local airport if coming by Pilots n Paws? (include travel distance you’re comfortable with)"
          }
        ]
      },
      {
        "name": "page3",
        "title": "Transport Volunteer Survey",
        "description": "Please fill out this section if you are interested in volunteering as a transporter.",
        "elements": [
          {
            "type": "text",
            "name": "vehicle",
            "title": "Vehicle description:"
          },
          {
            "type": "text",
            "name": "crates",
            "title": "Do you have crates for your car? (Include size)"
          },
          {
            "type": "text",
            "name": "distance",
            "title": "What approximate distance are you willing/able to travel?"
          }
        ]
      },
      {
        "name": "page4",
        "title": "General Volunteer Survey",
        "description": "Please fill out this section if you are interested in being a general volunteer (not a foster or transporter).",
        "elements": [
          {
            "type": "text",
            "name": "evaluate",
            "title": "Are you willing to evaluate dogs in shelters, or owner relinquishments?"
          },
          {
            "type": "text",
            "name": "home_visits",
            "title": "Are you willing to do home visits for potential adopters or new fosters?"
          },
          {
            "type": "text",
            "name": "events",
            "title": "Would you like to participate in MoKan BCR activities/events?"
          }
        ]
      }
    ]
  }