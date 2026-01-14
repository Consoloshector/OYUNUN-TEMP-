const main = document.getElementsByClassName('main')[0];

let oyunlar = [
  {
    oyun: ' Seneqal - Misir ',
    saat: '21:00',
    links: [
      'https://xyzyallashoo-com.goal02.space/?m=27549&lang=en',
      'https://myfootball.pw/11520481-senegal-egipet-pryamaya-translyaciya-kubok-afrikanskih-naciy-14012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' B. Yeni Çarşı - Fenerbahçe ',
    saat: '21:30',
    links: [
      'https://golvar653.sbs/mac/beyoglu-yeni-carsi-fenerbahce-a-spor/',
      'https://myfootball.pw/11520484-beyoglu-fenerbahche-pryamaya-translyaciya-turciya-kubok-14012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: 'Napoli - Parma',
    saat: '21:30',
    links: [
      'https://rotabettv379.com/mac/napoli-parma-tivibu-spor-1/',
      'https://myfootball.pw/11520482-napoli-parma-pryamaya-translyaciya-italiya-seriya-a-14012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Köln - Bayern ',
    saat: '23:30',
    links: [
      'https://rotabettv379.com/mac/koln-bayern-munih-tivibu-spor-2/',
      'https://myfootball.pw/11520491-keln-bavariya-pryamaya-translyaciya-germaniya-bundesliga-14012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Inter - Lecce ',
    saat: '23:45',
    links: [
      'https://rotabettv379.com/mac/inter-lecce-tivibu-spor-1/',
      'https://myfootball.pw/11520493-inter-lechche-pryamaya-translyaciya-italiya-seriya-a-14012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Nigeriya - Mərakeş ',
    saat: '00:00',
    links: [
      'https://yallashoo.com/soccer-insider-live/nigeria-vs-morocco-africa-cup-of-nations/27550',
      'https://myfootball.pw/11520501-nigeriya-marokko-pryamaya-translyaciya-kubok-afrikanskih-naciy-14012026-smotret-onlayn.html'
    ]
  },
  {
    oyun: ' Albacete - Real Madrid ',
    saat: '00:00',
    links: [
      'https://ovogoaal.com/match-updates/albacete-vs-real-madrid/',
      'https://myfootball.pw/11520498-albasete-real-madrid-pryamaya-translyaciya-ispaniya-kubok-korolya-14012026-smotret-onlayn.html',
      'https://ovogoaal.com/match-updates/albacete-vs-real-madrid/',
      'https://yallashoo.com/soccer-insider-live/albacete-vs-real-madrid-spain---copa-del-rey/27562'
    ]
  },
    {
    oyun: ' Chelsea - Arsenal ',
    saat: '00:00',
    links: [
      'https://ovogoaal.com/match-updates/chelsea-vs-arsenal/',
      'https://myfootball.pw/11520496-chelsi-arsenal-pryamaya-translyaciya-angliya-kubok-ligi-14012026-smotret-onlayn.html',
      'https://yallashoo.com/soccer-insider-live/chelsea-vs-arsenal-england-:-efl-cup/27551',
      'https://gobtv3.com/channel?id=yayinex1'
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
