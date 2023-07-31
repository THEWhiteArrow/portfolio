type ProjectDataType = {
    title: string,
    description: string,
    shortDescription?: string,
    imgName: string,
    imgAlt?: string,
    id: string,
    shadowColor?: string
}
const data: ProjectDataType[] = [
    {
        title: 'Doodle Classifier - Neural Network Library',
        // description: `Witness the magic of artificial intelligence with our Neural Network Library! This groundbreaking project leverages machine learning algorithms to empower AI to recognize doodles of various shapes, from rainbows and trains to cats. Through thousands of meticulously labeled images and a robust neural network, this library achieved a remarkable feat of comprehension, allowing the AI to understand the shapes conveyed by diverse doodles. It opens the doors to exciting possibilities, bridging the gap between human creativity and the intelligence of machines.`,
        description: `Meet our talented little artist, the Neural Network Library! Teaching an AI to recognize doodles was an exciting and challenging journey. I spent countless hours training it with thousands of doodle images - rainbows, trains, cats, and everything in between. Witnessing the AI's growth and ability to understand the shapes hidden within doodles was like watching a child learn and grow. I believe that this project represents a small step towards bridging the gap between humans and machines, creating a world where AI not only learns from us but also collaborates with us in ways we never thought possible.`,
        shortDescription: `Meet our talented little artist, the Neural Network Library! 
        Trained it to recognize doodles of various shapes through thousands of labeled images. 
        Bridging the gap between human creativity and machine intelligence, fostering collaboration for exciting possibilities.`,
        imgName: 'ai.jpg',
        id: 'doodle-classifier',
        shadowColor: '#a2feff'
    },
    {
        title: 'Pixel Art Creator - Google Marketplace',
        // description: `Unleash your creative prowess with the Pixel Art Creator! As a Google Spreadsheets Extension, this project allows users to transform any image into captivating pixel art. With a combination of Vanilla JavaScript, color recognition technology, and sophisticated algorithms, each image is converted into individual spreadsheet cells, carefully colored with vibrant hues, emojis, or even ASCII letters. This innovative tool sparks the feeling of nostalgia and visual delight, empowering users to infuse artistry into their data-driven world.`,
        description: `Let your imagination run wild with the Pixel Art Creator! This project holds a special place in my heart because it combines two of my passions: programming and art. The idea was to bring the joy of pixel art to Google Spreadsheets, making it accessible to everyone. Using Vanilla JavaScript, I tapped into the wonders of color recognition technology and elaborate algorithms to convert regular images into pixel art masterpieces. Seeing the smiles on users' faces as they create pixelated wonders is what keeps me inspired to explore the endless possibilities of blending creativity with technology.`,
        shortDescription: `Unleash creativity with Pixel Art Creator! 
        Combining programming and art, this Google Spreadsheets Extension converts images into vibrant pixel art using
         Vanilla JavaScript and color recognition. 
         Empowering users to infuse artistry into their data-driven world thanks to the Google Cloud Platform.`,
        imgName: 'pixel.png',
        id: 'pixel-art',
        shadowColor: '#82ff9e'
    },
    {
        title: 'Trade-Up Finder',
        description: `Advanced tool working alongside STEAM Marketplace. The main aim of the application was to 
        enhance the CS:GO experience by providing valuable insights into trading world. The system was providing user 
        with the best possible choice based on the current 'skins' prices allowing them to profit from trades.
        Theory was simple but algorithms used not so much. The idea was orbiting around Counter Strike GLobal Offensive game in
        which you could sell some items on community marketplacec gaining real money. By inputting 10 skins of lower quality
        you were getting 1 skin of higher quality sometimes that was more expensive than all the inputs. Thus providing profit.
        The trick was to cleverly analyze the market and the prices and predivt what trades are the most likely to be profitable.
        Unfortunately due to the high costs of hosting it at the time (no income on my side :) ) it is not online.
        It thought me a lot in terms of data structure & algorithms, nodejs developlment and patience that was a key to success.
        `,
        shortDescription: `Advanced tool enhancing CS:GO experience by providing valuable insights into trading. 
        Predicting profitable trades based on items' prices. 
        Though not currently online due to hosting costs, it taught valuable lessons in data structures, algorithms, and node.js development.`,
        imgName: 'tradeupfinder.png',
        imgAlt: 'tradeup-finder',
        id: 'tradeup-finder',
        shadowColor: 'rgb(100,200,10)'
    },
    {
        title: 'Ortodentica - Dental Clinic',
        // description: `Step into the digital smile of Ortodentica! With a passion for helping local businesses excel in marketing and SEO, I crafted a beautiful and seamless website using HTML, CSS, and JavaScript. This virtual gateway showcases the dental clinic's expertise and services, optimizing their online presence for a broader audience. From captivating design to smooth navigation, Ortodentica's website serves as a testament to the power of blending technology and aesthetics, offering visitors an engaging experience while fostering business growth.`,
        description: `Welcome to Ortodentica, where smiles come to life! As a passionate web developer, I had the privilege of crafting a beautiful online home for this local dental clinic. With a creative blend of HTML, CSS, and JavaScript, I aimed to not only showcase their services but also help them achieve better marketing results and SEO rankings. The website's design was carefully crafted to make patients feel at ease while navigating through the virtual clinic. I'm proud to be part of their journey towards expanding their reach and making a positive impact in the community.`,
        shortDescription: `Welcome to Ortodentica, where smiles come to life! 
        Hand crafted, beautiful online home for this dental clinic in close collaboration with the owner. 
        Aiming to boost marketing and SEO results, the design offers a comforting virtual clinic experience, 
        expanding their positive impact.`,
        imgName: 'ortodentica.png',
        id: 'ortodentica',
        shadowColor: '#9d3c31'
    },



    {
        title: 'Ravella Studio - HairDresser Salon',
        description: `Stunning website of the local hair dresser that stands high are proudly depicts the values and work quality 
        of the local craftsmanship. Web application developmed with TailWindCSS and delivered with flying colors met the 
        expectations of the customer.
        `,
        shortDescription: `Stunning website showcasing local hairdresser's values and craftsmanship. 
        Not only does it provide vital information for customers but also serves as a virtual portfolio.
        Perfectly meets the expectations of the customer, delivering a seamless experience.`,
        imgName: 'ravella.png',
        imgAlt: 'ravella.png',
        id: 'ravella',
        shadowColor: 'rgba(220,38,38)'
    },
];

export type { ProjectDataType };
export { data };