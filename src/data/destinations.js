const destinations = [
  {
    id: 1,
    title: "Santorini, Greece",
    description: "Santorini is one of the Cyclades islands in the Aegean Sea. It's known for its stunning white-washed buildings with blue domes, amazing sunsets and beautiful beaches with red and black volcanic sand.",
    longDescription: "Santorini, officially known as Thira, is a volcanic island in the Cyclades group of the Greek islands. It's famous for its dramatic views, stunning sunsets, white-washed houses, and its own active volcano. The island is shaped like a crescent with the caldera lagoon in the middle.\n\nThe island's beauty has made it one of the most popular tourist destinations in Greece. Visitors can enjoy walking along the caldera cliff, visiting ancient sites, swimming in crystal-clear waters, and enjoying the local cuisine which includes unique products due to the volcanic soil.\n\nFira, the island's capital, and Oia, known for its spectacular sunsets, are the most famous villages. Santorini also has unique beaches due to its volcanic history, including Red Beach and Black Beach.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602580195841-d96bc18b702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 2,
    title: "Kyoto, Japan",
    description: "Kyoto, once the capital of Japan, is famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
    longDescription: "Kyoto served as Japan's capital and the emperor's residence from 794 until 1868. It's now the country's seventh largest city and a major tourist destination. With its 2,000 religious buildings, including 1,600 Buddhist temples and 400 Shinto shrines, Kyoto is one of the best-preserved cities in Japan.\n\nThe city is also known for its beautiful gardens, its traditional kaiseki dining, and its geisha district of Gion. Among its most famous temples are Kinkaku-ji (Golden Pavilion), a Zen temple covered in gold leaf, and Ryoan-ji, home to Japan's most famous rock garden.\n\nVisitors to Kyoto can also enjoy the Arashiyama Bamboo Grove, the Fushimi Inari Shrine with its thousands of vermilion torii gates, and the historic district of Higashiyama.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 3,
    title: "Machu Picchu, Peru",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls and panoramic views.",
    longDescription: "Machu Picchu stands 2,430 meters above sea level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments.\n\nThe natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish Conquest.\n\nMachu Picchu was brought to international attention by Hiram Bingham in 1911 and was declared a UNESCO World Heritage site in 1983. The site is reached either by hiking the Inca Trail or by taking a train to Aguas Calientes and then a bus up the winding road to the entrance.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548791694-a532cd3d0a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1459536516159-07a359f08be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export default destinations;