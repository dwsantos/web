function button(){
alert(21);
}
function math(){
	var ans;
	var ops = window.prompt("What operation do you want to perform? (x, +, -, /)");
  var n1 = window.prompt("Enter first number: ");
  var n2 = window.prompt("Enter second number: ");
  if(ops === "x"){
  ans = n1*n2;
  alert(ans);
  }
  else if(ops === "+"){
  ans = n1+n2;
  alert(ans);
  }
  else if(ops === "-"){
  ans = n1-n2;
  alert(ans);
  }  
  else if(ops === "/"){
  ans = n1/n2;
  alert(ans);
  }
	else{
  alert("Try Again");	
}
}
function rName(){
var rName;
const names = ["Una Bridges",
"Jakob Mcdowell",
"Kylan Greenwood",
"Astrid Marriott",
"Neriah Fulton",
"Grover Key",
"Miller Woodard",
"Alexie Ayala",
"Frederic Neville",
"Zac Bostock",
"Fallon Rowland",
"Kealan Valdez",
"Fraya Witt",
"Keyan Mcgowan",
"Leona Worthington",
"Kody Burks",
"Kirby Ashley",
"Zunaira Oconnor",
"Oriana Lam",
"Roxanne Clay",
"Eiliyah Spears",
"Beatrix Goodwin",
"Fariha Giles",
"Avleen Robbins",
"Sami Fellows",
"Maurice Mcnamara",
"Maksymilian Leigh",
"Ainsley Rosas",
"Rafi Sloan",
"Beau Gamble",
"Darrel Madden",
"Iylah Lyons",
"Marek Hobbs",
"Asiyah Bowen",
"Affan Zimmerman",
"Esa Hutchinson",
"Josephine Dudley",
"Tarik Bates",
"Camilla Caldwell",
"Richie Davey",
"Koa Nieves",
"Nancie Walter",
"Dylon Field",
"Milli Kent",
"Lennox Magana",
"Cari Gentry",
"Khadija Carney",
"Milton Swift",
"Ivy-Rose Good",
"Kenny Parkinson",
"Kasim Novak",
"Lacy Daugherty",
"Aliesha Baker",
"Cecily Valentine",
"Victor Holcomb",
"Denny Riley",
"Nannie Brown",
"Jaya Mann",
"Inaayah Byers",
"Lacie-Mae Bartlett",
"Amiyah Hall",
"Osama Small",
"Kiera Arellano",
"Sama Powers",
"Giacomo Baird",
"Uzair Franklin",
"Dana Velasquez",
"Avani Contreras",
"Alyssa Bailey",
"Charly Cobb",
"Nadia Arnold",
"Maxwell Redmond",
"Desiree Hughes",
"Ahmad Norris",
"Andreea Coates",
"Kashif Wilkes",
"Jac Hardin",
"Haris Tran",
"Eryk Guy",
"Ebonie Rossi",
"Francesca Pollard",
"Kirandeep Marsh",
"Belinda Santos",
"Yvie Iles",
"Malachi Andrews",
"Gloria Yoder",
"Oscar Mellor",
"Cillian Wooten",
"Paisley Huynh",
"Mateusz Perkins",
"Luca Khan",
"Carter Potter",
"Shanna Schmidt",
"Borys Mccall",
"Ellie-Rose Plummer",
"Rahim Mcgeev",
"Alisa Jones",
"Saif Graham",
"Orlaith Daniel",
"Ruby O'Gallagher"];
let x = Math.floor((Math.random() * 100) + 1);
rname = names[x];
alert(rname);
}
