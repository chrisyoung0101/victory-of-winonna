document.addEventListener("DOMContentLoaded", function() {
    const veggies = [
        {
          "name": "Pasilla Bajia",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/pasilla-bajio-pepper.jpeg",
          "desc": "Pasilla means \"little raisin\" in Spanish, referring to the dark brown, wrinkled, dried form of the chilaca pepper. Fresh chilaca adds depth to red enchilada sauce and salsas. The dried pod, or pasilla, is a flavorful and important ingredient in traditional mole sauce. 1,000–2,000 Scoville heat units (mild). Plants are tobacco mosaic virus resistant.Variety InfoDays to Maturity: 80 days from transplantingFamily: Solanaceae, Nightshade family, includes tomatoes, potatoes, petunias, nicotiana, Chinese lantern, and eggplant.Type: Under 5000 Scoville Units, Chile Pepper (Learn more)Native: AmericasHardiness: Frost-sensitive perennial grown as an annualExposure: Full sunPlant Dimensions: 24\"–36\" tallVariety Info: Narrow, cylindrical pods up to 10\" long by 1\" wide; dark green maturing to dark brown. 'Pasilla Bajio' is a mild pepper at 1,000–2,000 Scoville heat units.Attributes: Tobacco Mosaic Virus Resistant, Frost Sensitive, Good for ContainersSowing InfoWhen to Sow Outside: For mild climates only: 2 to 4 weeks after your average last frost date, when soil temperature is at least 70°F.When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°‒90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: Can also sow in late summer for fall/winter crop.Days to Emerge: 10 – 25 daysSeed Depth: ¼\"Seed Spacing: Start indoorsRow Spacing: 24\" ‒ 36\"Thinning: Start indoors, plant seedlings 18\" ‒ 24\" apart outsideGrowing InfoHarvesting: Harvest when 6\"–10\" long and when peppers are dark brown. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting, or wear gloves to harvest peppers."
        },
        {
          "name": "Golden Marconi",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/golden_marconi_pepper.jpg",
          "desc": "https://www.chileplants.com/search.aspx?ProductCode=PEPMAG"
        },
        {
          "name": "Thai hot",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Thai-Hot-Chili-Pepper.jpeg",
          "desc": "The chile-loving Thais consume more hot peppers than any other culture. Discover the delights of 'Thai Hot' flavor in your favorite stir-fry or other Asian dish! Compact, mounding 8\" tall plants covered with 1½\"-3\" long, upright red and green peppers at the same time is a festive and decorative choice for patio containers. 50,000-100,000 Scoville heat units (very hot)."
        },
        {
          "name": "Shishito Pepper",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Shishito_Peppers.jpeg",
          "desc": "The 'Shishito' is finding its way into many restaurants as a popular appetizer. The 2\"–4\" slender peppers have a citrusy, slightly smoky flavor enhanced by grilling or sautéing, and can be the life of the party when an occasional hot one passes the mouth of the unsuspecting. Highly productive plants. 50–200 Scoville heat units (mild).Variety InfoDays to Maturity: 60–75 days from transplantingFamily: SolanaceaeType: Under 1000 Scoville Units, Chile Pepper (Learn more)Native: AmericasHardiness: Frost-sensitive perennial grown as an annualExposure: Full sunPlant Dimensions: 24\"–36\" tallVariety Info: 2\"–4\" long, thin, medium green, slightly wrinkled, some curved. Flavor is citrusy and slightly smoky. About 90 percent of shishitos will be mild, but the others will be slightly hot. Scoville heat units for 'Shishito' are 50–200, making the occasional hot pepper quite mild.Attributes: Frost Sensitive, Good for ContainersSowing InfoWhen to Sow Outside: For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.Days to Emerge: 10–25 daysSeed Depth: ¼\"Seed Spacing: Start indoorsRow Spacing: 24\"–36\"Thinning: Start indoors, plant seedlings 18\"–24\" apart outsideGrowing InfoHarvesting: Generally harvested when green, at 2\"–4\" long, but can also be left on the plant to mature to red. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting or wear gloves to harvest peppers."
        },
        {
          "name": "Himo Togarashi",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Himo-Togarashi.webp",
          "desc": "80-90 Days to maturity (from transplant). Capsicum annuum. Himo Togarashi Pepper Seeds. Non-GMO, annual, open-pollinated, heirloom, sweet pepper with no heat. 0 Scoville Heat Units. Suitable for growing in garden plots, raised beds, and greenhouses. Himo Togarshi is a specialty green pepper that is a Yamato dento yasai, which means it has been selected as a Nara prefecture traditional vegetable. The pepper grows 4-6 inches long and up to 0.25 inches in diameter (less than the diameter of a pencil). The peppers hang down on the plant and look like strings or himo in Japanese. Pepper Seeds - Sweet - Himo TogarashiThe pepper grows 4-6\" long and up to .25\" in diameter (less than the diameter of a pencil). The peppers hang down on the plant and look like strings or himo in Japanese. Start seeds inside 6 weeks before last frost date (or 8 weeks before expected transplanting date). Keep soil warm until emergence. Seeds will not germinate in cool soil and planting out too early may affect plant vigor. Harden off plants carefully before transplanting. Prepare fertile, well-drained soil. Transplant in late spring/summer (soil temperatures at least above 60°F) in a very warm and sunny location. Fertilize as needed. Too much nitrogen will produce lush foliage and few fruits. For mild peppers, harvest young when about 4\" long. Larger peppers may become tough skinned and spicy. Excellent for ohitashi, tempura, yakitori, and hot sauteed with sea salt."
        },
        {
          "name": "Jimmy Nardello Pepper",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Pepper-Jimmy-Nardello-960x640-.jpeg",
          "desc": "This Italian heirloom was brought to America by the Nardello family in 1887, and named for the most garden-devoted of their 11 children, Jimmy. The 6\"-12\" peppers have an exceptionally sweet, rich flavor, making them the quintessential Italian frying pepper. Delicious in chili and salsa, or dried and ground for paprika. Prolific plants grow well in most areas.Variety InfoDays to Maturity: 80–90 days from transplantingFamily: SolanaceaeType: Sweet Pepper (Learn more)Native: AmericasHardiness: Frost-sensitive perennial grown as an annualExposure: Full sunPlant Dimensions: 24\" tall, 18\" wideVariety Info: 6\"–12\" peppers start out green and ripen to deep, glossy red with a very sweet, rich flavor.Attributes: Frost Sensitive, Good for ContainersSowing InfoWhen to Sow Outside: For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.Days to Emerge: 10–25 daysSeed Depth: ¼\"Seed Spacing: Start indoorsRow Spacing: 24\"–36\"Thinning: Start indoors, plant seedlings 18\"–24\" apart outsideGrowing InfoHarvesting: Jimmy Nardello' can be eaten when green, but for optimum flavor, pick peppers at 6\"–12\" long, when bright, glossy red."
        },
        {
          "name": "Scotch Bonnet",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/scotch-bonnet.jpeg",
          "desc": "The 'Scotch Bonnet' is powerfully hot, similar to the habanero but with a fruity or smoky flavor. Also known as 'Jamaica Red' and sometimes called the Scotty Bon or Bonny pepper, it is named for its resemblance to a Scottish cap. If you like your peppers fiery hot, you will enjoy its citrus, apricot-like flavor that is sweetest when the fruit turns red. Try it in jerk dishes, mango salsa, blended with dark chocolate, or with fruit. 100,000-325,000 Scoville heat units (extremely hot)."
        },
        {
          "name": "Galahad Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/galahad_tomato.jpeg",
          "desc": "Delicious early determinate beefsteak.Galahad boasts fantastic flavor and an impressive disease resistance profile, which extends much-needed protection to regions ranging from the Midwest to the Deep South. Early maturity and early blight resistance make Galahad a strong contender in the North. The round, 7–12 oz. fruits can be harvested with green shoulders and ripened red in storage, or ripened on the vine. Vigorous plants. AAS Regional Winner for the Heartland, West/Northwest regions. Determinate. USDA Certified Organic.Disease Resistance:Early Blight (Intermediate)Fusarium Wilt races 1–3 (High)Gray Leaf Spot (High)Late Blight (High)Nematodes (High)Tomato Spotted Wilt Virus (High)Verticillium Wilt (High)Specs:Packet: 15 seedsAvg. 123,000 seeds/lbSCIENTIFIC NAME:Solanum lycopersicumDETERMINATE (Bush):Varieties do not need pruning and may be grown with or without support; fruit ripens within a concentrated time period.INDETERMINATE (Climbing):Varieties should be staked, trellised, or caged, and pruned for best results; fruit ripens over an extended period.CULTURE:Medium-rich soil with pH 6.0–6.8 preferred. Fertilize accurately since excess nitrogen causes rampant growth, rot, and delayed ripening. For short determinates, succession-plant every 4–6 weeks. Tomatoes typically germinate in 5–7 days.TRANSPLANTING:Don't start too early—leggy, root-bound, or flowering transplants can cause stunting and reduce early production. About 5–6 weeks before transplanting, sow 1/4\" deep in 20-row flats with 20 seeds/row, or in 200-cell trays with 1 seed/cell; lightly cover. Keep mix at 75–85°F (24–29°C) with moderate moisture. At first true leaf, pot-up to 50-cell trays or 4\" pots, depending on expected transplant timing. Grow at constant 60–70°F (16–21°C) temp and use complete fertilizer until hardened-off. Supplemental lights and lower night temps control stretching. For earliest crop, plant under row cover around last frost date. Avoid exposing unprotected plants to consecutive nightly temperatures below 45°F (7°C). In rows 4–6' apart, space determinates 12–24\" and indeterminates 24–36\". Plant deeply to encourage adventitious rooting. Water seedlings with a high-phosphate fertilizer solution at planting to help boost early yields.TRELLISING:Basket-weave by pounding 5–6' stakes every 2–3 plants, using heavier t-posts intermittently and at ends of beds. For tall indeterminates, consider short extensions or pruning once they outgrow a manageable size for easy harvest.PRUNING:Indeterminates likely benefit by removing all suckers under the first strong branch directly below the first flower cluster. The lower bottom suckers often miss trellis supports, set fruit closer to soil, take energy from upper parts, and encourage spread of disease from soil. If needed later in season, consider thinning out leaves to increase airflow or topping plants to help finish ripening last fruits. DISEASES & INSECT PESTS:Learn your common pests and options for control, including resistant cultivars and pesticides. Avoid wet leaves and handling when wet or using tobacco products. Manage plant debris and crop rotations. HARVEST:Fruits ripen gradually from the blossom end to shoulders and from the base of clusters to the tips. Harvest softer fruit unstacked into shallow, padded trays. Use fully ripe fruit only for local retail or home-use. To deliver sound fruit, pick less ripe the further the distance and the longer the time between field and customer. Any fruit breaking color will still ripen post-harvest. Calyx can be removed or kept to prove freshness. If staking larger fruit with calyx on, consider trimming below shoulders when harvesting.STORAGE:Store blemish-free, near-ripe fruit 4–7 days at room temperature in darkness. Store longer with proper variety selection, picking less-ripe, and keeping at cooler temperatures 45–60°F (7–16°C). Colder and picking too green will sacrifice end-quality.DAYS TO MATURITY:From transplants.TRANSPLANTS:Avg. 850 plants/1,000 seeds, 10,200 plants/oz."
        },
        {
          "name": "Lucid Gem Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/LUCID-GEM.jpeg",
          "desc": "Product InformationLucid Gem tomatoes are one of a kind! Lucid Gem tomatoes are purple on top with red and orange bottoms. The insides of these lusciously flavored tomatoes are almost tie-dyed! A heavy producing tomato on our San Diego farm with exceptional yield even when neglected.Planting by ZonesZones 9-10Tomatoes grow well in the extended warm season of Zones 9 and 10. Often times you can grow tomatoes year round. This process is called perennialization. It happens when a typically annual plant grows year round in mild weather. In Zones 9 and 10, you can grow tomatoes year round but their productivity will greatly dimension once temperatures cool and the days are shorter. As a grower, you should make the decision to pull your tomato plants if they stop producing at a healthy rate, are diseased, or if space is needed for more seasonal vegetables.In Zones 9 and 10, you can start tomatoes from seed as early as February as long as they are protected from the cold. Do not let your seedlings get root bound in their containers. All seeds of the Solanaceae family enjoy warm temperatures to germinate. Using a heating pad can greatly increase the germination rate and speed.Zones 2-8Sow seeds in starter pots with a heating pad 5-6 weeks before the last frost. Transplant out after the danger of frost is gone.Planting Tomato SeedsTomato seeds are easy to start with a few key things. Tomatoes germinate very slowly in cold soil. If you are starting your seeds early in the season you may want to use a heating mat to ensure the soil is warm enough for quick germination. Soil temperature should be 75-90°F.If you are planting seeds in starter pots, plant seeds into thoroughly moist high-quality seed starting soil. Place seeds on top of the soil and cover with 1/4″ of finely sifted soil.If you plan to direct sow (not recommended), follow the same instructions for starter pots or plug trays.Once the seedlings have germinated and have a first set of true leaves be sure to fertilize regularly with an organic liquid fertilizer.Seedlings can be planted into the garden when they are 7-8 weeks old or 5-6″ tall and stocky. Tomatoes are a unique crop because they can be planted deeply into the ground. This is recommended because the tiny white hairs on the tomato plant become roots. Plant your starts all the way down into the soil until only 3-4″ of the top leaves show. Tomatoes thrive in full sun.Growing TomatoesA granular organic fertilizer added to the planting area is a good idea if your garden has poor nutrient content or if you are growing in a new raised bed.The method that you grow tomatoes depends on the type of tomato. There are three tomato types:Determinate or Bush tomato varieties do not typically need pruning (some pruning can be helpful) and may be grown with or without support. Fruit of determinate varieties ripens in clusters or all at once. Traditional sauce tomatoes are determinate.Indeterminate or Pole tomato varieties grow long and wild. Indeterminate tomatoes must have a support system, like the tomahook, to grow on or they will become a mess. We recommend that you prune them heavily to control the fruit set. You can do so by pruning back the suckers.Semi-determinate tomato varieties have a bushier appearance but do not ripen their fruit all at once. They will require far less support than indeterminate tomatoes but can benefit from support as simple as a tomato cage.Growing Tomatoes in ContainersIf you are planting tomatoes in containers, make sure your container is at least 20″ deep. Keep in mind containers will dry out faster because they have more surface area and less soil to hold onto moisture. Mulch heavily on the top layer of soil in the pot to keep the soil from drying out or heating up too much.We recommend that you grow determinate or bush varieties of tomatoes in pots as they are easier to manage.Harvesting Tomatoes Tomatoes are best harvested at peak ripeness. This is typically when fruits have turned their appropriate color and have a slight give.Southern California Pro-tipsIn areas of Zones 9 and 10, tomatoes can be grown year round but may decrease drastically in production.Mulch heavily around your tomato plants to ensure the soil does not dry out or heat up too much.During our hottest months of August, September, and October, plants can suffer from the heat. Using shade cloth can help protect the plants from extreme heat.In July and August keep an eye out for the tomato hornworm. This beautiful and slightly scary-looking large caterpillar can devour huge parts of your plant. You can find them by following their poop trails. Handpick them off and toss in a bucket of soapy water.Companion Flowers/CropsTomatoes can get very large. For this reason, we recommend planting low lying plants around them. Flowers like alyssum and nasturtium look beautiful in a tomato bed!Additional Learning ResourcesNew to starting crops from seeds? Please watch our Seed Starting Presentation to learn the basics!Learn about growing all our crops on our YouTube page!Having pest issues? Check out in-depth information for pests that can be an issue to tomatoes at the UC Integrated Pest Management site."
        },
        {
          "name": "Money Maker Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tomato-moneymaker-1.jpg",
          "desc": "A very popular variety for commercial growers in the 1950s and 1960s, 'Moneymaker' earned its name because of its uniformity and reliably heavy yields. The medium-sized fruits are sweet with a meaty texture, making them versatile for use in fresh or cooked dishes. A good choice for greenhouses as well as outdoors. A favorite of southern gardeners and those in climates with hot, humid summers.Variety InfoDays to Maturity: 75 – 80 days from transplantingFamily: SolanaceaeType: Indeterminate, Slicing Tomato (Learn more)Native: AndesHardiness: Frost-sensitive annualExposure: Full sunPlant Dimensions: Vines up to 6' or longerVariety Info: 3½–4 ounce, 2 1/2\" globe-shaped fruits. 'Moneymaker' is an indeterminate type tomato.Attributes: Heat Tolerant, Humidity Tolerant, Frost SensitiveSowing InfoWhen to Sow Outside: For mild climates only: 1 to 2 weeks after your average last frost date, and when soil temperature is at least 60°F.When to Start Inside: RECOMMENDED. 4 to 6 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°‒90°F.Days to Emerge: 5 – 10 daysSeed Depth: ⅛\"Seed Spacing: A group of 3 seeds every 24\" – 36\"Row Spacing: 36\"Thinning: When 2\" tall, thin to 1 every 24\" – 36\"Growing InfoHarvesting: \"Moneymaker' tomatoes are at the peak of sun-ripened deliciousness when they are fully red, and have a slight give when gently squeezed. Tomatoes may also be picked at the “first blush” stage, when 50% of the tomatoes' color has begun to change, and ripened at room temperature without decreasing flavor or nutrition. Picking often and early increases yield, and decreases the risk of cracking and pest damage. Ripe fruit left on the vine during rain or watering is more susceptible to splitting. About 1 month before the average first fall frost, clip all blossoms and undersized fruit off the plant, signaling to the plant to ripen what’s left. Pick any unripe fruit before frost, and store them indoors in a single layer away from direct sunlight to ripen.\"Special Care: Do not mulch when weather is still cool; the roots of young plants need to be in soil that is warmed by the sun. When the weather warms up and plants are established, mulch to a depth of 2\" or 3\" with a material such as straw, leaves, or compost, to conserve moisture, reduce weed growth, and keep the roots warm."
        },
        {
          "name": "Lil Bites Cherry Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/littl-bites-cherry-tomato.jpg",
          "desc": "Bred in England, where tomato conditions are tough, Litt’l Bites is the ultimate patio tomato, bearing scrumptious fruit on compact, productive plants. These fast-growing little powerhouses are soon covered with multiple cascading sprays of bite-size fruits that can only be described as truly delicious little sweet morsels of goodness. Pretty Litt'l Bites plants form dense, mounding canopies about 20 in. wide and 12 in. tall and produce till frost, making them ideal for colorful, attractive hanging baskets and containers.Litt’l Bites plants cascade attractively from their containers and are soon covered with tasty little cherry tomatoes. Pick and enjoy these cute little baby tomatoes frequently when red ripe to encourage the most production. For best flavor don’t store Litt’l Bites in the fridge.Sow Seeds Indoors Feb – MarchDays To Germinate 7 – 14 daysTransplant OutdoorsIn Full Sun April – JuneMature Height 12 – 20 inchesTransplant To Harvest 65 days"
        },
        {
          "name": "Cherry Falls Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/cherry_falls_cherry_tomato.jpeg",
          "desc": "55 days. Low on space? Grow this compact, cascading, determinate Tomato in a patio pot or hanging basket! The plant grows only 6\" tall but tumbles up to 3' over the side of a container. Despite its diminutive stature, it produces oodles and oodles of 1½\" sweet red Tomatoes. (OP.) "
        },
        {
          "name": "Fortamino Rootstock Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/fortamino-tomato.jpeg",
          "desc": "Improve your favorite heirloom or prized tomato's performance by grafting it to 'Fortamino'! This rootstock provides your tomato with a better leaf cover that helps prevent sunburn (fruit scald), increases flowers per truss and fruit weight, and improves resilience to stress and heat resistance. 'Fortamino' grafting also improves your tomato's disease resistance to Fusarium crown and root rot, Fusarium wilt, leaf mold, tomato mosaic virus, verticillium wilt, root-knot nematodes, and tomato spotted wilt virus.Variety InfoFamily: SolanaceaeType: Tomato RootstockNative: AndesHardiness: Frost-sensitive annualExposure: Full sunVariety Info: Fortamino' is a rootstock tomato that is used in grafting to other tomato cultivars to add heat resistance, improved leaf cover, increased flowering, increased fruit size, and disease resistance to Fusarium crown and root rot, Fusarium wilt, leaf mold, tomato mosaic virus, verticillium wilt, root knot nematodes, corky root rot, and tomato spotted wilt virus.Attributes: Fusarium Crown & Root Rot Resistant, Fusarium Wilt Resistant, Leaf Mold Resistant, Tomato Mosaic Virus Resistant, Verticillium Wilt Resistant, Root Knot Nematode Resistant, Tomato Spotted Wilt Virus Resistant, Frost SensitiveSowing InfoWhen to Sow Outside: Not applicable.When to Start Inside: RECOMMENDED. 6 to 8 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°–90°F.Days to Emerge: 5–10 daysSeed Depth: 1/8\"–1/4\"Seed Spacing: Transplant 1 every 24\"–36\""
        },
        {
          "name": "San Marzano Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/san-marzano-tomato.jpeg",
          "desc": "San Marzano' may very well be the mother of all paste tomatoes, as it is believed by some tomato aficionados to be the parent of almost all the paste tomatoes bred in the U.S. since the 1920s. For generations, Italians have cherished this large, paste tomato as the very best for sauce and canning, and when it comes to sauce, Italians would know! Vigorous vines reach 6' or more.Variety InfoDays to Maturity: 70–90 days from transplantingFamily: SolanaceaeType: Indeterminate, Paste Tomato (Learn more)Native: AndesHardiness: Frost-sensitive annualExposure: Full sunPlant Dimensions: Vines up to 6' or longerVariety Info: 3\"–4\" long, 1 ½\" wide, oblong, red fruits. 'San Marzano' is a \"paste\" tomato.Attributes: Frost SensitiveSowing InfoWhen to Sow Outside: For mild climates only: 1 to 2 weeks after your average last frost date, and when soil temperature is at least 60°F.When to Start Inside: RECOMMENDED. 4 to 6 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°–90°F.Days to Emerge: 5–10 daysSeed Depth: ¼\"Seed Spacing: A group of 3 seeds every 24\"–36\"Row Spacing: 36\"Thinning: When 2\" tall, thin to 1 every 24\"–36\"Growing InfoHarvesting: San Marzano' tomatoes are at the peak of sun-ripened deliciousness when red, and have a slight give when gently squeezed."
        },
        {
          "name": "Tasmanian Chocolate Heirloom Container Tomatoes",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tasmanian-chocolate-tomato.jpeg",
          "desc": "Strong-yielding, short, sturdy vines bear heavy crops of beautiful, plump, mahogany red faintly striped tomatoes with delicious, well-balanced flavor. A perfect variety to grow in containers or small space gardens. Tasmanian chocolate tomatoes are heavy for their size, extra juicy and perfect for BLTs, sliced for salads or enjoy in good old-fashioned tomato sandwiches."
        },
        {
          "name": "Cherokee Carbon Tomato",
          "image": "https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/cherokee-carbon-tomato.jpeg",
          "desc": "What do you get when you cross the two heirloom favorites, 'Cherokee Purple' and 'Carbon'? A tomato lover's dream with heirloom flavor earlier in the season, increased production, and less cracks and blemishes. Large, 10-12-ounce, purple beefsteak fruit are perfect for slicing and the rich flavor is literally award winning--it won best tasting tomato in the 2005 \"Heirloom Garden Show\"!Variety InfoDays to Maturity: 75–80 days from transplantingFamily: SolanaceaeType: Indeterminate, Slicing Tomato (Learn more)Native: AndesHardiness: Frost-sensitive annualExposure: Full sunPlant Dimensions: Vines up to 6' or longerVariety Info: 10–12-ounce, purple-burgundy fruits. 'Cherokee Carbon' is an indeterminate type tomato.Attributes: Crack Resistant, Frost SensitiveSowing InfoWhen to Sow Outside: For mild climates only: 1 to 2 weeks after your average last frost date, and when soil temperature is at least 60°F.When to Start Inside: RECOMMENDED. 4 to 6 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°–90°F.Days to Emerge: 5–10 daysSeed Depth: 1/4\"Seed Spacing: A group of 3 seeds every 24\"–36\"Row Spacing: 36\"Thinning: When 2\" tall, thin to 1 every 24\"–36\"Growing InfoHarvesting: Cherokee Carbon' tomatoes are at the peak of sun-ripened deliciousness when deep purple-burgundy, and have a slight give when gently squeezed."
        }
      ];

    const container = document.getElementById('vegetables');
    veggies.forEach(veg => {
        const vegElement = document.createElement('div');
        vegElement.innerHTML = `
            <img src="${veg.image}" alt="${veg.name}">
            <h3>${veg.name}</h3>
            <p>${veg.desc}</p>
        `;
        container.appendChild(vegElement);
    });
});


