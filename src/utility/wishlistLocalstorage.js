const getWishlistStoredValue = () =>{
    const storedData = localStorage.getItem('wishlist') ;
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const setWishlistStorage = bookId =>{
    const storedData = getWishlistStoredValue();

    const valueExists = storedData.find(data => data === bookId);

    if(!valueExists){
        storedData.push(bookId);

        localStorage.setItem('wishlist', JSON.stringify(storedData))
    }
}

export {getWishlistStoredValue, setWishlistStorage}