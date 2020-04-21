var setContent = (target,contentData) => {
    let selector =  document.querySelector(target);
    let htmlString;
    
    contentData.data.forEach(element => {
        htmlString = contentData.html(element);
        selector.innerHTML += htmlString;
    });
}

// data

// carousel gemastik

var carouselcontent = {
    'html' : (data) => {
        return `
        <div class="carousel-item ${data.status}">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="slider-content">
                                    <h2 class="title">${data.title}</h2>
                                    <p class="text">${data.desc}</p>
                                    <ul class="slider-btn rounded-buttons">
                                        ${data.buttonAdd}
                                        <li><a class="main-btn rounded-one" href="${data.link}">${data.button}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> <!-- row -->
                    </div> <!-- container -->
                    <div class="slider-image-box d-none d-lg-flex align-items-end">
                        <div class="slider-image">
                            <img src="${data.image}" alt="${data.title}">
                        </div> <!-- slider-imgae -->
                    </div> <!-- slider-imgae box -->
                </div> <!-- carousel-item -->
        `   
    },
    'data' : [
        {
            'title' : `Gemastik XIII Memanggil !`,
            'desc' : `Submit ide kreatifmu dan dapatkan bimbingan eksklusif.`,
            'status' : `active`,
            'button' : `Daftar Sekarang`,
            'buttonAdd' : `<li><a class="main-btn rounded-two" href="/panduan">Lihat Panduan</a></li>`,
            'link': `/carousel1`,
            'image': `images/slider/1.svg`
        },
        {
            'title' : `Timeline Internal Gemastik`,
            'desc' : `Ingin ikut tapi bingung alurnya ? Yuk simak timelinenya.`,
            'status' : ``,
            'button' : `Lihat Timeline`,
            'buttonAdd' : ``,
            'link': `/carousel2`,
            'image': `images/slider/2.png`
        },
        {
            'title' : `Gemastik XIII Memanggil !`,
            'desc' : `Submit ide kreatifmu dan dapatkan bimbingan eksklusif.`,
            'status' : ``,
            'button' : `Daftar Sekarang`,
            'buttonAdd' : `<li><a class="main-btn rounded-two" href="/panduan">Lihat Panduan</a></li>`,
            'link': `/carousel1`,
            'image': `images/slider/1.png`
        }
        
    ]

}

// tentang gemastik
var tentanggemastik = {
    'html' : (data) => {
        return `
        <h6 class="sub-title">${data.subtitle}</h6>
        <h4 class="title">${data.title}</h4>
        <ul class="testimonial-line">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <p class="text">
            ${data.desc}
        </p>
        `   
    },
    'data' : [
        {
            'subtitle' : `Apa itu `,
            'title' : `Gemastik`,
            'desc' : `<b>GEMASTIK</b> (Pagelaran Mahasiswa Nasional Bidang Tekonologi Informasi dan Komunikasi), merupakan program Direktorat Kemahasiswaan, Direktorat Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi dan Pendidikan Tinggi. <br/><br/>
            Program ini ditujukan untuk meningkatkan kompetensi mahasiswa Indonesia, sehingga mampu mengambil peran sebagai agen perubahan dalam memajukan TIK dan pemanfaatannya, baik ketika masih dalam masa studi maupun kelak sesudah lulus studi. `
        }
    ]

}

// bidang lomba
var bidanglombacontent = {
    'html' : (data) => {return `
                <div class="col-lg-4 col-md-7 col-sm-9">
                    <div class="single-features mt-40">
                        <div class="features-title-icon d-flex justify-content-between">
                            <h6 class="features-title"><a href="#">${data.title}</a></h6>
                            <div class="features-icon">
                                <i class="lni ${data.icon}"></i>
                                <img class="shape" src="images/f-shape-1.svg" alt="Shape">
                            </div>
                        </div>
                        <div class="features-content">
                            <p class="text">
                                ${data.desc}
                            </p>
                            <a class="features-btn" href="${data.link}">LEARN MORE</a>
                        </div>
                    </div>
                </div>
                `},
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
setContent(".bidang-lomba-content",bidanglombacontent);
setContent(".tentang-gemastik-content",tentanggemastik);
setContent(".carousel-inner",carouselcontent);
setIndicator(".carousel-indicators",0,carouselcontent.data.length);
