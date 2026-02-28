const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Kocaelispor - Beşiktaş ',
    saat: '17:00',
    links: [
      'https://rotabettv387.com/mac/kocaelispor-besiktas-bein-sports-1/',
      'https://myfootball.pw/11531261-kodzhaelispor-beshiktash-pryamaya-translyaciya-turciya-superliga-28022026-smotret-onlayn.html'
    ]
  },
   {
    oyun: ' Liverpool - West Ham ',
    saat: '19:00',
    links: [
      'https://rotabettv387.com/mac/liverpool-west-ham-bein-sports-3/',
      'https://ovogoal.plus/match-updates/liverpool-vs-west-ham-united/',
      'https://myfootball.pw/11531273-liverpul-vest-hem-yunayted-pryamaya-translyaciya-angliya-premer-liga-28022026-smotret-onlayn.html'
    ]
  },
    {
    oyun: ' Barcelona - Villarreal ',
    saat: '19:15',
    links: [
      'idmantv.az/az',
      'https://ovogoal.plus/match-updates/barcelona-vs-villarreal/',
      'https://myfootball.pw/11531288-barselona-vilyarreal-pryamaya-translyaciya-ispaniya-primera-divizion-28022026-smotret-onlayn.html',

    ]
  },
 {
    oyun: ' Galatasaray - Alanyaspor ',
    saat: '21:00',
    links: [
      'https://rotabettv387.com/mac/galatasaray-alanyaspor-bein-sports-1/',
      'https://myfootball.pw/11531295-galatasaray-alanyaspor-pryamaya-translyaciya-turciya-superliga-28022026-smotret-onlayn.html',
    ]
  },
  {
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
