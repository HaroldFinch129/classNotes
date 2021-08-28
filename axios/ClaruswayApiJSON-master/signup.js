window.onload = (event) => {
    fillFormInput();
    console.log('page is fully loaded');
}; //sayfa yüklendiğinde fillFormInput fonksiyonunu çalıştır

const fillFormInput = () => {
        let email = document.getElementById("email").value = "eve.holt@reqres.in";
        let password = document.getElementById("password").value = "pistol";
        localStorage.setItem("email", email); //local storega a yolladık
    }
    // API den veri çekip, yollamak (XMLHTTPREQUEST)
    // const apiRegister = () => {
    //     let email = localStorage.getItem("email");//local storage tan çektik
    //     let password = document.getElementById("password").value;
    //     const bodyData = {
    //         email : email,
    //         password : password
    //     } //api ye yollayacağımız object dosyasını oluşturduk, içinde kullanıcının şifresi ve emaili var
    //     var xhr = new XMLHttpRequest(); //yeni bir istek oluşturduk
    //     xhr.open("POST", "https://reqres.in/api/register"); //istek içine url yi ve post şekilde gideceği bilgisini yerleştirdik
    //     xhr.setRequestHeader("Content-Type", "application/json"); //içerik tipini tanımladık
    //     xhr.send(JSON.stringify(bodyData)); //bodyData mızı API nin istediği şekle getirdik
    //     xhr.onload = function(){
    //         let data = JSON.parse(xhr.responseText);
    //         if(data.id != "0") {
    //             console.log(data);
    //             localStorage.setItem("token", data.token); //ilk kayıt sonrası verilen token ı local e kaydettik. Token: üye olunduğunda apinin üyeye verdiği jeton, her girişte bu jeton kullanılır
    //         }
    //     }
    // }

//API den veri çekip, yollamak (Fetch)
const apiRegister = async() => {
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    const bodyData = {
        email: email,
        password: password
    }
    await fetch("https://reqres.in/api/register", { //fetch işlemi gecikeceği için await keywordu kullandık, asenkron yapı oluşturduk
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json()) //gelen response u json a çevirdik
        .then(data => { //data = api den dönen değer
            if (data.id != "0") { //data mızın id sini kontrol ediyoruz
                console.log(data);
                alert("welcome");
                localStorage.setItem("token", data.token);
            } //gelen data yı parametre olarak verip içerisinde işlemler yapıyoruz
        })
        .catch((e) => console.log(e)) //hata olursa yakalayıp console a bassın
}