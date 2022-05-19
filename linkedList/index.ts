class LinkedList<T> {
    list: T[]

    constructor() {
        this.list = []
    }

    public push(element: T) {
        this.list.push(element)
    }

    public pop(): T | undefined {
        return this.list.pop()
    }

    public shift(): T | undefined {
        return this.list.shift()
    }

    public unshift(element: T) {
        this.list.unshift(element)
    }

    public delete(element: T) {
        const newList: T[] = []
        for (let i = 0; i < this.list.length; i++) {
                if (this.list[i] !== element) newList.push(this.list[i])
        }
        this.list = newList
    }

    public count(): number {
        return this.list.length
    }
}
