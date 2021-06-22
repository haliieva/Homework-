// start of creating table
var tableDiv = document.getElementById("myTable");

var table = document.createElement('table');

for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);

    for (var j = 0; j < 10; j++) {
        var td = document.createElement('td');

        table.appendChild(td);
        tr.appendChild(td);
    }
}
tableDiv.appendChild(table);
// end of creating table function

let t;
(tableWork = () => {

    let table = document.querySelector('table'), 
    tableCell = table.querySelectorAll('td');

    tableCell.forEach(el => el.onclick = () => { // цикл для перебора каждой ячейки
        el.classList.toggle("black"); // чредование классов
        t = table.innerHTML;
    });

    document.querySelector('#clr').onclick = () => tableCell.forEach(el => el.className = '');
    document.querySelector('#rstr').onclick = () => {
        table.innerHTML = t;
        tableWork();
    };
})();
