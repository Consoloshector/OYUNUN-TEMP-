const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: '  Man City - Bournemouth ', saat: '20:30', 
                link1: 'https://rotabettv367.com/mac/manchester-city-bournemouth-bein-sports-3/', 
                link2: 'https://myfootball.life/11504951-manchester-siti-bornmut-pryamaya-translyaciya-angliya-premer-liga-02112025-smotret-onlayn.html' },

                { oyun: ' Beşiktaş - Fenerbahçe (1) ', saat: '21:00', 
                  link1: 'https://monotv524.com/channel?id=yayinzirve', 
                  link2: 'https://golvar305.sbs/mac/besiktas-fenerbahce-bein-sports-1/' },
                
                 { oyun: ' Beşiktaş - Fenerbahçe (2)', saat: '21:00', 
                 link1: 'https://www.shoot-yalla.to/live/25525/1394525/besiktas-vs-fenerbahce', 
                 link2: 'https://noingoaithatgiare.com/index.html' },
                
                { oyun: ' Beşiktaş - Fenerbahçe (3)', saat: '21:00', 
                link1: 'https://rotabettv367.com/mac/besiktas-fenerbahce-bein-sports-1/',
                link2: 'https://hdselcukspor.in/izle/besiktas-fenerbahce-futboi'},

                 { oyun: ' Barcelona - Elche  ', saat: '21:30', 
                   link1: 'https://rotabettv367.com/mac/barcelona-elche-idman-tv', 
                   link2: 'https://myfootball.life/11504956-barselona-elche-pryamaya-translyaciya-ispaniya-primera-divizion-02112025-smotret-onlayn.html' },
                
                { oyun: ' Milan - Roma ', saat: '23:45', 
                 link1: 'https://rotabettv367.com/mac/milan-roma-tivibu-spor-1/', 
                 link2: 'https://myfootball.life/11504967-milan-roma-pryamaya-translyaciya-italiya-seriya-a-02112025-smotret-onlayn.html' },

               /* { oyun: ' Real Madrid - Valencia ', saat: '00:00', 
                 link1: 'https://rotabettv367.com/mac/real-madrid-valencia-s-sport/', 
                 link2: 'https://myfootball.life/11504907-real-madrid-valensiya-pryamaya-translyaciya-ispaniya-primera-divizion-01112025-smotret-onlayn.html' },

                 { oyun: ' Liverpool - Aston Villa ', saat: '00:00', 
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
