(function () {
    var form = document.getElementById('form');
    var input = form.getElementsByTagName('input');
    var textarea = form.getElementsByTagName('textarea');
    var btn1 = document.getElementById('btn1');
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        checkNull();
        return false;
    };
    function init() {
        for (var i = 0; i < input.length; i++) {
            input[i].onfocus = function () {
                error(this, '', 1);
            }
        }
    }

    init();
    function checkNull() {
        for (var i = 0; i < input.length; i++) {
            if (input[i].value.length < 1) {
                error(input[i], '不能为空');
                input[i].className.indexOf('error') == -1 && (input[i].className += ' error');
            }
        }
    }

    function error(o, txt, show) {
        if (arguments.length == 3 && show) {
            o.tip && (o.tip.style.display = 'none');
        } else {
            if (o.className.search(/error/) == -1) {
                o.tip = over(o, txt);
            } else {
                o.tip.style.display = 'block';
            }

        }
    }

    function over(o, txt) {
        var pop = div('popover right');
        var arr = div('arrow');
        var content = div('popover-content');
        content.appendChild(div('', 'p', txt));
        pop.appendChild(content);
        pop.appendChild(arr);
        o.parentNode.insertBefore(pop, o.nextSibling);
        return pop;
    }

    function div(cls, tag, txt) {
        if (!tag) {
            tag = cls;
        }
        var d = document.createElement('div' || tag);
        d.className = cls;
        txt && (d.innerHTML = txt);
        return d;
    }

}());
