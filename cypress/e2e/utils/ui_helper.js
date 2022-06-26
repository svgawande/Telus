// This class can be used for writing ui interactions related utils like
// waiting and inputting the data and some custom interaction which are application specific
export default class UIHelper{

// use random 5 letter name for each run
  static randtext() {
  var text = "";
  var possible = "abcdefghijklmnopqrst";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
    }
}

