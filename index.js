const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Man City - Fulham ',
    saat: '23:30',
    links: [
      'idmantv.az/az',
      'https://myfootball.pw/11527392-manchester-siti-fulhem-pryamaya-translyaciya-angliya-premer-liga-11022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Bayern - Leipzig ',
    saat: '23:45',
    links: [
      'https://xyzeshoot-org.streamz.zip/?m=28335&lang=en',
      'https://myfootball.pw/11527398-bavariya-rb-leypcig-pryamaya-translyaciya-germaniya-kubok-dfb-11022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Sunderland - Liverpool ',
    saat: '00:15',
    links: [
      'https://aztv.az/az/live',
      'https://myfootball.pw/11527408-sanderlend-liverpul-pryamaya-translyaciya-angliya-premer-liga-11022026-smotret-onlayn.html',
    ]
  },
  /*{
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
  },*/
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
