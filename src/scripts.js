const moveNav = state => {
    const styles = {
        'open' : {
            color: 'rgba(255, 255, 255, 0.8)',
            left: '0',
            scroll: false,
            background: 'rgba(40,40,40, 0.8)'
        },
        'close' : {
            color: 'rgba(255, 255, 255, 0)',
            left: '-100%',
            scroll: true,
            background: 'rgba(40,40,40, 1)'
        }
    }

    const nav = document.getElementsByClassName("nav")[0]
    const links = document.getElementsByClassName("sidenav-content")[0].getElementsByTagName('a')

    nav.style.left = styles[state].left
    for (let i=0; i<links.length; i++) {
        links[i].style.color = styles[state].color
    }
}

const displayCountrySelect = state => {
    const styles = {
        'open' : {
            right: '0',
            visibility: 'visible',
            opacity: '100',
            scroll: false,
            body: '#ecece7'
        },
        'close' : {
            right: '-100%',
            visibility: 'hidden',
            opacity: '0',
            scroll: true,
            body: 'white'
        }
    }

    const nav = document.getElementById("country-select")
    
    nav.style.opacity = styles[state].opacity
    nav.style.visibility = styles[state].visibility
    bodyChange(styles[state].scroll, styles[state].body)
}

const bodyChange = (state, color) => {
    var element = document.getElementsByTagName("body")[0];
    if (screen.width < 768) element.style.backgroundColor = color

    if (state) {
        element.classList.remove("noscroll");
    } else {
        element.classList.add("noscroll");
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos && currentScrollPos > 50) {
        document.getElementById("navbar").style.top = "-100px";
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}
  


var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        if (screen.width < 960) {
            var arrow = this.querySelectorAll(".arrow-expand")[0]
            arrow.classList.toggle('active')
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = 'none'
            } else {
                content.style.display = 'block'
            }
        }
    })
}