//object for giraffe colors
const giraffeColors = {
    1: {
        colorForSpace: "#cecac1",
        colorsForCells: ["#98664f","#93614b","#8e5d47","#895843","#83543f","#7e4f3b","#794b37","#744633","#6f422f","#6a3d2b","#653927","#603523","#5b3120","#572c1c","#522818","#4d2415","#482011","#441c0d","#3f1807"],//19
        description: '<h3 class="mt-4 title">Żyrafa siatkowana</h3>Występują w Północnej Kenii. Ich wyróżniającą cechą wśród innych podgatunków jest umaszczenie. Ma ono postać siatki – cienkie linie jasnego koloru odgraniczają duże pola kasztanowego brązu. Ich cętkowany wzór sierści pomaga zakamuflować je na suchej sawannie. Posiadają również doskonały wzrok, pozwalający im widzieć ruch z odległości mili, a także wyostrzony zmysł słuchu, który pomaga im uchronić się przed drapieżnikami.'
    },
    2: {
        colorForSpace: "#f4ebd8",
        colorsForCells: ["#d4ab77","#d0a774","#cca370","#c99f6d","#c59b6a","#c19767","#bd9363","#b98f60","#b68c5d","#b2885a","#ae8457","#aa8053","#a67c50","#a3794d","#9f754a","#9b7147","#976d44","#946a41","#90663e"],//19
        description: '<h3 class="mt-4 title">Żyrafa zachodnioafrykańska</h3>Od 2011 roku podgatunek ten przeżywa tylko w kilku izolowanych grupach, zawierających łącznie około 400 osobników. Ostatnie samowystarczalne stado znajduje się w południowo-zachodnim Nigrze. Ten podgatunek żyrafy widocznie różni się od innych typów jasnymi, brązowymi plamami. Inne żyrafy mają znacznie ciemniejsze plamy.'
    },
    3: {
        colorForSpace: "#faebbf",
        colorsForCells: ["#ddb285","#d7ac80","#d1a67b","#cba077","#c69a72","#c0946d","#ba8e68","#b48864","#ae825f","#a97c5b","#a37756","#9d7152","#976b4d","#916649","#8c6045","#865b40","#80563c","#7b5038","#754b34"],//19
        description: '<h3 class="mt-4 title">Żyrafa nubijska</h3>Żyrafa nubijska była szeroko rozpowszechniona w całej północno-wschodniej Afryce. Jednak w przeciągu 3 lat ich populacja spadła o 95%, została dlatego wymieniony jako podgatunek krytycznie zagrożony. Żyrafa nubijska ma ostro zaznaczone, kasztanowe plamy otoczone przeważnie białymi liniami, podczas gdy na spodniej stronie ciała, nie ma plam.'
    },
    4: {
        colorForSpace: "#c1b299",
        colorsForCells: ["#b69973","#b39671","#af936f","#ac906d","#a98d6b","#a58a69","#a28767","#9f8465","#9b8163","#987e61","#957b5f","#91785d","#8e765b","#8b7359","#887057","#846d55","#816a53","#7e6751","#7a654f","#77624e","#745f4c","#715c4a","#6d5a48","#6a5746","#675444","#645242","#614f40","#5d4d3e","#5a4a3c","#57473b","#544539","#514237","#4e4035","#4a3d33","#473b31","#44382f","#41362e","#3e332c","#3b312a"],//39
        description: '<h3 class="mt-4 title">Żyrafa kordofańska</h3>Posiadają blade i nieregularne wzory. Ten podgatunek ma terytorium obejmujące północny Kamerun, Republikę Środkowoafrykańską i południowe regiony Czadu. Mówi się również, że w zachodnim Sudanie jest kilka populacji. Żyrafa Kordofan odróżnia się od innych podgatunków żyrafy niewielkim ciałem i nieregularnymi plamami na wewnętrznych częściach nóg. Obecnie na wolności żyje około 2000 osobników, a populacja maleje w zastraszającym tempie z powodu kłusownictwa. Żyrafa Kordofan jest sklasyfikowana jako zagrożona przez IUCN.'
    },
    5: {
        colorForSpace: "#d1be9e",
        colorsForCells: ["#a87e4a","#a57c49","#a37a48","#a17847","#9e7646","#9c7345","#997143","#976f42","#946d41","#926b40","#8f693f","#8d673e","#8a653d","#88633c","#85613b","#835f3a","#805d39","#7e5b37","#7b5936","#795735","#765534","#745333","#715132","#6f4f31","#6d4e30","#6a4c2f","#684a2e","#65482d","#63462c","#60442b","#5e4229","#5c4128","#593f27","#573d26","#543b25","#523924","#503823","#4d3622","#4b3421"],//39
        description: '<h3 class="mt-4 title">Żyrafa angolska</h3>Pomimo swojej nazwy, żyrafy angolskie wymarły w Angoli przez translokacje z Namibii. Żyrafa angolska ma stosunkowo jasny kolor. W północno-zachodniej Namibii, gdzie jest szczególnie sucho, mogą być prawie bezbarwne. Mają duże, nieregularnie ząbkowane i jasnobrązowe plamy. Ich łaty są otoczone bladokremowym kolorem, a ich dolne nogi są przypadkowo nakrapiane nierównymi plamami.'
    },
    6: {
        colorForSpace: "#eacea0",
        colorsForCells: ["#f8ebc7","#f7eac6","#f7e9c4","#f6e8c3","#f5e7c2","#f5e7c1","#f4e6bf","#f4e5be","#f3e4bd","#f2e3bc","#f2e2ba","#f1e1b9","#f1e0b8","#f0dfb7","#efdeb5","#efdeb4","#eeddb3","#eddcb2","#eddbb0","#ecdaaf","#ecd9ae","#ebd8ad","#ead7ac","#ead6aa","#e9d6a9","#e9d5a8","#e8d4a7","#e7d3a5","#e7d2a4","#e6d1a3","#e6d0a2","#e5cfa0","#e5ce9f","#e4cd9e","#e3cd9d","#e3cc9c","#e2cb9a","#e2ca99","#e1c998"],//39
        description: '<h3 class="mt-4 title">Żyrafa południowoafrykańska</h3>Ma zaokrąglone plamki, niektóre przypominające gwiazdy na jasnobrązowym tle, spływające do kopyt. Tak jak sugeruje jej nazwa, występuje w północnej Afryce Południowej - Botswanie, Zimbabwe i Mozambiku. Po lokalnych wyginięciach w różnych miejscach, żyrafy południowoafrykańskie zostały ponownie wprowadzone w wielu częściach Afryki Południowej, w tym w Suazi.'
    },
    7: {
        colorForSpace: "#ecc7ae",
        colorsForCells: ["#d6a97a","#d4a779","#d1a578","#cfa277","#cca076","#ca9e75","#c79c74","#c59a73","#c29871","#c09670","#bd946f","#bb926e","#b88f6d","#b68d6c","#b38b6b","#b1896a","#ae8769","#ac8568","#a98367","#a78165","#a47f64","#a27d63","#9f7b62","#9c7961","#9a7760","#97755f","#95735e","#92725d","#90705b","#8d6e5a","#8b6c59","#886a58","#856857","#836656","#806455","#7e6253","#7b6152","#795f51","#765d50"],//39
        description: '<h3 class="mt-4 title">Żyrafa rotszylda</h3>Żyrafy te mają zarysowane ostro nieregularne plamy na całym ciele, widoczne na kremowym tle. Plamy na ciele dorosłych osobników są ciemniejsze. Dorosłe samce osiągają wysokość dochodzącą nawet do 6 metrów wysokości i są jednymi z najwyższych podgatunków żyraf. Obecnie wszystkie osobniki zamieszkujące na wolności występują na obszarach chronionych w Kenii i Ugandzie.'
    },
    8: {
        colorForSpace: "#c8b9ae",
        colorsForCells: ["#846453","#836353","#826252","#806252","#7f6152","#7e6051","#7d6051","#7c5f51","#7b5e50","#795d50","#785d50","#775c4f","#765b4f","#755a4f","#735a4e","#72594e","#71584e","#70574d","#6f574d","#6d564d","#6c554c","#6b554c","#6a544b","#68534b","#67534b","#66524a","#65514a","#64504a","#625049","#614f49","#604e48","#5f4e48","#5d4d48","#5c4c47","#5b4c47","#5a4b46","#584a46","#574a45","#564945"],//39
        description: "<h3 class='mt-4 title'>Żyrafa thornicrofta</h3>Jest to podgatunek odizolowany geograficznie, występujący tylko w południowej dolinie Luangwa w Zambii. Szacuje się, że na wolności żyje około 550 osobników, bez populacji w niewoli. Długość życia żyrafy rodezyjskiej wynosi 22 lata dla samców i 28 lat dla samic. Zostały pierwotnie nazwane na cześć Harry'ego Scotta Thornicrofta, komisarza na ówczesnej północno-zachodniej Rodezji. Znane są również pod nazwą 'żyrafy Rhodesian'."
    },
    9: {
        colorForSpace: "#c59d83",
        colorsForCells: ["#534240","#51413e","#50403d","#4e3f3b","#4c3e3a","#4b3c38","#493b37","#473a35","#463934","#443833","#423731","#413630","#3f352f","#3d342e","#3c332c","#3a322b","#38312a","#373029","#352e28","#342d27","#322c26","#302b25","#2f2a24","#2d2923","#2c2822","#2a2721","#292620","#27251f","#26241e","#24231d","#23221c","#21211b","#201f1a","#1e1e19","#1d1d19","#1c1c18","#1b1b17","#191a16","#181915"],//39
        description: '<h3 class="mt-4 title">Żyrafa masajska</h3>Znana również jako żyrafa kenijska, ponieważ zamieszkuje afrykańskie sawanny południowej Kenii oraz niemal całej Tanzanii. Żyrafa masajska jest często zauważalnie ciemniejsza niż inne gatunki. Jej plamy są duże, ciemnobrązowe i mają charakterystyczny kształt liścia winorośli z postrzępionymi krawędziami. Plamy są otoczone kremowo-brązowym kolorem, który ciągnie się w dół aż do połowy ich nóg.'
    }
}
let currentSpaceColorValue;//1-9
let currentCellColorsValue;//-15-15
let description = document.getElementById('description');
let custom = '<h3 class="mt-4 title">Stwórz swoją żyrafę!</h3>Dziewięć podgatunków to dla Ciebie za mało? Bez obaw, dzięki generatorowi możesz stworzyć własny rodzaj żyraf lub dopasować generowaną skórę do tworzonego modelu. Pamiętaj jednak, że charakterystyczne dla żyraf łaty mają konkretny cel - jest to kamuflaż i ochrona przed drapieżnikami. Dlatego bądź rozsądny, jeżeli chcesz, by miały długie oraz spokojne życie!';

