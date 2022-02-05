"use strict";

var getTotalcost = function getTotalcost(sides, noOfLayer, perbundlesize, perbundlecost) {
  // const side = [12, 15, 13, 10, 22, 12, 17, 19, 10,];
  var parameter = 0; // const getTotalcost=(sides, perbundlesize, perbundlecost)

  sides.foreach(function (element) {
    parameter = parameter + element;
  });
  console.log(parameter);
};