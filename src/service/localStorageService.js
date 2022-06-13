class LocalStorageService {

    static USER_STORAGE_KEY = "user"

    static saveUser = (user) => {
        localStorage.setItem(LocalStorageService.USER_STORAGE_KEY, JSON.stringify(user))
    }

    static getUser = () => {
        try{
            return JSON.parse(localStorage.getItem(LocalStorageService.USER_STORAGE_KEY))
        }catch{
            return undefined
        }
    }

    static deleteUser = () => {
        localStorage.removeItem(LocalStorageService.USER_STORAGE_KEY)
    }
}


export default LocalStorageService