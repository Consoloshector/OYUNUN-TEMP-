   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Galatasaray - USG ', saat: '21:45', 
                   link1: 'https://www.youtube.com/live/tqTD_kmG4yw?si=bNjq4_m1L9TXSoLM', 
                   link2: 'https://myfootball.life/11509837-galatasaray-yunion-sent-zhillua-pryamaya-translyaciya-liga-chempionov-25112025-smotret-onlayn.html' },
         
                { oyun: ' Chelsea - Barcelona ', saat: '00:00', 
                 link1: 'https://www.youtube.com/live/7QPDIRVXW-A?si=lq9XWBP7bmXPa4Hj', 
                 link2: 'https://myfootball.life/11509852-chelsi-barselona-pryamaya-translyaciya-liga-chempionov-25112025-smotret-onlayn.htmltml' },
                
                { oyun: ' Man City - Bayer ', saat: '00:00', 
                link1: 'https://golvar269.sbs/mac/manchester-city-bayer-leverkusen-tabii-spor-1/',
                link2: 'https://myfootball.life/11509850-manchester-siti-bayer-l-pryamaya-translyaciya-liga-chempionov-25112025-smotret-onlayn.html'},
         
                { oyun: ' Napoli - Qarabağ ', saat: '00:00', 
                link1: 'https://rotabettv370.com/mac/galatasaray-genclerbirligi-bein-sports-1/', 
                link2: 'https://myfootball.life/11509846-napoli-karabah-pryamaya-translyaciya-liga-chempionov-25112025-smotret-onlayn.html' },

               /* { oyun: ' Newcastle - Man City ', saat: '21:30', 
                  link1: 'https://idmantv.az/az', 
                  link2: 'https://myfootball.life/11508957-nyukasl-yunayted-manchester-siti-pryamaya-translyaciya-angliya-premer-liga-22112025-smotret-onlayn.html' },
                
                { oyun: ' Napoli - Atalanta ', saat: '23:45', 
                 link1: 'https://rotabettv370.com/mac/napoli-atalanta-s-sport-2/', 
                 link2: 'https://myfootball.life/11508972-napoli-atalanta-pryamaya-translyaciya-italiya-seriya-a-22112025-smotret-onlayn.html' },*/

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
