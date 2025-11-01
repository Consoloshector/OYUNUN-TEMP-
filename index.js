const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Burnley - Arsenal ', saat: '19:00', 
                link1: 'https://rotabettv367.com/mac/burnley-arsenal-bein-sports-3/', 
                link2: 'https://myfootball.life/11504875-bernli-arsenal-pryamaya-translyaciya-angliya-premer-liga-01112025-smotret-onlayn.html' },

                { oyun: ' Nottingham - Man United ', saat: '19:00', 
                  link1: 'https://rotabettv367.com/mac/nottingham-forest-manchester-utd-bein-sports-max-2/', 
                  link2: 'https://myfootball.life/11504872-nottingem-forest-manchester-yun-pryamaya-translyaciya-angliya-premer-liga-01112025-smotret-onlayn.html' },
                
                 { oyun: ' Napoli - Como ', saat: '21:00', 
                 link1: 'https://rotabettv367.com/mac/napoli-como-s-sport-2/', 
                 link2: 'https://myfootball.life/11504887-napoli-komo-pryamaya-translyaciya-italiya-seriya-a-01112025-smotret-onlayn.html' },
                
                { oyun: ' Trabzonspor - Galatasaray ', saat: '21:00', 
                link1: 'https://rotabettv367.com/mac/galatasaray-trabzonspor-bein-sports-1/',
                link2: 'https://myfootball.life/11504888-galatasaray-trabzonspor-pryamaya-translyaciya-turciya-superliga-01112025-smotret-onlayn.html'},

                 { oyun: ' Bayern - Bayer ', saat: '21:30', 
                   link1: 'https://rotabettv367.com/mac/bayern-munih-bayer-leverkusen-tivibu-spor-2/', 
                   link2: 'https://myfootball.life/11504892-bavariya-bayer-l-pryamaya-translyaciya-germaniya-bundesliga-01112025-smotret-onlayn.html' },
                
                { oyun: ' Tottenham - Chelsea ', saat: '21:30', 
                 link1: 'https://rotabettv367.com/mac/tottenham-chelsea-bein-sports-3/', 
                 link2: 'https://myfootball.life/11504894-tottenhem-chelsi-pryamaya-translyaciya-angliya-premer-liga-01112025-smotret-onlayn.html' },

                { oyun: ' Real Madrid - Valencia ', saat: '00:00', 
                 link1: 'https://rotabettv367.com/mac/real-madrid-valencia-s-sport/', 
                 link2: 'https://myfootball.life/11504907-real-madrid-valensiya-pryamaya-translyaciya-ispaniya-primera-divizion-01112025-smotret-onlayn.html' },

                 { oyun: ' Liverpool - Aston Villa ', saat: '00:00', 
                 link1: 'https://rotabettv367.com/mac/liverpool-aston-villa-idman-tv/', 
                 link2: 'https://myfootball.life/11504908-liverpul-aston-villa-pryamaya-translyaciya-angliya-premer-liga-01112025-smotret-onlayn.html' }
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
