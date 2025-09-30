const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: 'Kariat - Real Madrid', saat: '20:45', 
                link1: 'https://rotabettv362.com/mac/besiktas-kocaelispor-bein-sports-1/', 
                link2: 'https://myfootball.life/11497292-beshiktash-kodzhaelispor-pryamaya-translyaciya-turciya-superliga-29092025-smotret-onlayn.html' },

                { oyun: 'Bodo Glimt - Tottenham', saat: '23:00', 
                  link1: 'https://www.canlitv.vin/idmantv-canli', 
                  link2: 'https://myfootball.life/11497267-barselona-real-sosedad-pryamaya-translyaciya-ispaniya-primera-divizion-28092025-smotret-onlayn.html' },
                 
                { oyun: 'Chelsea - Benifica', saat: '23:00', 
                link1: 'https://rotabettv362.com/mac/fenerbahce-antalyaspor-bein-sports-1/',
                link2: 'https://myfootball.life/11497270-fenerbahche-antalyaspor-pryamaya-translyaciya-turciya-superliga-28092025-smotret-onlayn.html'},

                 { oyun: 'Galatasaray - Liverpool', saat: '23:00', 
                 link1: 'https://rotabettv362.com/mac/milan-napoli-tivibu-spor-1/', 
                 link2: 'https://myfootball.life/11497276-milan-napoli-pryamaya-translyaciya-italiya-seriya-a-28092025-smotret-onlayn.html' },*/

                  { oyun: 'Pafos - Bayern', saat: '23:00', 
                   link1: 'https://rotabettv362.com/mac/tottenham-wolverhampton-bein-sports-3/', 
                   link2: 'https://myfootball.life/11497217-tottenhem-vulverhempton-pryamaya-translyaciya-angliya-premer-liga-27092025-smotret-onlayn.html' },

                { oyun: 'Inter - Slavia Prague', saat: '23:00', 
                 link1: 'https://rotabettv357.com/mac/besiktas-rams-basaksehir-bein-sports-1/', 
                 link2: 'https://live.shoot-yalla.me/live/24390/1394469/besiktas-vs-istanbul-basaksehir' },

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
