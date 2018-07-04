

/*

    Function that creates a table
    depending on the number of rows and columns.

*/


function numberTable(rows, columns) {
    var rowsArr =[];
    var colArr =[];
    var tableArr = [];
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            colArr.push(0);
        }
        rowsArr.push(colArr);
        colArr = [];
    }
    tableArr.push(rowsArr);

    return tableArr;
}

numRows = prompt("Please give the number of rows:");

numCol = prompt("Please give the number of columns:");


var tableArr = numberTable(numRows, numCol);

console.log('​Here is the result: ', JSON.stringify(tableArr));


function numberTable2(rows, columns) {
    var rowsArr =[];
    var colArr =[];
    var tableArr = [];
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var val = j + 1;
            colArr.push(val);
        }
        rowsArr.push(colArr);
        colArr = [];
    }
    tableArr.push(rowsArr);

    return tableArr;
}


var tableArr2 = numberTable2(numRows, numCol);

console.log('​Here is the second result: ', JSON.stringify(tableArr2));


function numberTable3(rows, columns) {
    var rowsArr =[];
    var colArr =[];
    var tableArr = [];
    var val = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            val++;
            colArr.push(val);
        }
        rowsArr.push(colArr);
        colArr = [];
        /* This version doesn't work
       colArr = Array(columns).fill(0);
       rowsArr.push(colArr);
       colArr = [];*/
    }
    tableArr.push(rowsArr);

    return tableArr;
}

var tableArr3 = numberTable3(numRows, numCol);

console.log('​Here is the third result: ', JSON.stringify(tableArr3));




