export default class BubbleSort {

    private items: number[] = [];

    constructor(items: number[] = []) {
        this.items = items
    }
    
    public sort() {


        let updated: boolean = false

        do {
            updated = false

            for (let i=0; i <= this.items.length; i++ ) {
                if (this.items[i] > this.items[i+1]) {
                    let tmp: number = this.items[i]
                    this.items[i] = this.items[i+1]
                    this.items[i+1] = tmp
                    updated = true
                }
            }

        } while (updated == true)

        return this.items

    }
    
}