import {assert, expect} from "chai";

import {twoSum} from "../src/twoSum.js";
import {removeDuplicates} from "../src/removeDuplicateFromSortedArray.js";
import {isValidSudoku} from "../src/validSudoku.js";
import {fizzBuzz} from "../src/fizzBuzz.js";
import {countPrimes} from "../src/countPrimes.js";
import {isPowerOfThree} from "../src/isPowerOfThree.js";
import {majorityElement} from "../src/majorityElement.js";
import {spiralOrder} from "../src/spiralOrder.js";
import {solveSudoku} from "../src/solveSudoku.js";

let start, stop

beforeEach(function() {
    start = process.hrtime()
});

afterEach(function() {
    stop = process.hrtime(start)
    console.log(`Time Taken to execute: ${(stop[0] * 1e9 + stop[1])/1e9} seconds`)
});

describe('easy', function() {

    describe('#twoSum', function() {
        it('example 1', function() {
            expect(twoSum([2, 7, 11, 15], 9)).to.have.members([0, 1])

        });
        it('example 2', function() {
            expect(twoSum([3,2,4], 6)).to.have.members([1, 2])
        });
        it('example 3', function() {
            expect(twoSum([3,3], 6)).to.have.members([0, 1])
        });
    });


    describe("#validSudoku", () => {
        it('example 1', function() {
            expect(isValidSudoku([["5","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]])).to.eql(true)
        });
        it('example 2', function() {
            expect(isValidSudoku([["8","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]])).to.eql(false)
        });
    })

    describe("#fizzBuzz", () => {
        it('example 1', () => {
            expect(fizzBuzz(3)).to.eql(["1","2","Fizz"])
        })
        it('example 1', () => {
            expect(fizzBuzz(5)).to.eql(["1","2","Fizz","4","Buzz"])
        })
        it('example 1', () => {
            expect(fizzBuzz(15)).to.eql(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])
        })
    })

    describe('#countPrimes', function () {

        it('example 1', () => {
            expect(countPrimes(0)).to.eql(0)
        })
        it('example 2', () => {
            expect(countPrimes(1)).to.eql(0)
        })
        it('example 2.2', () => {
            expect(countPrimes(2)).to.eql(0)
        })

        it('example 3', () => {
            expect(countPrimes(10)).to.eql(4)
        })

        it('example 4', () => {
            expect(countPrimes(500)).to.eql(95)
        })

        it('example 5', () => {
            expect(countPrimes(1000)).to.eql(168)
        })

        it('example 6', () => {
            expect(countPrimes(10000)).to.eql(1229)
        })
        it('example 7', () => {
            expect(countPrimes(1500000)).to.eql(114155)
        })

        it('example 8', () => {
            expect(countPrimes(1000000)).to.eql(78498)
        })

        it('example 9', () => {
            expect(countPrimes(5000000)).to.eql(348513)
        })

        it('example 9', () => {
            expect(countPrimes(1000000000)).to.eql(50847534)
        })
    });

    describe('#isPowerOfThree', () => {
        it('example 1', () => {
            expect(isPowerOfThree(27)).to.be.true
        })

        it('example 2', () => {
            expect(isPowerOfThree(0)).to.be.false
        })
        //
        it('example 3', () => {
            expect(isPowerOfThree(9)).to.be.true
        })
        //
        it('example 4', () => {
            expect(isPowerOfThree(617673396283945)).to.be.false
        })
        //
        it('example 5', () => {
            expect(isPowerOfThree(617673396283947)).to.be.true
        })
    })

    describe("#majorityElement", () => {
        it ('example 1', () => {
            expect(majorityElement([3,2,3])).to.eql(3)
        })
        it ('example 2', () => {
            expect(majorityElement([2,2,1,1,1,2,2])).to.eql(2)
        })
    })

    describe('#spiralOrder', () => {
        it ('example 1', () => {
            expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).to.eql([1,2,3,6,9,8,7,4,5])
        })
        it ('example 2', () => {
            expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).to.eql([1,2,3,4,8,12,11,10,9,5,6,7])
        })
        it ('square length 4', () => {
            expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])).to.eql([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
        })
        it ('single column 1', () => {
            expect(spiralOrder([[1],[2],[3],[4]])).to.eql([1,2,3,4])
        })
        it ('single column 2', () => {
            expect(spiralOrder([[1],[2]])).to.eql([1,2])
        })
        it ('2 columns', () => {
            expect(spiralOrder([[1,2],[3,4],[5,6],[7,8]])).to.eql([1,2,4,6,8,7,5,3])
        })
        it ('single row 1', () => {
            expect(spiralOrder([[1,2]])).to.eql([1,2])
        })
        it ('single row 2', () => {
            expect(spiralOrder([[1,2,3]])).to.eql([1,2,3])
        })
        it ('single cell', () => {
            expect(spiralOrder([[1]])).to.eql([1])
        })
    })

    describe('#sudoku solver', () => {
        it ('test', () => {
            expect(solveSudoku(
                [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))
                .to.eql(
                    [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]])
        })
    })

});
