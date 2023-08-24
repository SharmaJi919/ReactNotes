import axios from 'axios';

// fetching the data from the server
 
export const getProduct = async(setData) => {
        //fetch always returns a promise but not axiox
        try {
            const res = await axios.get(`http://localhost:8080/products`)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }