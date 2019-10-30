/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Permutation from '../src/1-2-is-PermutationNode';

describe('Is Permutation', () => {

    it('jonathan=nahtanoj should be permutation', () => {
        var permutation = new Permutation('jonathan', 'nahtanoj');
        expect(permutation.isPermutation()).toBe(true);
    });

    it('dog=godshould be permutation', () => {
        var permutation = new Permutation('god', 'dog');
        expect(permutation.isPermutation()).toBe(true);
    });

    it('london=ondlon should be permutation', () => {
        var permutation = new Permutation('london', 'ondlon');
        expect(permutation.isPermutation()).toBe(true);
    });

});

describe('Isnt Permutation', () => {

    it('jonathan=abcdefab shouldnt be permutation', () => {
        var permutation = new Permutation('jonathan', 'abcdefab');
        expect(permutation.isPermutation()).toBe(false);
    });

    it('bert=cabbage shouldnt be permutation', () => {
        var permutation = new Permutation('bert', 'cabbage');
        expect(permutation.isPermutation()).toBe(false);
    });

    it('hot=col shouldnt be permutation', () => {
        var permutation = new Permutation('hot', 'col');
        expect(permutation.isPermutation()).toBe(false);
    });

});
