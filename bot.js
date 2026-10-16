const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SUNUCU_IP_ADRESINIZ.aternos.me', // Buraya Kendi Aternos IP'nizi yazın!
        port: 25565,
        username: '724_AFK_Bot',
        version: '1.21.1', // Burası kritik: Kütüphanenin stabil çalışması için alt taban sürümü verdik
        checkTimeoutInterval: 60000 // Bağlantı kopmalarını engellemek için zaman aşımını uzattık
    });

    bot.on('spawn', () => {
        console.log('Bot 1.21.11 sunucusuna başarıyla giriş yaptı!');
        
        // Anti-AFK: Botun sunucudan atılmaması için sürekli zıplamasını sağlar
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 20000);
    });

    bot.on('end', (reason) => {
        console.log(`Bağlantı kesildi (${reason}), 30 saniye sonra tekrar deneniyor...`);
        setTimeout(() => createBot(), 30000);
    });

    bot.on('error', (err) => console.log('Hata oluştu: ', err));
}

createBot();
