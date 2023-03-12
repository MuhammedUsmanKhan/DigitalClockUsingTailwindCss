let $GHr = document.getElementById('hours');
let $GMin = document.getElementById('minutes');
let $Gsec = document.getElementById('seconds');

// 1st Method : Accurate Method but isnt Accurate as much as Method 1 to fetch a time :)
// setInterval(() => {
//     Gsec++ 
//     if(Gsec>59){
//         GMin++;
//         Gsec = 0;
//     }else if (GMin>59){
//         GHr++;
//         GHr = 0
//     }  
    
//     $Gsec.innerHTML = Gsec
//     $GMin.innerHTML = GMin
//     $GHr.innerHTML = GHr
//     // let timee = `${GHr} : ${GMin} : ${Gsec}`;
//     // console.log(timee)
//   },1000);
// 2nd Method : A more Simpler and Accurate way to fetch a time :)
setInterval(() => {

    let time = new Date();
    let GHr = `0${(time.getHours())}`.slice(-2);
    let GMin = `0${(time.getMinutes())}`.slice(-2);
    let Gsec = `0${(time.getSeconds())}`.slice(-2);
    Gsec 
    GMin  
    GHr
    $Gsec.innerHTML = Gsec
    $GMin.innerHTML = GMin
    $GHr.innerHTML = GHr
    // let timee = `${GHr} : ${GMin} : ${Gsec}`;
    // console.log(timee)
  });