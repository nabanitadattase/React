In this assignment you will create a Todo List, the React way. This means you'll be thinking in reusable components and pass dynamic data through to each of them.

Create a todo list called Static List with three list items:
Static List

* Get out of bed, Wed Sep 13 2017
* Brush teeth, Thu Sep 14 2017
* Eat breakfast, Fri Sep 15 2017
Divide the list into reusable components (create at least 2)
Make sure the container component is class-based
Reuse one component at least 3 times
Each list item should have a prop of description and deadline
Write for each component a short summary of what it does and the role of the prop (in case there is one) in a JavaScript comment
const RandomHello = () => { return <h1>Hello there!</h1> }
// The goal of this component is to insert a random greeting in page

Create a second todo list underneath the first (reuse the same components) called Dynamic List, but this time pass the props dynamically using the following JSON code:

[
  {
    "id": 1,
    "description": "Get out of bed",
    "deadline": "2017-09-11",
    "done": true
  },
  {
    "id": 2,
    "description": "Brush teeth",
    "deadline": "2017-09-10",
    "done": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "deadline": "2017-09-09",
    "done": false
  }
]

Import the JSON code
Use the map() function to dynamically render components
Using CSS (a conditional className) , cross out the item if done is true
