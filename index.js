const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Arsenal - Crystal Palace ', saat: '18:00', 
                link1: 'https://rotabettv367.com/mac/arsenal-crystal-palace-bein-sports-3/', 
                link2: 'https://myfootball.life/11503237-arsenal-kristal-pelas-pryamaya-translyaciya-angliya-premer-liga-26102025-smotret-onlayn.html' },

                { oyun: ' Aston Villa - Man City ', saat: '18:00', 
                  link1: 'https://rotabettv367.com/mac/aston-villa-manchester-city-bein-sports-4/', 
                  link2: 'https://myfootball.life/11503236-aston-villa-manchester-siti-pryamaya-translyaciya-angliya-premer-liga-26102025-smotret-onlayn.html' },
                
                 { oyun: ' Real Madrid - Barcelona [AZ] ', saat: '19:15', 
                 link1: 'https://www.canlitv.vin/idmantv-canli', 
                 link2: 'https://rotabettv367.com/mac/real-madrid-barcelona-idman-tv/' },
                
                { oyun: ' Real Madrid - Barcelona [TR] ', saat: '19:15', 
                link1: 'https://rotabettv367.com/mac/real-madrid-barcelona-s-sport/',
                link2: 'https://noingoaithatgiare.com/index.html'},

                 { oyun: ' Real Madrid - Barcelona [RU] ', saat: '19:15', 
                   link1: 'https://myfootball.life/11503246-real-madrid-barselona-pryamaya-translyaciya-ispaniya-primera-divizion-26102025-smotret-onlayn.html', 
                   link2: 'https://myfootball.life/11503246-real-madrid-barselona-pryamaya-translyaciya-ispaniya-primera-divizion-26102025-smotret-onlayn.html' },
                
                { oyun: ' Real Madrid - Barcelona ', saat: '19:15', 
                 link1: 'https://www.shoot-yalla.to/live/25355/1390916/real-madrid-vs-barcelona', 
                 link2: 'https://ovogoaal.com/match-updates/real-madrid-vs-barcelona/' },

                { oyun: ' Everton - Tottenham ', saat: '20:30', 
                 link1: 'https://rotabettv367.com/mac/everton-tottenham-bein-sports-3/', 
                 link2: 'https://myfootball.life/11503259-everton-tottenhem-pryamaya-translyaciya-angliya-premer-liga-26102025-smotret-onlayn.html' },

                 { oyun: ' Lazio - Juventus ', saat: '23:45', 
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
