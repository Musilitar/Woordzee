import { writable } from 'svelte/store'

let database: IDBDatabase
export const initializeStorage = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('woordzee', 1)

        request.addEventListener('upgradeneeded', () => {
            database = request.result

            const objectStore = database.createObjectStore('scribbles', {
                keyPath: 'id',
                autoIncrement: true,
            })

            objectStore.createIndex('text', 'text', { unique: false })
            objectStore.createIndex('state', 'state', { unique: false })
        })
        request.addEventListener('success', () => {
            database = request.result
            resolve()
        })
        request.addEventListener('error', () => {
            reject()
        })
    })
}

export const persistable = (initial) => {
    // const transaction = database.transaction(['scribbles'], 'readwrite')
    // const objectStore = transaction.objectStore('scribbles')
    // const request = objectStore.add()
    // addRequest.addEventListener('success', () => {
    //     // Clear the form, ready for adding the next entry
    //     titleInput.value = ''
    //     bodyInput.value = ''
    // })
    // // Report on the success of the transaction completing, when everything is done
    // transaction.addEventListener('complete', () => {
    //     console.log('Transaction completed: database modification finished.')
    //     // update the display of data to show the newly added item, by running displayData() again.
    //     displayData()
    // })
    // transaction.addEventListener('error', () => console.log('Transaction not opened due to error'))
    // const toString = (value) => JSON.stringify(value, null, 2) // helper function
    // const toObj = JSON.parse // helper function
    // if (localStorage.getItem(key) === null) {
    //     // item not present in local storage
    //     localStorage.setItem(key, toString(initial)) // initialize local storage with initial value
    // }
    // const saved = toObj(localStorage.getItem(key)) // convert to object
    // const { subscribe, set, update } = writable(saved) // create the underlying writable store
    // return {
    //     subscribe,
    //     set: (value) => {
    //         localStorage.setItem(key, toString(value)) // save also to local storage as a string
    //         return set(value)
    //     },
    //     update,
    // }
}

export interface Scribble {
    id: number
    text: string
    state: number
}
export const scribbles = writable<Scribble[]>([])
