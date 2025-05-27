let copyBtn = document.getElementById('copy-button');
copyBtn.addEventListener('click', click_copy_btn_2, false);

function click_copy_btn_2() {
    // clipboard api は https でないと使えないらしいので、
    // 非推奨だがexecCommandを使う
    document.getElementById('decoded-text').select();
    document.execCommand('copy');
    document.getElementById('decoded-text').setSelectionRange(0, 0);
}

document.getElementById('encoded-text').addEventListener('input', on_input);

function on_input() {
    try{
        document.getElementById('decoded-text').value = decodeURI(document.getElementById('encoded-text').value);
    } catch {
        document.getElementById('decoded-text').value = "Error!";
    }
}

document.getElementById("clear-button").addEventListener('click', onClickClear, false);
function onClickClear(){
    document.getElementById('encoded-text').value = "";
    on_input();
}
