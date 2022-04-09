// export const myMutation = ( state ) => {
//     return state
// }

export const setEntries = ( state, entries ) => {
    
    state.entries = [...state.entries, ...entries]
    state.isLoading = false 
}

export const updateEntry = ( state, entry ) => {

    const idx = state.entries.map( e => e.id).indexOf( entry.id )
    state.entries[idx] = entry
}
export const createEntry = ( state, entry ) => {
    // state.entries.push(entry)
    state.entries = [entry, ...state.entries]
}
export const deleteEntry = ( state, id ) => {
    // const idx = state.entries.map( e => e.id).indexOf( id )
    // delete state.entries[idx]
    state.entries = state.entries.filter( entry => entry.id !== id )
}