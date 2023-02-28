const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
        .catch(error => console.log(error))
}

const loadQuote3 = async () => {
    // const res = await fetch('https://api.kanye.rest/')
    // const data = await res.json();
    // displayQuote(data);
    try {
        const res = await fetch('https://api.kanye.rest/')
        const data = await res.json();
        displayQuote(data);
    }
    catch(error){
        console.log(error);
    }
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML = quote.quote;
}
loadQuote();

const loadQuote2 = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote2(data))
}

const displayQuote2 = quote => {
    const blockQuote2 = document.getElementById('quote-two');
    console.log(quote);
    blockQuote2.innerHTML = quote.quote;
}
loadQuote2();