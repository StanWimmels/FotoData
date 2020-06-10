var rgb = [];
let kleur = 0;

function average() {

  let countX = 0;
  let countY = 0;
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("redblue");
  ctx.drawImage(img, 0, 0);
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  console.log(imgData);
  canvas.width = img.width;
  canvas.height = img.height;


  for (let i = 0; i < imgData.data.length; i += 4) {
    
    var valueR = parseInt(imgData.data[i]);
    var valueG = parseInt(imgData.data[i + 1]);
    var valueB = parseInt(imgData.data[i + 2]);
    var valueA = parseInt(imgData.data[i + 3]) - 254; //de waarde van alpha is in de array 255? Deze waarde kan echter niet hoger zijn dan 1 en er zit geen transparantie in de foto

    rgb[kleur] = [valueR, valueG, valueB, valueA];
    var Color = "rgb" + "(" + rgb[kleur].toString() + ")";
    ctx.fillStyle = Color;
    kleur++
    if (countX < canvas.width) {
      countX++;
    }
    else {
      countY++;
      countX = 1;
    }
    ctx.fillRect(countX, countY, 1, 1);
  }
}
// ctx.putImageData(rgb[0], 0, 0);     console.log(rgb[0]); //RGBA staat in 1 array //