//UI creators and logic
sliderCreator('spaceSlider', 'setSpaceMin', 'setSpaceMax', 5, 50);
sliderCreator('distanceXSlider', 'setDistanceXMin', 'setDistanceXMax', 150, 400);
sliderCreator('distanceYSlider', 'setDistanceYMin', 'setDistanceYMax', 150, 400);
spineSliderCreator('spineCountSlider', 'setSpineCount', 0.01, 6, 0.01, false);
spineSliderCreator('spineSizeSlider', 'setSpineSize', 1, 6, 1, true);
colorSliderCreator();
checkboxLogic();

function checkboxLogic(){
    description.innerHTML = giraffeColors[1].description;
    let checkbox = document.getElementById('flexCheckDefault');
    let osX = document.getElementById('osX');
    let osY = document.getElementById('osY');
    osX.style.visibility = 'hidden';
    osY.style.display = 'none';
    checkbox.addEventListener('change', function(){
        description.innerHTML = custom;
        if(this.checked){
            $("#osXContainer").removeClass("col-12").addClass("col-6");
            osX.style.visibility = 'visible';
            osY.style.display = 'initial';
        } else{
            $("#osXContainer").removeClass("col-6").addClass("col-12");
            osX.style.visibility = 'hidden';
            osY.style.display = 'none';
        }
    });
}

