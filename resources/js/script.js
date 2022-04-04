/*-----------------------------------------follow us tab--------------------------------------------------------*/

var followUsTap = document.getElementById("follow-us-tab")
var change = 0
var toggleTap = document.getElementById('toggle-tap')

function followTap() {
    if (change === 0) {
        followUsTap.style.transform = 'translateX(-200px)'
        toggleTap.style.transform = 'rotate(180deg)'
        change = 1
    } else {
        followUsTap.style.transform = 'translateX(0)'
        toggleTap.style.transform = 'rotate(0deg)'
        change = 0
    }
}

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() <= 450) {
            followUsTap.style.opacity = 0
        } else {
            followUsTap.style.opacity = 1
        }
    })
})

/*-----------------------------------------end follow us tab--------------------------------------------*/


