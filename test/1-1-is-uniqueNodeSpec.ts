/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Unique from '../src/1-1-is-uniqueNode';

describe('Is unique', () => {

    it('a should be unique', () => {
        var unique = new Unique('a');
        expect(unique.isUnique()).toBe(true);
    });

    it('abcdefg should be unique', () => {
        var unique = new Unique('abcdefg');
        expect(unique.isUnique()).toBe(true);
    });

    it('gfebca should be unique', () => {
        var unique = new Unique('gfebca');
        expect(unique.isUnique()).toBe(true);
    });

});

describe('Is unique', () => {

    it('jonjon isnt unique', () => {
        var unique = new Unique('jonjon');
        expect(unique.isUnique()).toBe(false);
    });

    it('ff isnt unique', () => {
        var unique = new Unique('ff');
        expect(unique.isUnique()).toBe(false);
    });

    it('jonathanleahy isnt unique', () => {
        var unique = new Unique('jonathanleahy');
        expect(unique.isUnique()).toBe(false);
    });

});
