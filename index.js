const counterEl = document.querySelector('.counter');
const loadingBarFrontEl = document.querySelector('.loading-bar-front')

let idx = 0;

updateNum()

function updateNum(){
  counterEl.innerText = idx + "%";
  loadingBarFrontEl.style.width = idx + "%";
  idx++
  if(idx < 101){
    setTimeout(updateNum, 20)
  }else {
    setTimeout(()=>{
      counterEl.innerText = "complete!";
      counterEl.style.color = "green"
    })
  }
}