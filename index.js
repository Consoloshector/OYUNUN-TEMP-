const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Arsenal - West Ham ', saat: '18:00', 
                link1: 'https://rotabettv364.com/mac/arsenal-west-ham-idman-tv/', 
                link2: 'https://myfootball.life/11498889-arsenal-vest-hem-yunayted-pryamaya-translyaciya-angliya-premer-liga-04102025-smotret-onlayn.html' },

                { oyun: ' Man United - Sunderland ', saat: '18:00', 
                  link1: 'https://rotabettv364.com/mac/manchester-utd-sunderland-bein-sports-max-2/', 
                  link2: 'https://myfootball.life/11498888-manchester-yun-sanderlend-pryamaya-translyaciya-angliya-premer-liga-04102025-smotret-onlayn.html' },
                 
                { oyun: ' Frankfurt - Bayern ', saat: '20:30', 
                link1: 'https://rotabettv364.com/mac/eintracht-frankfurt-bayern-munih-tivibu-spor-2/',
                link2: 'https://myfootball.life/11498907-ayntraht-bavariya-pryamaya-translyaciya-germaniya-bundesliga-04102025-smotret-onlayn.html'},

                 { oyun: 'Chelsea - Liverpool', saat: '20:30', 
                 link1: 'https://www.canlitv.vin/idmantv-canli', 
                 link2: 'https://myfootball.life/11498910-chelsi-liverpul-pryamaya-translyaciya-angliya-premer-liga-04102025-smotret-onlayn.html' },

                  { oyun: ' Galatasaray - Beşiktaş (1) ', saat: '21:00', 
                   link1: 'https://gobtv2.com/channel?id=yayinb1', 
                   link2: 'https://myfootball.life/11498913-galatasaray-beshiktash-pryamaya-translyaciya-turciya-superliga-04102025-smotret-onlayn.html' },

                { oyun: ' Galatasaray - Beşiktaş (2) ', saat: '21:00', 
                   link1: 'https://monotv524.com/channel?id=yayinb1', 
                   link2: 'https://golvar625.sbs/mac/galatasaray-besiktas-bein-sports-1/' },

                { oyun: ' Galatasaray - Beşiktaş (3) ', saat: '21:00', 
                   link1: 'https://www.shoot-yalla.me/live/24887/1394497/galatasaray-vs-besiktas', 
                   link2: 'https://rotabettv364.com/mac/galatasaray-besiktas-bein-sports-1/' },
                
                { oyun: ' Real Madrid - Villareal ', saat: '23:00', 
                 link1: 'https://www.canlitv.vin/idmantv-canli', 
                 link2: 'https://myfootball.life/11498923-real-madrid-vilyarreal-pryamaya-translyaciya-ispaniya-primera-divizion-04102025-smotret-onlayn.html' },

              /*  { oyun: 'Fiorentina - Napoli', saat: '22:45', 
                 link1: 'https://rotabettv357.com/mac/fiorentina-napoli-s-sport-2/', 
                 link2: 'https://rotabettv357.com/mac/fiorentina-napoli-tivibu-spor-1/' },

                 { oyun: 'Brentford - Chelsea', saat: '23:00', 
                 link1: 'https://rotabettv357.com/mac/brentford-chelsea-bein-sports-3/', 
                 link2: 'https://live.shoot-yalla.me/live/24357/1379001/brentford-vs-chelsea' }*/
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
