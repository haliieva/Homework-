/* 5. Сформируйте строку в виде треугольника-елочки:
.....#.....
....###....
...#####...
..#######..
.#########.
###########

*/

let i = 0,
    j = 0,
    str = 6;
let dot,
    hash;

while (i < str) {
    dot = "";
    hash = "";
    for (j = 1; j < str - i; j++) dot += ".";
    for (j = 0; j < 2 * i + 1; j++) hash += "#";
    console.log(dot + hash + dot);
    i++;
}