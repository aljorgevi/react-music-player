import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      name: 'Dando Vueltas',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg',
      artist: 'Juan Rios, Cráneo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21655',
      color: ['#F7866C', '#B09495'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Festa',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg',
      artist: 'Misha, Jussi Halme, Soul Food Horns',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12091',
      color: ['#F89892', '#2D3145'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Solar Cove',
      cover:
        'https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/60a2c11dde916a66ca845904_Chillhop-E2021-02-Summer-Artworks-v01_Single%20Cover%2003%201.png',
      artist: 'Mama Aiuto',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=16179',
      color: ['#F9B188', '#D44847'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Daylight',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Low Rider',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg',
      artist: 'Evil Needle',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17090',
      color: ['#EA7652', '#5C534E'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Sunrise Hike',
      cover: 'https://i.scdn.co/image/ab67616d0000b273ccdcf06294e4503bd0530297',
      artist: 'Ruck P',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12134',
      color: ['#D7484A', '#FCB28C'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
