export default class StringReplace {

    private wordA: string;
    private wordB: string;

    constructor(wordA: string, wordB: string) {
        this.wordA = wordA
        this.wordB = wordB
    }
    
    public isPermutation() {

        let found = true

        for (let i=0; i <= this.wordA.length; i++ ) {

            let letter = this.wordA.substr(0, 1);
            this.wordA = this.wordA.replace(letter, '')
            this.wordB = this.wordB.replace(letter, '')

            console.log(this.wordA)

            if (this.wordA.length != this.wordB.length) {
                found = false
            }

        }

        return found

    }
    
}