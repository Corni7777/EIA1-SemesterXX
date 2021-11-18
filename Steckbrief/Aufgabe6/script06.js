window.addEventListener("load", function () {
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
    /* Function of Europe */
    function EuropeEU() {
        document.querySelector("#titleRegion").innerHTML = "Europe";
        document.querySelector(".continent").innerHTML = "of Europe";
        document.querySelector(".EmAbsolute").innerHTML = EU2018 + " kg CO2";
        document.querySelector(".EmPercent").innerHTML = EUtoW + "%";
        document.querySelector(".EmGrPer").innerHTML = EUtoEUper + "%";
        document.querySelector(".EmGrAbs").innerHTML = EUtoEUabs + " kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:14%");
        document.querySelector(".europe").setAttribute("style", "opacity:100%");
        document.querySelector(".northamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".southamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".africa").setAttribute("style", "opacity:50%");
        document.querySelector(".asia").setAttribute("style", "opacity:50%");
        document.querySelector(".australia").setAttribute("style", "opacity:50%");
    }
    /* Click on Europe */
    document.querySelector(".europe").addEventListener("click", EuropeEU);
    /* Function of North America */
    function NorthAmericaNA() {
        document.querySelector("#titleRegion").innerHTML = "North America";
        document.querySelector(".continent").innerHTML = "of North America";
        document.querySelector(".EmAbsolute").innerHTML = NA2018 + " kg CO2";
        document.querySelector(".EmPercent").innerHTML = NAtoW + "%";
        document.querySelector(".EmGrPer").innerHTML = NAtoNAper + "%";
        document.querySelector(".EmGrAbs").innerHTML = NAtoNAabs + " kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:19%");
        document.querySelector(".europe").setAttribute("style", "opacity:50%");
        document.querySelector(".northamerica").setAttribute("style", "opacity:100%");
        document.querySelector(".southamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".africa").setAttribute("style", "opacity:50%");
        document.querySelector(".asia").setAttribute("style", "opacity:50%");
        document.querySelector(".australia").setAttribute("style", "opacity:50%");
    }
    /* Click on North America */
    document.querySelector(".northamerica").addEventListener("click", NorthAmericaNA);
    /* Function of South America */
    function SouthAmericaSA() {
        document.querySelector("#titleRegion").innerHTML = "South America";
        document.querySelector(".continent").innerHTML = "of South America";
        document.querySelector(".EmAbsolute").innerHTML = SA2018 + " kg CO2";
        document.querySelector(".EmPercent").innerHTML = SAtoW + "%";
        document.querySelector(".EmGrPer").innerHTML = SAtoSAper + "%";
        document.querySelector(".EmGrAbs").innerHTML = SAtoSAabs + " kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:4%");
        document.querySelector(".europe").setAttribute("style", "opacity:50%");
        document.querySelector(".northamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".southamerica").setAttribute("style", "opacity:100%");
        document.querySelector(".africa").setAttribute("style", "opacity:50%");
        document.querySelector(".asia").setAttribute("style", "opacity:50%");
        document.querySelector(".australia").setAttribute("style", "opacity:50%");
    }
    /* Click on South America */
    document.querySelector(".southamerica").addEventListener("click", SouthAmericaSA);
    /* Function of Africa */
    function AfricaAF() {
        document.querySelector("#titleRegion").innerHTML = "Africa";
        document.querySelector(".continent").innerHTML = "of Africa";
        document.querySelector(".EmAbsolute").innerHTML = Africa2018 + " kg CO2";
        document.querySelector(".EmPercent").innerHTML = AfricatoW + "%";
        document.querySelector(".EmGrPer").innerHTML = AfricatoAfricaper + "%";
        document.querySelector(".EmGrAbs").innerHTML = AfricatoAfricaabs + " kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:4%");
        document.querySelector(".europe").setAttribute("style", "opacity:50%");
        document.querySelector(".northamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".southamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".africa").setAttribute("style", "opacity:100%");
        document.querySelector(".asia").setAttribute("style", "opacity:50%");
        document.querySelector(".australia").setAttribute("style", "opacity:50%");
    }
    /* Click on Africa */
    document.querySelector(".africa").addEventListener("click", AfricaAF);
    /* Function of Asia */
    function AsiaAS() {
        document.querySelector("#titleRegion").innerHTML = "Asia";
        document.querySelector(".continent").innerHTML = "of Asia";
        document.querySelector(".EmAbsolute").innerHTML = Asia2018 + " kg CO2";
        document.querySelector(".EmPercent").innerHTML = AsiatoW + "%";
        document.querySelector(".EmGrPer").innerHTML = AsiatoAsiaper + "%";
        document.querySelector(".EmGrAbs").innerHTML = AsiatoAsiaabs + " kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:52%");
        document.querySelector(".europe").setAttribute("style", "opacity:50%");
        document.querySelector(".northamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".southamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".africa").setAttribute("style", "opacity:50%");
        document.querySelector(".asia").setAttribute("style", "opacity:100%");
        document.querySelector(".australia").setAttribute("style", "opacity:50%");
    }
    /* Click on Asia */
    document.querySelector(".asia").addEventListener("click", AsiaAS);
    /* Function of Australia */
    function AustraliaOCE() {
        document.querySelector("#titleRegion").innerHTML = "Australia";
        document.querySelector(".continent").innerHTML = "of Australia";
        document.querySelector(".EmAbsolute").innerHTML = OCE2018 + " kg CO2";
        document.querySelector(".EmPercent").innerHTML = OCEtoW + "%";
        document.querySelector(".EmGrPer").innerHTML = OCEtoOCEper + "%";
        document.querySelector(".EmGrAbs").innerHTML = OCEtoOCEabs + " kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height:7%");
        document.querySelector(".europe").setAttribute("style", "opacity:50%");
        document.querySelector(".northamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".southamerica").setAttribute("style", "opacity:50%");
        document.querySelector(".africa").setAttribute("style", "opacity:50%");
        document.querySelector(".asia").setAttribute("style", "opacity:50%");
        document.querySelector(".australia").setAttribute("style", "opacity:100%");
    }
    /* Click on Australia */
    document.querySelector(".australia").addEventListener("click", AustraliaOCE);
});
//# sourceMappingURL=script06.js.map