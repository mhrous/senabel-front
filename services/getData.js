import axios from 'axios';
export const getData = async () => {


  try {
    const headers = {
      'content-type': 'application/json',
    };
    const requestBody = {
      query: `
      query Query {
        data:getData
      }  
      `,
      variables: { }
    };
    const options = {
      method: 'POST',
      url: 'https://qz9wlshsqh.execute-api.eu-west-3.amazonaws.com/dev/api',
      headers,
      data: requestBody
    };
    const response = await axios(options);
    return response.data.data.data
  }
  catch (err) {
    console.log('ERROR DURING AXIOS REQUEST', err);
    return []
  }
};
