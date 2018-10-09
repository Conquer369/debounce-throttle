import debounce from "./debounce";
import throttle from "./throttle";

// 获取元素
let withoutDebounceThrottle = document.getElementById("without-debounce-throttle");
let withDebounce = document.getElementById("with-debounce");
let withThrottle = document.getElementById("with-throttle");

// 模拟请求
function ajax(content) {
    console.log('ajax request ' + content);
}

// 生成方法
let withoutDebounceThrottleAjax = ajax;
let withDebounceAjax = debounce(ajax, 500);
let withThrottleAjax = throttle(ajax, 1000);

// 监听事件
withoutDebounceThrottle.addEventListener("keyup", function (e) {
    withoutDebounceThrottleAjax(e.target.value);
});
withDebounce.addEventListener("keyup", function (e) {
    withDebounceAjax(e.target.value);
});
withThrottle.addEventListener("keyup", function (e) {
    withThrottleAjax(e.target.value);
});