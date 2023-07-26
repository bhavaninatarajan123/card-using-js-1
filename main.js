let item=[
    {
        id:1,
        img:"image/EEE.jpg",
        title:"EEE",
        content:"An electrical & electronics engineer can work with the industries deals in product development, control system, system management, product design, sales, consumer's electronics, transportation, wireless communication, manufacturing, chemical, automotive, defense and space research organizations.",
    },
    {
        id:2,
        img:"image/CSE.jpg",
        title:"CSE",
        content:"Students after passing out CS course get good opportunities to join some of the top brands and corporate houses across multiple industries such as IT/software companies, sales and marketing companies, academic institutions, journalism, content industry, engineering firms, etc.",
    },
    {
        id:3,
        img:"image/ECE.jpg",
        title:"ECE",
        content:"  Electronics and communication engineering (ECE) comprises communication engineering and the core of electrical engineering. A career in this field can be very diverse and rewarding. Knowing more about this profession will help you determine if it is the right career path for you",
    },
    {
        id:4,
        img:"image/civil.jpg",
        title:"civil",
        content:"Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.",
    },
    {
        id:5,
        img:"image/mech.jpg",
        title:"Mech",
        content:"Mechanical engineers design power-producing machines, such as electric generators, internal combustion engines, and steam and gas turbines, as well as power-using machines, such as refrigeration and air-conditioning systems.",
    },
    {
        id:6,
        img:"image/biotech.jpg",
        title:"Biotech",
        content:"Biotechnology engineering is basically a blend of biology and technology. It involves the study of microorganisms, bio-organisms and cell functions. Students get to learn about the technological applications that use biological systems or living organisms to create or modify products/ processes for a specific use.",
    }
];




var cardSection=document.getElementById("card-section");

var container=document.createElement("div");
container.classList.add("container");
cardSection.appendChild(container);

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);

item.forEach(function(e){
var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var image=document.createElement("img");
image.setAttribute("src",e.img);
card.appendChild(image);


var heading=document.createElement("h1");
card.appendChild(heading);
heading.innerHTML=e.title;


var cont=document.createElement("p");
card.appendChild(cont);
cont.innerHTML=e.content;

});