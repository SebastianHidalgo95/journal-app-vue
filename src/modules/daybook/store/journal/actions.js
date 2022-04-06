import journalApi from '@/api/journalApi'
// export const myAction = async ({commit}) => {

// }

export const loadEntries = async ( { commit } ) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for ( let id of Object.keys( data )){
        entries.push({
            id: id,
            ...data[id],
        })
    }
    commit('setEntries', entries)
}

export const updateEntry =  async ( { commit } ,entry ) =>  {
    const { id, ...dataToSave } = entry
    
    const { data } = await journalApi.put(`/entries/${id}.json`, dataToSave)
    commit('updateEntry', { ...entry })
}

export const createEntry = async ( /*{ commit }*/ ) => {

}