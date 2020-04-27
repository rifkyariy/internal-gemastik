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
            'image': `images/slider/3.png`
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
                        <div class="features-content multiline-ellipsis">
                            <p class="text ">
                                ${data.desc}
                            </p>
                        </div>
                        <div class="features-content">
                            <a class="features-btn" href="${data.link}">LEARN MORE</a>
                        </div>
                    </div>
                </div>
                `},
    'data' : [
        {
            'title' : 'Keamanan Siber',
            'icon' : 'lni-shield',
            'desc': `Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,`,
            'link': '/lombactf' 
        },
        {
            'title' : 'Pemrograman Kompetitif',
            'icon' : 'lni-code',
            'desc': `Lomba pemrograman menguji kemampuan dan nalar dari setiap peserta dalam menyelesaikan program komputer untuk memecahkan permasalahan yang diberikan. Setiap program yang dibuat selain dapat menjawab dengan tepat kasus permasalahan yang diberikan, juga harus dapat dijalankan pada setiap kasus dalam waktu yang amat terbatas. Sehingga, selain peserta diadu dalam kecepatan penulisan program, peserta juga dituntut menemukan/ menggunakan algoritma (dan struktur data) yang tepat dan efisien. Bahasa pemrograman yang digunakan antara lain: C, C++, dan Java.`,
            'link': '/lombacp' 
        },
        {
            'title' : 'Penambangan Data',
            'icon' : 'lni-database',
            'desc': `Penambangan Data yang semakin banyak menarik perhatian baik di kalangan industri maupun akademik dunia dewasa ini, terutama dengan penggunaan deep learning yang merupakan suatu algoritma mutakhir. Keunggulan deep learning dibandingkan dengan algoritma konvensional adalah kemampuan untuk melatih jutaan bahkan milyaran parameter pembelajaran yang tersusun secara hierarkis multi lapis. Selain berkat terobosan algoritma, deep learning juga telah dimungkinkan berkat tersedianya stream data atau big data yang diperlukan untuk melatih parameter dalam jumlah raksasa tersebut. Dengan adanya konvergensi antara deep learning dan big data telah terbukti mampu memberikan insight atau performa yang sama dengan bahkan melampaui human level performance.
            Para peserta lomba diharapkan mampu melakukan proses Penambangan Data terhadap big data yang tersedia secara publik di web serta sudah terverifikasi validitasnya. Langkah peserta selanjutnya adalah memvisualisasikan hasil proses Penambangan Data tersebut sehingga berguna bagi masyarakat luas.`,
            'link': '/lombadatamining   ' 
        },
        {
            'title' : 'Pengembangan Bisnis TIK',
            'icon' : 'lni-investment',
            'desc': `Kategori lomba ini adalah kompetisi pengembangan model bisnis dengan produk TIK. Lomba ini memberikan kesempatan kepada peserta yang memiliki ide bisnis, start up dan pengembangan usaha yang berorientasi pada produk TIK, baik berupa jasa dan produk. Lomba ini akan menyeleksi ide pengembangan bisnis dalam bentuk ringkasan eksekutif pada penyisihan tahap pertama, kemudian business plan pada penyisihan tahap kedua, dan kompetisi produk disertai dengan proyeksi bisnisnya.`,
            'link': '/lombabussines' 
        },
        {
            'title' : 'Animasi',
            'icon' : 'lni-bolt',
            'desc': `Animasi merupakan sebuah lomba karya cipta dalam bentuk visualisasi 2D maupun 3D yang mengandung unsur kreativitas dan inovasi pemuda sebagai elemen penting dalam karya cipta tersebut. Karya berbentuk film pendek dari bentuk digital animation.`,
            'link': '/lombaanimasi' 
        },
        {
            'title' : 'Kota cerdas',
            'icon' : 'lni-apartment',
            'desc': `Kota Cerdas atau smart city adalah suatu konsep mengenai pemanfaatan data untuk mengelola kota/melayani masyarakat. Inovasi kota cerdas dirancang guna melayani dan membantu berbagai kegiatan masyarakat, terutama dalam mengelola sumber daya secara efisien dan memberikan kemudahan akses informasi kepada masyarakat hingga untuk mengantisipasi kejadian yang tidak terduga.
            Dengan Smart City, berbagai macam data dan informasi dapat dikumpulkan dari sensor yang terpasang di setiap sudut kota, dianalisis oleh aplikasi cerdas, selanjutnya disajikan sesuai dengan kebutuhan pengguna melalui aplikasi yang dapat diakses oleh berbagai jenis gadget. Melalui gadget-nya, secara interaktif pengguna juga dapat menjadi sumber data, mereka mengirim informasi ke pusat data untuk dikonsumsi oleh pengguna yang lain.`,
            'link': '/lombasmartcity' 
        },
        {
            'title' : 'Piranti Cerdas, Sistem Benam dan IoT',
            'icon' : 'lni-cloud-network',
            'desc': `Piranti cerdas (smart device) adalah sebuah hasil karya teknologi yang bekerja secara interaktif, adaptif, dan otomatis, sehingga mampu memberikan suatu solusi bagi permasalahan sehari-hari. Tingkat kecerdasan suatu piranti dapat dicapai dengan memanfaatkan suatu kecerdasan buatan (artificial intelligent) yang sesuai dengan kebutuhan pemecahan masalah.

            Sementara itu sistem benam (embedded system) adalah sebuah piranti keras (hardware) yang bekerja berdasarkan perintah dari piranti lunak (software) dan didesain memiliki tujuan dan fungsi yang spesifik. Dengan menggabungkan konsep piranti cerdas dan sistem benam, maka diharapkan dapat terciptanya sebuah sistem kompleks memiliki kualitas yang baik. Dilengkapi dengan antarmuka yang baik dan penggunaan sensor sebagai input dari keadaan lingkungan, piranti cerdas dapat bekerja secara efisien dan memberikan manfaat yang besar bagi lingkungan dan masyarakat.
            
            Internet of Things (IoT) atau Internet untuk Segalanya adalah suatu konsep dimana objek tertentu punya kemampuan untuk mentransfer data lewat jaringan tanpa memerlukan adanya interaksi dari manusia ke manusia ataupun dari manusia ke perangkat komputer. IoT bertujuan untuk memperluas manfaat dari konektivitas internet yang tersambung secara terus-menerus, sehingga memiliki kemampuan untuk berbagi data, kendali jarak jauh, dan sebagainya, termasuk juga pada benda di dunia nyata.
            
            Tim peserta cabang lomba Piranti Cerdas, Sistem Benam, dan IoT ini diharapkan dapat mengembangkan suatu piranti cerdas yang menerapkan algoritma kecerdasan buatan tertentu, mengimplementasikannya dalam suatu sistem benam, serta memenghungkannya dengan jaringan internet untuk mengetahui dan memberikan respon adaptasi dengan situasi lingkungannya. Tingkat kecerdasan yang dimiliki oleh piranti tersebut dapat dikembangkan dari proses belajar mandiri ataupun dengan memanfaatkan data pengukuran jaringan sendor dan hasil belajar yang telah tersedia di lingkungan, yang diperoleh melalui keterhubungan dengan jaringan internet.
            Piranti yang dibangun tersebut merupakan elemen sistem keterhubungan yang diharapkan dapat memberikan manfaat bagi peningkatan kesejahteraan masyarakat dalam bidang pertanian, perkebunan, kehutanan, peternakan, perikanan dan keluatan, peningkatan produksi pangan, sistem logistik, pembangkitan dan penghematan energi, instrumentasi dan kendali elektronik kewilayahan, transportasi cerdas, pengendalian dan mitigasi bencana, sistem keamanan cerdas, penyelematan lingkungan hidup, sistem aplikasi berbasis pemetaan geografis, dunia kesehatan, teknologi asistif untuk disabilitas atau pasien yang sakit, sistem perdagangan elektronik, literasi ekonomi digital, perangkat rumah tangga cerdas, automasi cerdas di industri, dan sebagainya.`,
            'link': '/lombaiot' 
        },
        {
            'title' : 'Pengembangan Aplikasi Permainan',
            'icon' : 'lni-game',
            'desc': `Lomba pengembangan aplikasi permainan mendorong peserta untuk berkreasi dan berinovasi mengembangkan aplikasi permainan yang mampu berjalan dengan baik untuk memenuhi tujuan yang dicapai, memperlihatkan sisi pendidikan, mempunyai dampak dan manfaat, sekaligus mengandung unsur menghibur (entertainment value) dari sebuah permainan.`,
            'link': '/lombagamedev' 
        },
        {
            'title' : 'Desain Pengalaman Pengguna',
            'icon' : 'lni-brush',
            'desc': `Lomba Desain Pengalaman Pengguna (UX Design) adalah lomba desain interaksi produk yang berorientasi pada kenyamanan dan kemudahan bagi pengguna. Dalam lomba ini yang menjadi fokus utama adalah pengalaman yang dirasakan pengguna ketika sedang menggunakan aplikasi tersebut secara menyeluruh. Para peserta lomba dituntut agar dapat merancang suatu antarmuka pengguna yang baik dengan menggunakan metode, sehingga didapatkan hasil desain aplikasi yang memiliki kualitas UX yang baik.`,
            'link': '/lombauiux' 
        },
        {
            'title' : 'Karya Tulis Ilmiah TIK',
            'icon' : 'lni-write',
            'desc': `Lomba Karya Tulis Ilmiah mendorong peserta untuk menumbuhkembangkan sebuah karya tulis mahasiswa dalam bentuk penuangan gagasan atau ide kreatif yang bersifat visioner dan implementatif untuk mencari solusi atas permasalahan bangsa yang siap terbit dengan mengikuti kaidah penulisan ilmiah. Diharapkan peserta yang mengikuti cabang lomba ini mampu berinovasi dan menyajikan karya tulis ilmiah yang memberikan solusi dari segi TIK untuk k.........`,
            'link': '/lombaktitik' 
        },
        {
            'title' : 'Pengembangan Perangkat Lunak',
            'icon' : 'lni-display-alt',
            'desc': `Lomba pengembangan perangkat lunak menguji kemampuan peserta dalam mengembangkan ide kreatif untuk memberikan solusi penyelesaian masalah di Indonesia dalam bentuk perangkat lunak berkualitas tinggi. Fokus pada kategori ini adalah aspek inovasi yang kreatif dan pemanfaatan TIK untuk mencerdaskan masyarakat Indonesia sehingga perangkat yang dihasilkan mampu memberikan dampak untuk kemandirian dan kecerdasan masyarakat umum. Dampak ini harus dibuktikan bukan hanya dalam bentuk argumentasi namun juga harus didukung dengan data. Produk perangkat lunak yang dihasilkan harus bisa dioperasikan sehingga dampak tersebut dapat terukur. Platform produk perangkat lunak tidak dibatasi. `,
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
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});