const stream = weex.requireModule('stream')
const baseURL = 'https://cnodejs.org/api/v1/topics'

exports.fetchApi = (page, type) => {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            url: `${baseURL}?page=${page}&limit=20&tab=${type}&mdrender=true`,
            type: 'json'
        }, (response) => {
            if (response.status == 200) {
                resolve(response.data)
            }
            else {
                reject(response)
            }
        }, () => {})
    })
}