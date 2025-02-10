$(document).ready((function () {
    $.get("https://downloadfacebook.auto.io.vn/footer.html",
        (function (data, status) {
            console.log(data),
                $("#contact-us").html(data)
        })
    )
}));
