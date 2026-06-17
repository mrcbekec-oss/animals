const animals = [
    { name: "Köpek", emoji: "🐶", hp: 100, attack: 15, defense: 10, speed: 12 },
    { name: "Kedi", emoji: "🐱", hp: 80, attack: 18, defense: 8, speed: 15 },
    { name: "Fare", emoji: "🐭", hp: 30, attack: 5, defense: 2, speed: 18 },
    { name: "Hamster", emoji: "🐹", hp: 25, attack: 4, defense: 2, speed: 16 },
    { name: "Tavşan", emoji: "🐰", hp: 40, attack: 8, defense: 5, speed: 20 },
    { name: "Tilki", emoji: "🦊", hp: 90, attack: 16, defense: 9, speed: 17 },
    { name: "Ayı", emoji: "🐻", hp: 200, attack: 25, defense: 20, speed: 8 },
    { name: "Panda", emoji: "🐼", hp: 180, attack: 15, defense: 18, speed: 5 },
    { name: "Koala", emoji: "🐨", hp: 70, attack: 10, defense: 10, speed: 4 },
    { name: "Kaplan", emoji: "🐯", hp: 150, attack: 30, defense: 12, speed: 18 },
    { name: "Aslan", emoji: "🦁", hp: 160, attack: 28, defense: 15, speed: 16 },
    { name: "İnek", emoji: "🐮", hp: 120, attack: 12, defense: 15, speed: 6 },
    { name: "Domuz", emoji: "🐷", hp: 110, attack: 14, defense: 12, speed: 8 },
    { name: "Kurbağa", emoji: "🐸", hp: 35, attack: 6, defense: 4, speed: 15 },
    { name: "Maymun", emoji: "🐵", hp: 85, attack: 16, defense: 10, speed: 19 },
    { name: "Goril", emoji: "🦍", hp: 190, attack: 26, defense: 22, speed: 11 },
    { name: "Orangutan", emoji: "🦧", hp: 170, attack: 22, defense: 18, speed: 10 },
    { name: "Tavuk", emoji: "🐔", hp: 40, attack: 10, defense: 5, speed: 12 },
    { name: "Penguen", emoji: "🐧", hp: 60, attack: 12, defense: 10, speed: 8 },
    { name: "Kuş", emoji: "🐦", hp: 25, attack: 8, defense: 3, speed: 22 },
    { name: "Ördek", emoji: "🦆", hp: 45, attack: 9, defense: 6, speed: 10 },
    { name: "Kartal", emoji: "🦅", hp: 90, attack: 24, defense: 8, speed: 25 },
    { name: "Baykuş", emoji: "🦉", hp: 70, attack: 20, defense: 7, speed: 20 },
    { name: "Yarasa", emoji: "🦇", hp: 35, attack: 14, defense: 4, speed: 24 },
    { name: "Kurt", emoji: "🐺", hp: 120, attack: 22, defense: 12, speed: 17 },
    { name: "Yaban Domuzu", emoji: "🐗", hp: 140, attack: 20, defense: 16, speed: 13 },
    { name: "At", emoji: "🐴", hp: 150, attack: 18, defense: 12, speed: 22 },
    { name: "Tek Boynuzlu At", emoji: "🦄", hp: 180, attack: 25, defense: 15, speed: 24 },
    { name: "Arı", emoji: "🐝", hp: 15, attack: 18, defense: 1, speed: 26 },
    { name: "Böcek", emoji: "🐛", hp: 10, attack: 2, defense: 1, speed: 5 },
    { name: "Kelebek", emoji: "🦋", hp: 10, attack: 1, defense: 1, speed: 18 },
    { name: "Salyangoz", emoji: "🐌", hp: 20, attack: 2, defense: 15, speed: 1 },
    { name: "Uğur Böceği", emoji: "🐞", hp: 12, attack: 3, defense: 2, speed: 12 },
    { name: "Karınca", emoji: "🐜", hp: 5, attack: 5, defense: 1, speed: 10 },
    { name: "Çekirge", emoji: "🦗", hp: 15, attack: 6, defense: 2, speed: 16 },
    { name: "Akrep", emoji: "🦂", hp: 45, attack: 22, defense: 10, speed: 14 },
    { name: "Sivrisinek", emoji: "🦟", hp: 5, attack: 15, defense: 1, speed: 25 },
    { name: "Mikrop", emoji: "🦠", hp: 1, attack: 30, defense: 1, speed: 2 },
    { name: "Kaplumbağa", emoji: "🐢", hp: 110, attack: 8, defense: 30, speed: 2 },
    { name: "Yılan", emoji: "🐍", hp: 60, attack: 25, defense: 5, speed: 16 },
    { name: "Kertenkele", emoji: "🦎", hp: 40, attack: 10, defense: 5, speed: 18 },
    { name: "T-Rex", emoji: "🦖", hp: 300, attack: 40, defense: 25, speed: 15 },
    { name: "Dinozor", emoji: "🦕", hp: 400, attack: 20, defense: 35, speed: 5 },
    { name: "Ahtapot", emoji: "🐙", hp: 80, attack: 18, defense: 10, speed: 12 },
    { name: "Kalamar", emoji: "🦑", hp: 70, attack: 16, defense: 8, speed: 15 },
    { name: "Karides", emoji: "🦐", hp: 20, attack: 5, defense: 3, speed: 18 },
    { name: "Istakoz", emoji: "🦞", hp: 50, attack: 15, defense: 20, speed: 8 },
    { name: "Yengeç", emoji: "🦀", hp: 45, attack: 12, defense: 18, speed: 10 },
    { name: "Balon Balığı", emoji: "🐡", hp: 35, attack: 25, defense: 5, speed: 12 },
    { name: "Tropikal Balık", emoji: "🐠", hp: 25, attack: 4, defense: 2, speed: 16 },
    { name: "Balık", emoji: "🐟", hp: 30, attack: 5, defense: 3, speed: 15 },
    { name: "Yunus", emoji: "🐬", hp: 110, attack: 18, defense: 10, speed: 22 },
    { name: "Balina", emoji: "🐳", hp: 250, attack: 25, defense: 20, speed: 12 },
    { name: "Mavi Balina", emoji: "🐋", hp: 300, attack: 30, defense: 25, speed: 10 },
    { name: "Köpek Balığı", emoji: "🦈", hp: 180, attack: 35, defense: 15, speed: 20 },
    { name: "Timsah", emoji: "🐊", hp: 160, attack: 28, defense: 22, speed: 14 },
    { name: "Bengal Kaplanı", emoji: "🐅", hp: 155, attack: 32, defense: 11, speed: 19 },
    { name: "Leopar", emoji: "🐆", hp: 130, attack: 26, defense: 10, speed: 24 },
    { name: "Zebra", emoji: "🦓", hp: 120, attack: 15, defense: 10, speed: 18 },
    { name: "Fil", emoji: "🐘", hp: 280, attack: 25, defense: 30, speed: 9 },
    { name: "Su Aygırı", emoji: "🦛", hp: 220, attack: 30, defense: 25, speed: 11 },
    { name: "Gergedan", emoji: "🦏", hp: 210, attack: 28, defense: 28, speed: 12 },
    { name: "Deve", emoji: "🐪", hp: 150, attack: 14, defense: 15, speed: 10 },
    { name: "Çift Hörgüçlü Deve", emoji: "🐫", hp: 160, attack: 15, defense: 16, speed: 9 },
    { name: "Zürafa", emoji: "🦒", hp: 180, attack: 20, defense: 12, speed: 13 },
    { name: "Kanguru", emoji: "🦘", hp: 110, attack: 22, defense: 10, speed: 17 },
    { name: "Manda", emoji: "🐃", hp: 170, attack: 20, defense: 22, speed: 10 },
    { name: "Öküz", emoji: "🐂", hp: 160, attack: 18, defense: 20, speed: 9 },
    { name: "Koyun", emoji: "🐑", hp: 70, attack: 8, defense: 6, speed: 11 },
    { name: "Keçi", emoji: "🐐", hp: 80, attack: 12, defense: 8, speed: 13 },
    { name: "Geyik", emoji: "🦌", hp: 100, attack: 14, defense: 8, speed: 20 },
    { name: "Kaniş", emoji: "🐩", hp: 70, attack: 12, defense: 6, speed: 14 },
    { name: "Horoz", emoji: "🐓", hp: 50, attack: 15, defense: 4, speed: 15 },
    { name: "Hindi", emoji: "🦃", hp: 60, attack: 12, defense: 6, speed: 10 },
    { name: "Tavus Kuşu", emoji: "🦚", hp: 75, attack: 10, defense: 5, speed: 12 }
];

