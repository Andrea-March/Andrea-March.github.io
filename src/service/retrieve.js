const backendUrl = 'http://0.0.0.0:8000'


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

const getComments = (articleId) => {
    return fetch(backendUrl+`/comments/${articleId}/`).then((res) => res.json()).catch(console.log)
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

export {getList, getArticle, send}