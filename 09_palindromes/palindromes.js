const removeNonAlphanumericCharacters = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, '')
}

const palindromes = function (phrase) {
    phrase = phrase.toLowerCase();
    phrase = removeNonAlphanumericCharacters(phrase);

    const reversePhrase = phrase.split('').reverse().join('');

    console.log('phrase', phrase)
    console.log('reversePhrase', reversePhrase)

    return phrase === reversePhrase;
};

// Do not edit below this line
module.exports = palindromes;
