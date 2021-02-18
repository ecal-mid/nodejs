exports.map = function (num, start1, stop1, start2, stop2) {
  return ((num - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

exports.lerp = function (start, stop, amt) {
  return amt * (stop - start) + start;
}