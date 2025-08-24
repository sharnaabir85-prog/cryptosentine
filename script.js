function encryptMessage() {
  let message = document.getElementById("message").value;
  let key = document.getElementById("secretKey").value;
  if (!message || !key) { alert("Enter message and key!"); return; }
  let encrypted = CryptoJS.AES.encrypt(message, key).toString();
  document.getElementById("cryptoResult").textContent = encrypted;
}

function decryptMessage() {
  let encryptedText = document.getElementById("message").value;
  let key = document.getElementById("secretKey").value;
  try {
    let bytes = CryptoJS.AES.decrypt(encryptedText, key);
    let decrypted = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("cryptoResult").textContent = decrypted || "Wrong key!";
  } catch {
    document.getElementById("cryptoResult").textContent = "Error decrypting!";
  }
}

function generateHash() {
  let file = document.getElementById("fileInput").files[0];
  if (!file) { alert("Select a file!"); return; }
  let reader = new FileReader();
  reader.onload = function(e) {
    let arrayBuffer = e.target.result;
    let wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
    let sha256 = CryptoJS.SHA256(wordArray).toString();
    let sha512 = CryptoJS.SHA512(wordArray).toString();
    document.getElementById("hashResult").textContent =
      `SHA-256: ${sha256}\n\nSHA-512: ${sha512}`;
  };
  reader.readAsArrayBuffer(file);
}

function checkPassword() {
  let pwd = document.getElementById("passwordInput").value;
  if (!pwd) { alert("Enter password!"); return; }
  let strength = 0;
  if (pwd.length>=6) strength++;
  if (/[a-z]/.test(pwd)) strength++;
  if (/[A-Z]/.test(pwd)) strength++;
  if (/\d/.test(pwd)) strength++;
  if (/[@$!%*?&]/.test(pwd)) strength++;
  let display = document.getElementById("passwordResult");
  if(strength<=2){ display.textContent="Weak"; display.style.color="red"; }
  else if(strength<=4){ display.textContent="Medium"; display.style.color="orange"; }
  else{ display.textContent="Strong"; display.style.color="lime"; }
}

let chart;
let hashLog = [];
function trackFileIntegrity() {
  let file = document.getElementById("timelineFileInput").files[0];
  if (!file) { alert("Select a file!"); return; }
  let reader = new FileReader();
  reader.onload = function(e){
    let wordArray = CryptoJS.lib.WordArray.create(e.target.result);
    let hash = CryptoJS.SHA256(wordArray).toString();
    let time = new Date().toLocaleTimeString();
    hashLog.push({time, hash});
    drawChart();
  };
  reader.readAsArrayBuffer(file);
}

function drawChart(){
  let ctx = document.getElementById("integrityChart").getContext("2d");
  if(chart) chart.destroy();
  chart = new Chart(ctx,{
    type:'line',
    data:{
      labels: hashLog.map(e=>e.time),
      datasets:[{
        label:"File Integrity (SHA-256 length)",
        data: hashLog.map(e=>e.hash.length),
        fill:true,
        backgroundColor:'rgba(125, 228, 241, 0.2)',
        borderColor:'rgba(0,255,153,1)',
        tension:0.3
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{labels:{color:'#0a0a0aff'}}},
      scales:{
        x:{ticks:{color:'#0f0f0fff'}},
        y:{ticks:{color:'#131414ff'}, beginAtZero:true}
      }
    }
  });
}
