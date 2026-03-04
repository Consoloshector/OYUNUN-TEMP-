const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Brighton - Arsenal ',
    saat: '23:30',
    links: [
      'https://ovogoal.plus/match-updates/brighton-vs-arsenal/',
      'https://myfootball.pw/11532293-brayton-arsenal-pryamaya-translyaciya-angliya-premer-liga-04032026-smotret-onlayn.html'
    ]
  },
   {
    oyun: ' Aston Villa - Chelsea ',
    saat: '23:30',
    links: [
      'https://rotabettv387.com/mac/aston-villa-chelsea-bein-sports-4/',
      'idmantv.az/az'
    ]
  },
  {
    oyun: ' Man City - Nottingham Forest',
    saat: '23:30',
    links: [
      'https://rotabettv387.com/mac/manchester-city-nottingham-forest-bein-sports-2/',
      'https://myfootball.pw/11532291-manchester-siti-nottingem-forest-pryamaya-translyaciya-angliya-premer-liga-04032026-smotret-onlayn.html',

    ]
  },
 {
    oyun: ' Newcastle - Man United',
    saat: '00:15',
    links: [
      'https://rotabettv387.com/mac/newcastle-manchester-utd-bein-sports-5/',
      'https://myfootball.pw/11532303-nyukasl-yunayted-manchester-yun-pryamaya-translyaciya-angliya-premer-liga-04032026-smotret-onlayn.html',
    ]
  },
 /* {
    oyun: ' Dortmund - Bayern ',
    saat: '21:30',
    links: [
      'https://rotabettv387.com/mac/b-dortmund-bayern-munih-tivibu-spor-2/',
      'https://patronmac33.cfd/',
      'https://myfootball.pw/11531301-borussiya-d-bavariya-pryamaya-translyaciya-germaniya-bundesliga-28022026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Leeds - Man City ',
    saat: '21:30',
    links: [
      'idmantv.az/az',
      'https://ovogoal.plus/match-updates/leeds-united-vs-manchester-city/',
      'https://myfootball.pw/11531299-lids-yun-manchester-siti-pryamaya-translyaciya-angliya-premer-liga-28022026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Al Fahya - Al Nassr ',
    saat: '23:00',
    links: [
      '#',
      '#',
      '#'
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
