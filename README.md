# Site de Previsão do Tempo

Este projeto é um aplicativo web simples para previsão do tempo, que permite aos usuários obter informações meteorológicas detalhadas para qualquer cidade. O aplicativo exibe a temperatura atual, a condição do clima, a umidade e a velocidade do vento, além de mostrar a localização (cidade, estado e país).

## Funcionalidades:
- Busca de informações meteorológicas por cidade.
- Exibição da temperatura atual, condição do clima, umidade e velocidade do vento.
- Detalhamento da localização (cidade, estado e país).
- Interface amigável e responsiva.

## Tecnologias Utilizadas:
- HTML
- CSS
- JavaScript
- OpenWeatherMap API
- Nominatim API para geocodificação reversa

## Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- Um navegador web (como Google Chrome, Firefox, etc.)

## Como Executar:
### 1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/weather-app.git
```

### 2. Navegue até o diretório do projeto:
```bash
cd weather-app
```

### 3. Abra o arquivo `index.html` no seu navegador:
Você pode abrir o arquivo diretamente no navegador. Por exemplo, se estiver usando o Google Chrome, você pode arrastar o arquivo `index.html` para uma nova aba do navegador.

## Configuração da API:
Este projeto utiliza a [OpenWeatherMap API](https://openweathermap.org/api) e a [Nominatim API](https://nominatim.org/release-docs/develop/api/Search/) para obter dados meteorológicos e de localização, respectivamente.

1. Inscreva-se no [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) para obter uma chave de API.
2. Substitua `'SUA_CHAVE_DE_API'` no arquivo `script.js` pela sua chave de API do OpenWeatherMap:
   ```javascript
   const apiKey = 'a4940eca89ac894948faec32fac57759'; // Substitua pela sua chave da API
   ```
3. Certifique-se de que a API do Nominatim está configurada corretamente para geocodificação reversa.



