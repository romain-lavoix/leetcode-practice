/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // iterate on lines
    const column_map = [];
    const box_map = [];
    for (let line_number = 0; line_number < 9; line_number++) {
        const line = board[line_number];
        const line_map = new Map();
        // iterate on columns
        for (let column_number = 0; column_number < 9; column_number++) {
            const number = line[column_number];
            // line check
            if (line_map.get(number) && (number !== '.')) {
                return false;
            } else {
                line_map.set(number, true);
            }
            // column check
            if (column_map[column_number] === undefined) {
                column_map[column_number] = new Map();
            }
            if (column_map[column_number].get(number) && (number !== '.')) {
                return false;
            } else {
                column_map[column_number].set(number, true)
            }
            // box check
            const box_map_number = Math.floor(line_number / 3) + Math.floor(column_number / 3) * 3;
            if (box_map[box_map_number] === undefined) {
                box_map[box_map_number] = new Map();
            }
            if (box_map[box_map_number].get(number) && (number !== '.')) {
                return false;
            } else {
                box_map[box_map_number].set(number, true)
            }

        }
    }
    return true;
};

export {isValidSudoku}