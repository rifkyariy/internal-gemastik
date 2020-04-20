var setContent = (target,contentData) => {
    var selector =  document.querySelector(target);
    let htmlString;

    contentData.data.forEach(element => {
        htmlString = `
                <div class="col-lg-4 col-md-7 col-sm-9">
                    <div class="single-features mt-40">
                        <div class="features-title-icon d-flex justify-content-between">
                            <h6 class="features-title"><a href="#">${element.title}</a></h6>
                            <div class="features-icon">
                                <i class="lni ${element.icon}"></i>
                                <img class="shape" src="images/f-shape-1.svg" alt="Shape">
                            </div>
                        </div>
                        <div class="features-content">
                            <p class="text">
                                ${element.desc}
                            </p>
                            <a class="features-btn" href="${element.link}">LEARN MORE</a>
                        </div>
                    </div> <!-- single features -->
                </div>
                `
        selector.innerHTML += htmlString;
    });
    
    console.log(selector);
}

// data
var contentArr = [];
var bidanglombacontent = {
    'data' : [
        {
            'title' : 'Keamanan Siber',
            'icon' : 'lni-shield',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombactf' 
        },
        {
            'title' : 'Pemrograman Kompetitif',
            'icon' : 'lni-code',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombacp' 
        },
        {
            'title' : 'Penambangan Data',
            'icon' : 'lni-database',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombadatamining   ' 
        },
        {
            'title' : 'Pengembangan Bisnis TIK',
            'icon' : 'lni-investment',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombabussines' 
        },
        {
            'title' : 'Animasi',
            'icon' : 'lni-bolt',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombaanimasi' 
        },
        {
            'title' : 'Kota cerdas',
            'icon' : 'lni-apartment',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombasmartcity' 
        },
        {
            'title' : 'Piranti Cerdas, Sistem Benam dan IoT',
            'icon' : 'lni-cloud-network',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombaiot' 
        },
        {
            'title' : 'Pengembangan Aplikasi Permainan',
            'icon' : 'lni-game',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombagamedev' 
        },
        {
            'title' : 'Desain Pengalaman Pengguna',
            'icon' : 'lni-brush',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombauiux' 
        },
        {
            'title' : 'Karya Tulis Ilmiah TIK',
            'icon' : 'lni-write',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombaktitik' 
        },
        {
            'title' : 'Pengembangan Perangkat Lunak',
            'icon' : 'lni-display-alt',
            'desc': 'Short description for the ones who look for something new. Short description for the ones who look for something new.',
            'link': '/lombasoftdev' 
        }
    ]
}

// init
setContent(".bidang-lomba-content",bidanglombacontent)
