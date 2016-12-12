/*const ready = function() {

    const famousPeople = [
        {lastname: "Jackson",firstname : "Mickael"},
        {lastname: "Jackson",firstname : "Janet"},
        {lastname: "Jackson",firstname : "LaToya"},
        {lastname: "Jackson",firstname : "les autres"}
    ];

    const tbody = document.querySelector('tbody');

let trContainer =

    for (let i = 0; i < famousPeople.length; i++) {

        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${famousPeople[i].lastname}</td><td>${famousPeople[i].firstname}</td>`;
        tbody.appendChild(tr);



        let tdfirst = document.createElement('td');
        let tdlast = document.createElement('td');
        let firstname = document.createTextNode(famousPeople[i].firstname);
        let lastname = document.createTextNode(famousPeople[i].lastname);
        td.appendChild(firstname);
        td.appendChild(lastname);
        tr.appendChild(td);

    }

}

document.addEventListener("DOMContentLoaded", ready);
*/

const ready = function() {
  // Loading
  const famousPeople = [
    {lastname: "Jackson",firstname : "Mickael", age: 50, height: 5.9},
    {lastname: "Jackson",firstname : "Janet", age: 50,  height: 5.4},
    {lastname: "Jackson",firstname : "LaToya", age: 60,  height: 5.6},
    {lastname: "Jackson",firstname : "les autres", age: 150,  height: 5.9}
  ];
  //
  const tbody = document.querySelector("tbody");

  let trContainer = document.createDocumentFragment();

  for(let i = 0; i < famousPeople.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${famousPeople[i].lastname}</td><td>${famousPeople[i].firstname}</td><td>${famousPeople[i].age}</td><td>${famousPeople[i].height}</td>`;
      trContainer.appendChild(tr);
  }

  tbody.appendChild(trContainer);

}

document.addEventListener("DOMContentLoaded", ready);
