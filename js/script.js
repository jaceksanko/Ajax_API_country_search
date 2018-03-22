let url = 'https://restcountries.eu/rest/v1/name/';
let countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    let countryName = $('#country-name').val();

    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList 
    })
}

function showCountriesList(resp) { //nie rozumiem jak to się dzieje, że ten parametr przyjmuje tablicę z listą krajów 
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text('Name: ' + item.name + ', Capital:  ' + item.capital + ', Currencies: ' + item.currencies[0]).appendTo(countriesList);

    });

}


let urlCapital = 'https://restcountries.eu/rest/v2/capital/';
let capitalsList = $('#capital');

$('#search-capital').click(searchCapitals);

function searchCapitals() {
    let capitalName = $('#capital-name').val();

    if(!capitalName.length) capitalName = 'Warsaw';
    $.ajax({
        url: urlCapital + capitalName,
        method: 'GET',
        success: showCapitalList 
    })
}

function showCapitalList(resp) { //nie rozumiem jak to się dzieje, że ten parametr przyjmuje tablicę z listą krajów 
    capitalsList.empty();
    resp.forEach(function(item) {
        $('<li>').text('Capital:  ' + item.capital + ', Country: ' + item.name).appendTo(capitalsList);

    });

}



let urlCode = 'https://restcountries.eu/rest/v2/callingcode/';
let codeList = $('#code');

$('#search-code').click(searchCode);

function searchCode() {
    let codeNumber = $('#calling-code').val();

    if(!codeNumber.length) codeNumber = '48';
    $.ajax({
        url: urlCode + codeNumber,
        method: 'GET',
        success: showCodelList 
    })
}

function showCodelList(resp) { //nie rozumiem jak to się dzieje, że ten parametr przyjmuje tablicę z listą krajów 
    codeList.empty();
    resp.forEach(function(item) {
        $('<li>').text('Calling code:  ' + item.callingCodes[0] + ', Country: ' + item.name).appendTo(codeList);

    });

}