//  images/Habanada_Pepper.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Habanada_Pepper.jpeg



// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/fortamino-root-tomato.html

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/galahad_tomato.jpg  

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/golden_marconi_pepper.jpg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Habanada_Pepper.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Himo-Togarashi.webp

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/littl-bites-cherry-tomato.jpg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/LUCID-GEM.jpg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/pasilla-bajio-pepper.jpg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Pepper-Jimmy-Nardello-960x640-.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/san-marzano-tomato.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/scotch-bonnet.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Shishito_Peppers.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/tasmanian-chocolate-tomato.jpg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/maini/mages/Thai-Hot-Chili-Pepper.jpeg

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tomato-moneymaker-1.jpg



// Pasilla Bajia x 4 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/pasilla-bajio-pepper.jpg

// Pasilla means "little raisin" in Spanish, referring to the dark brown, wrinkled, dried form of the chilaca pepper. Fresh chilaca adds depth to red enchilada sauce and salsas. The dried pod, or pasilla, is a flavorful and important ingredient in traditional mole sauce. 1,000–2,000 Scoville heat units (mild). Plants are tobacco mosaic virus resistant.







// Variety Info

// Days to Maturity: 80 days from transplanting

// Family: Solanaceae, Nightshade family, includes tomatoes, potatoes, petunias, nicotiana, Chinese lantern, and eggplant.

