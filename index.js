   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Man City - Leeds United ', saat: '19:00', 
                   link1: 'https://golvar279.sbs/mac/manchester-city-leeds-united-bein-sports-3/', 
                   link2: 'https://myfootball.life/11510716-manchester-siti-lids-yun-pryamaya-translyaciya-angliya-premer-liga-29112025-smotret-onlayn.html' },
         
                { oyun: ' Barcelona - Deportivo ', saat: '19:15', 
                 link1: 'https://golvar279.sbs/mac/barcelona-alaves-s-sport/', 
                 link2: 'https://myfootball.life/11510718-barselona-alaves-pryamaya-translyaciya-ispaniya-primera-divizion-29112025-smotret-onlayn.html' },
                
                { oyun: ' Monaco - PSG ', saat: '20:00', 
                link1: 'https://golvar279.sbs/mac/monaco-psg-bein-sports-5/',
                link2: 'https://myfootball.life/11510725-as-monako-pszh-pryamaya-translyaciya-franciya-liga-1-29112025-smotret-onlayn.html'},
         
                { oyun: ' Bayer - Dortmund ', saat: '21:30', 
                link1: 'https://rotabettv371.com/mac/olympiakos-real-madrid-tabii-spor-2/', 
                link2: 'https://myfootball.life/11510734-bayer-l-borussiya-d-pryamaya-translyaciya-germaniya-bundesliga-29112025-smotret-onlayn.html' },

               /* { oyun: ' PSG - Tottenham ', saat: '00:00', 
                  link1: 'https://rotabettv371.com/mac/psg-tottenham-tabii-spor-3/', 
                  link2: 'https://myfootball.life/11509893-pszh-tottenhem-pryamaya-translyaciya-liga-chempionov-26112025-smotret-onlayn.html' },*/
                
               /* { oyun: ' Napoli - Atalanta ', saat: '23:45', 
                 link1: 'https://rotabettv370.com/mac/napoli-atalanta-s-sport-2/', 
                 link2: 'https://myfootball.life/11508972-napoli-atalanta-pryamaya-translyaciya-italiya-seriya-a-22112025-smotret-onlayn.html' },*/

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
