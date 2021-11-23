
window.addEventListener("load", function () {
  
    /* Continents */
    var OCE = "Australia";
    var AS = "Asia";
    var NA = "North-Amerika";
    var EU = "Europe";
    var SA = "South-Amerika";
    var AF = "Africa";
    
    /* Australia */
    var OCE2008 = 1993;
    var OCE2018 = 2100.5;
    /* Asia */
    var Asia2008 = 12954.7;
    var Asia2018 = 16274.1;
    /* North America */
    var NA2008 = 6600.4;
    var NA2018 = 6035.6;
    /* Europe */
    var EU2008 = 4965.7;
    var EU2018 = 4209.3;
    /* South America */
    var SA2008 = 1132.6;
    var SA2018 = 1261.5;
    /* Africa */
    var AF2008 = 1028;
    var AF2018 = 1235.5;
   
    /* Calculations */
    var world = OCE2018 + Asia2018 + NA2018 + EU2018 + SA2018 + AF2018;
    /* Europe */
    var EUtoW = EU2018 / world * 100;
    var EUtoEUper = (EU2018 / EU2008 - 1) * 100;
    var EUtoEUabs = EU2018 - EU2008;
    /* Asia */
    var AsiatoW = Asia2018 / world * 100;
    var AsiatoAsiaper = (Asia2018 / Asia2008 - 1) * 100;
    var AsiatoAsiaabs = Asia2018 - Asia2008;
    /* Africa */
    var AFtoW = AF2018 / world * 100;
    var AFtoAFper = (AF2018 / AF2008 - 1) * 100;
    var AFtoAFabs = AF2018 - AF2008;
    /* North America */
    var NAtoW = NA2018 / world * 100;
    var NAtoNAper = (NA2018 / NA2008 - 1) * 100;
    var NAtoNAabs = NA2018 - NA2008;
    /* South America */
    var SAtoW = NA2018 / world * 100;
    var SAtoSAper = (NA2008 / NA2008 - 1) * 100;
    var SAtoSAabs = NA2018 - NA2008;
    /* Oceania */
    var OCEtoW = OCE2018 / world * 100;
    var OCEtoOCEper = (OCE2018 / OCE2008 - 1) * 100;
    var OCEtoOCEabs = OCE2018 - OCE2008;
    /* Click on continents */
    document.querySelector(".europe").addEventListener("click", function () { conti(EU, EU2018, EUtoW, EUtoEUper, EUtoEUabs); });
    document.querySelector(".northamerica").addEventListener("click", function () { conti(NA, NA2018, NAtoW, NAtoNAper, NAtoNAabs); });
    document.querySelector(".southamerica").addEventListener("click", function () { conti(SA, SA2018, SAtoW, SAtoSAper, SAtoSAabs); });
    document.querySelector(".africa").addEventListener("click", function () { conti(AF, AF2018, AFtoW, AFtoAFper, AFtoAFabs); });
    document.querySelector(".asia").addEventListener("click", function () { conti(AS, Asia2018, AsiatoW, AsiatoAsiaper, AsiatoAsiaabs); });
    document.querySelector(".australia").addEventListener("click", function () { conti(OCE, OCE2018, OCEtoW, OCEtoOCEper, OCEtoOCEabs); });
    /* Functions for continents */
    function conti(continent, continent2018, continenttoW, cotocoper, cotocoabs) {
        document.querySelector(".EMAbsolute").innerHTML = continent2018;
        document.querySelector(".EMRelative").innerHTML = continenttoW.toFixed(2) + "%";
        document.querySelector(".EmGrPer").innerHTML = cotocoper.toFixed(2) + "%";
        document.querySelector(".EmGrAbs").innerHTML = cotocoabs.toFixed(2);
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector(".continentx").innerHTML = continent;
        document.querySelector(".chart").setAttribute("style", "height:" + continenttoW + "px");
    }
})