// Type: Under 5000 Scoville Units, Chile Pepper (Learn more)

// Native: Americas

// Hardiness: Frost-sensitive perennial grown as an annual

// Exposure: Full sun

// Plant Dimensions: 24"–36" tall

// Variety Info: Narrow, cylindrical pods up to 10" long by 1" wide; dark green maturing to dark brown. 'Pasilla Bajio' is a mild pepper at 1,000–2,000 Scoville heat units.

// Attributes: Tobacco Mosaic Virus Resistant, Frost Sensitive, Good for Containers

// Sowing Info

// When to Sow Outside: For mild climates only: 2 to 4 weeks after your average last frost date, when soil temperature is at least 70°F.

// When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°‒90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: Can also sow in late summer for fall/winter crop.

// Days to Emerge: 10 – 25 days

// Seed Depth: ¼"

// Seed Spacing: Start indoors

// Row Spacing: 24" ‒ 36"

// Thinning: Start indoors, plant seedlings 18" ‒ 24" apart outside

// Growing Info

// Harvesting: Harvest when 6"–10" long and when peppers are dark brown. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting, or wear gloves to harvest peppers.



// Golden Marconi x 3 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/golden_marconi_pepper.jpg

// https://www.chileplants.com/search.aspx?ProductCode=PEPMAG



