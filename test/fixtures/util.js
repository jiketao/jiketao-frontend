function randomContent(times) {
  times = times || Math.floor(2 + Math.random() * 20)
  var str = randomWord()
  for(var i = 0; i < times; i++) {
    str = `${str} ${randomWord()}`
  }
  return str
}

function randomWord() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var len = Math.floor(3 + Math.random() * 10)
    for( var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export default {randomWord, randomContent}
