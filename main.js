// Thay đổi nội dung búc thư ở đây
var letterContent =`Happy Birthday em bé Linh Nhi tuổi 18 lần thứ 3!\nChúc bé Linh Nhi tuổi mới mau ăn chóng lớn, đã đẹp rồi nay lại càng đẹp gái hơn nữa! Chúc bé ngày càng vui vẻ hạnh phúc hơn, luôn luôn tươi cười như lúc ở với 9/1 và hong khóc nhiều nữa nhen. Chúc bé tuổi mới biết giữ sức khỏe của mình hơn, biết yêu thương bản thân mình hơn, tự tin hơn, hong ép bản thân mình quá mức nữa vì hiện tại bé đã làm rất rất tốt rồi. Mong bé lúc nào cũng sẽ đủ mạnh mẽ để vượt qua những ngày chán nản và tiêu cực nhất, và anh cũng mong bé hãy luôn nhớ rằng bé không một mình, luôn có 9/1 ở đây với bé. Sau tất cả những chuyện xảy ra thì anh cũng mong rằng tình yêu hiện tại của bé sẽ thật đẹp, thật dài lâu, thật hạnh phúc. Và cuối cùng anh chúc bé sẽ luôn luôn được yêu thương và hạnh phúc bên gia đình, bạn bè và người mình yêu. 
Dù còn nhiều điều muốn chúc nhưng viết tới đây thì cũng hơi dài rồi, thôi thì anh xin chúc sinh nhật bé Linh Nhi mọi điều tốt đẹp nhất!
__SIGN__`;

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 20

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    // letterContentSplited.forEach((val, index) => {
    //     setTimeout(() => {
    //         if (val === '\n') {
    //             boxLetter.innerHTML += '<br>'
    //         } else {
    //             boxLetter.innerHTML += val
    //         }
    //     }, durationWrite* index)

    let buffer = ""
    let printed = ""

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            buffer += val

            // Nếu đến phần đặc biệt ký tên
            if (buffer.endsWith("__SIGN__")) {
                boxLetter.innerHTML += "<div style='text-align: right; font-style: italic;'>Anh Wuann</div>"
                printed += "__SIGN__"
                buffer = ""
            } else {
                // Kiểm tra xem buffer mới có ký tự nào cần in không
                // Tránh in trùng các ký tự trong "__SIGN__"
                if (!"__SIGN__".startsWith(buffer)) {
                    let nextChar = buffer[0]
                    buffer = buffer.slice(1)
                    printed += nextChar
                    if (nextChar === '\n') {
                        boxLetter.innerHTML += '<br>'
                    } else {
                        boxLetter.innerHTML += nextChar
                    }
                }
            }
        }, durationWrite * index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})