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


export function useState(initState, key){

    if (!jk.ALL_STATES[key]){
        jk.ALL_STATES[key] = new state(initState)
    }
    return [jk.ALL_STATES[key].getState(), jk.ALL_STATES[key].setState]
}