// Thai hot x 4

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/maini/mages/Thai-Hot-Chili-Pepper.jpeg

// The chile-loving Thais consume more hot peppers than any other culture. Discover the delights of 'Thai Hot' flavor in your favorite stir-fry or other Asian dish! Compact, mounding 8" tall plants covered with 1½"-3" long, upright red and green peppers at the same time is a festive and decorative choice for patio containers. 50,000-100,000 Scoville heat units (very hot).



// Variety Info

// Days to Maturity: 90 days from transplanting

// Family: Solanaceae

// Type: Over 50000 Scoville Units, Chile Pepper (Learn more)

// Native: Americas

// Hardiness: Frost-sensitive perennial grown as an annual

// Exposure: Full sun

// Plant Dimensions: 8"–10" tall and wide, mounding plant.

// Variety Info: Thin, elongated and pointed, about 1 ½"–3" long, thin-fleshed, bright green turning to red when mature. 'Thai Hot' is a very hot pepper at 50,000–100,000 Scoville heat units.

// Attributes: Frost Sensitive, Good for Containers

// Sowing Info

// When to Sow Outside: For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.

// When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.

// Days to Emerge: 10–25 days

// Seed Depth: ¼"

// Seed Spacing: Start indoors

// Row Spacing: 18"–24"

