   const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
                { oyun: ' Fenerbahçe - Galatasaray ', saat: '19:45', 
                link1: 'https://atv.az/live',
                link2: 'https://myfootball.pw/11519348-galatasaray-fenerbahche-pryamaya-translyaciya-turciya-superkubok-10012026-smotret-onlayn.html'},
                
                { oyun: ' Əlcəzair - Nigeriya ', saat: '20:00', 
                   link1: 'https://xyzshoot4k-com.goal01.space/?m=27430&lang=en', 
                   link2: 'https://myfootball.pw/11519340-alzhir-nigeriya-pryamaya-translyaciya-kubok-afrikanskih-naciy-10012026-smotret-onlayn.html' },

                { oyun: ' Misir - Kot-d’İvuar', saat: '23:00', 
                   link1: 'https://shoot4k.com/yallashoottv-live/egypt-vs-ivory-coast-africa-cup-of-nations/27431', 
                   link2: 'https://myfootball.pw/11519355-egipet-kot-divuar-pryamaya-translyaciya-kubok-afrikanskih-naciy-10012026-smotret-onlayn.html' },
         
               /* { oyun: ' Fulham - Chelsea ', saat: '23:30', 
                 link1: 'https://idmantv.az/az', 
                 link2: 'https://ovogoaal.com/match-updates/fulham-vs-chelsea/' },
           
                { oyun: ' Parma - Inter ', saat: '23:45', 
                link1: 'https://ovogoaal.com/match-updates/parma-vs-inter/',
                link2: 'https://rotabettv379.com/mac/parma-inter-tivibu-spor-1/'},
         
                { oyun: ' Burnley - Man United ', saat: '00:15', 
                link1: 'https://aztv.az/az/live', 
                link2: 'https://ovogoaal.com/match-updates/burnley-vs-manchester-united/' },*/

                 /*{ oyun: ' Real Madrid - Sevilla ', saat: '00:00', 
                  link1: 'https://idmantv.az/az', 
                  link2: 'https://ovogoaal.com/match-updates/real-madrid-vs-sevilla/' },
                
                { oyun: ' Everton - Arsenal ', saat: '00:00', 
                 link1: 'https://aztv.az/az/live', 
                 link2: 'https://ovogoaal.com/match-updates/everton-vs-arsenal/' },*/

                /*{ oyun: ' PSG - Rennes ', saat: '00:05', 
                 link1: 'https://rotabettv372.com/mac/psg-rennes-bein-sports-4/', 
                 link2: 'https://myfootball.life/11512289-pszh-renn-pryamaya-translyaciya-franciya-liga-1-06122025-smotret-onlayn.html' },

                 { oyun: ' Liverpool - Aston Villa ', saat: '00:05', 
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
