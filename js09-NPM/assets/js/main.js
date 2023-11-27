const url = 'https://fakestoreapi.com/users';
const getUsersUsingfetch = async (url) => {
    await fetch(url)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
}

const getUsersUsingAxions = async (url) => {
    await axios.get(url)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}
getUsersUsingfetch(url);
getUsersUsingAxions(url)