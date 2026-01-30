const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' UCL püşkatma ',
    saat: '15:00',
    links: [
      'https://www.youtube.com/live/IRVs2nSvH24?si=ldAcAC7SPPBwl8pu',
      'https://myfootball.pw/11524926-zherebevka-ligi-chempionov-pryamaya-translyaciya-futbol-liga-chempionov.html',
    ]
  },
  {
    oyun: ' UEL püşkatma ',
    saat: '16:00',
    links: [
      'https://www.youtube.com/live/cN4nyWYXsOI?si=7EoRqI5OW5p5fbMm',
      'https://myfootball.pw/11524922-zherebevka-ligi-evropy-pryamaya-translyaciya.html',
    ]
  },
   /*{
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
  }*/
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
