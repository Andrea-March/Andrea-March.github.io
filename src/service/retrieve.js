const backendUrl = 'http://206.189.52.104:8000'


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

const sendComment = (articleId, comment) => {

}

export {getList, getArticle, send, sendComment}