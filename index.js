   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Pisa - Inter ', saat: '18:00', 
                   link1: 'https://golvar279.sbs/mac/pisa-inter-s-sport-2/', 
                   link2: 'https://myfootball.life/11510778-piza-inter-pryamaya-translyaciya-italiya-seriya-a-30112025-smotret-onlayn.html' },
         
                { oyun: ' West Ham - Liverpool ', saat: '18:05', 
                 link1: 'https://golvar279.sbs/mac/west-ham-liverpool-bein-sports-3/', 
                 link2: 'https://myfootball.life/11510780-vest-hem-yunayted-liverpul-pryamaya-translyaciya-angliya-premer-liga-30112025-smotret-onlayn.html' },
                
                { oyun: ' Chelsea - Arsenal ', saat: '20:30', 
                link1: 'https://idmantv.az/az',
                link2: 'https://myfootball.life/11510799-chelsi-arsenal-pryamaya-translyaciya-angliya-premer-liga-30112025-smotret-onlayn.html'},
         
                { oyun: ' Karagümrük - Beşiktaş ', saat: '21:00', 
                link1: 'https://golvar279.sbs/mac/fatih-karagumruk-besiktas-bein-sports-1/', 
                link2: 'https://myfootball.life/11510801-fatih-karagyumryuk-beshiktash-pryamaya-translyaciya-turciya-superliga-30112025-smotret-onlayn.html' },

                { oyun: ' Roma - Napoli ', saat: '23:45', 
                  link1: 'https://golvar279.sbs/mac/roma-napoli-s-sport-2/', 
                  link2: 'https://myfootball.life/11510813-roma-napoli-pryamaya-translyaciya-italiya-seriya-a-30112025-smotret-onlayn.html' },
                
                { oyun: ' Girona - Real Madrid ', saat: '00:00', 
                 link1: 'https://idmantv.az/az', 
                 link2: 'https://myfootball.life/11510814-zhirona-real-madrid-pryamaya-translyaciya-ispaniya-primera-divizion-30112025-smotret-onlayn.html' },

               /* { oyun: ' Real Madrid - Valencia ', saat: '00:00', 
                 link1: 'https://rotabettv367.com/mac/real-madrid-valencia-s-sport/', 
                 link2: 'https://myfootball.life/11504907-real-madrid-valensiya-pryamaya-translyaciya-ispaniya-primera-divizion-01112025-smotret-onlayn.html' },

                 { oyun: ' Liverpool - Aston Villa ', saat: '00:00', 
                 link1: 'https://rotabettv367.com/mac/liverpool-aston-villa-idman-tv/', 
                 link2: 'https://myfootball.life/11504908-liverpul-aston-villa-pryamaya-translyaciya-angliya-premer-liga-01112025-smotret-onlayn.html' }*/
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
