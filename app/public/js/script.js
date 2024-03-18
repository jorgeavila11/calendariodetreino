document.addEventListener('DOMContentLoaded', function() {
    
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var currentDay = currentDate.getDate();
  
    renderCalendar(currentMonth, currentYear);
  
    document.getElementById('prevMes').addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    document.getElementById('nextMes').addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });

    
  
    function renderCalendar(month, year) {
      var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var firstDayOfWeek = new Date(year, month, 1).getDay();
      
      console.log(daysInMonth)
      console.log(firstDayOfWeek)
  
      var calendar = '<table>';
      calendar += '<tr><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th></tr>';
      
      var day = 1;
      
      for (var i = 0; i < 6; i++) {
        calendar += '<tr>';
        for (var j = 0; j < 7; j++) {
          if (i === 0 && j < firstDayOfWeek) {
            calendar += '<td></td>';
          } else if (day > daysInMonth) {
            break;
          } else {
            var cellClass = '';
            if (day === currentDay && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
              cellClass = ' class="today"';
            }
            var diaTreino = "B"
            calendar += '<td' + cellClass + '>' + `<button id="openModalBtn" class="btn-dia" onclick="abrirModal(\'${diaTreino}\')" >` + day + '</button>' + '</td> ';
            day++;
          }
        }
        calendar += '</tr>';
      }
      
      calendar += '</table>';
  
      var calendarElement = document.getElementById('calendar');
      calendarElement.innerHTML = calendar;
  
      var currentMonthNameElement = document.getElementById('currentMonthName');
      currentMonthNameElement.textContent = months[month] + ' ' + year;     

    }
    
});



// Get the modal
var modal = document.getElementById("myModal");
var modalB = document.getElementById("myModalB");

// Get the button that opens the modal
//var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";  
// }


// fecha modal
function fechaModal(x){
  if(x == 'A'){
    modal.style.display = "none";
  }else if(x == 'B'){
    modalB.style.display = "none";
  }  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {  
  if (event.target == modal) {
    modal.style.display = "none";
  }else if (event.target == modalB){
    modalB.style.display = "none";
  }  
}

function abrirModal(x){
  if (x == "A"){
    modal.style.display = "block";
  }else if (x == "B"){
    modalB.style.display = "block";
  }   
   
}

//Recaregar a página
function reloadPageAtMidnight(){
  var now =new Date();
  var curreteHour = now.getHours();
  var currentMinut = now.getMinutes();

  if(curreteHour === 0 && currentMinut === 0 ){
    location.reload();
  }
}

setInterval(function(){
  reloadPageAtMidnight()  
},60000)


//pegar o dia da semana
 function diaSemana(){
  var dataAtual = new Date();
  var diaDaSemana = dataAtual.getDay()
  var nomesSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
  //console.log(nomesSemana[diaDaSemana])  
  return nomesSemana[diaDaSemana]  
 } 

 //console.log(diaSemana())

 // dia atual
function dataAtual(){
  var dataAtual = new Date();
  var dataDoMes = dataAtual.getDate()  
  return dataDoMes 
}
//console.log(dataAtual())

// retorna o mes
function getMesDoAno(){
  var dataAtual = new Date()
  var mesDoAno  = dataAtual.getMonth()   
  return mesDoAno;
}

// retorna o ano
function getAno(){
  var dataAtual = new Date()
  var anoAtual = dataAtual.getFullYear()
  return anoAtual
}

//quantidade de dias no mês
function quantDiasMes(){
  var dataAtual = new Date()
  var ano = dataAtual.getFullYear()
  var mes = dataAtual.getMonth()  
//verificar se o ano é bisexto  
  if(mes === 1 ){
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? 29 : 28 ;    
  }else{
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return diasPorMes[mes];
  }
}

function getQuantSemanasMes(){
  var diaAno = new Date();
  var diaSemana = diaAno.getDay()
  var nomesSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
  return nomesSemana[diaSemana]
}

//console.log(getQuantSemanasMes())


// descobrir qual 1 dia do mês 



