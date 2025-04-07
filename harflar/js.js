const harflar = [
  { harf: "ا", nom: "alif", bosh: "ا", orta: "ا", oxir: "ا" },
  { harf: "ب", nom: "ba", bosh: "ﺑـ", orta: "ـﺒـ", oxir: "ـﺐ" },
  { harf: "ت", nom: "ta", bosh: "ﺗـ", orta: "ـﺘـ", oxir: "ـﺖ" },
  { harf: "ث", nom: "tha", bosh: "ﺛـ", orta: "ـﺜـ", oxir: "ـﺚ" },
  { harf: "ج", nom: "jim", bosh: "ﺟـ", orta: "ـﺠـ", oxir: "ـﺞ" },
  { harf: "ح", nom: "ha", bosh: "ﺣـ", orta: "ـﺤـ", oxir: "ـﺢ" },
  { harf: "خ", nom: "kho", bosh: "ﺧـ", orta: "ـﺨـ", oxir: "ـﺦ" },
  { harf: "د", nom: "dal", bosh: "د", orta: "ـد", oxir: "ﺪ" },
  { harf: "ذ", nom: "dhal", bosh: "ذ", orta: "ـذ", oxir: "ﺫ" },
  { harf: "ر", nom: "ro", bosh: "ر", orta: "ـر", oxir: "ﺮ" },
  { harf: "ز", nom: "zay", bosh: "ز", orta: "ـز", oxir: "ﺰ" },
  { harf: "س", nom: "sin", bosh: "ﺳـ", orta: "ـﺴـ", oxir: "ـﺲ" },
  { harf: "ش", nom: "shin", bosh: "ﺷـ", orta: "ـﺸـ", oxir: "ـﺶ" },
  { harf: "ص", nom: "sod", bosh: "ﺻـ", orta: "ـﺼـ", oxir: "ـﺺ" },
  { harf: "ض", nom: "dod", bosh: "ﺿـ", orta: "ـﻀـ", oxir: "ـﺾ" },
  { harf: "ط", nom: "to", bosh: "ﻃـ", orta: "ـﻄـ", oxir: "ـﻂ" },
  { harf: "ظ", nom: "zo", bosh: "ﻇـ", orta: "ـﻈـ", oxir: "ـﻆ" },
  { harf: "ع", nom: "ain", bosh: "ﻋـ", orta: "ـﻌـ", oxir: "ـﻊ" },
  { harf: "غ", nom: "ghayn", bosh: "ﻏـ", orta: "ـﻐـ", oxir: "ـﻎ" },
  { harf: "ف", nom: "fa", bosh: "ﻓـ", orta: "ـﻔـ", oxir: "ـﻒ" },
  { harf: "ق", nom: "qaf", bosh: "ﻗـ", orta: "ـﻘـ", oxir: "ـﻖ" },
  { harf: "ك", nom: "kaf", bosh: "ﻛـ", orta: "ـﻜـ", oxir: "ـﻚ" },
  { harf: "ل", nom: "lam", bosh: "ﻟـ", orta: "ـﻠـ", oxir: "ـﻞ" },
  { harf: "م", nom: "mim", bosh: "ﻣـ", orta: "ـﻤـ", oxir: "ـﻢ" },
  { harf: "ن", nom: "nun", bosh: "ﻧـ", orta: "ـﻨـ", oxir: "ـﻦ" },
  { harf: "هـ", nom: "ha2", bosh: "ﻫـ", orta: "ـﻬـ", oxir: "ـﻪ" },
  { harf: "و", nom: "waw", bosh: "و", orta: "ـو", oxir: "ﻮ" },
  { harf: "ي", nom: "ya", bosh: "ﻳـ", orta: "ـﻴـ", oxir: "ـﻲ" },
];

const container = document.getElementById("harfContainer");
harflar.forEach((harfObj) => {
  const card = document.createElement("div");
  card.className = "harf-card";
  card.innerHTML = `
          <div class="harf">${harfObj.harf}</div>
          <div class="shakl">Boshi: ${harfObj.bosh}</div>
          <div class="shakl">O‘rtasi: ${harfObj.orta}</div>
          <div class="shakl">Oxiri: ${harfObj.oxir}</div>
          <audio id="audio-${harfObj.nom}" src="audio/${harfObj.nom}.mp3"></audio>
        `;
  card.onclick = () => {
    document.getElementById(`audio-${harfObj.nom}`).play();
  };
  container.appendChild(card);
});
