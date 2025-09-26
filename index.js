const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: 'Alanyaspor - Galatasaray', saat: '21:00', 
                link1: 'https://rotabettv362.com/mac/alanyaspor-galatasaray-bein-sports-1/', 
                link2: 'https://myfootball.life/11497115-alanyaspor-galatasaray-pryamaya-translyaciya-turciya-superliga-26092025-smotret-onlayn.html' },

                { oyun: 'Al İttihad - Al Nassr', saat: '22:00', 
                  link1: 'https://www.shoot-yalla.me/live/24656/1435945/al-ittihad-vs-al-nassr', 
                  link2: 'https://www.footybite.to/AI-Ittihad--vs-AI-Nassr/50517' },
                 
                { oyun: 'Bayern - Werder', saat: '22:30', 
                link1: 'https://rotabettv362.com/mac/bayern-munih-werder-bremen-tivibu-spor-1/',
                link2: 'https://myfootball.life/11497119-bavariya-verder-bremen-pryamaya-translyaciya-germaniya-bundesliga-26092025-smotret-onlayn.html'},

                 /*{ oyun: 'Dinamo Zagreb - Fenerbahçe', saat: '23:00', 
                 link1: 'https://rotabettv360.com/mac/dinamo-zagreb-fenerbahce-trt-1/', 
                 link2: 'https://myfootball.life/11496349-dinamo-zagreb-fenerbahche-pryamaya-translyaciya-liga-evropy-24092025-smotret-onlayn.html' },*/

                 // { oyun: 'Man United - Chelsea', saat: '20:30', 
                 //  link1: 'https://rotabettv359.com/mac/manchester-utd-chelsea-bein-sports-3/', 
                 //  link2: 'https://rotabettv359.com/mac/manchester-utd-chelsea-idman-tv/' },

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
