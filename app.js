const ready = function() {

    const famousPeople = {
        lastname: "Jackson",firstname : "Mickael",
        lastname: "Jackson",firstname : "Janet",
        lastname: "Jackson",firstname : "LaToya",
        lastname: "Jackson",firstname : "les autres"
    };

    const tbody = document.querySelector('tbody');

    for (let i = 0; i < famousPeople.length; i++) {

        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${famousPeople[i].firstname}</td>`;
        tbody.appendChild(tr);

        /*
        let tdfirst = document.createElement('td');
        let tdlast = document.createElement('td');
        let firstname = document.createTextNode(famousPeople[i].firstname);
        let lastname = document.createTextNode(famousPeople[i].lastname);
        td.appendChild(firstname);
        td.appendChild(lastname);
        tr.appendChild(td);
        */
    }

}

document.addEventListener("DOMContentLoaded", ready);
