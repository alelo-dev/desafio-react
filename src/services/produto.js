export const getProdutos = async (cb) =>{
    var retorno = {}
    try{
        const requestOptions = {
            method: 'GET',
            headers: { 
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`https://fakestoreapi.com/products`, requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                retorno = result;
                cb(retorno);
            },
            (error) => {
                console.log('ERROR :', error);
                return error
            }
        )    
    }catch(error){
        return error;     
    }
    
}

export const insertProduto = async (title, price, description, image, category, cb) =>{
    var retorno = {}

    const escopo = JSON.stringify(
        {
            title: title,
            price: price,
            description: description,
            image: image,
            category: category
        }
    )

    try{
        const requestOptions = {
            method: 'POST',
            headers: { 
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: escopo
        }
        fetch(`https://fakestoreapi.com/products`, requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                retorno = result;
                cb(retorno);
            },
            (error) => {
                console.log('ERROR :', error);
                return error
            }
        )    
    }catch(error){
        return error;     
    }
    
}

export const updateProduto = async (idProduto, title, price, description, image, category, cb) =>{
    var retorno = {}

    const escopo = JSON.stringify(
        {
            title: title,
            price: price,
            description: description,
            image: image,
            category: category
        }
    )

    try{
        const requestOptions = {
            method: 'PUT',
            headers: { 
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: escopo
        }
        fetch(`https://fakestoreapi.com/products/${idProduto}`, requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                retorno = result;
                cb(retorno);
            },
            (error) => {
                console.log('ERROR :', error);
                return error
            }
        )    
    }catch(error){
        return error;     
    }
    
}

export const deleteProduto = async (idProduto,cb) =>{
    var retorno = {}

    try{
        const requestOptions = {
            method: 'DELETE',
            headers: { 
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }
        fetch(`https://fakestoreapi.com/products/${idProduto}`, requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                retorno = result;
                cb(retorno);
            },
            (error) => {
                console.log('ERROR :', error);
                return error
            }
        )    
    }catch(error){
        return error;     
    }
    
}