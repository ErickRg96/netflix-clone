const insertMyList = (element) => {
    if(localStorage.getItem('myList') == null) {
        let myList = []
        myList.push(element)
        localStorage.setItem('myList', JSON.stringify(myList))
    } else {
        let myList = JSON.parse(localStorage.getItem('myList'))
        let myListIds = myList.map( elementInList => elementInList.id )
        
        if (!myListIds.includes(element.id)) {
            myList.unshift(element)
            localStorage.setItem('myList', JSON.stringify(myList))
        }
    }
}

export default insertMyList