// Thinning: Start indoors, plant seedlings 12"–16" apart outside

// Growing Info

// Harvesting: Harvest when peppers have turned from green to red. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting or wear gloves to harvest peppers.





// Shishito x 3 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Shishito_Peppers.jpeg


// The 'Shishito' is finding its way into many restaurants as a popular appetizer. The 2"–4" slender peppers have a citrusy, slightly smoky flavor enhanced by grilling or sautéing, and can be the life of the party when an occasional hot one passes the mouth of the unsuspecting. Highly productive plants. 50–200 Scoville heat units (mild).



// Variety Info

// Days to Maturity: 60–75 days from transplanting

// Family: Solanaceae

// Type: Under 1000 Scoville Units, Chile Pepper (Learn more)

// Native: Americas

// Hardiness: Frost-sensitive perennial grown as an annual

// Exposure: Full sun

// Plant Dimensions: 24"–36" tall

// Variety Info: 2"–4" long, thin, medium green, slightly wrinkled, some curved. Flavor is citrusy and slightly smoky. About 90 percent of shishitos will be mild, but the others will be slightly hot. Scoville heat units for 'Shishito' are 50–200, making the occasional hot pepper quite mild.

// Attributes: Frost Sensitive, Good for Containers

// Sowing Info

// When to Sow Outside: For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.

// When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.

// Days to Emerge: 10–25 days

// Seed Depth: ¼"

// Seed Spacing: Start indoors

// Row Spacing: 24"–36"

// Thinning: Start indoors, plant seedlings 18"–24" apart outside

// Growing Info

// Harvesting: Generally harvested when green, at 2"–4" long, but can also be left on the plant to mature to red. When harvesting, take care to avoid touching the interior of any broken peppers, as the capsaicin is an extreme irritant, especially to the eyes. Wash hands thoroughly after harvesting or wear gloves to harvest peppers.











// Himo Togarashi x 5

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Himo-Togarashi.webp

// 80-90 Days to maturity (from transplant). Capsicum annuum. Himo Togarashi Pepper Seeds. Non-GMO, annual, open-pollinated, heirloom, sweet pepper with no heat. 0 Scoville Heat Units. Suitable for growing in garden plots, raised beds, and greenhouses. Himo Togarshi is a specialty green pepper that is a Yamato dento yasai, which means it has been selected as a Nara prefecture traditional vegetable. The pepper grows 4-6 inches long and up to 0.25 inches in diameter (less than the diameter of a pencil). The peppers hang down on the plant and look like strings or himo in Japanese.



// Pepper Seeds - Sweet - Himo Togarashi

// The pepper grows 4-6" long and up to .25" in diameter (less than the diameter of a pencil). The peppers hang down on the plant and look like strings or himo in Japanese. Start seeds inside 6 weeks before last frost date (or 8 weeks before expected transplanting date). Keep soil warm until emergence. Seeds will not germinate in cool soil and planting out too early may affect plant vigor. Harden off plants carefully before transplanting. Prepare fertile, well-drained soil. Transplant in late spring/summer (soil temperatures at least above 60°F) in a very warm and sunny location. Fertilize as needed. Too much nitrogen will produce lush foliage and few fruits. For mild peppers, harvest young when about 4" long. Larger peppers may become tough skinned and spicy. Excellent for ohitashi, tempura, yakitori, and hot sauteed with sea salt.





// Jimmy Nardello x 5 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/Pepper-Jimmy-Nardello-960x640-.jpeg

// This Italian heirloom was brought to America by the Nardello family in 1887, and named for the most garden-devoted of their 11 children, Jimmy. The 6"-12" peppers have an exceptionally sweet, rich flavor, making them the quintessential Italian frying pepper. Delicious in chili and salsa, or dried and ground for paprika. Prolific plants grow well in most areas.



// Variety Info

// Days to Maturity: 80–90 days from transplanting

// Family: Solanaceae

// Type: Sweet Pepper (Learn more)

