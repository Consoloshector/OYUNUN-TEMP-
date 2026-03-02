const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Real Madrid - Getafe ',
    saat: '00:00',
    links: [
      'idmantv.az/az',
      'https://myfootball.pw/11531387-real-madrid-hetafe-pryamaya-translyaciya-ispaniya-primera-divizion-02032026-smotret-onlayn.htmlml'
    ]
  },
   /*{
    oyun: ' Fulham - Tottenham',
    saat: '18:00',
    links: [
      'https://monotv535.com/channel?id=b4',
      'https://ovogoal.plus/match-updates/fulham-vs-tottenham-hotspur/',
      'https://myfootball.pw/11531327-fulhem-tottenhem-pryamaya-translyaciya-angliya-premer-liga-01032026-smotret-onlayn.html'
    ]
  },
    {
    oyun: ' Arsenal - Chelsea',
    saat: '20:30',
    links: [
      'https://medeniyyettv.az/az',
      'https://myfootball.pw/11531359-arsenal-chelsi-pryamaya-translyaciya-angliya-premer-liga-01032026-smotret-onlayn.html',

    ]
  },
 {
    oyun: ' Antalyaspor - Fenerbahçe ',
    saat: '21:00',
    links: [
      'https://rotabettv387.com/mac/antalyaspor-fenerbahce-bein-sports-1/',
      'https://myfootball.pw/11531370-antalyaspor-fenerbahche-pryamaya-translyaciya-turciya-superliga-01032026-smotret-onlayn.html',
    ]
  },*/
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
