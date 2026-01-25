const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Crystal Palace - Chelsea ',
    saat: '18:00',
    links: [
      'https://golvar683.sbs/mac/crystal-palace-chelsea-bein-sports-3/',
      'https://myfootball.pw/11522920-kristal-pelas-chelsi-pryamaya-translyaciya-angliya-premer-liga-25012026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Barcelona - Oviedo ',
    saat: '19:15',
    links: [
      'https://golvar683.sbs/mac/barcelona-real-oviedo-s-sport/',
      'https://myfootball.pw/11522931-barselona-real-ovedo-pryamaya-translyaciya-ispaniya-primera-divizion-25012026-smotret-onlayn.html',
    ]
  },
  {
    oyun: ' Arsenal - Man United',
    saat: '20:30',
    links: [
      'http://idmantv.az/az',
      'https://myfootball.pw/11522940-arsenal-manchester-yun-pryamaya-translyaciya-angliya-premer-liga-25012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Fenerbahçe - Göztepe ',
    saat: '21:00',
    links: [
      'https://golvar683.sbs/mac/fenerbahce-goztepe-bein-sports-1/',
      'https://myfootball.pw/11522943-fenerbahche-geztepe-pryamaya-translyaciya-turciya-superliga-25012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Juventus - Napoli ',
    saat: '21:00',
    links: [
      'https://golvar683.sbs/mac/juventus-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11522942-yuventus-napoli-pryamaya-translyaciya-italiya-seriya-a-25012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Roma - Milan ',
    saat: '23:45',
    links: [
      'https://golvar683.sbs/mac/roma-milan-s-sport-2/',
      'https://myfootball.pw/11522950-roma-milan-pryamaya-translyaciya-italiya-seriya-a-25012026-smotret-onlayn.html'
    ]
  },
  /*{
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
