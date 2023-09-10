function hide_bt(){
    document.getElementById('start_bt').style.display = 'none';
    document.title = '请按enter键开始';
    document.onkeydown = function(event){
        if (event.keyCode == 13){
            window.location.href = ("/cg/1")
        } 
    }
    alert('欸，不是这个');
}

