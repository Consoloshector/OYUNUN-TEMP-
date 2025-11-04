const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: '  Napoli - Frankfurt ', saat: '21:45', 
                link1: 'https://www.youtube.com/live/gnWDSseIng8?si=NoJamt75lsiUJ7Zl', 
                link2: 'https://myfootball.life/11505532-napoli-ayntraht-pryamaya-translyaciya-liga-chempionov-04112025-smotret-onlayn.html' },

                { oyun: ' Slavia - Arsenal ', saat: '21:45', 
                  link1: 'https://golvar355.sbs/mac/slavia-prag-arsenal-tabii-spor/', 
                  link2: 'https://myfootball.life/11505533-slaviya-praga-arsenal-pryamaya-translyaciya-liga-chempionov-04112025-smotret-onlayn.html' },
                
                 { oyun: ' Juventus - Sporting ', saat: '00:00', 
                 link1: 'https://noingoaithatgiare.com/index.html', 
                 link2: 'https://myfootball.life/11505545-yuventus-sporting-pryamaya-translyaciya-liga-chempionov-04112025-smotret-onlayn.html' },
                
                { oyun: ' Liverpool - Real Madrid ', saat: '00:00', 
                link1: 'https://noingoaithatgiare.com/index.html',
                link2: 'https://myfootball.life/11505546-liverpul-real-madrid-pryamaya-translyaciya-liga-chempionov-04112025-smotret-onlayn.html'},

                 { oyun: ' PSG - Bayern  ', saat: '00:00', 
                   link1: 'ttps://noingoaithatgiare.com/index.html', 
                   link2: 'https://myfootball.life/11505547-pszh-bavariya-pryamaya-translyaciya-liga-chempionov-04112025-smotret-onlayn.html' },
                
                { oyun: ' Tottenham - Copenhagen  ', saat: '00:00', 
                 link1: 'ttps://noingoaithatgiare.com/index.html', 
                 link2: 'https://myfootball.life/11505543-tottenhem-kopengagen-pryamaya-translyaciya-liga-chempionov-04112025-smotret-onlayn.html' },

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
