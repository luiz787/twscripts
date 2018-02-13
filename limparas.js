function update(item, index) {
    let link = item.cells[index].children[0];
    let oldOnClick = link.onclick;
    let arguments = oldOnClick.toString().slice(71, oldOnClick.toString().length - 3);
    arguments = arguments.split(",");
    let actualArgs = [];
    arguments.forEach(function (item) {
        actualArgs.push(item.trim());
    });
    link.onclick = function () {
        oldOnClick(this, actualArgs[0], actualArgs[1]);
        item.parentNode.removeChild(item);
    };
}

let rows = document.getElementsByTagName("tr");
rows = Object.values(rows);
rows = rows.filter(function (item) {
    return item.id.includes("village");
});
console.log("debug");
const A_INDEX = 8;
const B_INDEX = 9;
const C_INDEX = 10;
rows.forEach(function (item) {
    update(item, A_INDEX);
    update(item, B_INDEX);
});

/*
Usage: javascript:(function(){$.getScript("C:/Users/Luiz/Desktop/tw/limparas.js")})()
*/