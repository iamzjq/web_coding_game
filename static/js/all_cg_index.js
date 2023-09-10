function change_cg1_text(){
    alert('再猜猜看');
};

function check_cg2_answer(){
    var answer = document.getElementById('answer').value;
    var input_answer = document.getElementById('input_answer').value;
    if(answer === input_answer){
        jump_to('3');
    }
    else{
        alert('错啦，再在源码里找找');
    }
}

function check_cg8_answer(){
    var input_answer = document.getElementById('input_answer').value;
    if(password === input_answer){
        jump_to('9');
    }
    else{
        alert('错啦，再试试');
    }
}

function check_cg9_answer(){
    var input_answer = document.getElementById('input_answer').value;
    if('mjubgtcdezaq' === input_answer){
        jump_to('10');
    }
    else{
        alert('错啦，再试试');
    }
}

function check_cg11_answer(){
    var input_answer = document.getElementById('input_answer').value;
    if('hellowcghtml' === input_answer){
        jump_to('12');
    }
    else{
        alert('错啦，再试试');
    }
}

function jump_to(index){
    window.location.href = ('/cg' + index);
}

function check_cgfalse_answer(){
    console.log('answer: copy');
    document.onkeydown = function(event){
        if (event.keyCode == 67 && event.ctrlKey){
            jump_to('8')
        }
    }
}

function send_email(email){
    var parameters = {'address_to': email}

    const form = document.createElement('form');
    form.method = 'post';
    form.action = '/send_email';
    document.body.appendChild(form);
  
    for (const key in parameters) {
        const formField = document.createElement('input');
        formField.type = 'hidden';
        formField.name = key;
        formField.value = parameters[key];
  
        form.appendChild(formField);
    }
    form.submit();
}

function check_width300(){
    if (document.body.clientHeight < 300){
        jump_to('14')
    }
}

