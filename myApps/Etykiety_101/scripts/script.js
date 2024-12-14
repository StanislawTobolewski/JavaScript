`use strict`;
$(function(){
//---------BUTTONS-----------
const btnPrint = document.getElementById(`btnPrint`);
const btnTesting = document.getElementById(`testing`);
const btnLblSizeClose = document.getElementById(`lblSizeClose`);
const btnSetPageSize = document.getElementById(`btnSetPageSize`);
const btnLblData = document.getElementById(`btnLblData`);
const btnDataClose = document.getElementById(`lblDataClose`);
const btnFieldsSettings = document.querySelectorAll(`.fieldSettings`);
const fieldSettingsWindowClose = document.getElementById(`fieldSettingsWindowClose`);
const samples = document.getElementById(`samples`);
const fieldSamplesWindowClose = document.getElementById(`fieldSamplesWindowClose`);

//----------BUTTONS LOAD DATA-----------------
const btnBarcode = document.getElementById(`loadBarcode`);
const btnLogo = document.getElementById(`loadLogo`);
const btnLoadCsvProductData = document.getElementById(`btnLoadCsvProductData`);
//---------INPUT LABELS-------------
const productName = document.getElementById(`ProductName`);
const productType = document.getElementById(`ProductType`);
const productContent = document.getElementById(`productContent`);
const productWeight = document.getElementById(`productWeight`);
const lblProduceFor = document.getElementById(`ProducedFor`);
const fontSize = document.getElementById(`fontSize`);
const fontColor = document.getElementById(`fontColor`);

//--------LABEL FIELDS FOR UPDATE
//const lblName = document.getElementById(`Name`);
//const additionalName = document.getElementById(`additionalName`);
//const lblContent = document.getElementById(`content`);
//const lblProductWeight = document.getElementById(`mass`);
///const produceForArea = document.getElementById('produceForArea');


const lblizeForm = document.getElementById(`setLblDimension`);
const lblSetSizeWidth = document.getElementById(`lblSetSizeWidth`);
const lblSetSizeHeight = document.getElementById(`lblSetSizeHeight`);
const lblSetSizeMargin = document.getElementById(`lblSetSizeMargin`);
const lblSetSizeBleeds = document.getElementById(`lblSetSizeBleeds`);

//------------SETTING "SCREENS"-----------
const setLblDimension = document.getElementById(`setLblDimension`);
const setLblData = document.getElementById(`setLblData`);
const fieldSettingsWindow = document.getElementById(`fieldSettingsWindow`);
const fontSettings = document.getElementById(`fontSettings`);
const sampleWindow = document.getElementById(`sampleWindow`);
//-----------LAYOUT ELEMENTS--------------
const appContainer = document.querySelector(`.appContainer`);
const labelContentContainer = document.getElementById(`labelContentContainer`);
//------------VARIABLES---------------

//--------------EVENTS----------------
//-----TODO
const btnLayout01 = document.getElementById(`btnLayout01`);
const btnLayout02 = document.getElementById(`btnLayout02`);

btnLayout01.addEventListener(`click`, async ()=>{
    let theme = document.getElementsByTagName(`link`)[1];
    await theme.setAttribute(`href`, `style/layout01.css`);
    await $(`#appContainer`).load(`layouts/layout01.html`);
});
btnLayout02.addEventListener(`click`, async ()=>{
    let theme = document.getElementsByTagName(`link`)[1];
    theme.setAttribute(`href`, `style/layout02.css`);
    $(`#appContainer`).load(`layouts/layout02.html`);
});

samples.addEventListener(`click`, ()=>{
    sampleWindow.style.display = `block`;
})

fieldSamplesWindowClose.addEventListener(`click`, ()=>{
    sampleWindow.style.display = `none`;
})

btnFieldsSettings.forEach((btn) =>{
    btn.addEventListener(`click`, ()=>{
        fieldSettingsSelected(btn.getAttribute(`name`), btn.getBoundingClientRect().x, btn.getBoundingClientRect().y)
    });
});

function fieldSettingsSelected(selectedItem, x, y){
    let sItem = selectedItem;
    switch(sItem){
        case `ProductName`:
            fieldSettingsWindow.style.display = `flex`;
            fieldSettingsWindow.style.left = `${x+30}px`;
            fieldSettingsWindow.style.top = `${y+30}px`;
            createOptionWindow(selectedItem);
            changeText(selectedItem);
            changeColor(selectedItem);
            break;
        case `ProductType`:
            fieldSettingsWindow.style.display = `flex`;
            fieldSettingsWindow.style.left = `${x+30}px`;
            fieldSettingsWindow.style.top = `${y+30}px`;
            createOptionWindow(selectedItem);
            changeText(selectedItem);
            changeColor(selectedItem);
            break;
        case `productContent`:
            fieldSettingsWindow.style.display = `flex`;
            fieldSettingsWindow.style.left = `${x+30}px`;
            fieldSettingsWindow.style.top = `${y+30}px`;
            createOptionWindow(selectedItem);
            changeText(selectedItem);
            changeColor(selectedItem);
            break;
        case `productWeight`:
            fieldSettingsWindow.style.display = `flex`;
            fieldSettingsWindow.style.left = `${x+30}px`;
            fieldSettingsWindow.style.top = `${y+30}px`;
            createOptionWindow(selectedItem);
            changeText(selectedItem);
            changeColor(selectedItem);
            break;
        case `producedFor`:
            fieldSettingsWindow.style.display = `flex`;
            fieldSettingsWindow.style.left = `${x+30}px`;
            fieldSettingsWindow.style.top = `${y+30}px`;
            createOptionWindow(selectedItem);
            changeText(selectedItem);
            changeColor(selectedItem);
            break;
    }
}

function createOptionWindow(item){
    fontSettings.innerHTML = `
    <label id="" for=""><b>Font size:</b></label>
    <input id="fontSize-${item}" type="number" value="24"><br/><br/>
    <label id="" for=""><b>Font color:</b></label>
    <input id="fontColor-${item}" type="color" value="#000000"><br/>`;
}


function changeText(element){
    let sizesMap = new Map();
    sizesMap.set(`fontSize-ProductName`,getComputedStyle(document.documentElement).getPropertyValue(`--header-01-size`));
    sizesMap.set(`fontSize-ProductType`,getComputedStyle(document.documentElement).getPropertyValue(`--header-02-size`));
    sizesMap.set(`fontSize-productContent`,getComputedStyle(document.documentElement).getPropertyValue(`--text-size`));
    sizesMap.set(`fontSize-productWeight`,getComputedStyle(document.documentElement).getPropertyValue(`--weight-size`));
    sizesMap.set(`fontSize-producedFor`,getComputedStyle(document.documentElement).getPropertyValue(`--prod-for-text`));
    let elementName = `fontSize-${element}`;
    let fontSizeField = document.getElementById(elementName);
    fontSizeField.value = (sizesMap.get(fontSizeField.id)).replace(`pt`, ``);
    fontSizeField.addEventListener(`change`, function(){
        switch(elementName){
            case `fontSize-ProductName`:
                document.documentElement.style.setProperty(`--header-01-size`, `${fontSizeField.value}pt`);
                break;
            case `fontSize-ProductType`:
                document.documentElement.style.setProperty(`--header-02-size`, `${fontSizeField.value}pt`);
                break;
            case `fontSize-productContent`:
                document.documentElement.style.setProperty(`--text-size`, `${fontSizeField.value}pt`);
                break;
            case `fontSize-productWeight`:
                document.documentElement.style.setProperty(`--weight-size`, `${fontSizeField.value}pt`);
                break;
            case `fontSize-producedFor`:
                document.documentElement.style.setProperty(`--prod-for-text`, `${fontSizeField.value}pt`);
                break;
        }
    });  
}

function changeColor(element){
    let elementName = `fontColor-${element}`;
    let fontColorField = document.getElementById(elementName);
    fontColorField.addEventListener(`change`, function(){
        switch(elementName){
            case `fontColor-ProductName`:
                document.documentElement.style.setProperty(`--header-01-color`, `${fontColorField.value}`);
                console.log(fontColorField.value);
                break;
            case `fontColor-ProductType`:
                document.documentElement.style.setProperty(`--header-02-color`, `${fontColorField.value}`);
                break;
            case `fontColor-productContent`:
                document.documentElement.style.setProperty(`--text-color`, `${fontColorField.value}`);
                break;
            case `fontColor-productWeight`:
                document.documentElement.style.setProperty(`--weight-color`, `${fontColorField.value}`);
                break;
            case `fontColor-producedFor`:
                document.documentElement.style.setProperty(`--prod-for-color`, `${fontColorField.value}`);
                break;
        }
    });  
}


fieldSettingsWindowClose.addEventListener(`click`, ()=>{
    fieldSettingsWindow.style.display = `none`;
});

btnSetPageSize.addEventListener(`click`, ()=>{
    document.documentElement.style.setProperty(`--label-width`,`${lblSetSizeWidth.value}mm`);
    document.documentElement.style.setProperty(`--label-height`,`${lblSetSizeHeight.value}mm`);
    document.documentElement.style.setProperty(`--bleeds`,`${lblSetSizeBleeds.value}mm`);
    document.documentElement.style.setProperty(`--inner-margin`,`${lblSetSizeMargin.value}mm`);
    labelContentContainer.style.minWidth = `${parseInt(lblSetSizeWidth.value) - (parseInt(lblSetSizeBleeds.value) * 2 + parseInt(lblSetSizeMargin.value) * 2)}mm`;
    labelContentContainer.style.minHeight  = `${parseInt(lblSetSizeHeight.value) - (parseInt(lblSetSizeBleeds.value) * 2 + parseInt(lblSetSizeMargin.value) * 2)}mm`;
});

productContent.addEventListener(`keyup`, ()=>{
    let text = productContent.value.replace(/\n/g, `<br/>`);
    document.getElementById(`content`).innerHTML = text;
});

btnTesting.addEventListener(`click`, ()=>{
    setLblDimension.style.display = `flex`;
});

btnLblData.addEventListener(`click`, () =>{
    setLblData.style.display = `flex`;
});

btnDataClose.addEventListener(`click`, () =>{
    setLblData.style.display = `none`;
});

btnLblSizeClose.addEventListener(`click`, ()=>{
    setLblDimension.style.display = `none`;
});

btnLoadCsvProductData.addEventListener(`change`, async (e)=>{
    await loadCsvDataFile(e)
});

btnBarcode.addEventListener(`change`, loadBarcode);

btnPrint.addEventListener(`click`, printLabel);

btnLogo.addEventListener(`change`, (e) => {
    console.log(`terefere`);
    loadLogo(e);
});
    
//------------EVENTS UPDATE TEXT ONLY--------------
productWeight.addEventListener(`keyup`, ()=>{
    document.getElementById(`mass`).innerHTML = productWeight.value;
});

productName.addEventListener(`keyup`, ()=>{
    document.getElementById(`Name`).innerHTML = productName.value;
});

addEventListener(`click`, ()=>{
    saveLabelData();
});

productType.addEventListener(`keyup`, ()=>{
    document.getElementById(`additionalName`).innerHTML = productType.value;
});

lblProduceFor.addEventListener(`keyup`, ()=>{
    console.log(`terefere`);
    let text = lblProduceFor.value.replace(/\n/g, `<br/>`);
    document.getElementById('produceForArea').innerHTML = text;
});

//----------FUNCTIONS-----------------

function loadCsvDataFile(event){
	event.preventDefault();
    let text = '';
    let data = btnLoadCsvProductData.files[0];
    let reader = new FileReader();
    reader.readAsText(data);
    reader.onload = async function(){
        text = await reader.result;
        await processImportedData(text);
  }
  btnLoadCsvProductData.value = ``;
}

function processImportedData(inData){
    let tempData = [];
    tempData = inData.split(`\n`);
    tempData = splitToColl(tempData);
	placeDataOnLabel(tempData);
}

function placeDataOnLabel(data){
	let headsArray = data[0];
	let contentArray = data[1];
	let dataMap = new Map();
	for(let i=0;i<headsArray.length;i++){
		dataMap.set(headsArray[i], contentArray[i]);
	}
	document.getElementById(`Name`).innerHTML = dataMap.get('p_name');
	document.getElementById(`additionalName`).innerHTML = dataMap.get('p_type');
	document.getElementById(`content`).innerHTML = `${dataMap.get('p_ingredients')} <br> ${dataMap.get('p_nutritional')}.`;
	document.getElementById(`mass`).innerHTML = dataMap.get('p_weight');
    document.getElementById('produceForArea').innerHTML = dataMap.get(`p_produce_for`);
	dataMap.clear();

}

function splitToColl(arr){
	for(let i=0;i<arr.length;i++){
	arr[i] = arr[i].split(`;`);
	}
	return arr;
}

function printLabel(){
    window.print();
}

function loadBarcode(e){
    e.preventDefault();
    let text;
    let data = btnBarcode.files[0];
    let reader = new FileReader();
    reader.readAsText(data);
    reader.onload = async function(){
      text = await reader.result;
      document.getElementById(`barcode`).innerHTML = text;
      barcode.style.backgroundColor = '#fff';
    }
    btnBarcode.value = ``;
  }

  function loadLogo(event){
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
    let imgTarget = document.getElementById(`logoContainer`);

    reader.onload = async function(event){
        imgTarget.src = event.target.result;
    }
    reader.readAsDataURL(selectedFile);
    btnLogo.value = ``;
  }
});
