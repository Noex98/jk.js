import { ReRender } from "/jk.js"

class state {
    constructor (initState){
        this.currentState = initState
    }
    get state(){
        return this.currentState
    }

    set state(newState){
        this.currentState = newState
    }

    getState = () => {
        return this.state
    }

    setState = (newState) => {
        if (typeof(newState) === 'function'){
            this.state = newState(this.state)
            ReRender()
        } else {
            if (this.state != newState){
                this.state = newState
                ReRender()
            }
        }
    }
}

export function useState(storage, initState){

    if (!storage[0].state[storage[1]]){
        storage[0].state[storage[1]] = new state(initState)
    }
    return [storage[0].state[storage[1]].getState(), storage[0].state[storage[1]].setState]
}