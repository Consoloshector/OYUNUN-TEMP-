const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' İspaniya - Bolqarıstan ', saat: '22:45', 
                link1: 'https://www.shoot-yalla.to/live/25092/1366308/spain-vs-bulgaria', 
                link2: 'https://myfootball.life/11500821-ispaniya-bolgariya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-14102025-smotret-onlayn.html' },

                { oyun: ' Türkiyə - Gürcüstan ', saat: '22:45', 
                  link1: 'https://rotabettv364.com/mac/turkiye-gurcistan-tv8/', 
                  link2: 'https://myfootball.life/11500823-turciya-gruziya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-14102025-smotret-onlayn.html' },
                 
                { oyun: ' Portuqaliya - Macarıstan ', saat: '22:45', 
                link1: 'https://www.shoot-yalla.to/live/25091/1366309/portugal-vs-hungary',
                link2: 'https://myfootball.life/11500820-portugaliya-vengriya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-14102025-smotret-onlayn.html'},

                 { oyun: ' İtaliya - İsrail ', saat: '22:45', 
                 link1: 'https://www.shoot-yalla.to/live/25093/1366310/italy-vs-israel', 
                 link2: 'https://myfootball.life/11500819-italiya-izrail-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-14102025-smotret-onlayn.html' },

                  { oyun: ' Latviya - İngiltərə ', saat: '22:45', 
                   link1: 'https://www.shoot-yalla.to/live/25094/1323342/latvia-vs-england', 
                   link2: 'https://myfootball.life/11500817-latviya-angliya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-14102025-smotret-onlayn.html' },

                // { oyun: ' Galatasaray - Beşiktaş (2) ', saat: '21:00', 
                //    link1: 'https://monotv524.com/channel?id=yayinb1', 
                //    link2: 'https://golvar625.sbs/mac/galatasaray-besiktas-bein-sports-1/' },

                // { oyun: ' Galatasaray - Beşiktaş (3) ', saat: '21:00', 
                //    link1: 'https://www.shoot-yalla.me/live/24887/1394497/galatasaray-vs-besiktas', 
                //    link2: 'https://rotabettv364.com/mac/galatasaray-besiktas-bein-sports-1/' },
                
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
