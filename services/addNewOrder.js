import axios from 'axios';
export const addNewOrder = async ({ notes,phoneNumber,products,total }) => {
  try {
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `
      mutation CreateOrder($data: OrderCreateInput!) {
       createOrder(data: $data) {
        notes
        phoneNumber
        products
        total
        }
       }   
      `,
      variables: {
        "data": {
          notes,
          phoneNumber,
          products,
          total
        }
      }
    };
    const options = {
      method: 'POST',
      url: 'http://localhost:4200/api/graphql',
      headers,
      data: requestBody
    };
    await axios(options);
    return true
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', err);
    return false
  }
};
