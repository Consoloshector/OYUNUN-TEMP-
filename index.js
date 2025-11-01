const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Burnley - Arsenal ', saat: '19:00', 
                link1: 'https://rotabettv367.com/mac/inter-fiorentina-tivibu-spor-1/', 
                link2: 'https://myfootball.life/11504222-inter-fiorentina-pryamaya-translyaciya-italiya-seriya-a-29102025-smotret-onlayn.html' },

                { oyun: ' Nottingham - Man United ', saat: '19:00', 
                  link1: 'https://www.shoot-yalla.to/live/25405/1463474/fc-koln-vs-bayern-munich', 
                  link2: 'https://myfootball.life/11504218-keln-bavariya-pryamaya-translyaciya-germaniya-kubok-dfb-29102025-smotret-onlayn.html' },
                
                 { oyun: ' Napoli - Como ', saat: '21:00', 
                 link1: 'https://www.shoot-yalla.to/live/25397/1479620/wolverhampton-vs-chelsea', 
                 link2: 'https://myfootball.life/11504214-vulverhempton-chelsi-pryamaya-translyaciya-angliya-kubok-ligi-29102025-smotret-onlayn.html' },
                
                { oyun: ' Trabzonspor - Galatasaray ', saat: '21:00', 
                link1: 'https://www.shoot-yalla.to/live/25396/1479619/arsenal-vs-brighton',
                link2: 'https://myfootball.life/11504217-arsenal-brayton-pryamaya-translyaciya-angliya-kubok-ligi-29102025-smotret-onlayn.html'},

                 { oyun: ' Bayern - Bayer ', saat: '21:30', 
                   link1: 'https://www.shoot-yalla.to/live/25394/1479617/swansea-city-vs-manchester-city', 
                   link2: 'https://myfootball.life/11504216-suonsi-siti-manchester-siti-pryamaya-translyaciya-angliya-kubok-ligi-29102025-smotret-onlayn.html' },
                
                { oyun: ' Tottenham - Chelsea ', saat: '21:30', 
                 link1: 'https://www.shoot-yalla.to/live/25395/1479618/liverpool-vs-crystal-palace', 
                 link2: 'https://myfootball.life/11504215-liverpul-kristal-pelas-pryamaya-translyaciya-angliya-kubok-ligi-29102025-smotret-onlayn.htmlza' },

                { oyun: ' Real Madrid - Valencia ', saat: '00:00', 
                 link1: 'https://www.shoot-yalla.to/live/25398/1479621/newcastle-united-vs-tottenham', 
                 link2: 'https://myfootball.life/11504231-nyukasl-yunayted-tottenhem-pryamaya-translyaciya-angliya-kubok-ligi-29102025-smotret-onlayn.html' },

                 { oyun: ' Liverpool - Aston Villa ', saat: '00:00', 
                 link1: 'https://rotabettv367.com/mac/lazio-juventus-tivibu-spor-1/', 
                 link2: 'https://myfootball.life/11503273-lacio-yuventus-pryamaya-translyaciya-italiya-seriya-a-26102025-smotret-onlayn.html' }
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
