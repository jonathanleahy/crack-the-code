// Write this out again from scratch

export default class SelectionSort {

    public items: number[] = [];

    constructor(items: number[] = []) {
        this.items = items
    }

    public sort() {
        let ilen: number = this.items.length
        for (let all = 0; all < ilen; all++) {
            let imin: number = all;
            for (let middle = all + 1; middle <= this.items.length; middle++) {
                if (this.items[middle] < this.items[imin]) {
                    imin = middle
                }
            }
            let tmp = this.items[all]
            this.items[all] = this.items[imin]
            this.items[imin] = tmp
        }
        return this.items
    }

}