export function REFRESH_INIT (state) {
   state.isRefresh = true
}
export function REFRESH_FINISH (state, { list }) {
   state.isRefresh = true
   state.listInfo = list.data
}