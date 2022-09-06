This project, allows for small businesses to have a easy way to search for employees, without using a phonebook, Rolodex, or any other physical medium of storing contact information. The search is a "Fuzzy Search", which would allow for you to still find the desired contact, even if you make a few typos. You can search not just by name, but also by location and title! Feel free to use this for your company, as it is under a free MIT license. All I ask, is that you Star or Fork this repo; as a sign of support.

# Getting Started

1. Clone this repository

2. Provide a data.json file for your companies contact data. Ensure that your data is strutured the same way as shown below.

```json
[
    {
        "ID": 1,
        "lastName": "Nancy",
        "firstName": "Porter",
        "location": "6211 Black Flat\nLake Tonya, MD 86967",
        "title": "Teacher, early years\/pre",
        "number": "+1-375-973-8955"
    },
    {
        "ID": 2,
        "lastName": "Derek",
        "firstName": "Perry",
        "location": "99298 Jason Landing Suite 531\nNew Markmouth, RI 47062",
        "title": "Engineer, drilling",
        "number": "001-249-725-3436x46865"
    },
    {
        "ID": 3,
        "lastName": "Kyle",
        "firstName": "Mcdaniel",
        "location": "295 Adam Prairie Suite 698\nSouth Stephenmouth, VA 47789",
        "title": "Therapist, art",
        "number": "244-832-7953x0701"
    }
]
```
3. Open the Repo in your terminal window, and run npm start to run this project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
