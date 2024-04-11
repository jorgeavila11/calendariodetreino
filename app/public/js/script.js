document.addEventListener('DOMContentLoaded', function() {
    
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var currentDay = currentDate.getDate();

     
    renderCalendar(currentMonth, currentYear );
  
    document.getElementById('prevMes').addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear );
    });
  
    document.getElementById('nextMes').addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear );
    });

    
  
    function renderCalendar(month, year) {     
      

      var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var firstDayOfWeek = new Date(year, month, 1).getDay();

        
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
            var numSemanaAtual = Math.ceil(day / 7)
            calendar += '<td' + cellClass + '>' + `<button id="openModalBtn" class="btn-dia" onclick="abrirModal(\'${j}\',\'${numSemanaAtual}\')" >` + day + '</button>' + '</td> ';
            
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
var modalA = document.getElementById("myModal");
var modalB = document.getElementById("myModalB");
var modalC = document.getElementById("myModalC");
var modalD = document.getElementById("myModalD");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// fecha modal
function fechaModal(x){
  if(x == 'A'){
    modalA.style.display = "none";
  }else if(x == 'B'){
    modalB.style.display = "none";
  }else if(x == 'C'){
    modalC.style.display = "none";
  } else if(x == 'D'){
    modalD.style.display = "none";
  }    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {  
  if (event.target == modalA) {
    modalA.style.display = "none";
  }else if (event.target == modalB){
    modalB.style.display = "none";
  }else if (event.target == modalC){
    modalC.style.display = "none";
  }else if (event.target == modalD){
    modalD.style.display = "none";
  }     
}

function abrirModal(x,y){  
  if (y == "1"){
    if(x == "1"){
      modalA.style.display = "block";
    }else if(x =="2"){
      modalB.style.display = "block";
    }else if(x =="3"){
      modalC.style.display = "block";
    }else if(x =="4"){
      modalD.style.display = "block";
    }else if(x =="5"){
      modalA.style.display = "block";
    }  
  }else if (y == "2"){
    if(x == "1"){
      modalB.style.display = "block";
    }else if(x == "2"){
      modalC.style.display = "block";
    }else if(x == "3"){
      modalD.style.display = "block";
    }else if(x == "4"){
      modalA.style.display = "block";
    }else if(x == "5"){
      modalB.style.display = "block";
    }  
  }else if (y == "3"){
    if(x == "1"){
      modalC.style.display = "block";
    }else if(x == "2"){
      modalD.style.display = "block";
    }else if(x == "3"){
      modalA.style.display = "block";
    }else if(x == "4"){
      modalB.style.display = "block";
    }else if(x == "5"){
      modalC.style.display = "block";
    }  
  }else if (y == "4"){
    if(x== "1"){
      modalD.style.display = "block";
    }else if(x == "2"){
      modalA.style.display = "block";
    }else if(x == "3"){
      modalB.style.display = "block";
    }else if(x == "4"){
      modalC.style.display = "block";
    }else if(x == "5"){
      modalD.style.display = "block";
    }  
  }else if (y == "5"){
    if(x == "1"){
      modalA.style.display = "block";
    }else if(x == "2"){
      modalB.style.display = "block";
    }else if(x == "3"){
      modalC.style.display = "block";
    }else if(x == "4"){
      modalD.style.display = "block";
    }else if(x == "5"){
      modalA.style.display = "block";
    }  
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
  var nomesSemana = ["Domingo","Segunda","Terca","Quarta","Quinta","Sexta","Sabado"]   
  return nomesSemana[diaDaSemana]
    
 } 

 // dia atual
function dataAtual(){
  var dataAtual = new Date();
  var dataDoMes = dataAtual.getDate()  
  return dataDoMes 
}

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

// quantidade de semanas no mes atual
function semanasNoMesAnoAtual() {
  // Obter o ano e mês atual
  const anoAtual = new Date().getFullYear();
  const mesAtual = new Date().getMonth() + 1; // Os meses em JavaScript são indexados a partir de 0

  // Calcular o número de semanas no mês atual
  const semanasNoMes = new Date(anoAtual, mesAtual, 0).getDate() / 7; // Obter o número de semanas dividindo o número de dias pelo número de dias em uma semana

  return semanasNoMes;
}

// semana atual do mes atual
function semanaAtual() {
  // Obter o dia atual
  const diaAtual = new Date().getDate();

  // Obter o calendário do mês atual
  //const calendario = new Date().getMonth();

  // Determinar em qual semana estamos
  const semanaAtual = Math.ceil(diaAtual / 7); // Determinar a semana atual dividindo o dia atual pelo número de dias em uma semana

  return semanaAtual;
}

