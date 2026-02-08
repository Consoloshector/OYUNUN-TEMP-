const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Rizespor - Galatasaray ',
    saat: '18:00',
    links: [
      'https://golvar787.sbs/mac/c-rizespor-galatasaray-bein-sports-1/',
      'https://myfootball.pw/11526681-rizespor-galatasaray-pryamaya-translyaciya-turciya-superliga-08022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Liverpool - Man City ',
    saat: '20:30',
    links: [
      'https://idmantv.az/az',
      'https://ovogoal.plus/match-updates/liverpool-vs-manchester-city/',
      'https://myfootball.pw/11526697-liverpul-manchester-siti-pryamaya-translyaciya-angliya-premer-liga-08022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Beşiktaş - Alanyaspor ',
    saat: '21:00',
    links: [
      'https://rotabettv382.com/mac/besiktas-alanyaspor-bein-sports-1/',
     'https://myfootball.pw/11526701-beshiktash-alanyaspor-pryamaya-translyaciya-turciya-superliga-08022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Juventus - Lazio ',
    saat: '23:45',
    links: [
      'idmantv.az/az',
      'https://myfootball.pw/11526708-yuventus-lacio-pryamaya-translyaciya-italiya-seriya-a-08022026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' PSG - Marseille ',
    saat: '23:45',
    links: [
      'https://ovogoal.plus/match-updates/psg-vs-olympique-marseille/',
      'https://myfootball.pw/11526709-pszh-marsel-pryamaya-translyaciya-franciya-liga-1-08022026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Valencia - Real Madrid ',
    saat: '00:00',
    links: [
      'idmantv.az/az',
      'https://ovogoal.plus/match-updates/valencia-vs-real-madrid/',
      'https://myfootball.pw/11526710-valensiya-real-madrid-pryamaya-translyaciya-ispaniya-primera-divizion-08022026-smotret-onlayn.html'
    ]
  },
  /*{
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
