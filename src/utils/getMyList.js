import MyList from "../controllers/myList.controller";

const getMyList = () => {
    const myList = window.localStorage.getItem('myList')


    if(myList) {
        return JSON.parse(myList);
    }
}

export default getMyList