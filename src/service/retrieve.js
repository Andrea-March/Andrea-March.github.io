const backendUrl = 'https://coffee-backend-jr55f.ondigitalocean.app'
//const backendUrl = 'http://0.0.0.0:8000'

const handleReponse = (res) => {
    if(!res.ok){
        throw new Error("Failed to fetch!")
    }else{
        return res.json()
    }
}


const getList =  () => {
    return fetch(backendUrl+'/article-card/').then(handleReponse)
}

const getArticle = (id) =>{
    return fetch(backendUrl+`/articles/${id}/`).then(handleReponse)
}


const send = (message) =>{
    return fetch(backendUrl + '/message/',{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
}

const sendReaction = (reaction, articleId) => {
    let body = {
        "articleId" : articleId,
        "reaction" : reaction
    }
    return fetch(backendUrl + '/react/',{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

const sendComment = (articleId, comment, netlifyUser) => {
    let body = {"message": comment, "post": articleId, "user": netlifyUser}
    return fetch(backendUrl + '/comment/',{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

}

export {getList, getArticle, send, sendComment, sendReaction}