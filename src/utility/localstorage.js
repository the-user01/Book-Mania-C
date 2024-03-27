const getStoredValue = () =>{
    const storedData = localStorage.getItem('books') ;
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const setStorage = bookId =>{
    const storedData = getStoredValue();

    const valueExists = storedData.find(data => data === bookId);

    if(!valueExists){
        storedData.push(bookId);

        localStorage.setItem('books', JSON.stringify(storedData))
    }
}

export {getStoredValue, setStorage}