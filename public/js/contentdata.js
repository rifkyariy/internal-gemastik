// set Content - Mengisi target html dengan tag yang diingikan
var setContent = (target,contentData) => {
    let selector =  document.querySelector(target);
    let htmlString;
    
    contentData.data.forEach(element => {
        htmlString = contentData.html(element);
        selector.innerHTML += htmlString;
    });
}

// reset Content
var resetContent = (target) => {
    let selector =  document.querySelector(target);
    let htmlString = '';
    selector.innerHTML = htmlString;
}



// memberikan index pada sebuah objek
let generateIndex = (targetJson) => {
    let x = 0;
    outData = targetJson
    outData.data.forEach(element => {
        element.index = x;
        x++;
    });

    return outData;
}

// membuat list - semacam pagination
let generateList = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

// expand and less fun

var toggle = 0;
let expandFaqFun = (defaultSize, pageSize) => {
    let newSize = pageSize;
    
    // Menentukan expand atau less
    if(toggle  == 0){

        // menentukan size
        if((generateIndex(faqcontent).data.length - newSize) >= pageSize){
            newSize = newSize + pageSize;
        }else{
            newSize = newSize + generateIndex(faqcontent).data.length - newSize;
        }

        // reset list, generate list dan menentukan masih expand atau less 
        if(newSize < generateIndex(faqcontent).data.length){
            faqExpand.data[0].onclick = `expandFaqFun(${defaultSize},${newSize})`;
            resetContent("#accordionExample");
            setFaq(newSize,1,generateIndex(faqcontent));
            toggle = 0;
        }else{
            faqExpand.data[0].onclick = `expandFaqFun(${defaultSize},${defaultSize})`;
            resetContent("#accordionExample");
            setFaq(newSize,1,generateIndex(faqcontent));
            document.querySelector('#expandFaq').innerHTML = ('Less')
            toggle = 1;
        }
    }else{
        resetContent("#accordionExample");
        setFaq(pageSize,1,generateIndex(faqcontent));
        document.querySelector('#expandFaq').innerHTML = ('Expand')
        toggle = 0;
    }

}

// data

// carousel gemastik

var carouselcontent = {
    'html' : (data) => {
        return `
        <div class="carousel-item ${data.status}">
                    <div class="backgroundpattern"> 
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
                    </div>
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
            'link': `/gemastik`,
            'image': `images/slider/1.svg`
        },
        {
            'title' : `Timeline Internal Gemastik`,
            'desc' : `Ingin ikut tapi bingung alurnya ? Yuk simak timelinenya.`,
            'status' : ``,
            'button' : `Lihat Timeline`,
            'buttonAdd' : ``,
            'link': `/timeline`,
            'image': `images/slider/2.png`
        },
        {
            'title' : `Pendampingan Online Ekskusif !`,
            'desc' : `Daripada gabut ye kan, mending ikuti pendampingan online biar paham.`,
            'status' : ``,
            'button' : `Daftar Sekarang`,
            'buttonAdd' : ``,
            'link': `/pendampingan`,
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

// frequently asked questions
// faq title
var faqtitle = {
    'html' : (data) => {
        return `
            <h6 class="sub-title">${data.subtitle}</h6>
            <h4 class="title">${data.title}</h4>
        `
    },
    'data' : [
        {
            'subtitle' : "Frequently Asked Questions",
            'title' : 'Pertanyaan yang sering ditanyakan '
        }
    ]
}

// faq content
var faqcontent = {
    'html' : (data) => {
        return `
            <div class="card">
                <div class="card-header" id="heading${data.index}">
                    <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapse${data.index}"
                        aria-expanded="false" aria-controls="collapse${data.index}">
                        <b>${data.title}</b>
                    </a>
                </div>

                <div id="collapse${data.index}" class="collapse" aria-labelledby="heading${data.index}"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="text">
                            ${data.answer}
                        </p>
                    </div>
                </div>
            </div> <!-- card -->
        `
    },
    'data' : [
            {
                'title' : 'Gemastik itu apa kak ?',
                'answer' : '<b>Gemastik</b> adalah Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi. Sederhananya, Gemastik itu seperti Pimnas khusus bidang TIK '
            },
            {
                'title' : 'Kalau bukan mahasiswa TI boleh ikut nggak kak?',
                'answer' : '<b>Boleh banget</b>, walaupun kompetisi ini memiliki fokus bidang TIK tapi bisa diikuti sama mahasiswa jurusan apa saja'
            },
            {
                'title' : 'Harus bisa coding ya kak?',
                'answer' : '<b>Nggak sih</b> , untuk bidang lomba tertentu seperti Animasi, Desain Pengalaman Pengguna, (Bisnis TIK?) dan Karya Tulis Ilmiah TIK kamu bisa ikut meskipun nggak bisa ngoding sekalipun'
            },
            {
                'title' : 'Syarat untuk daftar apa aja kak?',
                'answer' : 'Kuy kepoin syarat pendaftaran di link berikut <a href="/syaratgemastik"><b>Syarat Ketentuan</b> </a>'
            },
            {
                'title' : 'Bagaimana tahap pendaftaran gemastik?',
                'answer' : 'Coming soon yeaa'
            },        
            {
                'title' : 'Apa benefit pendaftaran internal UNY?',
                'answer' : 'Benefit ikut pendaftaran internal UNY, kamu bisa dapet review, kritik, saran dan arahan dari mastah, opo yo kata selain mastah'
            },
            {
                'title' : 'Berapa orang maksimal satu tim?',
                'answer' : 'Satu tim maksimal terdiri dari 3 mahasiswa dari perguruan tinggi yang sama ya'
            },
            {
                'title' : 'Bagaimana mekanisme review internal ?',
                'answer' : 'Bisa kepoin alur atau timelinenya disini <a href="/timeline"><b>Timeline Internal Gemastik</b> </a>'
            }
        ]
}

// button expand -> FAQ
var faqExpand = {
    'html'  : (data) => {
        return `
            <a class="main-btn mt-40 rounded-two expandbtn" onclick="${data.onclick}" id="${data.id}">${data.button}</a>
        `
    },
    'data' : [
        {
            'id' : 'expandFaq',
            'button' : 'Expand'
        }
    ]
}




let setFaq = (page_size,page, targetJson ) => {
    const dataLength = targetJson.data.length;
    const htmlString = targetJson.html;
    const limitData = generateList(targetJson.data, page_size, page);
    const newJson = 
        {
            'html' : htmlString,
            'data' : limitData
        }

    setContent("#accordionExample",newJson);
    setContent("#accordionExample",faqExpand);
}




// init fun
let initFaq = (pageSize) => {
    setContent(".about-title",faqtitle);
    faqExpand.data[0].onclick = `expandFaqFun(${pageSize},${pageSize})`;
    setFaq(pageSize,1,generateIndex(faqcontent));
}

// init
setContent(".bidang-lomba-content",bidanglombacontent);
setContent(".tentang-gemastik-content",tentanggemastik);
setContent(".carousel-inner",carouselcontent);
initFaq(4);



// after all sets

// responsive mobile view
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = (window.innerHeight * 0.01) - 30;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});