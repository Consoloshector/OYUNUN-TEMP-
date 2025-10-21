const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Barcelona - Olympiacos ', saat: '20:45', 
                link1: 'https://www.canlitv.me/live/cbcsport-hd', 
                link2: 'https://myfootball.life/11502398-barselona-olimpiakos-pryamaya-translyaciya-liga-chempionov-21102025-smotret-onlayn.html' },

                { oyun: ' Kariat - Pafos ', saat: '20:45', 
                  link1: 'https://rotabettv364.com/mac/kairat-almaty-pafos-tabii-spor-1/', 
                  link2: 'https://myfootball.life/11502399-kayrat-pafos-pryamaya-translyaciya-liga-chempionov-21102025-smotret-onlayn.html' },
                
                 { oyun: ' Arsenal - Atletico Madrid ', saat: '23:00', 
                 link1: 'https://www.canlitv.me/live/cbcsport-hd', 
                 link2: 'https://myfootball.life/11502412-arsenal-atletiko-madrid-pryamaya-translyaciya-liga-chempionov-21102025-smotret-onlayn.html' },
                
                { oyun: ' Bayer - PSG ', saat: '23:00', 
                link1: 'https://rotabettv364.com/mac/bayer-leverkusen-psg-tabii-spor-1/',
                link2: 'https://myfootball.life/11502414-bayer-l-pszh-pryamaya-translyaciya-liga-chempionov-21102025-smotret-onlayn.html'},

                  { oyun: ' USG - Inter ', saat: '23:00', 
                   link1: 'https://rotabettv364.com/mac/st-gilloise-inter-tabii-spor-3/', 
                   link2: 'https://myfootball.life/11502409-yunion-sent-zhillua-inter-pryamaya-translyaciya-liga-chempionov-21102025-smotret-onlayn.html' },
                
                { oyun: ' Villareal - Man City ', saat: '23:00', 
                 link1: 'https://rotabettv364.com/mac/villarreal-manchester-city-tabii-spor-2/', 
                 link2: 'https://myfootball.life/11502413-vilyarreal-manchester-siti-pryamaya-translyaciya-liga-chempionov-21102025-smotret-onlayn.html' },

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
