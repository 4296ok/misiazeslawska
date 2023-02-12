let projects = [
    "Baba Yaga",
    "Dębki",
    "Kujko",
    "Mood for Wood",
    "Books"
];

let category = [
    "Architecture",
    "Architecture",
    "Interior Design", 
    "Workshop",
    "DIY"
]

let years = [
    "2020",
    "2020",
    "2020",
    "2020",
    "2020"
]

const projectFolders = {
    "babayaga": 8,
    "books": 14,
    "dębki": 10,
    "kujko": 10,
    "moodforwood": 11
};



let nav = document.getElementById("nav");
let ul = document.getElementById("projects");
let content = document.getElementsByClassName("content")[0];
let frontBanner = document.getElementById("frontBanner");
let index = document.getElementById("index");

const showProject = (e) => {
    content.style.display = "inline-flex"; 
    document.getElementById("menu").style.display = "none";
    document.getElementById("frontBanner").style.display = "none";
    document.getElementById("nav").style.display = "inline-flex";
    document.getElementById("projects").style.display = "inline-flex";
    document.getElementById("index").style.display = "flex";
    content.innerHTML = "";
    const folderName = e.target.innerHTML.split(" ").join("").toLowerCase();
    for (let i = 0; i < projectFolders[folderName]; i++) {
        const image = document.createElement("img");
        image.setAttribute('src', "files/" + folderName + "/img/" + i + ".jpg")
        content.appendChild(image);
    }


}

for (let i = 0; i < projects.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", projects[i].split(" ").join(""));
    li.classList.add("caption");
    li.innerHTML = projects[i];
    li.addEventListener("click", showProject);
    ul.appendChild(li);
    nav.appendChild(ul);
};

const showBanner = (e) => {
    content.innerHTML = "";
    const folderName = e.target.innerHTML.split(" ").join("").toLowerCase();

    for (let i = 0; i < 2; i++) {
    let banner = document.createElement("img");
    banner.setAttribute('src', "files/" + folderName + "/img/gif_" + i + ".gif");
    banner.classList.add("banner");
    frontBanner.appendChild(banner); 
    let maxVertical = content.clientHeight - banner.clientHeight;
    let maxHorizontal = content.clientWidth - banner.clientWidth;

    let vertical = Math.random() * maxVertical;
    let horizontal = Math.random() * maxHorizontal;
   
    banner.style.top = vertical + "px";  
    banner.style.left = horizontal + "px";
    banner.style.bottom = vertical + "px";
    banner.style.right = horizontal + "px";
    }
}


const clearContent = (e) => {
    frontBanner.innerHTML = "";
}

let menu = document.getElementById("menu");
let table = document.getElementById("table");

for (let i = 0; i <projects.length; i++) {

    let row = document.createElement("tr");

    for (let j = 0; j < 1; j++) {

        let cell = document.createElement("td");
        let cellText = document.createTextNode(projects[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.addEventListener("click", showProject);
        cell.addEventListener("mouseover", showBanner);
        cell.addEventListener("mouseleave", clearContent);
        }               

        for (let k = 0; k < 1; k++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(category[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell.addEventListener("click", showProject);
            // cell.addEventListener("mouseover", showBanner);
            // cell.addEventListener("mouseleave", clearContent);
            }

            for (let l = 0; l < 1; l++) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(years[i]);
                cell.appendChild(cellText);
                cell.classList.add("year");
                row.appendChild(cell);
                cell.addEventListener("click", showProject);
                // cell.addEventListener("mouseover", showBanner);
                // cell.addEventListener("mouseleave", clearContent);
                }

        table.appendChild(row);
        

        };


const showIndex = (e) => {
    document.getElementById("menu").style.display = "block";
    document.getElementById("index").style.display = "none"; 
    content.style.display = "none"; 
    document.getElementById("nav").style.display = "none"
}

index.addEventListener("click", showIndex);
