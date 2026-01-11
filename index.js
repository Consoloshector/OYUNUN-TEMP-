const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  /*{
    oyun: 'Bayern - Wolfsburg',
    saat: '20:30',
    links: [
      'https://ovogoaal.com/match-updates/bayern-munchen-vs-wolfsburg/',
      'https://myfootball.pw/11519381-bavariya-volfsburg-pryamaya-translyaciya-germaniya-bundesliga-11012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: 'Man United - Brighton',
    saat: '20:30',
    links: [
      'https://rotabettv379.com/mac/manchester-utd-brighton-tabii-spor/',
      'https://myfootball.pw/11519380-manchester-yun-brayton-pryamaya-translyaciya-angliya-kubok-fa-11012026-smotret-onlayn.html'
    ]
  },*/
  {
    oyun: 'Barcelona - Real Madrid',
    saat: '23:00',
    links: [
      'https://monotv529.com/channel?id=yayinss',
      'https://bahisnowtv615.com/Watch/M893588',
      'https://taraftarium-maclar.org/izle/s-sport',
      'https://bahisnowtv615.com/Watch/M893588',
      'https://zeustv173.com/tv/s-sport/',
      'https://ovogoaal.com/match-updates/barcelona-vs-real-madrid/',
      'https://myfootball.pw/11520088-barselona-real-madrid-pryamaya-translyaciya-ispaniya-superkubok-11012026-smotret-onlayn.html',
      'https://shoot4k.com/yallashoottv-live/barcelona-vs-real-madrid-spain---super-cup/27482',
      'https://sng.sportplus.live/football/supercup-spain/7461527/',
      'https://freestreams-live1.pk/bt-sport-4-uk/',
      'https://freestreams-live1.pk/sportdigital-de/',
      'https://gobtv3.com/channel?id=yayinss'
    ]
  },
  {
    oyun: 'Inter - Napoli',
    saat: '23:45',
    links: [
      'https://rotabettv379.com/mac/inter-napoli-tivibu-spor-1/',
      'https://myfootball.pw/11519389-inter-napoli-pryamaya-translyaciya-italiya-seriya-a-11012026-smotret-onlayn.html'
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
