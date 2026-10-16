const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'TrDonutNW.aternos.me', // Buraya Kendi Aternos IP'nizi yazın!
        port: 25565, // Eğer özel bir portunuz varsa değiştirin, yoksa aynen kalsın
        username: '724_AFK_Bot', // Botun oyundaki adı
        version: false // Sunucu sürümünü otomatik algılar
    });

    bot.on('spawn', () => {
        console.log('Bot sunucuya başarıyla giriş yaptı!');
        
        // Anti-AFK: Botun sunucudan atılmaması için her 20 saniyede bir zıplamasını sağlar
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 20000);
    });

    // Bot sunucudan düşerse veya sunucu kapanıp açılırsa otomatik yeniden bağlanır
    bot.on('end', () => {
        console.log('Bağlantı kesildi, 30 saniye sonra tekrar deneniyor...');
        setTimeout(() => createBot(), 30000);
    });

    bot.on('error', (err) => console.log('Hata oluştu: ', err));
}

createBot();
TrDonutNW.aternos.me:54286
