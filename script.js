// Adiciona um evento de clique ao botão de busca
document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value; // Obtém o valor do campo de entrada
    if (city) {
        getWeather(city); // Chama a função para obter a previsão do tempo
    } else {
        displayError('Por favor, digite o nome de uma cidade.'); // Exibe uma mensagem de erro
    }
});

// Função para obter a previsão do tempo da API
function getWeather(city) {
    const apiKey = 'a4940eca89ac894948faec32fac57759'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada'); // Lança um erro se a cidade não for encontrada
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            getStateAndCountry(data); // Chama a função para obter o estado e país
        })
        .catch(error => {
            console.error('Erro ao buscar os dados do clima:', error); // Exibe um erro no console
            displayError('Cidade não encontrada ou erro na requisição.'); // Exibe uma mensagem de erro
        });
}

// Função para obter o estado e país a partir das coordenadas
function getStateAndCountry(data) {
    const { lat, lon } = data.coord;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`;

    fetch(url)
        .then(response => response.json())
        .then(locationData => {
            const { state, country } = locationData.address;
            displayWeather(data, state, country); // Exibe os dados do clima com o estado e país
        })
        .catch(error => {
            console.error('Erro ao buscar os dados de localização:', error); // Exibe um erro no console
            displayError('Erro ao buscar os dados de localização.'); // Exibe uma mensagem de erro
        });
}

// Função para exibir os dados do clima na página
function displayWeather(data, state, country) {
    const weatherInfo = document.getElementById('weatherInfo');
    const { temp, humidity } = data.main;
    const { description, icon } = data.weather[0];
    const { speed } = data.wind;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${state}, ${country}</h2>
        <p>Temperatura: ${temp}°C</p>
        <p>Clima: ${description}</p>
        <p>Umidade: ${humidity}%</p>
        <p>Velocidade do vento: ${speed} m/s</p>
        <img src="${iconUrl}" alt="${description}">
    `;
    clearError(); // Limpa a mensagem de erro, se houver
}

// Função para exibir mensagens de erro
function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}

// Função para limpar mensagens de erro
function clearError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
}
