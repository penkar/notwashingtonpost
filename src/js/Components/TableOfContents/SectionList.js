// <Content section={{label:'Home',link:'/'}} key='Politics' />
const MultiLink = [{
  primary: {
    label:'Home Page',
    link:'home',
    key:'/',
  },
  secondary:[{
      label:'US & World',
      key:'usworld',
      link:'/usworld',
    },{
      label:'Regional',
      key:'regional',
      link:'/usworld',
  }],
}]

const List = [{
  label:'Politics',
  link:'/politics',
  key:'politics',
  sublinks: [{
    label:'The White House',
    key:'thewhitehouse',
    link:'/politics/thewhitehouse',
  },{
    label:'Courts and Law',
    key:'courts',
    link:'/politics/courts',
  },{
    label:'Polling',
    key:'polling',
    link:'/politics/polling',
  },{
    label:'Senate',
    key:'senate',
    link:'/politics/senate',
  },{
    label:'House of Representatives',
    key:'houseofreps',
    link:'/politics/houseofreps',}
  ],
},{
  label:'Sports',
  link:'/sports',
  key:'sports',
  sublinks: [{
    label:'NFL',
    key:'nfl',
    link:'/sports/nfl',
  },{
    label:'NBA',
    key:'nba',
    link:'/sports/nba',
  },{
    label:'MLB',
    key:'mlb',
    link:'/sports/mlb',
  }],
},{
  label:'News Letter',
  link:'/newsletter',
  key:'newsletter',
  sublinks:[],
},{
  label:'National',
  link:'/national',
  key:'national',
  sublinks:[{
    label:'Education',
    key:'education',
    link:'/national/education',
  },{
    label:'Investigations',
    key:'investigations',
    link:'/national/investigations',
  },{
    label:'Obituaries',
    key:'obituaries',
    link:'/national/obituaries',
  },{
    label:'National Security',
    key:'nationalsecurity',
    link:'/national/nationalsecurity',
  },{
    label:'Health & Science',
    key:'HealthScience',
    link:'/national/healthscience',
  },{
    label:'True Crime',
    key:'truecrime',
    link:'/national/truecrime',
  }]
},{
  label:'Tech',
  link:'/tech',
  key:'tech',
  sublinks: [{
    label:'Innovation',
    key:'innovation',
    link:'/tech/innovation',
  },{
    label:'Silicon Valley',
    key:'siliconvalley',
    link:'/tech/siliconvalley',
  }],
},{
  label:'Business',
  link:'/business',
  key:'business',
  sublinks: [{
    label:'On Leadership',
    key:'onleadership',
    link:'/business/onleadership',
  },{
    label:'Personal Finance',
    key:'personalfinance',
    link:'/business/personalfinance',
  },{
    label:'Energy and Environment',
    key:'energyandenvironment',
    link:'/business/energyandenvironment',
  },{
    label:'Markets',
    key:'markets',
    link:'/business/markets',
  },{
    label:'World Business',
    key:'worldbusiness',
    link:'/business/worldbusiness',
  },{
    label:'Capital Markets',
    key:'capitalmarkets',
    link:'/business/capitalmarkets',
  }],
},{
  label:'Entertainment',
  link:'/entertainment',
  key:'entertainment',
  sublinks: [{
    label:'Books',
    key:'books',
    link:'/entertainment/books',
  },{
    label:'Comics',
    key:'comics',
    link:'/entertainment/comics',
  },{
    label:'Television',
    key:'television',
    link:'/entertainment/television',
  },{
    label:'Movies',
    key:'movies',
    link:'/entertainment/movies',
  },{
    label:'Museum',
    key:'museum',
    link:'/entertainment/museum',
  },{
    label:'Music',
    key:'music',
    link:'/entertainment/music',
  },{
    label:'Theater and Dance',
    key:'theateranddance',
    link:'/entertainment/theateranddance',
  },{
    label:'Bars / Clubs',
    key:'barsclubs',
    link:'/entertainment/barsclubs',
  }],
},{
  label:'Lifestyle',
  link:'/lifestyle',
  key:'lifestyle',
  sublinks: [{
    label:'Food',
    key:'food',
    link:'/lifestyle/food',
  },{
    label:'Travel',
    key:'travel',
    link:'/lifestyle/travel',
  },{
    label:'Wellness',
    key:'wellness',
    link:'/lifestyle/wellness',
  },{
    label:'Fashion',
    key:'fashion',
    link:'/lifestyle/fashion',
  },{
    label:'Home and Garden',
    key:'homeandgarden',
    link:'/lifestyle/homeandgarden',
  }],
}]

export {List, MultiLink,}
