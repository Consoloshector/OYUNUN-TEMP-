const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Man United - Tottenham ',
    saat: '16:30',
    links: [
      'idmantv.az/az',
      'https://ovogoal.plus/match-updates/manchester-united-vs-tottenham/',
      'https://myfootball.pw/11526617-manchester-yun-tottenhem-pryamaya-translyaciya-angliya-premer-liga-07022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Arsenal - Sunderland ',
    saat: '19:00',
    links: [
      'https://ovogoal.plus/match-updates/arsenal-vs-sunderland/',
      'https://myfootball.pw/11526629-arsenal-sanderlend-pryamaya-translyaciya-angliya-premer-liga-07022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Wolwes - Chelsea ',
    saat: '19:00',
    links: [
      'https://ovogoal.plus/match-updates/wolves-vs-chelsea/',
     'https://myfootball.pw/11526626-vulverhempton-chelsi-pryamaya-translyaciya-angliya-premer-liga-07022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Barcelona - Mallorca ',
    saat: '19:15',
    links: [
      'idmantv.az/az',
      'https://ovogoal.plus/match-updates/barcelona-vs-mallorca/',
      'https://myfootball.pw/11526633-barselona-malorka-pryamaya-translyaciya-ispaniya-primera-divizion-07022026-smotret-onlayn.html'
    ]
  },
  /*{
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
