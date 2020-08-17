export function drawRing(opts) {
  var _opts = {
      parent: opts.parent,
      width: 100,
      radius: 45,
      arc: 5,
      perent: 100,
      color: ["#ccc", "#042b61"],
      textColor: "red",
      textSize: "14px",
      animated: false,
      after: function() {},
    },
    k;
  for (k in opts) _opts[k] = opts[k];

  var parent = _opts.parent,
    width = _opts.width,
    radius = _opts.radius,
    arc = _opts.arc,
    perent = parseFloat(_opts.perent),
    citiy = _opts.city,
    color = _opts.color,
    textSize = _opts.textSize,
    textColor = _opts.textColor,
    c = document.createElement("canvas"),
    ctx = null,
    x = 0,
    animated = _opts.animated,
    after = _opts.after;

  parent.appendChild(c);
  ctx = c.getContext("2d");
  ctx.canvas.width = width;
  ctx.canvas.height = width;

  function clearFill() {
    ctx.clearRect(0, 0, width, width);
  }

  function fillBG() {
    ctx.beginPath();
    ctx.lineWidth = arc;
    ctx.strokeStyle = color[0];
    ctx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function fillArc(x) {
    ctx.beginPath();
    ctx.lineWidth = arc;
    ctx.strokeStyle = color[1];
    ctx.arc(
      width / 2,
      width / 2,
      radius,
      (-90 * Math.PI) / 180,
      ((x * 3.6 - 90) * Math.PI) / 180
    );
    ctx.stroke();
  }

  function fillText(x) {
    //    ctx.font = textSize + ' Arial';
    ctx.font = textSize + " Arial";
    ctx.fillStyle = textColor;
    //    ctx.textBaseline = "middle";
    ctx.textBaseline = "bottom";
    ctx.textAlign = "center";
    ctx.fillText(x.toFixed(1) + "%", width / 2, width / 2);
  }

  function fillTextCtiy(x) {
    ctx.font = "23px Arial";
    ctx.fillStyle = "#F0F0F2";
    ctx.textBaseline = "top";
    ctx.textAlign = "center";
    ctx.fillText(x, width / 2, width / 1.7);
  }

  function fill(x) {
    fillBG();
    fillArc(x);
    fillText(x);
    fillTextCtiy(citiy);
  }

  if (!animated) return fill(perent);

  fill(x);

  !(function animate() {
    if (++x > perent) return after && after();
    setTimeout(animate, 10);
    clearFill();
    fill(x);
  })();
}
