   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Galatasaray - Samsunspor ', saat: '21:00', 
                   link1: 'https://golvar397.sbs/mac/galatasaray-samsunspor-bein-sports-1/', 
                   link2: 'https://myfootball.life/11512208-galatasaray-samsunspor-pryamaya-translyaciya-turciya-superliga-05122025-smotret-onlayn.html' },
         
                { oyun: ' Dünya Çempionatı Püşkatma ', saat: '21:00', 
                 link1: 'https://www.canlitv.me/live/ictimaitv-canli-hd', 
                 link2: 'https://myfootball.life/11512476-zherebevka-chempionata-mira-pryamaya-translyaciya-futbol-chempionat-mira.html' },
                
                /*{ oyun: ' Union Berlin - Bayern ', saat: '23:45', 
                link1: 'https://www.viprow.nu/dfb-pokal/1-fc-union-berlin-vs-bayern-munich-online-stream-1',
                link2: 'https://myfootball.life/11511566-union-berlin-bavariya-pryamaya-translyaciya-germaniya-kubok-dfb-03122025-smotret-onlayn.html'},
         
                { oyun: ' Liverpool - Sunderland ', saat: '00:15', 
                link1: 'https://aztv.az/az/live', 
                link2: 'https://myfootball.life/11511576-liverpul-sanderlend-pryamaya-translyaciya-angliya-premer-liga-03122025-smotret-onlayn.html' },

                 { oyun: ' Leeds - Chelsea ', saat: '00:15', 
                  link1: 'https://golvar397.sbs/mac/leeds-united-chelsea-bein-sports-2/', 
                  link2: 'https://myfootball.life/11511577-lids-yun-chelsi-pryamaya-translyaciya-angliya-premer-liga-03122025-smotret-onlayn.html' },*/
                
                /*{ oyun: ' Girona - Real Madrid ', saat: '00:00', 
                 link1: 'https://idmantv.az/az', 
                 link2: 'https://myfootball.life/11510814-zhirona-real-madrid-pryamaya-translyaciya-ispaniya-primera-divizion-30112025-smotret-onlayn.html' },*/

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
