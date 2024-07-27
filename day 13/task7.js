import axios from "axios";


async function HandleApi(params) {
    const response =await axios.get('https://api.github.com/users/akhtartatariya')

    console.log(response.data)
}
HandleApi()