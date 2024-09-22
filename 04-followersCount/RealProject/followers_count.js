let count = 0 ;
function increaseCount(){
    count++;
    displayCount();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}
function checkCountValue(){
    if (count === 10)
        alert('your instagram post gaind 10 flowers ')
}