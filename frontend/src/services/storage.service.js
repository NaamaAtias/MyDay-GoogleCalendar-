export const storageService = {
    load: loadFromStorage,
    save: saveToStorage,
    remove: removeFromStorage,
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}