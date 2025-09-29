function countAnagramOccurence(txt: string, pat: string) {
  let patObj: { [key: string]: number } = {};
  let txtObj: { [key: string]: number } = {};
  let count = 0;

  for (let i = 0; i < pat.length; i++) {
    patObj[pat[i]] = patObj[pat[i]] == undefined ? 1 : patObj[pat[i]] + 1;
  }

  for (let i = 0; i < pat.length; i++) {
    txtObj[txt[i]] = txtObj[txt[i]] == undefined ? 1 : txtObj[txt[i]] + 1;
  }
  if (checkArray(patObj, txtObj)) count++;

  for (let i = pat.length; i < txt.length; i++) {
    let addChar = txt[i];
    txtObj[addChar] = txtObj[addChar] == undefined ? 1 : txtObj[addChar] + 1;

    let removeChar = txt[i - pat.length];
    txtObj[removeChar]--;
    if (txtObj[removeChar] == 0) {
      delete txtObj[removeChar];
    }

    if (checkArray(txtObj, patObj)) count++;
  }

  return count;
}

function checkArray(
  patObj: { [key: string]: number },
  txtObj: { [key: string]: number }
) {
  let keysPatObj = Object.keys(patObj);
  let keysTxtObj = Object.keys(txtObj);

  if (keysPatObj.length != keysTxtObj.length) {
    return false;
  } else {
    for (let ch of keysPatObj) {
      if (patObj[ch] !== txtObj[ch]) {
        return false;
      }
    }
    return true;
  }
}

console.log(countAnagramOccurence("forxxorfxdofr", "for"));
