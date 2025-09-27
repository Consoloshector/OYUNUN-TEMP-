const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: 'Chelsea - Brighton', saat: '18:00', 
                link1: 'https://rotabettv362.com/mac/chelsea-brighton-bein-sports-max-2/', 
                link2: 'https://myfootball.life/11497188-chelsi-brayton-pryamaya-translyaciya-angliya-premer-liga-27092025-smotret-onlayn.html' },

                { oyun: 'Man City - Burnley', saat: '18:00', 
                  link1: 'https://rotabettv362.com/mac/manchester-city-burnley-bein-sports-4/', 
                  link2: 'https://myfootball.life/11497185-manchester-siti-bernli-pryamaya-translyaciya-angliya-premer-liga-27092025-smotret-onlayn.html' },
                 
                { oyun: 'Atletico Madrid - Real Madrid', saat: '18:15', 
                link1: 'https://www.canlitv.vin/idmantv-canli',
                link2: 'https://myfootball.life/11497189-atletiko-madrid-real-madrid-pryamaya-translyaciya-ispaniya-primera-divizion-27092025-smotret-onlayn.html'},

                 { oyun: 'Juventus - Atalanta', saat: '20:00', 
                 link1: 'https://rotabettv362.com/mac/juventus-atalanta-tivibu-spor-1/', 
                 link2: 'https://myfootball.life/11497201-yuventus-atalanta-pryamaya-translyaciya-italiya-seriya-a-27092025-smotret-onlayn.html' },

                 { oyun: 'Tottenham - Wolwes', saat: '23:00', 
                  link1: 'https://rotabettv362.com/mac/tottenham-wolverhampton-bein-sports-3/', 
                  link2: 'https://myfootball.life/11497217-tottenhem-vulverhempton-pryamaya-translyaciya-angliya-premer-liga-27092025-smotret-onlayn.html' },

                /*{ oyun: 'Beşiktaş - Başakşehir', saat: '21:00', 
                 link1: 'https://rotabettv357.com/mac/besiktas-rams-basaksehir-bein-sports-1/', 
                 link2: 'https://live.shoot-yalla.me/live/24390/1394469/besiktas-vs-istanbul-basaksehir' },

                { oyun: 'Fiorentina - Napoli', saat: '22:45', 
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
