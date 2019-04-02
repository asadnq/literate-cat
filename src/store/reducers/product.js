import blink from '../../../assets/dummy/blink.jpg';
import tipping from '../../../assets/dummy/the-tipping-point.jpg';
import outliers from '../../../assets/dummy/outliers.jpg';
import wtds from '../../../assets/dummy/what-the-dog-saw.jpg';
import dng from '../../../assets/dummy/david-and-goliath.jpg';

const initialState = {
    products: [
        {
            id: 1,
            name: 'The Tipping Point',
            price: 'Rp. 131.000',
            description: `
            The tipping point is that magic moment when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Just as a single sick person can start an epidemic of the flu, so too can a small but precisely targeted push cause a fashion trend, the popularity of a new product, or a drop in the crime rate. This widely acclaimed bestseller, in which Malcolm Gladwell explores and brilliantly illuminates the tipping point phenomenon, is already changing the way people throughout the world think about selling products and disseminating ideas.

            Gladwell introduces us to the particular personality types who are natural pollinators of new ideas and trends, the people who create the phenomenon of word of mouth. He analyzes fashion trends, smoking, children's television, direct mail, and the early days of the American Revolution for clues about making ideas infectious, and visits a religious commune, a successful high-tech company, and one of the world's greatest salesmen to show how to start and sustain social epidemics
            `,
            image: tipping
        },
        {
            id: 2,
            name: 'Blink',
            price: 'Rp. 120.000',
            description:`
            Drawing on cutting-edge neuroscience and psychology and displaying all of the brilliance that made The Tipping Point a classic, Blink changes the way you'll understand every decision you make. Never again will you think about thinking the same way.

            Malcolm Gladwell redefined how we understand the world around us. Now, in Blink, he revolutionizes the way we understand the world within. Blink is a book about how we think without thinking, about choices that seem to be made in an instant - in the blink of an eye - that actually aren't as simple as they seem. Why are some people brilliant decision makers, while others are consistently inept? Why do some people follow their instincts and win, while others end up stumbling into error? How do our brains really work - in the office, in the classroom, in the kitchen, and in the bedroom? And why are the best decisions often those that are impossible to explain to others? 
            
            In Blink we meet the psychologist who has learned to predict whether a marriage will last, based on a few minutes of observing a couple; the tennis coach who knows when a player will double-fault before the racket even makes contact with the ball; the antiquities experts who recognize a fake at a glance. Here, too, are great failures of "blink": the election of Warren Harding; "New Coke"; and the shooting of Amadou Diallo by police. Blink reveals that great decision makers aren't those who process the most information or spend the most time deliberating, but those who have perfected the art of "thin-slicing" - filtering the very few factors that matter from an overwhelming number of variables.
            `,
            image: blink
        },
        {
            id: 3,
            name: 'Outliers',
            price: 'Rp. 125.000',
            description:`
            In this stunning new book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"--the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?

            His answer is that we pay too much attention to what successful people are like, and too little attention to where they are from: that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band.
            `,
            image: outliers
        },
        {
            id: 4,
            name: 'What The Dog Saw',
            price: 'Rp. 145.000',
            description: `
            What is the difference between choking and panicking? Why are there dozens of varieties of mustard but only one variety of ketchup? What do football players teach us about how to hire teachers? What does hair dye tell us about the history of the 20th century?

            In the past decade, Malcolm Gladwell has written three books that have radically changed how we understand our world and ourselves: The Tipping Point, Blink, and Outliers. Now, in What the Dog Saw, he brings together, for the first time, the best of his writing from The New Yorker over the same period. 

            Here you'll find the bittersweet tale of the inventor of the birth control pill, and the dazzling creations of pasta sauce pioneer Howard Moscowitz. Gladwell sits with Ron Popeil, the king of the American kitchen, as he sells rotisserie ovens, and divines the secrets of Cesar Millan, the "dog whisperer" who can calm savage animals with the touch of his hand. He explores intelligence tests and ethnic profiling and why it was that employers in Silicon Valley once tripped over themselves to hire the same college graduate.
            `,
            image: wtds
        },
        {
            id: 5,
            name: 'David and Goliath',
            price: 'Rp. 122.000',
            description: `
            In his #1 bestselling books The Tipping Point, Blink, and Outliers, Malcolm Gladwell has explored the ways we understand and change our world. Now he looks at the complex and surprising ways the weak can defeat the strong, the small can match up against the giant, and how our goals (often culturally determined) can make a huge difference in our ultimate sense of success. Drawing upon examples from the world of business, sports, culture, cutting-edge psychology, and an array of unforgettable characters around the world, David and Goliath is in many ways the most practical and provocative book Malcolm Gladwell has ever written.
            `,
            image: dng
        }
    ],
};

function products( state = initialState, action ) {

    switch(action.type) {
        default:
            return state
    }
}


export default products;