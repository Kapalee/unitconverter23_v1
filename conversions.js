"use strict";

function lbsToKg(pounds) {
  const KILOGRAMS_PER_POUNDS = 0.45359237;
  return pounds * KILOGRAMS_PER_POUNDS;
}

function kgToLbs(kilograms) {
  const POUNDS_PER_KILOGRAM = 2.20462262;
  return kilograms * POUNDS_PER_KILOGRAM;
}

function convert(conversionType, value) {
  switch (conversionType) {
    case "inchToCm":
      return inchToCm(value);
      break;

    case "cmToInch":
      return cmToInch(value);
      break;

    case "milesToKm":
      return milesToKm(value);
      break;

    case "kmToMiles":
      return kmToMiles(value);
      break;

    case "fToC":
      return fToC(value);
      break;

    case "cToF":
      return cToF(value);
      break;

    case "feetToM":
      return feetToM(value);
      break;

    case "mToFeet":
      return mToFeet(value);
      break;

    case "lbsToKg":
      return lbsToKg(value);
      break;

    case "kgToLbs":
      return kgToLbs(value);
      break;

    case "gToL":
      return gToL(value);
      break;

    case "lToG":
      return lToG(value);
      break;
  }
}

function feetToM(feet) {
  const FEET_PER_M = 0.3048;
  return feet * FEET_PER_M;
}

function mTofeet(meters) {
  const M_PER_FOD = 3.2808;
  return meters * M_PER_FOD;
}

function inchToCm(inches) {
  let centimeters = inches * 2.54;
  return centimeters;
}

function cmToInch(centimeters) {
  let inches = centimeters * 0.393701;
  return inches;
}

function gToL(gallons) {
  const liters = gallons * 3.78541;
  return liters;
}

function lToG(liters) {
  const gallons = liters / 3.78541;
  return gallons;
}
