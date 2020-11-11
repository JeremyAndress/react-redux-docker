export const removeKey = (obj) => {
    for (var [key, value] of Object.entries(obj)) {
        (value === '' || !value) && delete obj[key]
    }
    return obj
}
export const removeDefault = (tags) => tags.filter(tg => tg.tag !== 'DEFAULT');

// export default removeKey;