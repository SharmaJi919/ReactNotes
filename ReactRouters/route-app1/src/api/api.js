// to take all api calls in one file
const url = `http://localhost:8080/products`;

//making get request on product page
export const getData = (setData) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res));
};

//making get single product data
export const getSData = (id,setData) => {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((res) => setData(res));
};


