const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Gaziantep - Fenerbahçe ',
    saat: '21:30',
    links: [
      'https://www.atv.com.tr/canli-yayin',
      'https://myfootball.pw/11532288-gaziantep-fenerbahche-pryamaya-translyaciya-turciya-kubok-04032026-smotret-onlayn.html'
    ]
  },
   {
    oyun: ' Beşiktaş - Rizespor ',
    saat: '21:30',
    links: [
      'https://rotabettv387.com/mac/besiktas-c-rizespor-a-haber/',
      'https://myfootball.pw/11532287-beshiktash-rizespor-pryamaya-translyaciya-turciya-kubok-04032026-smotret-onlayn.html'
    ]
  },
   /* {
    oyun: ' Como - Inter ',
    saat: '00:00',
    links: [
      'https://rotabettv387.com/mac/como-inter-trt-spor/',
      'https://myfootball.pw/11532276-komo-inter-pryamaya-translyaciya-italiya-kubok-03032026-smotret-onlayn.html',

    ]
  },
 {
    oyun: ' Wolverhampton - Liverpool ',
    saat: '00:15',
    links: [
      'idmantv.az/az',
      'https://rotabettv387.com/mac/wolverhampton-liverpool-bein-sports-3/',
      'https://myfootball.pw/11532278-vulverhempton-liverpul-pryamaya-translyaciya-angliya-premer-liga-03032026-smotret-onlayn.html',
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
