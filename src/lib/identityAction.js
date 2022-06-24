import netlifyIdentity from "netlify-identity-widget";
import LocalStorageService from "../service/localStorageService";

export function loginUser() {
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
        const {
            created_at, confirmed_at, email, id, user_metadata
        } = netlifyIdentity.currentUser();

        const user = new NetlifyUser(created_at, confirmed_at, email, id, user_metadata.full_name)
        LocalStorageService.saveUser(user)
    }
}


export function logoutUser() {
    LocalStorageService.deleteUser()
}


class NetlifyUser {
    createdTimestamp
    confirmedTimestamp
    email
    id
    username

    constructor(created, confirmed, email, id, username) {
        this.createdTimestamp = created
        this.confirmedTimestamp = confirmed
        this.email = email
        this.id = id
        this.username = username
    }
}

