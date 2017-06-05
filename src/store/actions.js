import { fetchList, fetchItem } from './fetch'

export async function FETCH_LIST_DATA ({ commit }, { body }) {
    commit('FETCH_INIT')
    return await fetchList(body.page, body.type)
       .then(list => commit('FETCH_LIST_FINISH', { list }))
}

export async function FETCH_ITEM_DATA ({ commit }, id ) {
    commit('FETCH_INIT')
    return await fetchItem(id)
       .then(item => commit('FETCH_ITEM_FINISH', { item } ))
}