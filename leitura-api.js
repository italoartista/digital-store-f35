
const base = 'https://api.binance.com'
const endpoint = '/api/v3/klines'
const symbol = 'BTCUSDT'
const interval = '1h'
const dados = [];

async function getLeitura() {
    const response = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m');
    const data = await response.json();
    return data;
}

setInterval(()=>{
    getLeitura().then(
        (data) => {
            console.log(data)
            let [time, open, high, low, close] = data[0];
            let div = document.createElement('div');
            div.className = 'dados';
            div.innerHTML = `
                    <h2>Dados</h2>
                    <p>Time: ${time}</p>
                    <p>Open: ${open}</p>
                    <p>High: ${high}</p>
                    <p>Low: ${low}</p>
                    <p>Close: ${close}</p>
    
            `;
            document.body.appendChild(div);
        }
    );
    
}, 5000)




