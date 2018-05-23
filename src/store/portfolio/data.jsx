import restaurant from '../../assets/portfolio/restaurant.png';
import restaurant2 from '../../assets/portfolio/restaurant2.png';
import reactnativeapi from '../../assets/portfolio/reactnativeapi.png';
import employeeShifts from '../../assets/portfolio/employeeShits.png';
import mysqlp4 from '../../assets/portfolio/mysqlp4.png';
import boardgamep5 from '../../assets/portfolio/boardgamep5.png';
import couple from '../../assets/portfolio/couple.png';
import couple2 from '../../assets/portfolio/couple2.png';
import vueweb from '../../assets/portfolio/vue.web.png';
import resto2 from '../../assets/portfolio/resto2-google.png';
import game from '../../assets/portfolio/game2.png';


export default {
    restaurant:{
        image1: restaurant,
        image2: restaurant2,
        image3: resto2,
        name: 'Restaurants around me!',
        description: 'Restaurant around me is an app used to get restaurants around by your location, made in React.js and Redux.',
        link:'/portfolio/restaurant',
        website: 'https://github.com/niyogakiza/Restaurant_finder-by-location.',
        roles:['React', 'React-Redux', 'Google map API'],
        caption:['Use an external API in Javascript','Develop a full react application according to specification', 'Debug an application using DevTools']
    },

    database:{
        image1: mysqlp4,
        image2: mysqlp4,
        name: 'Express Food',
        description:'ExpressFood allows clients to order one or multiples dishes and desserts, non fees for delivery, menu changes everyday',
        link:'/portfolio/database',
        website: 'https://github.com/niyogakiza/Openclassroom-Project-4',
        roles:['mySql', 'database','UML diagrams'],
        caption:['Use a schema when designing a database','Create technical architecture using UML diagrams','Design a database schema'],
    },
    game:{
        image1:boardgamep5,
        image2: game,
        name:'Board Game',
        description:'For Each turn, a player can move from one to three boxes(horizontally or vertically) before ending their turn. They obviously can not pass through obstacles directly, they can change weapons.',
        link:'/portfolio/game',
        website:'https://github.com/niyogakiza/Openclassroom-Project6',
        roles:['Javascript OOP', 'jQuery', 'Promises' ],
        caption:['Implement the jQuery library','Design reusable JavaScript architecture', 'Develop an object-oriented JavaScript application']

    },
    reactnative:{
        image1:reactnativeapi,
        image2: employeeShifts,
        name: 'React Native practice',
        description: 'Learning to use firebase authentication in react native applications, React API ',
        link:'/portfolio/reactnative',
        website:'https://github.com/niyogakiza/Employee-Shifts-Apps',
        roles:['React Native', 'Firebase', 'Redux'],
        caption:['React native practice']
    },
    couple:{
        image1: couple,
        image2: couple2,
        name: 'Couple app',
        description: 'This is couple web for their events, did it for practice.',
        link:'/portfolio/couple',
        website: 'https://github.com/niyogakiza/couplesParty.',
        roles:['React', 'React-Router', 'Google map API', 'Font-awesome', 'Jquery', 'Bootstarp 4'],
        caption:['Built in React.js']
    },
    Book:{
        image1: vueweb,
        image2: vueweb,
        name: 'Book Representation app',
        description: 'Vue Application',
        link:'/portfolio/book',
        website: 'https://github.com/niyogakiza/vue-web.',
        roles:['Vue.js', 'Vuetify', 'Vue-Router'],
        caption:['Vue.js application']
    }
};