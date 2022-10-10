import axios from 'axios'

const allCountries = async (state) => {
    const request = await axios.get('https://api.covid19api.com/summary')
    state(request.data.Countries);
}

const globalSummary = async (state) => {
    const request = await axios.get('https://api.covid19api.com/world/total')
    state(request.data);
}

const summaryByCountry = async (state , country) => {
    const request = await axios.get('https://api.covid19api.com/dayone/country/'+ country)
    state(request.data);
}


export{
    allCountries , globalSummary , summaryByCountry
}