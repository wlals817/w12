function nightDayHandler(self){
    var target = document.querySelector('body');      
    if(self.value == 'day'){
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
      document.querySelector('#night_day_1').value = 'night';
    } else {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      document.querySelector('#night_day_1').value = 'day';
    }
    }