// Native: Americas

// Hardiness: Frost-sensitive perennial grown as an annual

// Exposure: Full sun

// Plant Dimensions: 24" tall, 18" wide

// Variety Info: 6"–12" peppers start out green and ripen to deep, glossy red with a very sweet, rich flavor.

// Attributes: Frost Sensitive, Good for Containers

// Sowing Info

// When to Sow Outside: For Mild Climates only: 2 to 4 weeks after average last frost, when soil temperature is at least 70°F.

// When to Start Inside: RECOMMENDED. 8 to 10 weeks before transplanting. Ideal soil temperature for germination is 70°–90°F. Transplant seedlings outside 2 to 4 weeks after your average last frost date, and when daytime temperatures are at least 70°F, and nighttime temperatures are at least 55°F. Mild Climates: May be sown in late summer for fall/winter crop.

// Days to Emerge: 10–25 days

// Seed Depth: ¼"

// Seed Spacing: Start indoors

// Row Spacing: 24"–36"

// Thinning: Start indoors, plant seedlings 18"–24" apart outside

// Growing Info

// Harvesting: Jimmy Nardello' can be eaten when green, but for optimum flavor, pick peppers at 6"–12" long, when bright, glossy red.







// Scotch Bonnet x 3 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/scotch-bonnet.jpeg

// The 'Scotch Bonnet' is powerfully hot, similar to the habanero but with a fruity or smoky flavor. Also known as 'Jamaica Red' and sometimes called the Scotty Bon or Bonny pepper, it is named for its resemblance to a Scottish cap. If you like your peppers fiery hot, you will enjoy its citrus, apricot-like flavor that is sweetest when the fruit turns red. Try it in jerk dishes, mango salsa, blended with dark chocolate, or with fruit. 100,000-325,000 Scoville heat units (extremely hot).





// Galahad x 7 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/galahad_tomato.jpg 

// Delicious early determinate beefsteak.

// Galahad boasts fantastic flavor and an impressive disease resistance profile, which extends much-needed protection to regions ranging from the Midwest to the Deep South. Early maturity and early blight resistance make Galahad a strong contender in the North. The round, 7–12 oz. fruits can be harvested with green shoulders and ripened red in storage, or ripened on the vine. Vigorous plants. AAS Regional Winner for the Heartland, West/Northwest regions. Determinate. USDA Certified Organic.

// Disease Resistance:

// Early Blight (Intermediate)
// Fusarium Wilt races 1–3 (High)
// Gray Leaf Spot (High)
// Late Blight (High)
// Nematodes (High)
// Tomato Spotted Wilt Virus (High)
// Verticillium Wilt (High)
// Specs:

// Packet: 15 seeds
// Avg. 123,000 seeds/lb


// SCIENTIFIC NAME:

// Solanum lycopersicum

// DETERMINATE (Bush):

// Varieties do not need pruning and may be grown with or without support; fruit ripens within a concentrated time period.

// INDETERMINATE (Climbing):

// Varieties should be staked, trellised, or caged, and pruned for best results; fruit ripens over an extended period.

// CULTURE:

// Medium-rich soil with pH 6.0–6.8 preferred. Fertilize accurately since excess nitrogen causes rampant growth, rot, and delayed ripening. For short determinates, succession-plant every 4–6 weeks. Tomatoes typically germinate in 5–7 days.

// TRANSPLANTING:

// Don't start too early—leggy, root-bound, or flowering transplants can cause stunting and reduce early production. About 5–6 weeks before transplanting, sow 1/4" deep in 20-row flats with 20 seeds/row, or in 200-cell trays with 1 seed/cell; lightly cover. Keep mix at 75–85°F (24–29°C) with moderate moisture. At first true leaf, pot-up to 50-cell trays or 4" pots, depending on expected transplant timing. Grow at constant 60–70°F (16–21°C) temp and use complete fertilizer until hardened-off. Supplemental lights and lower night temps control stretching. For earliest crop, plant under row cover around last frost date. Avoid exposing unprotected plants to consecutive nightly temperatures below 45°F (7°C). In rows 4–6' apart, space determinates 12–24" and indeterminates 24–36". Plant deeply to encourage adventitious rooting. Water seedlings with a high-phosphate fertilizer solution at planting to help boost early yields.

// TRELLISING:

// Basket-weave by pounding 5–6' stakes every 2–3 plants, using heavier t-posts intermittently and at ends of beds. For tall indeterminates, consider short extensions or pruning once they outgrow a manageable size for easy harvest.

// PRUNING:

// Indeterminates likely benefit by removing all suckers under the first strong branch directly below the first flower cluster. The lower bottom suckers often miss trellis supports, set fruit closer to soil, take energy from upper parts, and encourage spread of disease from soil. If needed later in season, consider thinning out leaves to increase airflow or topping plants to help finish ripening last fruits. 

// DISEASES & INSECT PESTS:

// Learn your common pests and options for control, including resistant cultivars and pesticides. Avoid wet leaves and handling when wet or using tobacco products. Manage plant debris and crop rotations. 

// HARVEST:

// Fruits ripen gradually from the blossom end to shoulders and from the base of clusters to the tips. Harvest softer fruit unstacked into shallow, padded trays. Use fully ripe fruit only for local retail or home-use. To deliver sound fruit, pick less ripe the further the distance and the longer the time between field and customer. Any fruit breaking color will still ripen post-harvest. Calyx can be removed or kept to prove freshness. If staking larger fruit with calyx on, consider trimming below shoulders when harvesting.

// STORAGE:

// Store blemish-free, near-ripe fruit 4–7 days at room temperature in darkness. Store longer with proper variety selection, picking less-ripe, and keeping at cooler temperatures 45–60°F (7–16°C). Colder and picking too green will sacrifice end-quality.

// DAYS TO MATURITY:

// From transplants.

// TRANSPLANTS:

// Avg. 850 plants/1,000 seeds, 10,200 plants/oz.







// Lucid Gem x 1 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/LUCID-GEM.jpg

// Product Information

// Lucid Gem tomatoes are one of a kind! Lucid Gem tomatoes are purple on top with red and orange bottoms. The insides of these lusciously flavored tomatoes are almost tie-dyed! A heavy producing tomato on our San Diego farm with exceptional yield even when neglected.

// Planting by Zones

// Zones 9-10