let fighter1 = null;
let fighter2 = null;
let selectingPlayer = 1; // 1 or 2
let isFighting = false;

let f1CurrentHp = 0;
let f2CurrentHp = 0;

// Tournament state
let currentMode = 'classic'; // 'classic' or 'tournament'
let tournamentOpponents = [];
let tournamentCurrentIndex = 0;
let tournamentWins = 0;
let tournamentLosses = 0;

const DOM = {
    rosterGrid: document.getElementById('roster-grid'),
    btnSelectP1: document.getElementById('select-p1-btn'),
    btnSelectP2: document.getElementById('select-p2-btn'),
    btnRandom: document.getElementById('random-btn'),
    btnFight: document.getElementById('fight-btn'),
    
    f1Emoji: document.getElementById('fighter1-emoji'),
    f1Name: document.getElementById('fighter1-name'),
    f1Stats: document.getElementById('fighter1-stats'),
    f1Health: document.getElementById('fighter1-health'),
    
    f2Emoji: document.getElementById('fighter2-emoji'),
    f2Name: document.getElementById('fighter2-name'),
    f2Stats: document.getElementById('fighter2-stats'),
    f2Health: document.getElementById('fighter2-health'),
    
    logList: document.getElementById('log-list'),
    battleLog: document.getElementById('battle-log'),

    // Mode elements
    modeClassicBtn: document.getElementById('mode-classic-btn'),
    modeTournamentBtn: document.getElementById('mode-tournament-btn'),
    tournamentStatus: document.getElementById('tournament-status'),
    tourneyProgress: document.getElementById('tourney-progress'),
    tourneyWins: document.getElementById('tourney-wins'),
    tourneyLosses: document.getElementById('tourney-losses'),
    tourneyProgressBar: document.getElementById('tourney-progress-bar')
};

