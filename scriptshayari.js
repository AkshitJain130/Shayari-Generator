// Shayari data
const shayari = {
    love: [
        "तेरी यादों में रहना चाहता हूँ, दिल में तेरे ख्वाब सजाना चाहता हूँ।",
        "तेरे प्यार में डूबे रहना है, इस जिंदगी को तेरे नाम सजाना है।",
        "तेरे बिना जिंदगी अधूरी है, तेरी मोहब्बत में खोना चाहता हूँ।"
    ],
    friendship: [
        "दोस्ती का रिश्ता अनमोल है, हर पल उसे खुशी से निभाना चाहता हूँ।",
        "दोस्ती का सफर बहुत यादगार है, हमेशा तुम्हारे साथ साझा करना चाहता हूँ।",
        "तुम्हारी दोस्ती में खो जाना है, हर पल तुम्हारे साथ हंसना चाहता हूँ।"
    ],
    sadness: [
        "दर्द भरी रातों में तेरी यादें याद आती हैं, दिल को तेरी जरुरत आती है।",
        "अकेलापन की राहों में तेरी यादें साथ चलती हैं, तेरी मोहब्बत को फिर से पाने की चाहत हूँ।",
        "ज़िन्दगी के रास्ते बिखरे हुए हैं, तेरी यादों के साथ उन्हें सजाना चाहता हूँ।"
    ],
    flirting: [
        "आज मौसम में अजीब सी बात है, बेकाबू से हमारे खयालात हैं, जी चाहता है चुरा लूँ आप को आपसे, पर मम्मी कहती है चोरी करना पाप है."
    ],
    romantic: [
        "😘 चाहत है या दिल-लगी या यूँ ही मन भर आया है, याद करोगे तुम भी कभी किससे दिल लगाया है | 💕"
    ]
};

// Function to generate Shayari
function generateShayari() {
    const category = document.getElementById("category").value;
    const shayariList = shayari[category];
    const randomIndex = Math.floor(Math.random() * shayariList.length);
    const randomShayari = shayariList[randomIndex];
    document.getElementById("shayariDisplay").textContent = randomShayari;
}
