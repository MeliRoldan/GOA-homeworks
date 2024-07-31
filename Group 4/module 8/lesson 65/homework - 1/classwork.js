let slide = document.getElementById('slide')

let sliders = [
    'https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user' ,
    'https://wallpapercave.com/wp/eq47DfR.jpg',
    'https://c4.wallpaperflare.com/wallpaper/968/560/894/spring-landscape-waterfall-in-oregon-usa-nature-river-water-trees-foliage-desktop-wallpaper-download-free-wallpaper-preview.jpg',
    'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg',
    'https://c4.wallpaperflare.com/wallpaper/947/583/747/mountain-nature-hd-wallpapers-top-beautiful-desktop-nature-images-background-wallpaper-preview.jpg',
    'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2Zyd2lsZF9mbG93ZXJzX2ZpZWxkX3BvcHBpZXMtaW1hZ2Uta3liY2MxZ3YuanBn.jpg'
]

let index = 0
slide.src = sliders[index]

function next() {
    index++
    slide.src = sliders[index]
    if (index > 5) {
        index = 0;
        slide.src = sliders[index]
    }
}

function back() {
    index--
    slide.src = sliders[index]
    if (index < 0) {
        index = 5;
        slide.src = sliders[index]
    }
}

