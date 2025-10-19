const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Tottenham - Aston Villa ', saat: '17:00', 
                link1: 'https://rotabettv364.com/mac/tottenham-aston-villa-bein-sports-3/', 
                link2: 'https://myfootball.life/11501523-tottenhem-aston-villa-pryamaya-translyaciya-angliya-premer-liga-19102025-smotret-onlayn.html' },

                { oyun: ' Liverpool - Man United ', saat: '19:30', 
                  link1: 'https://www.canlitv.vin/idmantv-canli', 
                  link2: 'https://myfootball.life/11501542-liverpul-manchester-yun-pryamaya-translyaciya-angliya-premer-liga-19102025-smotret-onlayn.html' },
                
                 { oyun: ' Fenerbahçe - Karagümrük ', saat: '21:00', 
                 link1: 'https://rotabettv364.com/mac/fenerbahce-fatih-karagumruk-bein-sports-1/', 
                 link2: 'https://myfootball.life/11501547-fenerbahche-fatih-karagyumryuk-pryamaya-translyaciya-turciya-superliga-19102025-smotret-onlayn.html' },
                
                { oyun: ' Milan - Fiorentina ', saat: '22:45', 
                link1: 'https://rotabettv364.com/mac/milan-fiorentina-tivibu-spor-1/',
                link2: 'https://myfootball.life/11501551-milan-fiorentina-pryamaya-translyaciya-italiya-seriya-a-19102025-smotret-onlayn.html'},

                  { oyun: ' Getafe - Real Madrid ', saat: '23:00', 
                   link1: 'https://www.canlitv.vin/idmantv-canli', 
                   link2: 'https://myfootball.life/11501553-hetafe-real-madrid-pryamaya-translyaciya-ispaniya-primera-divizion-19102025-smotret-onlayn.html' },
                
                // { oyun: ' Real Madrid - Villareal ', saat: '23:00', 
                //  link1: 'https://www.canlitv.vin/idmantv-canli', 
                //  link2: 'https://myfootball.life/11498923-real-madrid-vilyarreal-pryamaya-translyaciya-ispaniya-primera-divizion-04102025-smotret-onlayn.html' },

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
