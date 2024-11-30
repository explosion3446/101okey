// Taşları (kartları) tanımlıyoruz
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Okey taşlarının değerleri
const colors = ['kırmızı', 'mavi', 'siyah', 'yeşil']; // Renkler

// Taşları karıştırma fonksiyonu
function shuffleTiles() {
    let tiles = [];
    colors.forEach(color => {
        values.forEach(value => {
            tiles.push({ value, color });
        });
    });
    return tiles.sort(() => Math.random() - 0.5); // Taşları karıştırır
}

// Taşları dağıtma fonksiyonu
function dealTiles() {
    let tiles = shuffleTiles();
    let players = { player1: [], player2: [], player3: [], player4: [] };

    for (let i = 0; i < 14; i++) {
        Object.keys(players).forEach(player => {
            players[player].push(tiles.pop());
        });
    }

    return players;
}

// Oyunculara taşları dağıt
const playersHands = dealTiles();

// Oyuncuların taşlarını ekrana yazdırma
function renderPlayerHand(playerId, hand) {
    const handDiv = document.getElementById(playerId);
    handDiv.innerHTML = ''; // Önceden taşlar varsa temizle
    hand.forEach(tile => {
        const tileDiv = document.createElement('div');
        tileDiv.classList.add('card');
        tileDiv.innerHTML = `${tile.value} ${tile.color}`;
        handDiv.appendChild(tileDiv);
    });
}

// Oyuncuların taşlarını render et
renderPlayerHand('player1', playersHands.player1);
renderPlayerHand('player2', playersHands.player2);
renderPlayerHand('player3', playersHands.player3);
renderPlayerHand('player4', playersHands.player4);
