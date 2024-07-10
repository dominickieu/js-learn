/**
 * DK07
 * pt bac 2
 *
 *

const giaiPTBac2 = (a, b, c) => {
    if (a === 0) {
        if (b === 0 && c === 0) {
            return "VSN";
        }
        if (b === 0 && c !== 0) {
            return "VN";
        }
        return 0;
    } else {
        const delta = b * b - 4 * a * c;
    
    if (delta < 0) {
      return "VN";
    } else if (delta === 0) {
        return -b / (2 * a);
    } else {
        return [
    (-b + Math.sqrt(delta)) / (2 * a),
    (-b - Math.sqrt(delta)) / (2 * a),
];
}
}
};

console.log(giaiPTBac2(0, 10, 0));

*/

/**
 * DK08
 *
 */

let sate = "4 + 1";

console.log(typeof (1 + " "));
