const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Arsenal - Wigan ',
    saat: '20:30',
    links: [
      'https://ovogoal.plus/match-updates/arsenal-vs-wigan-athletic/',
      'https://myfootball.pw/11528169-arsenal-uigan-atletik-pryamaya-translyaciya-angliya-kubok-fa-15022026-smotret-onlayn.html'
    ]
  },
   {
    oyun: '  Başakşehir - Beşiktaş ',
    saat: '21:00',
    links: [
      'https://golvar518.sbs/mac/rams-basaksehir-besiktas-bein-sports-1/',
      'https://myfootball.pw/11528143-bashakshehir-beshiktash-pryamaya-translyaciya-turciya-superliga-15022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Napoli - Roma ',
    saat: '23:45',
    links: [
      'https://golvar518.sbs/mac/napoli-roma-tivibu-spor-1/',
      'https://myfootball.pw/11528150-napoli-roma-pryamaya-translyaciya-italiya-seriya-a-15022026-smotret-onlayn.html'
    ]
  },
/*{
    oyun: ' Real Madrid - Real Sociedad ',
    saat: '00:00',
    links: [
      'https://ovogoal.plus/match-updates/real-madrid-vs-real-sociedad/',
      'https://ardaspor1.top/izle/real-madrid-real-sociedad-futboi',
      'https://myfootball.pw/11528100-real-madrid-real-sosedad-pryamaya-translyaciya-ispaniya-primera-divizion-14022026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Liverpool - Brighton ',
    saat: '00:00',
    links: [
      'https://ovogoal.plus/match-updates/liverpool-vs-brighton/',
      'https://myfootball.pw/11528099-liverpul-brayton-pryamaya-translyaciya-angliya-kubok-fa-14022026-smotret-onlayn.html'
    ]
  },*/
  /*{
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
