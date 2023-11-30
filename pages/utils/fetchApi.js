import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'


    export const fetchApi = async(url) => {
      const response = await axios.get((url),{
            headers: {
                'X-RapidAPI-Key': '359e46c19bmshb5065a896d675adp1c484ejsn333c8abb2cf1',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }

        });

        return data;
    }