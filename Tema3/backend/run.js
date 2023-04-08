var api = require("./api.js").app;
var hamming = require("./hamming.js");

api.put("/message", function (request, response) {
   var bits = distortBit(request.body.bits, 5);
  //var bits = request.body.bits;
   var decoded = hamming.decode(bits);

  if (decoded.errorCorrected) {
    response.json("One error corrected on position: " + decoded.errorPosition);
  }
  response.json("Message received without errors"); // response actioneaza ca un return
});

api.listen(3000, function () {
  console.log("CORS-enabled web server is listening on port 3000...");
});

function distortBit(bits, index) {
  bits[index] = (bits[index] + 1) % 2;
  return bits;
}
