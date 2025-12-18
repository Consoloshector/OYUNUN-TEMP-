   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Galatasaray - Başakşehir ', saat: '21:30', 
                   link1: 'https://golvar643.sbs/mac/galatasaray-rams-basaksehir-atv/', 
                   link2: 'https://soccer-insider.com/soccer-insider-live/galatasaray-vs-istanbul-basaksehir-turkey-cup/26901' },

                { oyun: ' Napoli - Milan ', saat: '23:00', 
                   link1: 'https://golvar643.sbs/mac/napoli-milan-trt-spor/', 
                   link2: 'https://soccer-insider.com/soccer-insider-live/napoli-vs-milan-italy---supercoppa/26902' },
         
               /* { oyun: ' Man City - Brentford ', saat: '23:30', 
                 link1: 'https://noingoaithatgiare.com/index.html', 
                 link2: 'https://ovogoaal.com/match-updates/manchester-city-vs-brentford/' },
                
                { oyun: ' Talavera - Real Madrid ', saat: '00:00', 
                link1: 'https://ovogoaal.com/match-updates/talavera-vs-real-madrid/',
                link2: 'https://www.futuremagz.com/2025/12/talavera-real-madrid-maci-canli-izle-17-aralik-2025.html'},*/
         
                /*{ oyun: ' Bayern - Mainz ', saat: '20:30', 
                link1: 'https://golvar337.sbs/mac/bayern-munih-mainz-tivibu-spor-4/', 
                link2: 'https://www.kolbetour.com/2025/12/bayern-munih-mainz-05-canli-izle-14-aralik-2025.html' },

                 { oyun: ' Trabzonspor - Beşiktaş ', saat: '21:00', 
                  link1: 'https://golvar337.sbs/mac/trabzonspor-besiktas-bein-sports-1/', 
                  link2: 'https://www.kolbetour.com/2025/12/trabzonspor-besiktas-canli-izle-14-aralik-2025.html' },
                
                { oyun: ' Deportivo - Real Madrid ', saat: '00:00', 
                 link1: 'https://idmantv.az/az', 
                 link2: 'https://www.kolbetour.com/2025/12/deportivo-alaves-real-madrid-canli-izle-14-aralik-2025.html' },*/

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
