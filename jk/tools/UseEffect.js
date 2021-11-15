let effects = []
let cleanups = []

// Set lifecycle hooks
export function useEffect(storage, func, dependencies){

    // First time effect is being used
    if (!storage[0].effects[storage[1]]){
        if (dependencies) storage[0].effects[storage[1]] = dependencies
        effects.push(func)

    // Effect has been used before check if for dependency change
    } else if (dependencies){
        if (!arrayEquals(storage[0].effects[storage[1]], dependencies)){
            storage[0].effects[storage[1]] = dependencies
            effects.push(func)
        }
    // No dependencies, execute func
    } else {
        effects.push(func)
    }
}


// Export handlers for router

export function handleEffects(){
    if (effects.length > 0){
        for (const func of effects){
            let a = func()
            if (typeof(a) === 'function') cleanups.push(a)
        }
        effects = []
    }
}

export function handleCleanups(){
    if (cleanups.length > 0){
        for (const func of cleanups){
            func()
        }
        cleanups = []
    }
}


// Check if arrays are equals
// Curtosy of https://masteringjs.io/tutorials/fundamentals/compare-arrays
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}