/**
 * Created by Administrator on 2017/7/18 0018.
 */
(function(){
    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    btn.onclick = function(){
        input.value = input.value.replace(/(\s|\u00A0)+|(\s|\u00A0)+/g,'');
    }
}());
