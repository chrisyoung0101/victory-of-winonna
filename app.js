document.addEventListener("DOMContentLoaded", function() {



  
  const veggies = [
    {
      "name": "Pasilla Bajio",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/pasilla-bajio-pepper.jpeg",
      "desc": "<h3>Description</h3><p><strong>Pasilla</strong> means \"little raisin\" in Spanish, referring to the dark brown, wrinkled, dried form of the <em>chilaca pepper</em>. Fresh chilaca adds depth to red enchilada sauce and salsas. The dried pod, or pasilla, is a flavorful and important ingredient in traditional mole sauce. 1,000–2,000 Scoville heat units (mild). Plants are tobacco mosaic virus resistant.</p><h3>Variety Info</h3><ul><li><strong>Days to Maturity:</strong> 80 days from transplanting</li><li><strong>Family:</strong> Solanaceae, Nightshade family, includes tomatoes, potatoes, petunias, nicotiana, Chinese lantern, and eggplant.</li><li><strong>Type:</strong> Under 5000 Scoville Units, Chile Pepper (Learn more)</li><li><strong>Native:</strong> Americas</li><li><strong>Hardiness:</strong> Frost-sensitive perennial grown as an annual</li><li><strong>Exposure:</strong> Full sun</li><li><strong>Plant Dimensions:</strong> 24\"–36\" tall</li><li>Narrow, cylindrical pods up to 10\" long by 1\" wide; dark green maturing to dark brown. 'Pasilla Bajio' is a mild pepper at 1,000–2,000 Scoville heat units.</li></ul><h3>Attributes</h3><p>Tobacco Mosaic Virus Resistant, Frost Sensitive, Good for Containers</p><h3>Sowing Info</h3><p><strong>When to Sow Outside:</strong> For mild climates only: 2 to 4 weeks after your average last frost date, when soil temperature is at least 70°F.</p><p><strong>When to Start Inside:</strong> RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°‒90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: Can also sow in late summer for fall/winter crop.</p><p><strong>Days to Emerge:</strong> 10 – 25 days</p><p><strong>Seed Depth:</strong> ¼\"</p><p><strong>Seed Spacing:</strong> Start indoors</p><p><strong>Row Spacing:</strong> 24\" ‒ 36\"</p><p><strong>Thinning:</strong> Start indoors, plant seedlings 18\" ‒ 24\" apart outside</p><h3>Growing Info</h3><p>Harvest when 6\"–10\" long and when peppers are dark brown. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting, or wear gloves to harvest peppers.</p>"
  
    },
    {
      "name": "Golden Marconi",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/golden_marconi_pepper.jpg",
      "desc": "https://www.chileplants.com/search.aspx?ProductCode=PEPMAG"
    },
    {
      "name": "Thai Hot",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Thai-Hot-Chili-Pepper.jpeg",
      "desc": "<h3>Description</h3><p>The chile-loving Thais consume more hot peppers than any other culture. Discover the delights of <strong>'Thai Hot'</strong> flavor in your favorite stir-fry or other Asian dish!</p><h3>Variety Info</h3><ul><li><strong>Plant Type:</strong> Compact, mounding 8\" tall plants covered with 1½\"-3\" long, upright red and green peppers at the same time, making it a festive and decorative choice for patio containers.</li><li><strong>Scoville Heat Units:</strong> 50,000-100,000 (very hot).</li></ul><h3>Attributes</h3><p>This variety is perfect for those who enjoy a powerful kick in their culinary creations.</p>"
  
    },
    {
      "name": "Shishito Pepper",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Shishito_Peppers.jpeg",
      "desc": "<h3>Description</h3><p>The 'Shishito' is finding its way into many restaurants as a popular appetizer. The 2\"–4\" slender peppers have a citrusy, slightly smoky flavor enhanced by grilling or sautéing, and can be the life of the party when an occasional hot one passes the mouth of the unsuspecting. Highly productive plants. 50–200 Scoville heat units (mild).</p><h3>Variety Info</h3><ul><li><strong>Days to Maturity:</strong> 60–75 days from transplanting</li><li><strong>Family:</strong> Solanaceae</li><li><strong>Type:</strong> Under 1000 Scoville Units, Chile Pepper (Learn more)</li><li><strong>Native:</strong> Americas</li><li><strong>Hardiness:</strong> Frost-sensitive perennial grown as an annual</li><li><strong>Exposure:</strong> Full sun</li><li><strong>Plant Dimensions:</strong> 24\"–36\" tall</li><li>2\"–4\" long, thin, medium green, slightly wrinkled, some curved. Flavor is citrusy and slightly smoky. About 90 percent of shishitos will be mild, but the others will be slightly hot. Scoville heat units for 'Shishito' are 50–200, making the occasional hot pepper quite mild.</li></ul><h3>Attributes</h3><p>Frost Sensitive, Good for Containers</p><h3>Sowing Info</h3><p><strong>When to Sow Outside:</strong> For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.</p><p><strong>When to Start Inside:</strong> RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.</p><p><strong>Days to Emerge:</strong> 10–25 days</p><p><strong>Seed Depth:</strong> ¼\"</p><p><strong>Seed Spacing:</strong> Start indoors</p><p><strong>Row Spacing:</strong> 24\"–36\"</p><p><strong>Thinning:</strong> Start indoors, plant seedlings 18\"–24\" apart outside</p><h3>Growing Info</h3><p>Generally harvested when green, at 2\"–4\" long, but can also be left on the plant to mature to red. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting or wear gloves to harvest peppers.</p>"
  
  
    },
    {
      "name": "Himo Togarashi",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Himo-Togarashi.webp",
      "desc": "<h3>Description</h3><p>Himo Togarashi Pepper Seeds are non-GMO, annual, open-pollinated, heirloom, sweet peppers with no heat, rated at 0 Scoville Heat Units. They are suitable for growing in garden plots, raised beds, and greenhouses. Himo Togarashi is a specialty green pepper, recognized as a Yamato dento yasai, meaning it is a traditional vegetable from Nara prefecture in Japan.</p><h3>Variety Info</h3><ul><li><strong>Days to Maturity:</strong> 80-90 days from transplant</li><li><strong>Species:</strong> Capsicum annuum</li><li>The pepper grows 4-6 inches long and up to 0.25 inches in diameter (less than the diameter of a pencil). The peppers hang down on the plant and resemble strings or 'himo' in Japanese.</li></ul><h3>Planting Info</h3><p>Start seeds indoors 6 weeks before the last frost date or 8 weeks before the expected transplanting date. Keep soil warm until emergence. Seeds will not germinate in cool soil, and planting out too early may affect plant vigor. Harden off plants carefully before transplanting.</p><p>Transplant in late spring/summer when soil temperatures are at least above 60°F in a very warm and sunny location. Fertilize as needed, but be cautious as too much nitrogen can produce lush foliage and few fruits.</p><h3>Harvesting Info</h3><p>For mild peppers, harvest young when about 4 inches long. Larger peppers may become tough-skinned and spicy. These peppers are excellent for ohitashi, tempura, yakitori, and hot sautéed with sea salt.</p>"
  
    },
    {
      "name": "Jimmy Nardello Pepper",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Pepper-Jimmy-Nardello-960x640-.jpeg",
      "desc": "<h3>Description</h3><p>This Italian heirloom, known as 'Jimmy Nardello', was brought to America by the Nardello family in 1887 and named after the most garden-devoted of their 11 children, Jimmy. The 6\"-12\" peppers are known for their exceptionally sweet, rich flavor, making them the quintessential Italian frying pepper. They are delicious in chili and salsa, or dried and ground for paprika. Prolific plants grow well in most areas.</p><h3>Variety Info</h3><ul><li><strong>Days to Maturity:</strong> 80–90 days from transplanting</li><li><strong>Family:</strong> Solanaceae</li><li><strong>Type:</strong> Sweet Pepper (Learn more)</li><li><strong>Native:</strong> Americas</li><li><strong>Hardiness:</strong> Frost-sensitive perennial grown as an annual</li><li><strong>Exposure:</strong> Full sun</li><li><strong>Plant Dimensions:</strong> 24\" tall, 18\" wide</li><li>The peppers start out green and ripen to a deep, glossy red with a very sweet, rich flavor.</li></ul><h3>Attributes</h3><p>Frost Sensitive, Good for Containers</p><h3>Sowing Info</h3><p><strong>When to Sow Outside:</strong> For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.</p><p><strong>When to Start Inside:</strong> RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.</p><p><strong>Days to Emerge:</strong> 10–25 days</p><p><strong>Seed Depth:</strong> ¼\"</p><p><strong>Seed Spacing:</strong> Start indoors</p><p><strong>Row Spacing:</strong> 24\"–36\"</p><p><strong>Thinning:</strong> Start indoors, plant seedlings 18\"–24\" apart outside</p><h3>Growing Info</h3><p>'Jimmy Nardello' peppers can be eaten when green, but for optimum flavor, pick peppers at 6\"–12\" long, when they are bright, glossy red.</p>"
  
    },
    {
      "name": "Scotch Bonnet",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/scotch-bonnet.jpeg",
      "desc": "<h3>Description</h3><p>The 'Scotch Bonnet' is powerfully hot, similar to the habanero but with a fruity or smoky flavor. Also known as 'Jamaica Red' and sometimes called the Scotty Bon or Bonny pepper, it is named for its resemblance to a Scottish cap. If you like your peppers fiery hot, you will enjoy its citrus, apricot-like flavor that is sweetest when the fruit turns red. Try it in jerk dishes, mango salsa, blended with dark chocolate, or with fruit.</p><h3>Heat Level</h3><p>100,000-325,000 Scoville heat units (extremely hot).</p>"
  
  
    },
    {
      "name": "Determinate vs Indeterminate Tomatoes",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tomatoes.jpeg",          
      "desc": "<h3>Description</h3><p>Understanding whether your tomato is determinate or indeterminate can help tailor your gardening techniques to ensure optimal growth and yield. <strong>Determinate tomatoes</strong>, often called 'bush' tomatoes, grow to a compact height (usually 3-4 feet) and stop growing when fruit sets on the top bud. All tomatoes ripen roughly at the same time (usually over a period of 1-2 weeks), making them ideal for those who want a lot of tomatoes at once. They are perfect for container growing and do not require pruning.<br><br><strong>Indeterminate tomatoes</strong>, on the other hand, continue to grow and produce fruit throughout the growing season until killed by frost. They can reach heights of 6 feet or more and require staking or caging for support. Pruning is also necessary to control their growth and improve air circulation around the plants. Indeterminate varieties are ideal for gardeners who prefer a steady supply of tomatoes rather than one large harvest.</p><h3>Key Differences</h3><ul><li><strong>Growth Habit:</strong> Determinate tomatoes grow to a fixed height, indeterminate tomatoes keep growing.</li><li><strong>Harvest Time:</strong> Determinate tomatoes bear fruit all at once, indeterminate tomatoes produce continuously.</li><li><strong>Support Needs:</strong> Indeterminate tomatoes require staking or caging, determinates less so.</li><li><strong>Suitable for:</strong> Determinates are good for containers and small spaces, indeterminates for larger garden areas.</li></ul>"
    },        
    {
      "name": "Galahad Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/galahad_tomato.jpeg",
      "desc": "<h3>Description 🍅</h3><p>Delicious early determinate beefsteak. 'Galahad' boasts fantastic flavor and an impressive disease resistance profile, extending much-needed protection to regions ranging from the Midwest to the Deep South. Early maturity and early blight resistance make 'Galahad' a strong contender in the North. The round, 7–12 oz. fruits can be harvested with green shoulders and ripened red in storage, or ripened on the vine. Vigorous plants. AAS Regional Winner for the Heartland, West/Northwest regions. Determinate. USDA Certified Organic.</p><h3>Disease Resistance 🍅</h3><ul><li>Early Blight (Intermediate)</li><li>Fusarium Wilt races 1–3 (High)</li><li>Gray Leaf Spot (High)</li><li>Late Blight (High)</li><li>Nematodes (High)</li><li>Tomato Spotted Wilt Virus (High)</li><li>Verticillium Wilt (High)</li></ul><h3>Specs and Growing Info 🍅</h3><p><strong>Scientific Name:</strong> Solanum lycopersicum</p><p><strong>Determinate (Bush):</strong> Varieties do not need pruning and may be grown with or without support; fruit ripens within a concentrated time period.</p><p><strong>Indeterminate (Climbing):</strong> Varieties should be staked, trellised, or caged, and pruned for best results; fruit ripens over an extended period.</p><p><strong>Culture:</strong> Medium-rich soil with pH 6.0–6.8 preferred. Fertilize accurately since excess nitrogen causes rampant growth, rot, and delayed ripening. For short determinates, succession-plant every 4–6 weeks. Tomatoes typically germinate in 5–7 days.</p><p><strong>Transplanting:</strong> Don't start too early—leggy, root-bound, or flowering transplants can cause stunting and reduce early production. Sow 1/4\" deep in 20-row flats with 20 seeds/row, or in 200-cell trays with 1 seed/cell; lightly cover. Keep mix at 75–85°F (24–29°C) with moderate moisture. At first true leaf, pot-up to 50-cell trays or 4\" pots, depending on expected transplant timing. Grow at constant 60–70°F (16–21°C). Use complete fertilizer until hardened-off. Plant under row cover around last frost date to protect young plants.</p><p><strong>Trellising and Pruning:</strong> Basket-weave by pounding 5–6' stakes every 2–3 plants, using heavier t-posts intermittently and at ends of beds. For tall indeterminates, consider short extensions or pruning once they outgrow a manageable size for easy harvest.</p><p><strong>Harvesting and Storage:</strong> Fruits ripen gradually from the blossom end to shoulders and from the base of clusters to the tips. Harvest softer fruit unstacked into shallow, padded trays. Use fully ripe fruit only for local retail or home-use. Store blemish-free, near-ripe fruit 4–7 days at room temperature in darkness. Store longer with proper variety selection, picking less-ripe, and keeping at cooler temperatures 45–60°F (7–16°C).</p>"
  
    },
    {
      "name": "Lucid Gem Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/LUCID-GEM.jpeg",
      "desc": "<h3>Description 🍅</h3><p>'Lucid Gem' tomatoes are one of a kind! They are purple on top with red and orange bottoms, and the insides of these lusciously flavored tomatoes are almost tie-dyed! A heavy producing tomato on our San Diego farm with exceptional yield even when neglected.</p><h3>Planting by Zones 🌱</h3><p>In Zones 9-10, tomatoes grow well in the extended warm season and often year-round, known as perennialization. In these zones, productivity may decrease as temperatures cool and days shorten. Growers are advised to pull plants that stop producing at a healthy rate or are diseased.</p><p>Start tomatoes from seed as early as February in Zones 9 and 10, ensuring they are protected from the cold. Seeds of the Solanaceae family enjoy warm temperatures for germination. Using a heating pad can greatly increase the germination rate and speed.</p><h3>Planting Tomato Seeds 🍅</h3><p>Tomato seeds are easy to start. Sow seeds in starter pots with a heating pad 5-6 weeks before the last frost. Plant seeds into thoroughly moist high-quality seed starting soil, cover lightly with soil, and maintain a temperature of 75-90°F for optimal germination.</p><p>Once seedlings have germinated and have a first set of true leaves, fertilize regularly with an organic liquid fertilizer. Plant seedlings deeply into the ground when they are 7-8 weeks old or 5-6\" tall to encourage root development from the tiny white hairs on the stem.</p><h3>Growing Tomatoes 🍅</h3><p>Tomatoes can be grown in containers, ensuring at least 20\" depth for adequate root growth. Determine the type of tomato: Determinate varieties ripen fruit in clusters and do not typically need pruning. Indeterminate varieties grow long and require support and pruning to manage fruit set. Semi-determinate varieties need less support but do not ripen all at once.</p><h3>Harvesting Tomatoes 🍅</h3><p>Harvest tomatoes at peak ripeness, typically when fruits have turned their appropriate color and have a slight give. In Southern California, mulch heavily around tomato plants to prevent soil from drying out or overheating.</p><p>Monitor for tomato hornworms during hot months and handpick them as needed. Companion planting with low-lying plants like alyssum and nasturtium can enhance the beauty and functionality of tomato beds.</p><h3>Additional Resources 🌱</h3><p>New to starting crops from seeds? Check out our Seed Starting Presentation and learn about growing all our crops on our YouTube page. For pest issues, consult the UC Integrated Pest Management site for detailed control options.</p>"
  
    },
    {
      "name": "Money Maker Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tomato-moneymaker-1.jpg",
     "desc": "<h3>Description 🍅</h3><p>'Moneymaker' was a very popular variety for commercial growers in the 1950s and 1960s, earning its name due to its uniformity and reliably heavy yields. The medium-sized fruits are sweet with a meaty texture, making them versatile for use in both fresh and cooked dishes. It's a good choice for greenhouses as well as outdoor gardening and is a favorite among southern gardeners and those in climates with hot, humid summers.</p><h3>Variety Info 🍅</h3><ul><li><strong>Days to Maturity:</strong> 75 – 80 days from transplanting</li><li><strong>Family:</strong> Solanaceae</li><li><strong>Type:</strong> Indeterminate, Slicing Tomato (Learn more)</li><li><strong>Native:</strong> Andes</li><li><strong>Hardiness:</strong> Frost-sensitive annual</li><li><strong>Exposure:</strong> Full sun</li><li><strong>Plant Dimensions:</strong> Vines up to 6' or longer</li><li>The fruits weigh 3½–4 ounces, and are globe-shaped. 'Moneymaker' is an indeterminate type tomato.</li></ul><h3>Attributes 🍅</h3><p>Heat Tolerant, Humidity Tolerant, Frost Sensitive</p><h3>Sowing Info 🍅</h3><p><strong>When to Sow Outside:</strong> For mild climates only: 1 to 2 weeks after your average last frost date, when soil temperature is at least 60°F.</p><p><strong>When to Start Inside:</strong> RECOMMENDED. 4 to 6 weeks before transplanting. Ideal soil temperature for germination is 70°‒90°F. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date.</p><p><strong>Days to Emerge:</strong> 5 – 10 days</p><p><strong>Seed Depth:</strong> ⅛\"</p><p><strong>Seed Spacing:</strong> A group of 3 seeds every 24\" – 36\"</p><p><strong>Row Spacing:</strong> 36\"</p><p><strong>Thinning:</strong> When 2\" tall, thin to 1 every 24\" – 36\"</p><h3>Growing Info 🍅</h3><p>'Moneymaker' tomatoes are at the peak of sun-ripened deliciousness when fully red and have a slight give when gently squeezed. They may also be picked at the “first blush” stage, when 50% of the tomatoes' color has begun to change, and ripened at room temperature without decreasing flavor or nutrition. Picking often and early increases yield and decreases the risk of cracking and pest damage. Ripe fruit left on the vine during rain or watering is more susceptible to splitting. About 1 month before the average first fall frost, clip all blossoms and undersized fruit off the plant to signal the plant to ripen what’s left. Pick any unripe fruit before frost, and store them indoors in a single layer away from direct sunlight to ripen.</p><h3>Special Care 🍅</h3><p>Do not mulch when weather is still cool; the roots of young plants need to be in soil that is warmed by the sun. When the weather warms up and plants are established, mulch to a depth of 2\" or 3\" with a material such as straw, leaves, or compost, to conserve moisture, reduce weed growth, and keep the roots warm.</p>"
  
    },
    {
      "name": "Lil Bites Cherry Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/littl-bites-cherry-tomato.jpg",
      "desc": "<h3>Description 🍅</h3><p>Bred in England, where tomato conditions are tough, 'Litt’l Bites' is the ultimate patio tomato, bearing scrumptious fruit on compact, productive plants. These fast-growing little powerhouses are soon covered with multiple cascading sprays of bite-size fruits that can only be described as truly delicious little sweet morsels of goodness. Pretty 'Litt'l Bites' plants form dense, mounding canopies about 20 inches wide and 12 inches tall and produce until frost, making them ideal for colorful, attractive hanging baskets and containers.</p><p>'Litt’l Bites' plants cascade attractively from their containers and are soon covered with tasty little cherry tomatoes. Pick and enjoy these cute little baby tomatoes frequently when red ripe to encourage the most production. For best flavor, don’t store 'Litt’l Bites' in the fridge.</p><h3>Growing Info 🍅</h3><p><strong>Sow Seeds Indoors:</strong> February – March. <strong>Days to Germinate:</strong> 7 – 14 days.</p><p><strong>Transplant Outdoors:</strong> In full sun from April to June. <strong>Mature Height:</strong> 12 – 20 inches. <strong>Transplant to Harvest:</strong> 65 days. These plants thrive in well-lit, sunny locations and are perfect for balconies and small gardens.</p>"
  
    },
    {
      "name": "Cherry Falls Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/cherry_falls_cherry_tomato.jpeg",
      "desc": "<h3>Description 🍅</h3><p>Perfect for those low on space, this compact, cascading, determinate tomato variety is ideal for a patio pot or hanging basket. Although the plant grows only 6 inches tall, it tumbles up to 3 feet over the side of a container. Despite its diminutive stature, it produces oodles and oodles of 1½-inch sweet red tomatoes. This variety is open-pollinated (OP).</p><h3>Quick Facts 🍅</h3><ul><li><strong>Days to Maturity:</strong> 55 days</li><li><strong>Plant Type:</strong> Compact, cascading, determinate</li><li><strong>Ideal for:</strong> Patio pots, hanging baskets</li><li><strong>Fruit Size:</strong> 1½ inches</li><li><strong>Flavor:</strong> Sweet red tomatoes</li></ul>"
    },
    {
      "name": "Fortamino Rootstock Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/fortamino-tomato.jpeg",
      "desc": "<h3>Description 🍅</h3><p>Improve your favorite heirloom or prized tomato's performance by grafting it to 'Fortamino'! This rootstock provides your tomato with a better leaf cover that helps prevent sunburn (fruit scald), increases flowers per truss and fruit weight, and improves resilience to stress and heat resistance. 'Fortamino' grafting also improves your tomato's disease resistance to a variety of conditions including Fusarium crown and root rot, Fusarium wilt, leaf mold, tomato mosaic virus, verticillium wilt, root-knot nematodes, and tomato spotted wilt virus.</p><h3>Variety Info 🍅</h3><ul><li>Family: Solanaceae</li><li>Type: Tomato Rootstock</li><li>Native: Andes</li><li>Hardiness: Frost-sensitive annual</li><li>Exposure: Full sun</li><li>Attributes include resistance to multiple diseases and pests.</li></ul><p>Sowing recommended indoors 6 to 8 weeks before transplanting, with ideal soil temperatures for germination between 70°–90°F.</p>"
    },
    {
      "name": "San Marzano Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/san-marzano-tomato.jpeg",
      "desc": "<h3>Description 🍅</h3><p>'San Marzano' may very well be the mother of all paste tomatoes, cherished for generations by Italians as the best for sauce and canning. Vigorous vines reach 6' or more, producing 3\"–4\" long, 1 ½\" wide, oblong, red fruits.</p><h3>Variety Info 🍅</h3><ul><li>Days to Maturity: 70–90 days from transplanting</li><li>Family: Solanaceae</li><li>Type: Indeterminate, Paste Tomato</li><li>Native: Andes</li><li>Hardiness: Frost-sensitive annual</li><li>Exposure: Full sun</li></ul><p>Recommended to start indoors 4 to 6 weeks before transplanting. Ideal germination temperature is 70°–90°F. Harvest at peak ripeness when fruits are red and slightly soft.</p>"
  
    },
    {
      "name": "Tasmanian Chocolate Heirloom Container Tomatoes",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tasmanian-chocolate-tomato.jpeg",
      "desc": "<h3>Description 🍅</h3><p>Strong-yielding, short, sturdy vines bear heavy crops of beautiful, plump, mahogany red faintly striped tomatoes with delicious, well-balanced flavor. 'Tasmanian Chocolate' tomatoes are perfect for small space gardens and containers, being heavy for their size, extra juicy, and ideal for BLTs, salads, or sandwiches.</p><h3>Quick Facts 🍅</h3><ul><li>Mature Height: 12 – 20 inches</li><li>Transplant to Harvest: 65 days</li></ul><p>Grow in full sun with regular fertilization for best results. Harvest when fruits are deep mahogany red and give slightly to touch for optimal flavor.</p>"
  
    },
    {
      "name": "Cherokee Carbon Tomato",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/cherokee-carbon-tomato.jpeg",
      "desc": "<h3>Description 🍅</h3><p>What do you get when you cross 'Cherokee Purple' and 'Carbon'? A tomato lover's dream with heirloom flavor earlier in the season, increased production, and fewer cracks and blemishes. Large, 10-12-ounce, purple beefsteak fruit are perfect for slicing, with award-winning rich flavor.</p><h3>Variety Info 🍅</h3><ul><li>Days to Maturity: 75–80 days from transplanting</li><li>Family: Solanaceae</li><li>Type: Indeterminate, Slicing Tomato</li><li>Native: Andes</li><li>Hardiness: Frost-sensitive annual</li><li>Exposure: Full sun</li></ul><p>Recommended to start indoors 4 to 6 weeks before transplanting, with ideal soil temperatures for germination between 70°–90°F. Harvest when fruits are deep purple-burgundy and slightly soft.</p>"
  
    }, 
    {
      "name": "Nasturtium",
      "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/nasturtium-alaska.jpeg",
      "desc": "<h3>Description</h3><p>Nasturtium, scientifically known as Tropaeolum majus, is a popular ornamental plant characterized by its vibrant flowers and rounded leaves. Not only are the flowers of the Nasturtium plant eye-catching, but they are also edible, offering a peppery taste similar to arugula, making them a delightful addition to salads. The plant is easy to grow and is often used as a companion plant because of its ability to deter certain pests. Nasturtiums thrive in full sun to partial shade and require well-drained soil.</p><h3>Culinary Use</h3><p>Both the leaves and flowers of Nasturtium are edible, with a spicy, peppery flavor that adds a zesty note to salads, sandwiches, and garnishes. The unripe seed pods can be pickled and used as a caper substitute.</p>"
    }
    
  ];

  const container = document.getElementById('vegetables');
  veggies.forEach(veg => {
    const vegElement = document.createElement('div');
    vegElement.setAttribute('id', veg.name.replace(/\s+/g, ''));
    vegElement.innerHTML = `
      <img src="${veg.image}" alt="${veg.name}">
      <h3>${veg.name}</h3>
      <p>${veg.desc}</p>
    `;
    container.appendChild(vegElement);
  });

  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('menu-toggle');
  const closeButton = document.getElementById('close-sidebar'); // Use existing close button from HTML

  toggleButton.addEventListener('click', function() {
    // Toggle sidebar visibility
    sidebar.style.transform = (sidebar.style.transform === 'translateX(0%)') ? 'translateX(100%)' : 'translateX(0%)';
  });

  closeButton.addEventListener('click', function() {
    // Close sidebar when 'x' is clicked
    sidebar.style.transform = 'translateX(100%)';
  });

  // Spin effect on sidebar links
  const links = sidebar.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.style.transform = 'translateX(100%)';
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const img = targetElement.querySelector('img');
        if (img) {
          img.style.animation = 'spin 0.5s ease-in-out';
          img.addEventListener('animationend', () => {
            img.style.animation = '';
          }, { once: true });
        }
      }
    });
  });

  // Scroll to top functionality
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('upArrow').style.display = "block";
    } else {
      document.getElementById('upArrow').style.display = "none";
    }
  };

  document.getElementById('upArrow').onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});