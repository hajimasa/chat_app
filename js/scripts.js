var btn = document.getElementById('btn');
 
    btn.addEventListener('click', function() {
      alert(document.myform.mytext.value);
  
      //submit()でフォームの内容を送信
      document.myform.submit();
    })