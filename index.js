const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Fenerbahçe - Aston Villa',
    saat: '21:45',
    links: [
      'https://www.canlitv.vin/cbcsport-canli-yayin',
      'https://myfootball.pw/11522338-fenerbahche-aston-villa-pryamaya-translyaciya-liga-evropy-22012026-smotret-onlayn.html',
    ]
  },
 /* {
    oyun: ' Galatasaray - Atletico ',
    saat: '21:45',
    links: [
      'https://www.canlitv.me/live/ictimaitv-canli-hd',
      'https://myfootball.pw/11522317-galatasaray-atletiko-madrid-pryamaya-translyaciya-liga-chempionov-21012026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Marseille - Liverpool ',
    saat: '00:00',
    links: [
      'https://www.canlitv.me/live/ictimaitv-canli-hd',
      'https://myfootball.pw/11522325-slaviya-praga-barselona-pryamaya-translyaciya-liga-chempionov-21012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Slavia - Barcelona ',
    saat: '00:00',
    links: [
      'https://rotabettv380.com/mac/slavia-prag-barcelona-tabii-spor-2/',
      'https://myfootball.pw/11522325-slaviya-praga-barselona-pryamaya-translyaciya-liga-chempionov-21012026-smotret-onlayn.html'
    ]
  },*/
  /*{
    oyun: ' Liverpool - Burnley ',
    saat: '19:00',
    links: [
      'https://rotabettv379.com/mac/liverpool-burnley-bein-sports-3/',
      'https://myfootball.pw/11521278-liverpul-bernli-pryamaya-translyaciya-angliya-premer-liga-17012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Misir - Nigeriya ',
    saat: '20:00',
    links: [
      'https://myfootball.pw/11521297-egipet-nigeriya-pryamaya-translyaciya-kubok-afrikanskih-naciy-17012026-smotret-onlayn.html',
      'https://myfootball.pw/11521297-egipet-nigeriya-pryamaya-translyaciya-kubok-afrikanskih-naciy-17012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Galatasaray - Gaziantep ',
    saat: '21:00',
    links: [
      'https://rotabettv379.com/mac/galatasaray-gaziantep-fk-bein-sports-1/',
      'https://myfootball.pw/11521299-galatasaray-gaziantep-pryamaya-translyaciya-turciya-superliga-17012026-smotret-onlayn.html',
    ]
  },
    {
    oyun: ' Nottingham - Arsenal ',
    saat: '21:30',
    links: [
      'https://ovogoaal.com/match-updates/nottingham-forest-vs-arsenal/',
      'https://myfootball.pw/11521303-nottingem-forest-arsenal-pryamaya-translyaciya-angliya-premer-liga-17012026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Leipzig - Bayern ',
    saat: '21:30',
    links: [
      'https://rotabettv379.com/mac/leipzig-bayern-munih-tivibu-spor-2/',
      'https://myfootball.pw/11521305-rb-leypcig-bavariya-pryamaya-translyaciya-germaniya-bundesliga-17012026-smotret-onlayn.html',
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
