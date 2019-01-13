
<meta charset="utf-8"> 
<?php
$fromSite="Сообщение с сайта Белрафттур";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['firstNamePerson']))			{$firstNamePerson			= $_POST['firstNamePerson'];		if ($firstNamePerson == '')	{unset($firstNamePerson);}}
if (isset($_POST['secondNamePerson']))			{$secondNamePerson			= $_POST['secondNamePerson'];		if ($secondNamePerson == '')	{unset($secondNamePerson);}}
if (isset($_POST['fromEmail']))		{$fromEmail		= $_POST['fromEmail'];		if ($fromEmail == '')	{unset($fromEmail);}}
if (isset($_POST['mainText']))			{$mainText			= $_POST['mainText'];		if ($mainText == '')	{unset($mainText);}}
if (isset($_POST['selectedTour']))			{$selectedTour			= $_POST['selectedTour'];		if ($selectedTour == '')		{unset($selectedTour);}}
//стирание треугольных скобок из полей формы
if (isset($firstNamePerson) ) {
$firstNamePerson=stripslashes($firstNamePerson);
$firstNamePerson=htmlspecialchars($firstNamePerson);
}
if (isset($secondNamePerson) ) {
$secondNamePerson=stripslashes($secondNamePerson);
$secondNamePerson=htmlspecialchars($secondNamePerson);
}
if (isset($fromEmail) ) {
$fromEmail=stripslashes($fromEmail);
$fromEmail=htmlspecialchars($fromEmail);
}
if (isset($mainText) ) {
$mainText=stripslashes($mainText);
$mainText=htmlspecialchars($mainText);
}
if (isset($selectedTour) ) {
$selectedTour=stripslashes($selectedTour);
$selectedTour=htmlspecialchars($selectedTour);
}
// адрес почты куда придет письмо
$address="ekaterina.grudinskaya@gmail.com";
// текст письма 
$note_text="Тема : $fromSite \r\nИмя : $firstNamePerson \r\nФамилия: $secondNamePerson \r\n Email : $fromEmail \r\nВыбранны тур: $selectedTour  \r\n Дополнительная информация : $mainText";


mail($address,$fromSite,$note_text,"Content-type:text/plain; windows-1251"); 

?>