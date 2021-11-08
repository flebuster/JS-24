
let today = new Date();
let nEN = new Intl.DateTimeFormat("en-EN");
let nDE = new Intl.DateTimeFormat("de-DE");
nEN.format(today);
nDE.format(today);
console.log(nEN.format(today));
console.log(nDE.format(today));

