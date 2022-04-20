
let minesweeper = (ar) => {
    const width = ar[0].length - 1;
    const height = ar.length - 1;
    let res = [];
    let c;
    for (let i = 0; i <= height; i++) {
        res.push([]);
        for (let j = 0; j <= width; j++) {
            res[i][j] = 'X';
            c = ar[i][j];
            if (c === 'O') {
                let count = 0;
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x <= height && y >= 0 && y <= width) {
                            if (ar[x][y] === 'X') {
                                count++;
                            }
                        }
                    }
                }
                res[i][j] = count;
            }
        }
    }
    return res;
}

let formatNumber = (str) => {
    let output = '';
    let i = 0;
    let digits_left;

    str = str.replaceAll(' ','');
    str = str.replaceAll('-','');
    while (i < str.length) {
        digits_left = str.length - i;
        if (digits_left > 4) {
            output += str.substring(i, i + 3);
            output += '-'
            i += 3;
        } else {
            if (digits_left === 2) {
                output += str.substring(i, i + 2);
            } else if (digits_left === 3) {
                output += str.substring(i, i + 3);
            } else if (digits_left === 4) {
                output += str.substring(i, i + 2);
                output += '-';
                output += str.substring(i + 2, i + 4);
            }
            break;
        }
    }

    return output;
}

// "12"
// "123"
// "12-34"
// "123-45"
// "123-456"
// "123-45-67"
console.log(formatNumber('12'))
console.log(formatNumber('123'))
console.log(formatNumber('1234'))
console.log(formatNumber('12345'))
console.log(formatNumber('123456'))
console.log(formatNumber('1234567'))

let n = '';
for (let i = 0; i < 100; i++) {
    n += i % 10;
}

console.log(formatNumber(n))


// [
// 				'X 1 1 X X X 3 2',
// 				'3 3 3 5 X 5 X X',
// 				'X X 3 X X 5 5 4',
// 				'3 X 5 5 6 X X X',
// 				'2 4 X X X X 6 X',
// 				'X 3 X X X 5 X 3',
// 				'2 4 5 X 6 X 5 X',
// 				'X 2 X X 4 X 4 X',
// 			]

// console.log(JSON.stringify(minesweeper([
//     'XOOXXXOO',
//     'OOOOXOXX',
//     'XXOXXOOO',
//     'OXOOOXXX',
//     'OOXXXXOX',
//     'XOXXXOXO',
//     'OOOXOXOX',
//     'XOXXOXOX',
// ])));