function sliderCreator(sliderId, inputMinId, inputMaxId, min, max){
    //initialize
    let slider = document.getElementById(sliderId);
    noUiSlider.create(slider, {
        start: [min, max],
        step: 1,
        connect: true,
        range: {
            'min': min,
            'max': max
        }
    });

    //update
    let input1Number = document.getElementById(inputMinId);
    let input2Number = document.getElementById(inputMaxId);
    slider.noUiSlider.on('update', function (values, handle) {
        description.innerHTML = custom;
        let value = values[handle];
        if (handle) {
            input2Number.value = Math.round(value);
        } else {
            input1Number.value = Math.round(value);
        }
    });
    input1Number.addEventListener('change', function () {
        description.innerHTML = custom;
        slider.noUiSlider.set([this.value, null]);
    });
    input2Number.addEventListener('change', function () {
        description.innerHTML = custom;
        slider.noUiSlider.set([null, this.value]);
    });
}

function spineSliderCreator(sliderId, inputId, min, max, step, rounded){
    //initialize
    let slider = document.getElementById(sliderId);
    noUiSlider.create(slider, {
        start: [min],
        step: step,
        range: {
            'min': min,
            'max': max
        }
    });

    //update
    let input = document.getElementById(inputId);
    slider.noUiSlider.on('update', function (values, handle) {
        description.innerHTML = custom;
        let value = values[handle];
        if (handle) {} else {
            if (rounded) {input.value = Math.round(value);} else {input.value = value;}
        }
    });
    input.addEventListener('change', function () {
        description.innerHTML = custom;
        slider.noUiSlider.set([this.value]);
    });
}

