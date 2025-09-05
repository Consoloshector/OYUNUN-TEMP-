const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
            { oyun: 'Ukraniya - Fransa', saat: '22:45', 
                link1: 'https://myfootball.top/11491855-ukraina-franciya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-05092025-smotret-onlayn.html', 
                link2: 'https://izleyintv-loanpaydayok-com.cdn.ampproject.org/c/s/izleyintv.loanpaydayok.com/2025/09/ukrayna-fransa-maci-canli-izle-05-eylul-2025.html/amp/?c=1' },

            { oyun: 'İslandiya - Azərbaycan', saat: '22:45', 
                link1: 'https://www.canlitv.vin/cbcsport-canli-yayin', 
                link2: 'https://myfootball.top/11491859-islandiya-azerbaydzhan-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-05092025-smotret-onlayn.html' },

            { oyun: 'İtaliya - Estoniya', saat: '22:45', 
                link1: 'https://myfootball.top/11491853-italiya-estoniya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-05092025-smotret-onlayn.html', 
                link2: 'https://izleyintv-loanpaydayok-com.cdn.ampproject.org/c/s/izleyintv.loanpaydayok.com/2025/09/italya-estonya-maci-canli-izle-05-eylul-2025.html/amp/?c=1' }
        ];

        oyunlar.forEach(e => {
            let content = document.createElement('div');
            content.className = 'content';
            let span1 = document.createElement('span');
            span1.textContent = e.oyun;
            span1.className = 'oyun';

            let span2 = document.createElement('span');
            span2.textContent = e.saat;
            span2.className = 'oyun';

            
            let secret = document.createElement('div');
            secret.className = 'secret';

            let link1div = document.createElement('div');
            link1div.className = 'links';
            let link1 = document.createElement('a');
            link1.textContent = 'Link 1'
            link1.href=e.link1;
            link1.className='link'

            let link2div = document.createElement('div');
            link2div.className = 'links';
            let link2 = document.createElement('a');
            link2.textContent = 'Link 2'
            link2.href=e.link2;
            link2.className='link'

            content.append(span1,span2);
            link1div.append(link1);
            link2div.append(link2);
            secret.append(link1div,link2div);
            main.append(content,secret)
        });


      $(document).ready(function () {
    $('.content').click(function () {
        $(this).next('.secret').toggleClass('show');
    });
});
