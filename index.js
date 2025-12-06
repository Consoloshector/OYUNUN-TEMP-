   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Tottenham - Brentford ', saat: '19:00', 
                   link1: 'https://monotv527.com/channel?id=yayinbm2', 
                   link2: 'https://myfootball.life/11512253-tottenhem-brentford-pryamaya-translyaciya-angliya-premer-liga-06122025-smotret-onlayn.html' },
         
                { oyun: ' Bournemouth - Chelsea ', saat: '19:00', 
                 link1: 'https://idmantv.az/az', 
                 link2: 'https://myfootball.life/11512260-bornmut-chelsi-pryamaya-translyaciya-angliya-premer-liga-06122025-smotret-onlayn.html' },
                
                { oyun: ' Man City - Sunderland ', saat: '19:00', 
                link1: 'https://rotabettv372.com/mac/manchester-city-sunderland-bein-sports-3/',
                link2: 'https://myfootball.life/11512256-manchester-siti-sanderlend-pryamaya-translyaciya-angliya-premer-liga-06122025-smotret-onlayn.html'},
         
                { oyun: ' Başakşehir - Fenerbahçe ', saat: '21:00', 
                link1: 'https://rotabettv372.com/mac/rams-basaksehir-fenerbahce-bein-sports-1/', 
                link2: 'https://myfootball.life/11512271-bashakshehir-fenerbahche-pryamaya-translyaciya-turciya-superliga-06122025-smotret-onlayn.html' },

                 { oyun: ' Real Betis - Barcelona ', saat: '21:30', 
                  link1: 'https://idmantv.az/az', 
                  link2: 'https://myfootball.life/11512275-real-betis-barselona-pryamaya-translyaciya-ispaniya-primera-divizion-06122025-smotret-onlayn.html' },
                
                { oyun: ' Leeds United - Liverpool ', saat: '21:30', 
                 link1: 'https://rotabettv372.com/mac/leeds-united-liverpool-bein-sports-3/', 
                 link2: 'https://myfootball.life/11512276-lids-yun-liverpul-pryamaya-translyaciya-angliya-premer-liga-06122025-smotret-onlayn.html' },

                { oyun: ' PSG - Rennes ', saat: '00:05', 
                 link1: 'https://rotabettv372.com/mac/psg-rennes-bein-sports-4/', 
                 link2: 'https://myfootball.life/11512289-pszh-renn-pryamaya-translyaciya-franciya-liga-1-06122025-smotret-onlayn.html' },

                 /*{ oyun: ' Liverpool - Aston Villa ', saat: '00:05', 
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
