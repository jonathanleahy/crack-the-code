/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import StringReplace from '../src/1-3-string-replacementNode';

describe('Is Permutation', () => {

    it('jonathan=nahtanoj should be permutation', () => {
        var object = new StringReplace('jonathan', 'nahtanoj');
        expect(object.isPermutation()).toBe(true);
    });

    it('dog=godshould be permutation', () => {
        var object = new StringReplace('god', 'dog');
        expect(object.isPermutation()).toBe(true);
    });

    it('london=ondlon should be permutation', () => {
        var object = new StringReplace('london', 'ondlon');
        expect(object.isPermutation()).toBe(true);
    });

});

describe('Isnt Permutation', () => {

    it('jonathan=abcdefab shouldnt be permutation', () => {
        var object = new StringReplace('jonathan', 'abcdefab');
        expect(object.isPermutation()).toBe(false);
    });

    it('bert=cabbage shouldnt be permutation', () => {
        var object = new StringReplace('bert', 'cabbage');
        expect(object.isPermutation()).toBe(false);
    });

    it('hot=col shouldnt be permutation', () => {
        var object = new StringReplace('hot', 'col');
        expect(object.isPermutation()).toBe(false);
    });

});
