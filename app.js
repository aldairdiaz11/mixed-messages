// Back-end Path Portfolio project: Mixed Messages 15-feb-23
'use strict';

// Topic: motivational quotes

//  1: fill up the data
const data = {
    greets: ["hi", "hello", "hola", ":p", "howdy", "how's it going?", "what's up?"],
    names: ["little man", "bro", "princess", "skydiver"],
    quotes: ["When you have a dream, you've got to grab it and never let go.",
        "Nothing is impossible. The word itself says 'I'm possible!'",
        "There is nothing impossible to they who will try.",
        "The bad news is time flies. The good news is you're the pilot.",
        "Life has got all those twists and turns. You've got to hold on tight and off you go."
    ],
    authors: ["Albert Einstein", "Mozart", "Lionel Messi", "Steve Jobs", "Ale Romero", "Mark Twin", "Isaac Newton"]
}

//  2: create the message
const spamMessages = (word, emoji) => {
    let message = "";
    for (let i = 0; i <= 40; i++) {
        message += `${word} ${emoji}`;
    }
    return message;
}
const mixedMessage = () => {
    const greet = data.greets[Math.floor(Math.random() * data.greets.length)];
    const name = data.names[Math.floor(Math.random() * data.names.length)];
    const quote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    const author = data.authors[Math.floor(Math.random() * data.authors.length)];

    return `${greet} ${name}, ${quote}\n–${author}`;
}

//  3: display the message

console.log(mixedMessage())
console.log(spamMessages('Yukki', '💜'))
