export default class Unique {

    private word: string;
    
    constructor(word: string) {
        this.word = word
    }
    
    public isUnique() {
        let key = []
        let found = true
        let result = this.word.split('').forEach(c => {
            if (key[c] == c) {
                found = false
            }
            key[c] = c
        })
        return found
    }
    
}