const main = document.getElementsByClassName('main')[0];

        let oyunlar = [
            { oyun: 'Ermənistan - Portuqaliya', saat: '20:00', 
                link1: 'https://live.shoot-yalla.me/live/24265/1366286/armenia-vs-portugal', 
                link2: 'https://toddaymatch.blogspot.com/2025/08/hd-5.html' },

            { oyun: 'İngiltərə - Andorra', saat: '20:00', 
                link1: 'https://www.canlitv.vin/cbcsport-canli-yayin', 
                link2: 'https://rotabettv356.com/mac/ingiltere-andorra-cbc-sport/' },

            { oyun: 'Nigeriya - Ruanda', saat: '20:00', 
                link1: 'https://toddaymatch.blogspot.com/2025/08/hd-9.html', 
                link2: 'https://toddaymatch.blogspot.com/2025/08/hd-9.html' }
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