function init() {
    renderRoster();
    setupEventListeners();
}

function renderRoster() {
    DOM.rosterGrid.innerHTML = '';
    animals.forEach((animal, index) => {
        const item = document.createElement('div');
        item.className = 'animal-item';
        item.innerHTML = `
            <div class="emoji">${animal.emoji}</div>
            <div class="name">${animal.name}</div>
        `;
        item.addEventListener('click', () => selectAnimal(index, item));
        DOM.rosterGrid.appendChild(item);
    });
}

function setupEventListeners() {
    DOM.btnSelectP1.addEventListener('click', () => {
        if (currentMode === 'tournament') return;
        selectingPlayer = 1;
        DOM.btnSelectP1.classList.add('active');
        DOM.btnSelectP2.classList.remove('active');
    });

    DOM.btnSelectP2.addEventListener('click', () => {
        if (currentMode === 'tournament') return;
        selectingPlayer = 2;
        DOM.btnSelectP2.classList.add('active');
        DOM.btnSelectP1.classList.remove('active');
    });

    DOM.btnRandom.addEventListener('click', () => {
        if (isFighting) return;
        if (currentMode === 'classic') {
            const r1 = Math.floor(Math.random() * animals.length);
            const r2 = Math.floor(Math.random() * animals.length);
            
            selectingPlayer = 1;
            selectAnimal(r1, DOM.rosterGrid.children[r1]);
            
            selectingPlayer = 2;
            selectAnimal(r2, DOM.rosterGrid.children[r2]);
            
            selectingPlayer = 1;
            DOM.btnSelectP1.classList.add('active');
            DOM.btnSelectP2.classList.remove('active');
        } else {
            // Tournament mode: random select for player 1 only
            const r1 = Math.floor(Math.random() * animals.length);
            selectingPlayer = 1;
            selectAnimal(r1, DOM.rosterGrid.children[r1]);
        }
    });

    DOM.btnFight.addEventListener('click', () => {
        if (currentMode === 'classic') {
            startFight();
        } else {
            startTournament();
        }
    });

    // Mode Selector listeners
    DOM.modeClassicBtn.addEventListener('click', () => {
        if (isFighting) return;
        switchMode('classic');
    });

    DOM.modeTournamentBtn.addEventListener('click', () => {
        if (isFighting) return;
        switchMode('tournament');
    });
}

