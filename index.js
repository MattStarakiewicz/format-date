
const formatDate = (timeInSeconds) => {
  const h = Math.floor(timeInSeconds / 3600);
  const m = Math.floor(timeInSeconds % 3600 / 60);
  const s = Math.floor(timeInSeconds % 3600 % 60);

  if (h > 0 && m == 0 && s == 0) {
    var hDisplay = h + "h";
    var mDisplay = "";
    var sDisplay = "";
  } else if (h > 0 && m > 0 && s == 0) {
    var hDisplay = h + "h" + " ";
    var mDisplay = m + "m";
    var sDisplay = "";
  } else if (h > 0 && m == 0 && s > 0) {
    var hDisplay = h + "h" + " ";
    var mDisplay = "";
    var sDisplay = s + "s";
  } else if (h > 0 && m > 0 && s > 0) {
    var hDisplay = h + "h" + " ";
    var mDisplay = m + "m" + " ";
    var sDisplay = s + "s";
  } else if (h == 0 && m > 0 && s > 0) {
    var hDisplay = "";
    var mDisplay = m + "m" + " ";
    var sDisplay = s + "s";
  } else if (h == 0 && m > 0 && s == 0) {
    var hDisplay = "";
    var mDisplay = m + "m";
    var sDisplay = "";
  } else if (h == 0 && m == 0 && s > 0) {
    var hDisplay = "";
    var mDisplay = "";
    var sDisplay = s + "s";
  } else {
    var hDisplay = "";
    var mDisplay = "";
    var sDisplay = "";
  }

  if (isNaN(s)) {
    var sDisplay = 0 + "s";
  }

  return hDisplay + mDisplay + sDisplay;
}

module.exports = formatDate;
