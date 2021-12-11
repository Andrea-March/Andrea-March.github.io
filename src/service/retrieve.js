const backendUrl = 'http://localhost:8000'


const getList = async () => {
    return await fetch(backendUrl+'/article-card/').then((res) => res.json()).catch(console.log)
}

/*const getArticle = (id) =>{
    return fetch(backendUrl+`/articles/${id}/`).then((res) => res.json()).catch(console.log)
}
*/
const send = (message) =>{
    return fetch(backendUrl + '/message/',{
        method: 'POST',
        body: JSON.stringify(message)
    })
}

export {getList,  send}