function colorSliderCreator(){
    //initialize
    let pipsSlider = document.getElementById('colorSlider');
    noUiSlider.create(pipsSlider, {
        range: {
            min: -15,
            max: 15
        },
        step: 1,
        start: [0],
        pips: {mode: 'count', values: 3}
    });

    //change
    let select = document.getElementById('chooseToEditColor');
    currentSpaceColorValue = select.value;
    description.innerHTML = giraffeColors[select.value].description;
    select.addEventListener('change', function(){
        description.innerHTML = custom;
        currentSpaceColorValue = select.value;
    });

    //update
    pipsSlider.noUiSlider.on('update', function (values, handle) {
        description.innerHTML = custom;
        let value = values[handle];
        if (handle) {} else {currentCellColorsValue = Math.round(value);}
    });

    //click
    let pips = pipsSlider.querySelectorAll('.noUi-value');
    function clickOnPip() {
        description.innerHTML = custom;
        let value = Number(this.getAttribute('data-value'));
        pipsSlider.noUiSlider.set(value);
        currentCellColorsValue = value;
    }
    for (let i = 0; i < pips.length; i++) {
        if(i==0){pips[i].innerHTML="jasny"}
        if(i==1){pips[i].innerHTML="jednolity"}
        if(i==2){pips[i].innerHTML="ciemny"}
        pips[i].style.cursor = 'pointer';
        pips[i].addEventListener('click', clickOnPip);
    }
}

function generateSkin() {
    let diagram = new VoronoiDiagram();
    let poison = new PoissonProces();
    let distanceXMin = getDistanceXMin();
    let distanceXMax = getDistanceXMax();
    let distanceYMin = getDistanceYMin();
    let distanceYMax = getDistanceYMax();
    let spaceMin = getSpaceMin();
    let spaceMax = getSpaceMax();
    //spineCount i spineSize nigdzie nie podpięte ale zawierają w sobie warości
    let spineCount = getSpineCount();
    let spineSize = getSpineSize();
    //spaceColor i cellColors nigdzie nie podpięte ale zawierają w sobie warości
    let spaceColor = getSpaceColor();
    let cellColors = getCellColors();
    poison.setDistanceX(distanceXMin, distanceXMax);
    poison.setDistanceY(distanceYMin, distanceYMax);
    diagram.setPoisson(poison);
    diagram.setSpace(spaceMin, spaceMax);
    diagram.createDiagram(getCanvas());
}

//Żyrafa siatkowana
function clickGiraffe1(){
    let nr = 1;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //odleglość stała
    //jednolity kolor 
}

//Żyrafa zachodnioafrykańska
function clickGiraffe2(){
    let nr = 2;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //regularne laty
    //stała wielkosc
    //odstepy stałe

    //ewentualne jaśniejsze przebarwienia
}

