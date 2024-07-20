const link = document.getElementById("original-link"),
shortUrl = document.getElementById('short_url'),
qrCode = document.getElementById('qr_code'),
img = document.getElementById('img');

window.addEventListener("keydown", async (e) => {
    if(e.key === "Enter" && link.value != false) {
        const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ffcf9bf2611ea1bdb7a2e92a957fa1a6784a7732',
            },
            body: JSON.stringify({
                long_url: link.value
            })  
        });

        const res = await response.json();
        const shortRes = res.link;  

        shortUrl.innerHTML = shortRes;
        shortUrl.setAttribute('href', shortRes);

        qrCode.innerHTML = '';

        let qrcode = new QRCode("qr_code", {
            text: link.value,
            width: 220,
            height: 220,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
})