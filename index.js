const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: 'Al Hilal - Al Nassr',
    saat: '21:30',
    links: [
      'https://xyzshoot4k-com.goal01.space/?m=27522&lang=en',
      'https://taraftarium-maclar.org/izle/al-hilal-riyadh-al-nassr-futboi'
    ]
  },
  {
    oyun: ' Liverpool - Barnsley ',
    saat: '23:45',
    links: [
      'https://golvar653.sbs/mac/liverpool-barnsley-tabii-spor/',
      'https://myfootball.pw/11519810-liverpul-barnsli-pryamaya-translyaciya-angliya-kubok-fa-12012026-smotret-onlayn.html'
    ]
  },
  /*{
    oyun: 'Barcelona - Real Madrid',
    saat: '23:00',
    links: [
      'https://selcuksports161.top/',
      'https://freestreams-live1.pk/bt-sport-4-uk/',
      'https://tvjustin.net/',
      'https://justintv77.top/',
      'https://match.az/match-futbol-2-canli-izle.html',
      'https://gobtv3.com/channel?id=yayinex3',
      'https://match.az/match-tv-canli-izle.html',
      'https://shoot4k.com/yallashoottv-live/barcelona-vs-real-madrid-spain---super-cup/27482',
      'https://sng.sportplus.live/football/supercup-spain/7461527/',
      'https://izlemac226.sbs/mac-izle/barcelona-real-madrid/',
      'https://taraftarium.is/event.html?id=androstreamlivessplus1',
      'https://izlemac226.sbs/wp-content/themes/ikisifirbirdokuz/match-center.php?id=18107959'
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
];*/

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