//Żyrafa numbijska
function clickGiraffe3(){
    let nr = 3;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //zmienna niewielka odleglosc miedzy latami
    // centrum nieco ciemniejsze
}

//Żyrafa kordofańska
function clickGiraffe4(){
    let nr = 4;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //poszarpane brzego łat
    //duża, zmienna odleglosc miedzy latami
    //centrum zauwazalnie ciemniejsze
}

//Żyrafa angolska
function clickGiraffe5(){
    let nr = 5;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //lekko poszarpane brzegi
    //zmienna odleglosc miedzy latami
    //pojedyncze kolce wchodzące na łate
    //centrum nieco ciemniejsze
}

//Żyrafa południowoafrykańska
function clickGiraffe6(){
    let nr = 6;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //mocno poszarpane brzegi
    //zmienna odleglosc miedzy łatami
    //duże kolce, wchodzące w głąb łaty
}

//Żyrafa rotszylda
function clickGiraffe7(){
    let nr = 7;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //w miare regularne łaty 
    //lekko poszarpane brzegi
    //zmienna odległość miedzy łatami
    //drobne kolce
    //wielokolorowe z nieregularnymi wypełnieniami
}

//Żyrafa thornicrofta (rodyjska)
function clickGiraffe8(){
    let nr = 8;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //wysokie, wąskie łaty o regularnym kształcie
    //zmienna odległość miedzy łatami
    //duże kolce
    //ciemniejsze nieregularne plamy na powierzni łat
}

//Żyrafa masajska
function clickGiraffe9(){
    let nr = 9;
    document.getElementById('chooseToEditColor').value = nr;
    currentSpaceColorValue = nr;
    description.innerHTML = giraffeColors[nr].description;
    //bardzo duze laty, w miare regularne
    //bardzo mocno poszarpane brzegi
    //stała odległość miedzy łatami
    //duże grube kolce
    //ciemne łaty, rozjaśniające się w centrum
}

function getDistanceXMin(){
    return document.getElementById('setDistanceXMin').value;
}

function getDistanceXMax(){
    return document.getElementById('setDistanceXMax').value;
}

function setDistanceXMin(distance){
    //nigdzie jeszcze nie użyto
    document.getElementById('setDistanceXMin').value = distance;
}

function setDistanceXMax(distance){
    //nigdzie jeszcze nie użyto
    document.getElementById('setDistanceXMax').value = distance;   
}

function getDistanceYMin(){
    return document.getElementById('setDistanceYMin').value;
}

function getDistanceYMax(){
    return document.getElementById('setDistanceYMax').value;
}

function setDistanceYMin(distance){
    //nigdzie jeszcze nie użyto
    document.getElementById('setDistanceYMin').value = distance;  
}

function setDistanceYMax(distance){ 
    //nigdzie jeszcze nie użyto
    document.getElementById('setDistanceYMax').value = distance;  
}

function getSpaceMin(){
    return document.getElementById('setSpaceMin').value;
}

function getSpaceMax(){
    return document.getElementById('setSpaceMax').value;
}

function setSpaceMin(space){
    //nigdzie jeszcze nie użyto
    document.getElementById('setSpaceMin').value = space;
}

function setSpaceMax(space){
    //nigdzie jeszcze nie użyto
    document.getElementById('setSpaceMax').value = space;
}

function getSpineCount(){
    return document.getElementById('setSpineCount').value;
}
function getSpineSize(){
    return document.getElementById('setSpineSize').value;
}
function setSpineCount(count){
    //nigdzie jeszcze nie użyto
    document.getElementById('setSpineCount').value = count;
}
function setSpineSize(size){
    //nigdzie jeszcze nie użyto
    document.getElementById('setSpineSize').value = size;
}

function getSpaceColor(){
    return currentSpaceColorValue;
}

function getCellColors(){
    return currentCellColorsValue;
}

//colorNr przyjmuje wartości 1-9
function setSpaceColor(colorNr){
    //nigdzie jeszcze nie użyto
    currentSpaceColorValue = colorNr;
}

//colorsNr przyjmuje wartości -15-15
function setCellColors(colorsNr){
    //nigdzie jeszcze nie użyto
    currentCellColorsValue = colorsNr;
}

function getCanvas(){
    return document.getElementById("canvas");
}