let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-US"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.Style.display = "none"
    voice.Style.display = "block"
})
function takeCommand(message) {
    // btn.Style.display="flex"
    // voice.Style.display="none"
    if (message.includes("hello") || message.includes("hey juneur")) {
        speak("hello sir,what can i help you?")
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant ,created by Gaurav Sir?")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.co.in","_blank")
    }
    else if (message.includes("open linkdin")) {
        speak("opening linkdin")
        window.open("https://www.linkedin.com/in/gaurav-yadav-3b67a828","_blank")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram")
        window.open("https://www.instagram.com/ahir__chora_/profilecard/?igsh=MXQwcTAwZG81OHR4Zw==","_blank")
    }
    else if (message.includes("open x")) {
        speak("opening x")
        window.open("https://x.com/GauravYd74311?t=OAtGaUIzl5m2MuDCiIjQCw&s=09","_blank")
    }
    else if (message.includes("contact us")) {
        speak("contact us to gaurav sir")
        window.open("https://wa.me/198979162288","_blank")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("whatsapp://","_blank")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleDateString(undefined,{day:"numeric",month:"long"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }

}