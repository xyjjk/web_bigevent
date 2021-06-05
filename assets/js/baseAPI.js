// 每次调用$.get()或$.post()或$.ajax()的时候，
// 会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    // console.log(options.url)
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})