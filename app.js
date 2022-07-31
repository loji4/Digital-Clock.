function getTime() {
    const today = new Date();
  
    const hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let meridian = "AM";
    if (hours >= 12) {
      meridian = "PM";
    }
    
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    
    if (seconds < 10) {
      seconds = '0' + seconds
    } 
      
      
    const clockTime = `${hours}:${minutes}:${seconds} ${meridian}`
    
    document.querySelector('#clock').innerText = clockTime
    setTimeout(getTime,1000)
  }
  getTime()
  