const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: 'Fenerbahçe - Galatasaray',
    saat: '19:45',
    links: [
      'https://atv.az/live',
      'https://myfootball.pw/11519348-galatasaray-fenerbahche-pryamaya-translyaciya-turciya-superkubok-10012026-smotret-onlayn.html',
      'https://example.com/3',
      'https://example.com/4',
      'https://example.com/5',
      'https://example.com/6',
      'https://example.com/7',
      'https://example.com/8'
    ]
  },
  {
    oyun: 'Əlcəzair - Nigeriya',
    saat: '20:00',
    links: [
      'https://xyzshoot4k-com.goal01.space/?m=27430&lang=en',
      'https://myfootball.pw/11519340-alzhir-nigeriya-pryamaya-translyaciya-kubok-afrikanskih-naciy-10012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: 'Misir - Kot-d’İvuar',
    saat: '23:00',
    links: [
      'https://shoot4k.com/yallashoottv-live/egypt-vs-ivory-coast-africa-cup-of-nations/27431',
      'https://myfootball.pw/11519355-egipet-kot-divuar-pryamaya-translyaciya-kubok-afrikanskih-naciy-10012026-smotret-onlayn.html'
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
