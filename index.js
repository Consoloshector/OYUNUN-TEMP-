const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Galatasaray - İstanbulspor ',
    saat: '21:30',
    links: [
      'https://rotabettv382.com/mac/galatasaray-istanbulspor-a-spor/',
      'https://myfootball.pw/11525705-galatasaray-istanbulspor-pryamaya-translyaciya-turciya-kubok-04022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' İnter - Torino',
    saat: '00:00',
    links: [
      'https://ovogoal.plus/match-updates/inter-vs-torino/',
      'https://myfootball.pw/11525720-inter-torino-pryamaya-translyaciya-italiya-kubok-04022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Newcastle - Man City ',
    saat: '00:00',
    links: [
      'https://ovogoal.plus/match-updates/manchester-city-vs-newcastle/',
     'https://myfootball.pw/11525717-manchester-siti-nyukasl-yunayted-pryamaya-translyaciya-angliya-kubok-ligi-04022026-smotret-onlayn.html',
    ]
  },
  /*{
    oyun: ' Galatasaray - Kayserispor ',
    saat: '21:00',
    links: [
      'https://rotabettv382.com/mac/galatasaray-kayserispor-bein-sports-1/',
      'https://myfootball.pw/11524794-galatasaray-kayserispor-pryamaya-translyaciya-turciya-superliga-01022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Cremonese - Inter ',
    saat: '21:00',
    links: [
      'https://ovogoal.plus/match-updates/cremonese-vs-internazionale/',
      'https://myfootball.pw/11524793-kremoneze-inter-pryamaya-translyaciya-italiya-seriya-a-01022026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Strasbourg - PSG ',
    saat: '23:45',
    links: [
      'https://ovogoal.plus/match-updates/strasbourg-vs-psg/',
      'https://myfootball.pw/11524802-strasbur-pszh-pryamaya-translyaciya-franciya-liga-1-01022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Parma - Juventus ',
    saat: '23:45',
    links: [
      'https://ovogoal.plus/match-updates/parma-vs-juventus/',
      'https://myfootball.pw/11524801-parma-yuventus-pryamaya-translyaciya-italiya-seriya-a-01022026-smotret-onlayn.html',
    ]
  },*/
   /* {
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
