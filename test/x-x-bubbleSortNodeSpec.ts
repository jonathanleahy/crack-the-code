import BubbleSort from "../src/x-x-bubbleSortNode";

describe('Small Sort', () => {

    it('[1, 5, 3, 2, 4] should be sorted', () => {
        var object = new BubbleSort([1, 5, 3, 2, 4]);
        expect(object.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('[1, 2, 1, 3, 7] should be sorted', () => {
        var object = new BubbleSort([1, 2, 1, 3, 7]);
        expect(object.sort()).toEqual([1, 1, 2, 3, 7]);
    });

    it('[1, -2, 0] should be sorted', () => {
        var object = new BubbleSort([1, -2, 0]);
        expect(object.sort()).toEqual([-2, 0, 1]);
    });

});

describe('Isnt Permutation', () => {

});
