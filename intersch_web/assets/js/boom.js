

const apiUrl = 'https://unstats.un.org/sdgapi/v1/sdg/Goal/List?includechildren=truehttps://api.example.com/sdgs';

function fetchDataFromApi() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      try {
        
        const jsonData = JSON.parse(data);
        
        document.getElementById('apiData').innerText = jsonData[0].Title;
      } catch (error) {
        console.error('Error parsing JSON data:', error);
       
      }
    })
    .catch(error => {
      console.error('Error fetching data from the API:', error);
    });
}

document.addEventListener('DOMContentLoaded', fetchDataFromApi);
