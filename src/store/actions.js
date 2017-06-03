import fetchApi from './fetch'
export function FETCH_LIST_DATA ({ commit }, body) {
    commit('REFRESH_INIT')
    return fetchApi(body.page, body.type)
       .then(list => commit('REFRESH_FINISH', { list }))
}