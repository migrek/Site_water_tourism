import './src/sass/main.scss';
import 'bootstrap';


document.addEventListener('DOMContentLoaded', init);

function init(){
    //перечень категорий туров 
    let categoriesList = ['Сплав по рекам Беларуси', 'Сплав по рекам Зарубежья', 'Поход-путешествие', 'Путешествие', 'Водная прогулка'];

    //переменные-туры, созданные на основе конструктора
    let tour1 = new Tour('Поход-путешествие по Приладожью и Псковщине', categoriesList[2], 10, ['2019-05-31', '2019-06-28'],'tours/01-pohod-puteshestvie-po-priladozhyu-i-pskovschine.html' , 'images/tours/tour-01-main.jpg');
    let tour2 = new Tour('Русский Север: Умба, Колвица, Белое море, Соловки, Псковщина', categoriesList[2], 15, ['2019-07-12', '2019-08-10'],'tours/02-russkiy-sever-umba-kolvitsa-beloe-more-solovki-pskovschina.html' , 'images/tours/tour-02-main.jpg');
    let tour3 = new Tour('Путешествие на Валдай. Смоленская, Тверская, Новгородская области РФ. Озеро Селигер, города Торжок, Валдай, Осташков, Старица и множество других интересных мест', categoriesList[3], 9, ['2019-09-07'],'tours/.html' , 'images/tours/tour-03-main.jpg');
    let tour4 = new Tour('Река Ипуть. Сплав Добруш - Гомель', categoriesList[0], 2, ['2019-03-30', '2019-06-01', '2019-06-22', '2019-08-10'],'tours/04-reka-iput-splav-dobrush-gomel.html' , 'images/tours/tour-04-main.jpg');
    let tour5 = new Tour('Река Сож. Сплав: город Ветка - город Гомель', categoriesList[0], 2, ['2019-07-13'],'tours/05-reka-sozh-splav-gorod-vetka-gorod-gomel.html' , 'images/tours/tour-05-main.jpg');
    let tour6 = new Tour('Река Днепр. Сплав: Жлобин - Речица. Рыбацкий тур. Бёрдвотчинг', categoriesList[0], 5, ['2019-05-01'],'tours/06-reka-dnepr-splav-zhlobin-rechitsa-ryibatskiy-tur-bYordvotching.html' , 'images/tours/tour-06-main.jpg');
    let tour7 = new Tour('Реки Березина - Днепр. Сплав: Горваль - Речица', categoriesList[0], 3, ['2019-04-18','2019-05-09', '2019-05-17'],'tours/07-reki-berezina-dnepr-splav-gorval-rechitsa.html' , 'images/tours/tour-07-main.jpg');
    let tour8 = new Tour('Река Березина. Сплав Светлогорск - Горваль. Рыбацкий тур. Бёрдвотчинг', categoriesList[0], 4,  ['2019-06-06', '2019-06-20', '2019-06-28', '2019-07-11', '2019-07-25', '2019-08-01', '2019-08-08', '2019-09-20', '2019-10-10'], 'tours/08-reka-berezina-splav-svetlogorsk-gorval-ryibatskiy-tur.html' , 'images/tours/tour-08-main.jpg');
    let tour9 = new Tour('Река Птичь. Сплав: 2-я Слободка - станция Птичь. Рыбацкий тур', categoriesList[0], 3, ['2019-06-14', '2019-06-28', '2019-07-19', '2019-09-06'],'tours/09-reka-ptich-splav-2-ya-slobodka-stantsiya-ptich-ryibatskiy-tur.html' , 'images/tours/tour-09-main.jpg');
    let tour10 = new Tour('Сплав по рекам Северного Кавказа', categoriesList[1], 15, ['2019-04-28', '2019-10-12'],'tours/.html' , 'images/tours/tour-10-main.jpg');
    let tour11 = new Tour('Сплав по реке Кереть и Белому морю путешествие по северу России', categoriesList[1], 15, [], 'tours/11-splav-po-reke-keret-i-belomu-moryu-puteshestvie-po-severu-rossii.html' , 'images/tours/tour-11-main.jpg');
    let tour12 = new Tour('Сплав по рекам Птичь – Припять от ст. Птичь до Мозыря. Рыбацкий тур. Бёрдвотчинг', categoriesList[0], 3,  ['2019-09-27'], 'tours/12-splav-po-rekam-ptich-pripyat-ot-st-ptich-do-mozyirya-ryibatskiy-tur-bYordvotching.html' , 'images/tours/tour-12-main.jpg'); 
    let tour13 = new Tour('Водная прогулка в Гомеле', categoriesList[4], 1, [], 'tours/.html' , 'images/tours/tour-13-main.jpg');

    //массив всех туров
    let toursList = [tour13, tour1, tour2, tour3, tour4, tour5, tour6, tour7, tour8, tour9, tour10, tour11, tour12];

    addToutsListInForm(toursList);
    createToursList(toursList);
    addToutsCategoriesInFilter(categoriesList);
    createCalendar(toursList)

    fillTourNameSeparPage(toursList);
    showFindedTours(toursList);
    showFindedCalendar(toursList);
}

