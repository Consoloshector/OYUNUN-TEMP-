const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Brest - PSG ', saat: '19:00', 
                link1: 'https://rotabettv367.com/mac/brest-psg-bein-sports-4/', 
                link2: 'https://myfootball.life/11503170-brest-pszh-pryamaya-translyaciya-franciya-liga-1-25102025-smotret-onlayn.html' },

                { oyun: ' Napoli - Inter ', saat: '20:00', 
                  link1: 'https://rotabettv367.com/mac/napoli-inter-s-sport-2/', 
                  link2: 'https://myfootball.life/11503175-napoli-inter-pryamaya-translyaciya-italiya-seriya-a-25102025-smotret-onlayn.html' },
                
                 { oyun: ' Man United - Brighton ', saat: '20:30', 
                 link1: 'https://www.canlitv.vin/idmantv-canli', 
                 link2: 'https://myfootball.life/11503179-manchester-yun-brayton-pryamaya-translyaciya-angliya-premer-liga-25102025-smotret-onlayn.html' },
                
                { oyun: ' Brentford - Liverpool ', saat: '23:00', 
                link1: 'https://www.canlitv.vin/idmantv-canli',
                link2: 'https://myfootball.life/11503194-brentford-liverpul-pryamaya-translyaciya-angliya-premer-liga-25102025-smotret-onlayn.htmlT'},

               /*  { oyun: ' Chelsea - Ajax ', saat: '23:00', 
                   link1: 'https://ovogoaal.com/match-updates/chelsea-vs-ajax/', 
                   link2: 'https://myfootball.life/11502440-chelsi-ayaks-pryamaya-translyaciya-liga-chempionov-22102025-smotret-onlayn.html' },
                
                { oyun: ' Frankfurt - Liverpool ', saat: '23:00', 
                 link1: 'https://ovogoaal.com/match-updates/frankfurt-vs-liverpool/', 
                 link2: 'https://myfootball.life/11502438-ayntraht-liverpul-pryamaya-translyaciya-liga-chempionov-22102025-smotret-onlayn.html' },

                { oyun: ' Real Madrid - Juventus ', saat: '23:00', 
                 link1: 'https://ovogoaal.com/match-updates/real-madrid-vs-juventus/', 
                 link2: 'https://myfootball.life/11502439-real-madrid-yuventus-pryamaya-translyaciya-liga-chempionov-22102025-smotret-onlayn.html' },

                 { oyun: ' Monaco - Tottenham ', saat: '23:00', 
                 link1: 'https://gobtv2.com/channel?id=yayinex4', 
                 link2: 'https://myfootball.life/11502435-as-monako-tottenhem-pryamaya-translyaciya-liga-chempionov-22102025-smotret-onlayn.html' }*/
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
