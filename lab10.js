function $()
{ var elements = new Array();
for (var i = 0; i <
arguments.length; i++)
{ var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements; }
function f()
{
alert('Наступила подія
onmouseover. Після закриття цього
вікна ви побочете жовтий бардюр і
розширення зображення');
$("pic1").style.border="solid 2px
yellow";
$("pic1").style.width="500px";
}
function g()
{
alert('Наступила подія
onmouseout. Після закриття цього
вікна ви побочете зміну коліру
бардюру на червоний і зменшення
ширини зображення до 50 px');
$("pic1").style.borderColor="red"
;
$("pic1").style.width="50px";
}