// Tomatoes grow well in the extended warm season of Zones 9 and 10. Often times you can grow tomatoes year round. This process is called perennialization. It happens when a typically annual plant grows year round in mild weather. In Zones 9 and 10, you can grow tomatoes year round but their productivity will greatly dimension once temperatures cool and the days are shorter. As a grower, you should make the decision to pull your tomato plants if they stop producing at a healthy rate, are diseased, or if space is needed for more seasonal vegetables.
// In Zones 9 and 10, you can start tomatoes from seed as early as February as long as they are protected from the cold. Do not let your seedlings get root bound in their containers. All seeds of the Solanaceae family enjoy warm temperatures to germinate. Using a heating pad can greatly increase the germination rate and speed.
// Zones 2-8

// Sow seeds in starter pots with a heating pad 5-6 weeks before the last frost. Transplant out after the danger of frost is gone.
// Planting Tomato Seeds

// Tomato seeds are easy to start with a few key things. Tomatoes germinate very slowly in cold soil. If you are starting your seeds early in the season you may want to use a heating mat to ensure the soil is warm enough for quick germination. Soil temperature should be 75-90°F.
// If you are planting seeds in starter pots, plant seeds into thoroughly moist high-quality seed starting soil. Place seeds on top of the soil and cover with 1/4″ of finely sifted soil.
// If you plan to direct sow (not recommended), follow the same instructions for starter pots or plug trays.
// Once the seedlings have germinated and have a first set of true leaves be sure to fertilize regularly with an organic liquid fertilizer.
// Seedlings can be planted into the garden when they are 7-8 weeks old or 5-6″ tall and stocky. Tomatoes are a unique crop because they can be planted deeply into the ground. This is recommended because the tiny white hairs on the tomato plant become roots. Plant your starts all the way down into the soil until only 3-4″ of the top leaves show. Tomatoes thrive in full sun.
// Growing Tomatoes

// A granular organic fertilizer added to the planting area is a good idea if your garden has poor nutrient content or if you are growing in a new raised bed.
// The method that you grow tomatoes depends on the type of tomato. There are three tomato types:
// Determinate or Bush tomato varieties do not typically need pruning (some pruning can be helpful) and may be grown with or without support. Fruit of determinate varieties ripens in clusters or all at once. Traditional sauce tomatoes are determinate.

// Indeterminate or Pole tomato varieties grow long and wild. Indeterminate tomatoes must have a support system, like the tomahook, to grow on or they will become a mess. We recommend that you prune them heavily to control the fruit set. You can do so by pruning back the suckers.

// Semi-determinate tomato varieties have a bushier appearance but do not ripen their fruit all at once. They will require far less support than indeterminate tomatoes but can benefit from support as simple as a tomato cage.

// Growing Tomatoes in Containers

// If you are planting tomatoes in containers, make sure your container is at least 20″ deep. Keep in mind containers will dry out faster because they have more surface area and less soil to hold onto moisture. Mulch heavily on the top layer of soil in the pot to keep the soil from drying out or heating up too much.
// We recommend that you grow determinate or bush varieties of tomatoes in pots as they are easier to manage.
// Harvesting Tomatoes 

// Tomatoes are best harvested at peak ripeness. This is typically when fruits have turned their appropriate color and have a slight give.
// Southern California Pro-tips

// In areas of Zones 9 and 10, tomatoes can be grown year round but may decrease drastically in production.
// Mulch heavily around your tomato plants to ensure the soil does not dry out or heat up too much.
// During our hottest months of August, September, and October, plants can suffer from the heat. Using shade cloth can help protect the plants from extreme heat.
// In July and August keep an eye out for the tomato hornworm. This beautiful and slightly scary-looking large caterpillar can devour huge parts of your plant. You can find them by following their poop trails. Handpick them off and toss in a bucket of soapy water.
// Companion Flowers/Crops

// Tomatoes can get very large. For this reason, we recommend planting low lying plants around them. Flowers like alyssum and nasturtium look beautiful in a tomato bed!
// Additional Learning Resources

// New to starting crops from seeds? Please watch our Seed Starting Presentation to learn the basics!
// Learn about growing all our crops on our YouTube page!
// Having pest issues? Check out in-depth information for pests that can be an issue to tomatoes at the UC Integrated Pest Management site.


// Money Maker x 6 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/tomato-moneymaker-1.jpg

// A very popular variety for commercial growers in the 1950s and 1960s, 'Moneymaker' earned its name because of its uniformity and reliably heavy yields. The medium-sized fruits are sweet with a meaty texture, making them versatile for use in fresh or cooked dishes. A good choice for greenhouses as well as outdoors. A favorite of southern gardeners and those in climates with hot, humid summers.



// Variety Info

// Days to Maturity: 75 – 80 days from transplanting

// Family: Solanaceae

// Type: Indeterminate, Slicing Tomato (Learn more)

// Native: Andes

// Hardiness: Frost-sensitive annual

// Exposure: Full sun

// Plant Dimensions: Vines up to 6' or longer

// Variety Info: 3½–4 ounce, 2 1/2" globe-shaped fruits. 'Moneymaker' is an indeterminate type tomato.

// Attributes: Heat Tolerant, Humidity Tolerant, Frost Sensitive

// Sowing Info

// When to Sow Outside: For mild climates only: 1 to 2 weeks after your average last frost date, and when soil temperature is at least 60°F.

// When to Start Inside: RECOMMENDED. 4 to 6 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°‒90°F.

// Days to Emerge: 5 – 10 days

// Seed Depth: ⅛"

// Seed Spacing: A group of 3 seeds every 24" – 36"

// Row Spacing: 36"

// Thinning: When 2" tall, thin to 1 every 24" – 36"

// Growing Info

// Harvesting: "Moneymaker' tomatoes are at the peak of sun-ripened deliciousness when they are fully red, and have a slight give when gently squeezed. Tomatoes may also be picked at the “first blush” stage, when 50% of the tomatoes' color has begun to change, and ripened at room temperature without decreasing flavor or nutrition. Picking often and early increases yield, and decreases the risk of cracking and pest damage. Ripe fruit left on the vine during rain or watering is more susceptible to splitting. About 1 month before the average first fall frost, clip all blossoms and undersized fruit off the plant, signaling to the plant to ripen what’s left. Pick any unripe fruit before frost, and store them indoors in a single layer away from direct sunlight to ripen."

// Special Care: Do not mulch when weather is still cool; the roots of young plants need to be in soil that is warmed by the sun. When the weather warms up and plants are established, mulch to a depth of 2" or 3" with a material such as straw, leaves, or compost, to conserve moisture, reduce weed growth, and keep the roots warm.









// Lil Bites x 1 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/littl-bites-cherry-tomato.jpg

// EXCLUSIVE – Bred in England, where tomato conditions are tough, Litt’l Bites is the ultimate patio tomato, bearing scrumptious fruit on compact, productive plants. These fast-growing little powerhouses are soon covered with multiple cascading sprays of bite-size fruits that can only be described as truly delicious little sweet morsels of goodness. Pretty Litt'l Bites plants form dense, mounding canopies about 20 in. wide and 12 in. tall and produce till frost, making them ideal for colorful, attractive hanging baskets and containers.



