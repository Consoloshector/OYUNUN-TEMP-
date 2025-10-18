const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Man City - Everton ', saat: '18:00', 
                link1: 'https://rotabettv364.com/mac/manchester-city-everton-bein-sports-3/', 
                link2: 'https://myfootball.life/11501451-manchester-siti-everton-pryamaya-translyaciya-angliya-premer-liga-18102025-smotret-onlayn.html' },

                { oyun: ' Barcelona - Girona ', saat: '18:15', 
                  link1: 'https://www.canlitv.vin/idmantv-canli', 
                  link2: 'https://myfootball.life/11501455-barselona-zhirona-pryamaya-translyaciya-ispaniya-primera-divizion-18102025-smotret-onlayn.html' },
                 
                { oyun: ' Bayern - Dortmund ', saat: '20:30', 
                link1: 'https://rotabettv364.com/mac/bayern-munih-b-dortmund-tivibu-spor-1/',
                link2: 'https://myfootball.life/11501468-bavariya-borussiya-d-pryamaya-translyaciya-germaniya-bundesliga-18102025-smotret-onlayn.html'},

                 { oyun: ' Başakşehir - Galatasaray ', saat: '21:00', 
                 link1: 'https://rotabettv364.com/mac/rams-basaksehir-galatasaray-bein-sports-1/', 
                 link2: 'https://myfootball.life/11501475-bashakshehir-galatasaray-pryamaya-translyaciya-turciya-superliga-18102025-smotret-onlayn.html' },

                  { oyun: ' Al Nassr - Al Fateh ', saat: '22:00', 
                   link1: 'https://www.shoot-yalla.to/live/25171/1435954/al-nassr-vs-al-fateh', 
                   link2: 'https://myfootball.life/11500817-latviya-angliya-pryamaya-translyaciya-otborochnyy-turnir-chm-evropa-14102025-smotret-onlayn.html' },

                { oyun: ' Roma - Inter ', saat: '22:45', 
                   link1: 'https://rotabettv364.com/mac/roma-inter-tivibu-spor-1/', 
                   link2: 'https://myfootball.life/11501481-roma-inter-pryamaya-translyaciya-italiya-seriya-a-18102025-smotret-onlayn.html' },
                
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
