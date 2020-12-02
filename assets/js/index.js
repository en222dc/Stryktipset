import { getResults } from './json.js';

const TABLE = document.getElementById('table');
let checkmark = document.querySelector('.checkmark');

createTable();

async function createTable() {
    let games = [];
    games = await getResults();

    for (let i = 0; i < 13; i++) {
        //Skapar min tabell
        let row = document.createElement('tr');
        let cellNumber = document.createElement('td');
        let cellTeams = document.createElement('td');
        let cellResultOne = document.createElement('td');
        let cellResultX = document.createElement('td');
        let cellResultTwo = document.createElement('td');

        TABLE.appendChild(row);
        row.appendChild(cellNumber);
        row.appendChild(cellTeams);
        row.appendChild(cellResultOne);
        row.appendChild(cellResultX);
        row.appendChild(cellResultTwo);

        //Skapar länkarna
        let teamOneLink = games[i].teams[1].homepage;
        let linkOne = document.createElement('a');
        linkOne.setAttribute('href', teamOneLink);
        linkOne.innerHTML = games[i].teams[1].name;

        let teamTwoLink = games[i].teams[2].homepage;
        let linkTwo = document.createElement('a');
        linkTwo.setAttribute('href', teamTwoLink);
        linkTwo.innerHTML = games[i].teams[2].name;

        //Säger vilken data som ska in var
        let gNumber = document.createTextNode(games[i].gameNumber);
        cellNumber.appendChild(gNumber);
        cellTeams.append(linkOne, '  - VS - ', linkTwo);
        /*Jag är medveten om att IE inte supportar append(), men jag lyckas inte få till det på annat sätt. Tips?
        som tur är så är det mindre än 7% som använder IE och jag kör enligt pareto-principen *skojar* */


        //Resultatet av matcherna
        if (games[i].outcome == "1") {
            cellResultOne.appendChild(checkmark.cloneNode(true));
        }
        else if (games[i].outcome == "X") {
            cellResultX.appendChild(checkmark.cloneNode(true));
        }
        else { cellResultTwo.appendChild(checkmark.cloneNode(true)) };
    }
}