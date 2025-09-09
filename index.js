const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: 'Azərbaycan - Ukraniya', saat: '20:00', 
                link1: 'https://www.canlitv.vin/cbcsport-canli-yayin', 
                link2: 'https://tv.mobiltv.net/cbc-sport-canli' },

                { oyun: 'Fransa - İslandiya', saat: '22:45', 
                link1: 'https://www.canlitv.vin/cbcsport-canli-yayin', 
                link2: 'https://tv.mobiltv.net/cbc-sport-canli' },

                 { oyun: 'Macarıstan - Portuqaliya', saat: '22:45', 
                 link1: 'https://live.shoot-yalla.me/live/24318/1366294/hungary-vs-portugal', 
                 link2: 'https://ovogoaal.com/soccerstreams/hungary-vs-portugal/' },

                 { oyun: 'Serbiya - İngiltərə', saat: '22:45', 
                 link1: 'https://live.shoot-yalla.me/live/24319/1323310/serbia-vs-england', 
                 link2: 'https://live.shoot-yalla.me/live/24319/1323310/serbia-vs-england' }',

                 { oyun: 'Ekvador - Argentina', saat: '03:00', 
                 link1: 'https://live.shoot-yalla.me/live/24325/1100320/ecuador-vs-argentina', 
                 link2: 'https://live.shoot-yalla.me/live/24325/1100320/ecuador-vs-argentina' },

                { oyun: 'Boliviya - Braziliya', saat: '03:30', 
                 link1: 'https://live.shoot-yalla.me/live/24326/1100318/bolivia-vs-brazil', 
                 link2: 'https://live.shoot-yalla.me/live/24326/1100318/bolivia-vs-brazil' }
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
