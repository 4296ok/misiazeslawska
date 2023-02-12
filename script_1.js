let note_1 = "My name is Michalina and I am an easygoing and curious person who enjoys meeting new people and is not afraid of the challenges that go hand in hand with pursuing my dreams. As a pastime, I like to keep my hands occupied with DIY and crafts."
let note_2 = "The aspect of architecture that I enjoy the most is the ability to arrange backgrounds for our everyday living. I am interested in design that stays in close proximity to human scale and needs. In the development process of my projects, I guide myself with empathy - I focus on solving problems instead of generating new ones."

let info = document.getElementsByClassName("info")[0];

let para = document.createElement("p");
const node = document.createTextNode("My name is Michalina and I am an easygoing and curious person who enjoys meeting new people and is not afraid of the challenges that go hand in hand with pursuing my dreams. As a pastime, I like to keep my hands occupied with DIY and crafts.");
const node_1 = document.createTextNode("The aspect of architecture that I enjoy the most is the ability to arrange backgrounds for our everyday living. I am interested in design that stays in close proximity to human scale and needs. In the development process of my projects, I guide myself with empathy - I focus on solving problems instead of generating new ones.");

para.appendChild(node);
para.appendChild(node_1);

info.appendChild(para);