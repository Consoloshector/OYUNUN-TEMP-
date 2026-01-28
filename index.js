const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Liverpool - Qarabağ ',
    saat: '00:00',
    links: [
      'https://live.itv.az/',
      'https://www.canlitv.vin/ictimai-tv-canli',
    ]
  },
  {
    oyun: ' Frankfurt - Tottenham ',
    saat: '00:00',
    links: [
      'https://bahisnowtv615.com/Watch/M908052',
      'https://www.footybite.to/Eintracht-Frankfurt-vs-Tottenham-Hotspur/57347',
      'https://myfootball.pw/11523964-ayntraht-tottenhem-pryamaya-translyaciya-liga-chempionov-28012026-smotret-onlayn.html',
    ]
  },
   {
    oyun: ' Man City - Galatasaray ',
    saat: '00:00',
    links: [
      'https://cbcsport.az/live/',
      'https://www.canlitv.vin/cbcsport-canli-yayin'
    ]
  },
  {
    oyun: ' Benifica - Real Madrid ',
    saat: '00:00',
    links: [
      'https://bahisnowtv615.com/Watch/M126528',
      'https://macizlevip666.sbs/mac-izle/benfica-real-madrid-tabii-spor/',
      'https://myfootball.pw/11523956-benfika-real-madrid-pryamaya-translyaciya-liga-chempionov-28012026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Arsenal - Kairat ',
    saat: '00:00',
    links: [
      'https://ovogoal.plus/match-updates/arsenal-vs-kairat/',
      'https://myfootball.pw/11523967-arsenal-kayrat-pryamaya-translyaciya-liga-chempionov-28012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Dortmund - İnter ',
    saat: '00:00',
    links: [
      'https://macizlevip666.sbs/mac-izle/b-dortmund-inter-tabii-spor-2/',
      'https://rotabettv381.com/mac/b-dortmund-inter-tabii-spor-2/'
    ]
  },
  {
    oyun: ' Napoli - Chelsea ',
    saat: '00:00',
    links: [
      'https://ovogoal.plus/match-updates/napoli-vs-chelsea/',
      'https://myfootball.pw/11523957-napoli-chelsi-pryamaya-translyaciya-liga-chempionov-28012026-smotret-onlayn.html',
    ]
  },
    {
    oyun: ' PSG - Newcastle ',
    saat: '00:00',
    links: [
      'https://golvar717.sbs/mac/psg-newcastle-tabii-spor-5/',
      'https://myfootball.pw/11523952-pszh-nyukasl-yunayted-pryamaya-translyaciya-liga-chempionov-28012026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Barcelona - Copenhagen ',
    saat: '00:00',
    links: [
      'https://bahisnowtv615.com/Watch/M312596',
      'https://ovogoal.plus/match-updates/barcelona-vs-kobenhavn/',
      'https://myfootball.pw/11523953-barselona-kopengagen-pryamaya-translyaciya-liga-chempionov-28012026-smotret-onlayn.html',
    ]
  }
];

oyunlar.forEach(e => {
  const content = document.createElement('div');
  content.className = 'content';

  const span1 = document.createElement('span');
  span1.className = 'oyun';
  span1.textContent = e.oyun;

  const span2 = document.createElement('span');
  span2.className = 'oyun';
  span2.textContent = e.saat;

  const secret = document.createElement('div');
  secret.className = 'secret';

  e.links.forEach((url, index) => {
    const linkDiv = document.createElement('div');
    linkDiv.className = 'links';

    const a = document.createElement('a');
    a.className = 'link';
    a.textContent = `Link ${index + 1}`;
    a.href = url;
    a.target = '_blank';

    linkDiv.append(a);
    secret.append(linkDiv);
  });

  content.append(span1, span2);
  main.append(content, secret);

  content.addEventListener('click', () => {
    secret.classList.toggle('show');
  });
});
