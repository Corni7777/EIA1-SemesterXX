/* Europe */
var EU2008 = 4965.7;
var EU2018 = 4209.3;
/* North America */
var NA2008 = 6600.4;
var NA2018 = 6035.6;
/* South America */
var SA2008 = 1132.6;
var SA2018 = 1261.5;
/* Asia */
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
/* Africa */
var Africa2008 = 1028;
var Africa2018 = 1235.5;
/* Australia */
var OCE2008 = 1993;
var OCE2018 = 2100.5;
/* Calculations */
var world = Math.round(EU2018 + NA2018 + SA2018 + Asia2018 + Africa2018 + OCE2018);
/* EU calculations */
var EUtoW = Math.round(EU2018 / world * 100);
var EUtoEUper = Math.round((EU2018 / EU2008 - 1) * 100);
var EUtoEUabs = Math.round(EU2018 - EU2008);
/* NA calculations */
var NAtoW = Math.round(NA2018 / world * 100);
var NAtoNAper = Math.round((NA2018 / NA2008 - 1) * 100);
var NAtoNAabs = Math.round(NA2018 - NA2008);
/* SA calculations */
var SAtoW = Math.round(SA2018 / world * 100);
var SAtoSAper = Math.round((SA2018 / SA2008 - 1) * 100);
var SAtoSAabs = Math.round(SA2018 - SA2008);
/* Asia calculations */
var AsiatoW = Math.round(Asia2018 / world * 100);
var AsiatoAsiaper = Math.round((Asia2018 / Asia2008 - 1) * 100);
var AsiatoAsiaabs = Math.round(Asia2018 - Asia2008);
/* Africa calculations */
var AfricatoW = Math.round(Africa2018 / world * 100);
var AfricatoAfricaper = Math.round((Africa2018 / Africa2008 - 1) * 100);
var AfricatoAfricaabs = Math.round(Africa2018 - Africa2008);
/* OCE calculations */
var OCEtoW = Math.round(OCE2018 / world * 100);
var OCEtoOCEper = Math.round((OCE2018 / OCE2008 - 1) * 100);
var OCEtoOCEabs = Math.round(OCE2018 - OCE2008);
/* Console */
console.log("Die Emssion von Europa ist: " + EU2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Weltverursacht Europa damit " + EUtoW + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + EUtoEUper + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + EUtoEUabs + " kg CO2");
console.log("Die Emssion von Nordamerika ist: " + NA2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Weltverursacht Nordamerika damit " + NAtoW + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + NAtoNAper + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + NAtoNAabs + " kg CO2");
console.log("Die Emssion von Südamerika ist: " + SA2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Weltverursacht Südamerika damit " + SAtoW + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + SAtoSAper + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + SAtoSAabs + " kg CO2");
console.log("Die Emssion von Asien ist: " + Asia2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Weltverursacht Asien damit " + AsiatoW + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + AsiatoAsiaper + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AsiatoAsiaabs + " kg CO2");
console.log("Die Emssion von Afrika ist: " + Africa2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Weltverursacht Afrika damit " + AfricatoW + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + AfricatoAfricaper + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AfricatoAfricaabs + " kg CO2");
console.log("Die Emssion von Australien ist: " + OCE2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Weltverursacht Australien damit " + OCEtoW + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + OCEtoOCEper + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + OCEtoOCEabs + " kg CO2");
//# sourceMappingURL=script05.js.map