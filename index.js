   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Chelsea - Everton ', saat: '19:00', 
                   link1: 'https://www.youtube.com/live/Lwi5Sxl2Tzo?si=ZoVN2TB3yGm5ccCt', 
                   link2: 'https://golvar357.sbs/mac/brann-fenerbahce-trt-1/' },
         
                { oyun: ' Liverpool - Brighton ', saat: '19:00', 
                 link1: 'https://live.itv.az/', 
                 link2: 'https://myfootball.life/11513200-real-madrid-manchester-siti-pryamaya-translyaciya-liga-chempionov-10122025-smotret-onlayn.html' },
                
                { oyun: ' Antalyaspor - Galatasaray ', saat: '21:00', 
                link1: 'ttps://m.canlitv.direct/cbc-sport-hd',
                link2: 'https://myfootball.life/11513198-atletik-bilbao-pszh-pryamaya-translyaciya-liga-chempionov-10122025-smotret-onlayn.html'},
         
                { oyun: ' Barcelona - Osasuna ', saat: '21:30', 
                link1: 'https://www.kolbetour.com/2025/12/club-brugge-arsenal-canli-izle-10-aralik-2025.html', 
                link2: 'https://myfootball.life/11513196-bryugge-arsenal-pryamaya-translyaciya-liga-chempionov-10122025-smotret-onlayn.html' },

                 { oyun: ' Metz - PSG ', saat: '22:00', 
                  link1: 'https://idmantv.az/az', 
                  link2: 'https://myfootball.life/11512275-real-betis-barselona-pryamaya-translyaciya-ispaniya-primera-divizion-06122025-smotret-onlayn.html' },
                
                { oyun: ' Arsenal - Wolves ', saat: '00:00', 
                 link1: 'https://rotabettv372.com/mac/leeds-united-liverpool-bein-sports-3/', 
                 link2: 'https://myfootball.life/11512276-lids-yun-liverpul-pryamaya-translyaciya-angliya-premer-liga-06122025-smotret-onlayn.html' },

                /*{ oyun: ' PSG - Rennes ', saat: '00:05', 
                 link1: 'https://rotabettv372.com/mac/psg-rennes-bein-sports-4/', 
                 link2: 'https://myfootball.life/11512289-pszh-renn-pryamaya-translyaciya-franciya-liga-1-06122025-smotret-onlayn.html' },

                 { oyun: ' Liverpool - Aston Villa ', saat: '00:05', 
                 link1: 'https://rotabettv367.com/mac/liverpool-aston-villa-idman-tv/', 
                 link2: 'https://myfootball.life/11504908-liverpul-aston-villa-pryamaya-translyaciya-angliya-premer-liga-01112025-smotret-onlayn.html' }*/
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