function switchMode(mode) {
    currentMode = mode;
    
    // Clear selections
    fighter1 = null;
    fighter2 = null;
    f1CurrentHp = 0;
    f2CurrentHp = 0;
    
    // Reset selection styles in grid
    Array.from(DOM.rosterGrid.children).forEach(child => {
        child.classList.remove('selected-1', 'selected-2');
    });

    // Reset cards to default
    DOM.f1Emoji.textContent = '❓';
    DOM.f1Name.textContent = 'Hayvan 1 Seçin';
    DOM.f1Stats.innerHTML = '<span>⚔️ Saldırı: ?</span> <span>🛡️ Savunma: ?</span> <span>⚡ Hız: ?</span>';
    DOM.f1Health.style.width = '0%';
    
    DOM.f2Emoji.textContent = '❓';
    DOM.f2Name.textContent = 'Hayvan 2 Seçin';
    DOM.f2Stats.innerHTML = '<span>⚔️ Saldırı: ?</span> <span>🛡️ Savunma: ?</span> <span>⚡ Hız: ?</span>';
    DOM.f2Health.style.width = '0%';

    DOM.btnFight.disabled = true;
    DOM.btnFight.textContent = "SAVAŞI BAŞLAT";
    DOM.logList.innerHTML = '<li>Savaşın başlaması bekleniyor...</li>';

    if (mode === 'classic') {
        DOM.modeClassicBtn.classList.add('active');
        DOM.modeTournamentBtn.classList.remove('active');
        DOM.tournamentStatus.classList.add('hidden');
        DOM.btnSelectP2.classList.remove('hidden');
        selectingPlayer = 1;
        DOM.btnSelectP1.classList.add('active');
        DOM.btnSelectP2.classList.remove('active');
        DOM.btnSelectP1.textContent = "Oyuncu 1 İçin Seç";
    } else {
        DOM.modeTournamentBtn.classList.add('active');
        DOM.modeClassicBtn.classList.remove('active');
        DOM.tournamentStatus.classList.remove('hidden');
        DOM.btnSelectP2.classList.add('hidden');
        selectingPlayer = 1;
        DOM.btnSelectP1.classList.add('active');
        DOM.btnSelectP1.textContent = "Hayvanını Seç";
        
        // Update status UI
        DOM.tourneyProgress.textContent = "0 / 25";
        DOM.tourneyWins.textContent = "0";
        DOM.tourneyLosses.textContent = "0";
        DOM.tourneyProgressBar.style.width = "0%";
    }
}

function selectAnimal(index, element) {
    if (isFighting) return;

    const animal = animals[index];
    
    if (currentMode === 'classic') {
        // Clear previous selection styling
        Array.from(DOM.rosterGrid.children).forEach(child => {
            if (selectingPlayer === 1) child.classList.remove('selected-1');
            if (selectingPlayer === 2) child.classList.remove('selected-2');
        });

        element.classList.add(`selected-${selectingPlayer}`);

        if (selectingPlayer === 1) {
            fighter1 = animal;
            f1CurrentHp = animal.hp;
            updateFighterUI(1, animal);
        } else {
            fighter2 = animal;
            f2CurrentHp = animal.hp;
            updateFighterUI(2, animal);
        }
    } else {
        // Tournament mode: Only player 1 selects, player 2 is auto-generated
        Array.from(DOM.rosterGrid.children).forEach(child => {
            child.classList.remove('selected-1');
        });
        element.classList.add('selected-1');
        
        fighter1 = animal;
        f1CurrentHp = animal.hp;
        updateFighterUI(1, animal);
        
        // Generate 25 opponents
        generateTournamentOpponents();
        
        // Select first opponent
        tournamentCurrentIndex = 0;
        tournamentWins = 0;
        tournamentLosses = 0;
        fighter2 = tournamentOpponents[0];
        f2CurrentHp = fighter2.hp;
        updateFighterUI(2, fighter2);

        // Reset progress UI
        DOM.tourneyProgress.textContent = `0 / 25`;
        DOM.tourneyWins.textContent = "0";
        DOM.tourneyLosses.textContent = "0";
        DOM.tourneyProgressBar.style.width = "0%";
    }

    checkReady();
}

function generateTournamentOpponents() {
    tournamentOpponents = [];
    for (let i = 0; i < 25; i++) {
        const randomIndex = Math.floor(Math.random() * animals.length);
        // Deep copy of animal stats so we don't modify the master template
        tournamentOpponents.push({ ...animals[randomIndex] });
    }
}