//конструктор туров
function Tour(name, type, duration, datesStart, href, srcimg) {
    this.name = name;
    this.type = type;
    this.duration = duration;
    this.datesStart = datesStart;
    this.href = href;
    this.srcimg = srcimg;
}

//заполнение названия тура и дат в отдельной карточке
//в зависимости от положения в массиве toursList и прописанной цифре в карточке

function fillTourNameSeparPage(toursList) {
    if (document.querySelector('#wrapperSeparateTour')) {
        var currentTourName = document.querySelector('#currentTourName');
        var datesInToursList = document.querySelector('#datesInToursList');
        var emptyListForDates = [];
        
        var checkInnerName = parseInt(currentTourName.innerText);
        for (var i = 0; i < toursList.length; i++) {
            if (checkInnerName == i) {
                currentTourName.innerText = toursList[i].name;
                if (toursList[i].datesStart.length > 0) {
                    for (var j = 0; j < toursList[i].datesStart.length; j++) {
                        var d = new Date( toursList[i].datesStart[j]);
                        var todayDate = new Date();
                        if (d >= todayDate) {
                            emptyListForDates.push(('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2)  + '-' + d.getFullYear());
                        }
                    }
                    datesInToursList.innerText = emptyListForDates.join(", ");}
                else { datesInToursList.innerText = 'нет информации'}
            }
        }  
    }    
}




function addToutsListInForm(toursList) {
    if (document.querySelector('#tourListSelect')) {
        var tourListSelect = document.querySelector('#tourListSelect');

        for (var i = 0; i < toursList.length; i++) {
        var selectedTourItem = document.createElement('option');
            selectedTourItem.innerHTML = toursList[i].name;
            selectedTourItem.value = toursList[i].name;
            tourListSelect.add(selectedTourItem);       
        }
    }
}


//формирование страницы "маршруты" маршрутами из массива toursList

function  createToursList(toursList) { 
    if (document.querySelector('#toursWrapper')) {
        var toursWrapper = document.querySelector('#toursWrapper');
        var countTours = document.querySelector('#countTours'); 
        for (var i = 0; i < toursList.length; i++) { 
            toursWrapper.appendChild(createOneTourInList(toursList[i]));
        }
        countTours.innerHTML = 'Выбрано туров: ' + toursList.length;
    }
}

//формирование карточки с одним туром в рамках функции  createToursList(toursList) 

function createOneTourInList(tourFromList) {
    var tourItem = document.createElement('div');
    tourItem.classList.add('col-sm-4');

    var tourItemInner1 = document.createElement('div');
    tourItemInner1.classList.add('column', 'wrapper-project-block');
    tourItem.appendChild(tourItemInner1);

    var tourItemInner2 = document.createElement('div');
    tourItemInner2.classList.add('wrapper-photo-block');
    tourItemInner1.appendChild(tourItemInner2);

    var tourItemInner3 = document.createElement('img');
    tourItemInner3.classList.add('project-photo');
    tourItemInner3.src = tourFromList.srcimg;
    tourItemInner2.appendChild(tourItemInner3);

    var tourItemInner4 = document.createElement('div');
    tourItemInner4.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center', 'shadow-mask-black');
    tourItemInner2.appendChild(tourItemInner4);

    var tourItemInner5 = document.createElement('div');
    tourItemInner5.classList.add('posts-caption-block', 'text-left');
    tourItemInner1.appendChild(tourItemInner5);

    var tourItemInner6 = document.createElement('p');
    tourItemInner6.classList.add('caption-posts');
    tourItemInner6.innerHTML = tourFromList.name;
    tourItemInner5.appendChild(tourItemInner6);

    var tourItemInner7 = document.createElement('p');
    tourItemInner7.classList.add('text-line-posts');
    tourItemInner7.innerHTML = tourFromList.type;
    tourItemInner5.appendChild(tourItemInner7);
    
    var tourItemInner8 = document.createElement('p');
    tourItemInner8.classList.add('text-line-posts');
    tourItemInner8.innerHTML = correctFormWordDay(tourFromList.duration);
    tourItemInner5.appendChild(tourItemInner8);

    var tourItemInner9 = document.createElement('a');
    tourItemInner9.classList.add('read-more-link');
    tourItemInner9.href = tourFromList.href;
    tourItemInner9.innerHTML= 'Подробнее...';
    tourItemInner5.appendChild(tourItemInner9);
    return tourItem;
}


//формирование правильного падежа для слова "день" для корректного отображения 
//в карточке с одним туром в рамках функций createOneTourInList(tourFromList) и createOneCalendarInList(tourFromList)

function correctFormWordDay(countDay) {
    if (countDay % 10 == 1 && countDay != 11) {
        return countDay + ' день';
    } else if ((countDay % 10  == 2 || countDay % 10  == 3 || countDay % 10  == 4) && countDay != 12 && countDay != 13 && countDay != 14) {
        return countDay + ' дня';
    } else {
        return countDay + ' дней';
    }
    
}

//фильтр туров по типам во вкладке "маршруты"

function addToutsCategoriesInFilter(categoriesList) {
    if ( document.querySelector('#tourFilterType')) {
        var tourFilterType = document.querySelector('#tourFilterType');

        for (var i = 0; i < categoriesList.length; i++) {
        var tourTypeItem = document.createElement('option');
        tourTypeItem.text = categoriesList[i];
        tourFilterType.add(tourTypeItem);       
        }
    }
}

//событие по нажатию на кнопку "найти" во вкладке "маршруты" (показать выбранные туры)
function showFindedTours(toursList) {
    if (document.querySelector('#btnFindTours')) {
    var btnFindTours = document.querySelector('#btnFindTours');
    btnFindTours.addEventListener('click', function(event) {
    event.preventDefault();
        var wrapT = document.querySelector('#toursWrapper'); 
        var countTours = document.querySelector('#countTours'); 
        var tourDurationFrom = document.querySelector('#tourDurationFrom'); 
        var tourDurationTo = document.querySelector('#tourDurationTo'); 
    
        wrapT.innerHTML = '';   
        for (var i = 0; i < toursList.length; i++) {
            if ((toursList[i].type == tourFilterType.options[tourFilterType.selectedIndex].innerHTML && tourFilterType.selectedIndex != 0) || tourFilterType.selectedIndex == 0) {
                if ((toursList[i].duration >= tourDurationFrom.value && tourDurationFrom.value !='') || tourDurationFrom.value =='') {
                    if ((toursList[i].duration <= tourDurationTo.value && tourDurationTo.value!='') || tourDurationTo.value=='') {
                        wrapT.appendChild(createOneTourInList(toursList[i]));
                    }
                }
            }

        }
        countTours.innerHTML = 'Выбрано туров: ' + wrapT.children.length;
    }
    )}
}



//формирование страницы "календарь" с маршрутами и их датами из массива toursList

function  createCalendar(toursList) { 
    if (document.querySelector('#calendarWrapper')) {
        var calendarWrapper = document.querySelector('#calendarWrapper');
        var countToursCalendar = document.querySelector('#countToursCalendar'); 

        var dateList = [];
        for (var i = 0; i < toursList.length; i++) {
            if (toursList[i].datesStart) {
                for (var j = 0; j < toursList[i].datesStart.length; j++) {
                    var itemName =  toursList[i].name;
                    var itemType =  toursList[i].type;
                    var itemDuration =  toursList[i].duration;
                    var itemHref = toursList[i].href;
                    var itemSrcImg = toursList[i].srcimg;
                    var itemDate =  new Date(toursList[i].datesStart[j]);
                    var todayDate = new Date();
                    if (itemDate >= todayDate) {
                        var tourAndDates = new function createObject() {
                            this.name = itemName;
                            this.dateStart = itemDate;
                            this.type = itemType;
                            this.duration = itemDuration;
                            this.href = itemHref;
                            this.srcimg = itemSrcImg;
                            }
                     dateList.push(tourAndDates) 
                    }
 
                }  
            } 
        }
        
        var sortedDateList  = dateList.sort(function(a, b) {
        var dateA=new Date(a.dateStart), dateB=new Date(b.dateStart)
        return dateA-dateB
        })

    for (var k = 0; k < sortedDateList.length; k++) { 
        calendarWrapper.appendChild(createOneCalendarInList(sortedDateList[k]));
    }
    countToursCalendar.innerHTML = 'Выбрано туров: ' + calendarWrapper.children.length;
    }
}

//формирование карточки с одним туром в рамках функции createCalendar(toursList)
function createOneCalendarInList(tourFromList) {
    var tourItem = document.createElement('div');
    tourItem.classList.add('col-sm-4');

    var tourItemInner1 = document.createElement('div');
    tourItemInner1.classList.add('column', 'wrapper-project-block');
    tourItem.appendChild(tourItemInner1);

    var tourItemInner2 = document.createElement('div');
    tourItemInner2.classList.add('wrapper-photo-block');
    tourItemInner1.appendChild(tourItemInner2);

    var tourItemInner3 = document.createElement('img');
    tourItemInner3.classList.add('project-photo');
    tourItemInner3.src = tourFromList.srcimg;
    tourItemInner2.appendChild(tourItemInner3);

    var tourItemInner4 = document.createElement('div');
    tourItemInner4.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center', 'shadow-mask-black');
    tourItemInner2.appendChild(tourItemInner4);

    var tourItemInner10 = document.createElement('div');
    tourItemInner10.classList.add('calendar', 'text-center', 'd-flex', 'flex-column');
    tourItemInner2.appendChild(tourItemInner10);

    var tourItemInner11 = document.createElement('span');
    tourItemInner11.classList.add('calendar-day');
    var firstDayStart = new Date(tourFromList.dateStart);
    var SecondDayEnd = new Date(tourFromList.dateStart);
    SecondDayEnd.setDate(SecondDayEnd.getDate()  + tourFromList.duration);
    tourItemInner11.innerHTML = firstDayStart.getDate() + '-' + SecondDayEnd.getDate();
    tourItemInner10.appendChild(tourItemInner11);

    var tourItemInner12 = document.createElement('span');
    tourItemInner12.classList.add('calendar-month');
    tourItemInner12.innerHTML = returnInnerMonthText (firstDayStart, SecondDayEnd);
    tourItemInner10.appendChild(tourItemInner12);

    var tourItemInner5 = document.createElement('div');
    tourItemInner5.classList.add('posts-caption-block', 'text-left');
    tourItemInner1.appendChild(tourItemInner5);

    var tourItemInner6 = document.createElement('p');
    tourItemInner6.classList.add('caption-posts');
    tourItemInner6.innerHTML = tourFromList.name;
    tourItemInner5.appendChild(tourItemInner6);

    var tourItemInner7 = document.createElement('p');
    tourItemInner7.classList.add('text-line-posts');
    tourItemInner7.innerHTML = tourFromList.type;
    tourItemInner5.appendChild(tourItemInner7);
    
    var tourItemInner8 = document.createElement('p');
    tourItemInner8.classList.add('text-line-posts');
    tourItemInner8.innerHTML = correctFormWordDay(tourFromList.duration);
    tourItemInner5.appendChild(tourItemInner8);

    var tourItemInner9 = document.createElement('a');
    tourItemInner9.classList.add('read-more-link');
    tourItemInner9.href = tourFromList.href;
    tourItemInner9.innerHTML= 'Подробнее...';
    tourItemInner5.appendChild(tourItemInner9);

    return tourItem;
}

//получение названия месяца для отображения в календаре в рамках функции createOneCalendarInList(tourFromList)
function returnInnerMonthText (firstDayStart, SecondDayEnd) {
    var monthsList = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    if (firstDayStart.getMonth() == SecondDayEnd.getMonth()) {
        return  monthsList[firstDayStart.getMonth()]
    }
    else {
        return  monthsList[firstDayStart.getMonth()] + '-' + monthsList[SecondDayEnd.getMonth()];
    }
}

//функция для поиска и сортировки всех туров по дате для исползования для фильтрации в календаре
function showFindedCalendar(toursList) {
if (document.querySelector('#calendarWrapper')) {

    let btnFindToursCalendar = document.querySelector('#btnCountToursCalendar')
    btnFindToursCalendar.addEventListener('click', function(event) {
    event.preventDefault();

    var calendarWrapper = document.querySelector('#calendarWrapper');
    var countToursCalendar = document.querySelector('#countToursCalendar'); 
    var tourDateFrom = new Date(document.querySelector('#dateFrom').value); 
    var tourDateTo = new Date(document.querySelector('#dateTo').value); 
    calendarWrapper.innerHTML = '';  

    var dateList = [];
    for (var i = 0; i < toursList.length; i++) {
        if (toursList[i].datesStart) {
            for (var j = 0; j < toursList[i].datesStart.length; j++) {
                var itemName =  toursList[i].name;
                var itemType =  toursList[i].type;
                var itemDuration =  toursList[i].duration;
                var itemHref = toursList[i].href;
                var itemSrcImg = toursList[i].srcimg;
                var itemDate =  new Date(toursList[i].datesStart[j]);
                var todayDate = new Date();
                if (itemDate >= todayDate) {
                    var tourAndDates = new function createObject() {
                        this.name = itemName;
                        this.dateStart = itemDate;
                        this.type = itemType;
                        this.duration = itemDuration;
                        this.href = itemHref;
                        this.srcimg = itemSrcImg;
                        }
                 dateList.push(tourAndDates) 
                }

            }  
        } 
    }

    var sortedDateList  = dateList.sort(function(a, b) {
        var dateA=new Date(a.dateStart), dateB=new Date(b.dateStart)
        return dateA-dateB
    })

    for (var k = 0; k < sortedDateList.length; k++) {
        if ((sortedDateList[k].dateStart >= tourDateFrom && document.querySelector('#dateFrom').value != '') || document.querySelector('#dateFrom').value == '') {
            if ((sortedDateList[k].dateStart <= tourDateTo && document.querySelector('#dateTo').value != '') || document.querySelector('#dateTo').value == '' ) {
                calendarWrapper.appendChild(createOneCalendarInList(sortedDateList[k]));
            }   
        }
    }
    countToursCalendar.innerHTML = 'Выбрано туров: ' + calendarWrapper.children.length; 
    

    })
    }
}


//функция jQuery для закрупления шапки сверху и появления значка "вверх"
jQuery(function($) {
    var $navMenu = $('.header-wrapper');
    var $toTop = $('.to-top');
    var body = $('html, body');   
    $(window).scroll(function(){            
        if($(window).scrollTop()>$navMenu.height()){
            $navMenu.addClass('fixed');
        }
        else if ($(window).scrollTop()<$navMenu.height()){
            $navMenu.removeClass('fixed');
        }
        
        if($(window).scrollTop()>1000){
            $toTop.fadeIn(300);
        }
        else if ($(window).scrollTop()<1000){
            $toTop.hide();
        }
    });
    $toTop.on('click', function(e) {
        e.preventDefault();
        body.animate({scrollTop:0}, 600, 'swing');
    });
});


//отправка формы
$(document).ready(function(){
    $("#mailForm").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: "send.php",
        data: form_data,
        success: function() {
               alert("Сообщение успешно  отправлено! Мы свяжемся с Вами в ближайшее время");
        }
      });
    });
});