   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Fulham - Man City ', saat: '23:30', 
                   link1: 'https://golvar279.sbs/tv/bein-sports-1/', 
                   link2: 'https://macizlevip315.shop/canli-mac-izle/bein-sports-1/' },
         
                { oyun: ' Dortmund - Bayer ', saat: '00:00', 
                 link1: 'https://etv96.com/live/26405/1394551/fenerbahce-vs-galatasaray', 
                 link2: 'https://the-streameast.lc/live/26405/1394551/fenerbahce-vs-galatasaray' },
                
                { oyun: ' Barcelona - Atletico Madrid ', saat: '00:00', 
                link1: 'https://myfootball.life/11510822-fenerbahche-galatasaray-pryamaya-translyaciya-turciya-superliga-01122025-smotret-onlayn.html',
                link2: 'https://atomsportv480.top/matches?id=fenerbahce-galatasaray-futboi'},
         
                { oyun: ' Newcastle - Tottenham ', saat: '00:15', 
                link1: 'https://golvar279.sbs/mac/fatih-karagumruk-besiktas-bein-sports-1/', 
                link2: 'https://myfootball.life/11510801-fatih-karagyumryuk-beshiktash-pryamaya-translyaciya-turciya-superliga-30112025-smotret-onlayn.html' },

               /* { oyun: ' Roma - Napoli ', saat: '23:45', 
                  link1: 'https://golvar279.sbs/mac/roma-napoli-s-sport-2/', 
                  link2: 'https://myfootball.life/11510813-roma-napoli-pryamaya-translyaciya-italiya-seriya-a-30112025-smotret-onlayn.html' },
                
                { oyun: ' Girona - Real Madrid ', saat: '00:00', 
                 link1: 'https://idmantv.az/az', 
                 link2: 'https://myfootball.life/11510814-zhirona-real-madrid-pryamaya-translyaciya-ispaniya-primera-divizion-30112025-smotret-onlayn.html' },*/

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
