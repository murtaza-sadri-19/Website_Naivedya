
$(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
    $("#line-progress").css("width", "3%");
    $(".dig").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
    $("#line-progress").css("width", "25%");
    $(".grab").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
    $("#line-progress").css("width", "50%");
    $(".convey").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
    $("#line-progress").css("width", "75%");
    $(".cover").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
    $("#line-progress").css("width", "100%");
    $(".frame").addClass("active").siblings().removeClass("active");
});
// ----------------------------------------------------------------------------
function loadHTMLFileIntoDiv(url, targetId) {
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
})
.then(htmlContent => {
    // Insert the HTML content into the specified div
    document.getElementById(targetId).innerHTML = htmlContent;
})
.catch(error => {
    console.error('Error fetching HTML file:', error);
});
}

// Call the function with the file URL and target div ID
loadHTMLFileIntoDiv('footer.html', 'footer');