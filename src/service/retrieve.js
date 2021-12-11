const bakendUrl = 'http://localhost:8000'


const getList = async () => {
    return await fetch(bakendUrl+'/articles/').then((res) => res.json()).catch(console.log)
}

const getArticle = async (id) =>{
    return await fetch(bakendUrl+`/articles/${id}`).then((res) => res.json()).catch(console.log)
}

export {getList, getArticle}