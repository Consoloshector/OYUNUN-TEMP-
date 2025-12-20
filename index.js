   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Eyüpspor - Fenerbahçe ', saat: '18:00', 
                   link1: 'https://golvar623.sbs/mac/eyupspor-fenerbahce-bein-sports-1/', 
                   link2: 'https://noingoaithatgiare.com/index.html' },

                { oyun: ' Man City - West Ham ', saat: '19:00', 
                   link1: 'https://golvar623.sbs/mac/manchester-city-west-ham-bein-sports-3/', 
                   link2: 'https://noingoaithatgiare.com/index.html' },
         
                { oyun: ' Beşiktaş - Rizespor ', saat: '21:00', 
                 link1: 'https://golvar623.sbs/mac/besiktas-c-rizespor-bein-sports-1/', 
                 link2: 'https://noingoaithatgiare.com/index.html' },

                { oyun: ' Tottenham - Liverpool ', saat: '21:30', 
                link1: 'https://idmantv.az/az',
                link2: 'https://golvar623.sbs/mac/tottenham-liverpool-bein-sports-3/'},
                
                { oyun: ' Leipzig - Bayer ', saat: '21:30', 
                link1: 'https://golvar623.sbs/mac/leipzig-bayer-leverkusen-tivibu-spor-2/',
                link2: 'https://noingoaithatgiare.com/index.html'},
         
                { oyun: ' Juventus - Roma ', saat: '23:45', 
                link1: 'https://golvar623.sbs/mac/juventus-roma-tivibu-spor-1/', 
                link2: 'https://golvar623.sbs/mac/juventus-roma-s-sport-2/' },

                 { oyun: ' Real Madrid - Sevilla ', saat: '00:00', 
                  link1: 'https://idmantv.az/az', 
                  link2: 'https://golvar623.sbs/mac/real-madrid-sevilla-s-sport/' },
                
                { oyun: ' Everton - Arsenal ', saat: '00:00', 
                 link1: 'https://aztv.az/az/live', 
                 link2: 'https://golvar623.sbs/mac/everton-arsenal-bein-sports-3/' },

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
