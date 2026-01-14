const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Seneqal - Misir ',
    saat: '21:00',
    links: [
      'https://rotabettv379.com/mac/fethiyespor-galatasaray-a-spor/',
      'https://myfootball.pw/11519817-fethiespor-galatasaray-pryamaya-translyaciya-turciya-kubok-13012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' B. Yeni Çarşı - Fenerbahçe ',
    saat: '21:30',
    links: [
      'https://selcuksports161.top/',
      'https://freestreams-live1.pk/bt-sport-4-uk/'
    ]
  },
  {
    oyun: 'Napoli - Parma',
    saat: '21:30',
    links: [
      'https://rotabettv379.com/mac/inter-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11519389-inter-napoli-pryamaya-translyaciya-italiya-seriya-a-11012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Köln - Bayern ',
    saat: '23:30',
    links: [
      'https://rotabettv379.com/mac/inter-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11519389-inter-napoli-pryamaya-translyaciya-italiya-seriya-a-11012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Inter - Lecce ',
    saat: '23:45',
    links: [
      'https://rotabettv379.com/mac/inter-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11519389-inter-napoli-pryamaya-translyaciya-italiya-seriya-a-11012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Nigeriya - Mərakeş ',
    saat: '00:00',
    links: [
      'https://rotabettv379.com/mac/inter-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11519389-inter-napoli-pryamaya-translyaciya-italiya-seriya-a-11012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Albacete - Real Madrid ',
    saat: '00:00',
    links: [
      'https://rotabettv379.com/mac/inter-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11519389-inter-napoli-pryamaya-translyaciya-italiya-seriya-a-11012026-smotret-onlayn.html'
    ]
  },
    {
    oyun: ' Chelsea - Arsenal ',
    saat: '00:00',
    links: [
      'https://ovogoaal.com/match-updates/newcastle-vs-manchester-city/',
      'https://myfootball.pw/11519822-nyukasl-yunayted-manchester-siti-pryamaya-translyaciya-angliya-kubok-ligi-13012026-smotret-onlayn.html'
    ]
  }
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
