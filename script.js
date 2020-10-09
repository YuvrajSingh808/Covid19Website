
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function animateValue(ob, end) {
  const obj = document.getElementById(ob);
  const start = 0;
  const duration = 5000;
  var temp = 0;
  // console.log(obj);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // console.log(obj);
    obj.innerHTML = numberWithCommas(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
    temp = progress;
  };
  window.requestAnimationFrame(step);
}

window.onload = function() {
  animateValue("id1", 6339996);
  
  animateValue("id2", 947815);
  
  animateValue("id3", 5348653);
};