function updateFighterUI(playerNum, animal) {
    const emoji = playerNum === 1 ? DOM.f1Emoji : DOM.f2Emoji;
    const name = playerNum === 1 ? DOM.f1Name : DOM.f2Name;
    const stats = playerNum === 1 ? DOM.f1Stats : DOM.f2Stats;
    const health = playerNum === 1 ? DOM.f1Health : DOM.f2Health;

    emoji.textContent = animal.emoji;
    name.textContent = animal.name;
    stats.innerHTML = `
        <span>⚔️ ${animal.attack}</span>
        <span>🛡️ ${animal.defense}</span>
        <span>⚡ ${animal.speed}</span>
        <span>❤️ ${animal.hp}</span>
    `;
    health.style.width = '100%';
    health.style.background = 'linear-gradient(90deg, #22c55e, #10b981)';
}

function checkReady() {
    if (fighter1 && fighter2) {
        DOM.btnFight.disabled = false;
        if (currentMode === 'tournament') {
            DOM.btnFight.textContent = "TURNUVAYI BAŞLAT";
        } else {
            DOM.btnFight.textContent = "SAVAŞI BAŞLAT";
        }
    }
}

function addLog(message, isImportant = false) {
    const li = document.createElement('li');
    li.innerHTML = message;
    if (isImportant) li.style.fontWeight = 'bold';
    if (isImportant) li.style.color = 'var(--accent)';
    DOM.logList.appendChild(li);
    DOM.battleLog.scrollTop = DOM.battleLog.scrollHeight;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function startFight() {
    if (!fighter1 || !fighter2 || isFighting) return;
    
    isFighting = true;
    DOM.btnFight.disabled = true;
    DOM.logList.innerHTML = '';
    
    // Reset HP for new fight
    f1CurrentHp = fighter1.hp;
    f2CurrentHp = fighter2.hp;
    DOM.f1Health.style.width = '100%';
    DOM.f2Health.style.width = '100%';
    
    addLog(`<b>SAVAŞ BAŞLIYOR!</b> ${fighter1.emoji} ${fighter1.name} VS ${fighter2.emoji} ${fighter2.name}`, true);
    await sleep(1000);

    const winner = await runSingleBattle();
    
    addLog(`<h3>🏆 KAZANAN: ${winner.emoji} ${winner.name}! 🏆</h3>`, true);
    
    const winnerEmoji = winner === fighter1 ? DOM.f1Emoji : DOM.f2Emoji;
    winnerEmoji.classList.add('shake');
    
    setTimeout(() => {
        winnerEmoji.classList.remove('shake');
        isFighting = false;
        DOM.btnFight.disabled = false;
        DOM.btnFight.textContent = "TEKRAR SAVAŞTIR";
    }, 2000);
}

async function startTournament() {
    if (!fighter1 || !fighter2 || isFighting) return;
    
    isFighting = true;
    DOM.btnFight.disabled = true;
    
    tournamentWins = 0;
    tournamentLosses = 0;
    
    for (let i = 0; i < 25; i++) {
        tournamentCurrentIndex = i;
        fighter2 = tournamentOpponents[i];
        f2CurrentHp = fighter2.hp;
        f1CurrentHp = fighter1.hp; // Reset player HP to full for each fight
        
        updateFighterUI(1, fighter1);
        updateFighterUI(2, fighter2);
        
        DOM.logList.innerHTML = '';
        addLog(`<b>[SAVAŞ ${i + 1} / 25]</b>`, true);
        addLog(`Rakip: ${fighter2.emoji} ${fighter2.name} (Saldırı: ${fighter2.attack}, Savunma: ${fighter2.defense}, Hız: ${fighter2.speed}, HP: ${fighter2.hp})`);
        await sleep(1500);
        
        const winner = await runSingleBattle();
        
        if (winner === fighter1) {
            tournamentWins++;
            addLog(`<h3>🎉 Savaş Kazandı! ${fighter1.name} galip geldi.</h3>`, true);
        } else {
            tournamentLosses++;
            addLog(`<h3>😢 Savaş Kaybedildi! ${fighter2.name} galip geldi.</h3>`, true);
        }
        
        // Update tournament progress UI
        const progressPercent = ((i + 1) / 25) * 100;
        DOM.tourneyProgress.textContent = `${i + 1} / 25`;
        DOM.tourneyWins.textContent = tournamentWins;
        DOM.tourneyLosses.textContent = tournamentLosses;
        DOM.tourneyProgressBar.style.width = `${progressPercent}%`;
        
        await sleep(2000);
    }
    
    // Tournament ended
    DOM.logList.innerHTML = '';
    addLog(`<h2>🏆 TURNUVA TAMAMLANDI! 🏆</h2>`, true);
    addLog(`<b>Seçilen Hayvan:</b> ${fighter1.emoji} ${fighter1.name}`);
    addLog(`<b>Toplam Galibiyet:</b> ${tournamentWins} / 25`);
    addLog(`<b>Toplam Mağlubiyet:</b> ${tournamentLosses} / 25`);
    
    if (tournamentWins === 25) {
        addLog(`<h3>👑 EFSANEVİ BİR ZAFER! 25 rakibin hepsini yendiniz! 👑</h3>`, true);
    } else if (tournamentWins >= 18) {
        addLog(`<h3>🔥 Harika bir performans! Turnuvayı başarıyla tamamladınız.</h3>`, true);
    } else if (tournamentWins >= 10) {
        addLog(`<h3>👍 Fena değil. Orta düzey bir başarı elde ettiniz.</h3>`);
    } else {
        addLog(`<h3>😅 Şansınız pek yaver gitmedi, tekrar deneyebilirsiniz!</h3>`);
    }
    
    isFighting = false;
    DOM.btnFight.disabled = false;
    DOM.btnFight.textContent = "YENİ TURNUVA BAŞLAT";
}

async function runSingleBattle() {
    let turn = fighter1.speed >= fighter2.speed ? 1 : 2;
    if (fighter1.speed === fighter2.speed) {
        turn = Math.random() > 0.5 ? 1 : 2;
    }

    addLog(`Hızı yüksek olan ilk saldırır. İlk saldıran: ${turn === 1 ? fighter1.name : fighter2.name}`);
    await sleep(800);

    while (f1CurrentHp > 0 && f2CurrentHp > 0) {
        if (turn === 1) {
            await performAttack(fighter1, fighter2, 1, 2);
            turn = 2;
        } else {
            await performAttack(fighter2, fighter1, 2, 1);
            turn = 1;
        }
        await sleep(900);
    }

    return f1CurrentHp > 0 ? fighter1 : fighter2;
}

async function performAttack(attacker, defender, attackerNum, defenderNum) {
    const damageMultiplier = Math.random() * (1.2 - 0.8) + 0.8;
    let rawDamage = (attacker.attack * damageMultiplier) - (defender.defense * 0.3);
    
    // Critical hit chance 10%
    let isCrit = false;
    if (Math.random() < 0.1) {
        rawDamage *= 1.5;
        isCrit = true;
    }

    let damage = Math.max(1, Math.floor(rawDamage));

    // Animations
    const attackerEmoji = attackerNum === 1 ? DOM.f1Emoji : DOM.f2Emoji;
    const defenderEmoji = defenderNum === 1 ? DOM.f1Emoji : DOM.f2Emoji;
    const defenderCard = defenderNum === 1 ? document.getElementById('fighter1-card') : document.getElementById('fighter2-card');

    attackerEmoji.classList.add(attackerNum === 1 ? 'attack-move-right' : 'attack-move-left');
    
    await sleep(150); // Wait for hit
    
    defenderCard.classList.add('damage-flash');
    defenderEmoji.classList.add('shake');

    setTimeout(() => {
        attackerEmoji.classList.remove('attack-move-right', 'attack-move-left');
        defenderCard.classList.remove('damage-flash');
        defenderEmoji.classList.remove('shake');
    }, 300);

    // Update HP
    if (defenderNum === 1) {
        f1CurrentHp = Math.max(0, f1CurrentHp - damage);
        updateHealthBar(DOM.f1Health, f1CurrentHp, fighter1.hp);
    } else {
        f2CurrentHp = Math.max(0, f2CurrentHp - damage);
        updateHealthBar(DOM.f2Health, f2CurrentHp, fighter2.hp);
    }

    let critText = isCrit ? " <b>(KRİTİK VURUŞ!)</b>" : "";
    addLog(`${attacker.emoji} ${attacker.name} saldırdı! ${defender.emoji} ${defender.name}'a ${damage} hasar verdi.${critText}`);
}

function updateHealthBar(barElement, current, max) {
    const percentage = (current / max) * 100;
    barElement.style.width = `${percentage}%`;
    
    if (percentage > 50) {
        barElement.style.background = 'linear-gradient(90deg, #22c55e, #10b981)';
    } else if (percentage > 20) {
        barElement.style.background = 'linear-gradient(90deg, #eab308, #ca8a04)';
    } else {
        barElement.style.background = 'linear-gradient(90deg, #ef4444, #b91c1c)';
    }
}

// Initialize
init();