// Litt’l Bites plants cascade attractively from their containers and are soon covered with tasty little cherry tomatoes. Pick and enjoy these cute little baby tomatoes frequently when red ripe to encourage the most production. For best flavor don’t store Litt’l Bites in the fridge.

// Sow Seeds Indoors Feb – March

// Days To Germinate 7 – 14 days

// Transplant Outdoors

// In Full Sun April – June

// Mature Height 12 – 20 inches

// Transplant To Harvest 65 days









// Cherry Falls x 2 



// 55 days. Low on space? Grow this compact, cascading, determinate Tomato in a patio pot or hanging basket! The plant grows only 6" tall but tumbles up to 3' over the side of a container. Despite its diminutive stature, it produces oodles and oodles of 1½" sweet red Tomatoes. (OP.) 







// Fortamino Rootstock Tomato x 6 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/fortamino-root-tomato.html

// Improve your favorite heirloom or prized tomato's performance by grafting it to 'Fortamino'! This rootstock provides your tomato with a better leaf cover that helps prevent sunburn (fruit scald), increases flowers per truss and fruit weight, and improves resilience to stress and heat resistance. 'Fortamino' grafting also improves your tomato's disease resistance to Fusarium crown and root rot, Fusarium wilt, leaf mold, tomato mosaic virus, verticillium wilt, root-knot nematodes, and tomato spotted wilt virus.



// Variety Info

// Family: Solanaceae

// Type: Tomato Rootstock

// Native: Andes

// Hardiness: Frost-sensitive annual

// Exposure: Full sun

// Variety Info: Fortamino' is a rootstock tomato that is used in grafting to other tomato cultivars to add heat resistance, improved leaf cover, increased flowering, increased fruit size, and disease resistance to Fusarium crown and root rot, Fusarium wilt, leaf mold, tomato mosaic virus, verticillium wilt, root knot nematodes, corky root rot, and tomato spotted wilt virus.

// Attributes: Fusarium Crown & Root Rot Resistant, Fusarium Wilt Resistant, Leaf Mold Resistant, Tomato Mosaic Virus Resistant, Verticillium Wilt Resistant, Root Knot Nematode Resistant, Tomato Spotted Wilt Virus Resistant, Frost Sensitive

// Sowing Info

// When to Sow Outside: Not applicable.

// When to Start Inside: RECOMMENDED. 6 to 8 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°–90°F.

// Days to Emerge: 5–10 days

// Seed Depth: 1/8"–1/4"

// Seed Spacing: Transplant 1 every 24"–36"





// https://extension.purdue.edu/extmedia/HO/HO-260-W.pdf











// San Marzano x 4 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/san-marzano-tomato.jpeg

// San Marzano' may very well be the mother of all paste tomatoes, as it is believed by some tomato aficionados to be the parent of almost all the paste tomatoes bred in the U.S. since the 1920s. For generations, Italians have cherished this large, paste tomato as the very best for sauce and canning, and when it comes to sauce, Italians would know! Vigorous vines reach 6' or more.



// Variety Info

// Days to Maturity: 70–90 days from transplanting

// Family: Solanaceae

// Type: Indeterminate, Paste Tomato (Learn more)

// Native: Andes

// Hardiness: Frost-sensitive annual

// Exposure: Full sun

// Plant Dimensions: Vines up to 6' or longer

// Variety Info: 3"–4" long, 1 ½" wide, oblong, red fruits. 'San Marzano' is a "paste" tomato.

// Attributes: Frost Sensitive

// Sowing Info

// When to Sow Outside: For mild climates only: 1 to 2 weeks after your average last frost date, and when soil temperature is at least 60°F.

// When to Start Inside: RECOMMENDED. 4 to 6 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°–90°F.

// Days to Emerge: 5–10 days

// Seed Depth: ¼"

// Seed Spacing: A group of 3 seeds every 24"–36"

// Row Spacing: 36"

// Thinning: When 2" tall, thin to 1 every 24"–36"

// Growing Info

// Harvesting: San Marzano' tomatoes are at the peak of sun-ripened deliciousness when red, and have a slight give when gently squeezed.







  

// Tasmanian Chocolate Heirloom Container Tomatoes  x 3 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/tasmanian-chocolate-tomato.jpg

// Strong-yielding, short, sturdy vines bear heavy crops of beautiful, plump, mahogany red faintly striped tomatoes with delicious, well-balanced flavor. A perfect variety to grow in containers or small space gardens. Tasmanian chocolate tomatoes are heavy for their size, extra juicy and perfect for BLTs, sliced for salads or enjoy in good old-fashioned tomato sandwiches.



// Cherokee Carbon x 4 

// https://raw.githubusercontent.com/chrisyoung0101/victory-of-winonna/main/images/cherokee-carbon-tomato.jpg

// What do you get when you cross the two heirloom favorites, 'Cherokee Purple' and 'Carbon'? A tomato lover's dream with heirloom flavor earlier in the season, increased production, and less cracks and blemishes. Large, 10-12-ounce, purple beefsteak fruit are perfect for slicing and the rich flavor is literally award winning--it won best tasting tomato in the 2005 "Heirloom Garden Show"!





// Variety Info

// Days to Maturity: 75–80 days from transplanting

// Family: Solanaceae

// Type: Indeterminate, Slicing Tomato (Learn more)

// Native: Andes

// Hardiness: Frost-sensitive annual

// Exposure: Full sun

// Plant Dimensions: Vines up to 6' or longer

// Variety Info: 10–12-ounce, purple-burgundy fruits. 'Cherokee Carbon' is an indeterminate type tomato.

// Attributes: Crack Resistant, Frost Sensitive

// Sowing Info

// When to Sow Outside: For mild climates only: 1 to 2 weeks after your average last frost date, and when soil temperature is at least 60°F.

// When to Start Inside: RECOMMENDED. 4 to 6 weeks before transplanting. Transplant when air temperature is 45°F or warmer, usually 1 to 2 weeks after your average last frost date. Ideal soil temperature for germination is 70°–90°F.

// Days to Emerge: 5–10 days

// Seed Depth: 1/4"

// Seed Spacing: A group of 3 seeds every 24"–36"

// Row Spacing: 36"

// Thinning: When 2" tall, thin to 1 every 24"–36"

// Growing Info

// Harvesting: Cherokee Carbon' tomatoes are at the peak of sun-ripened deliciousness when deep purple-burgundy, and have a slight give when gently squeezed.













