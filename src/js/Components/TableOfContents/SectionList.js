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
    link:'/thewhitehouse',
  },{
    label:'Courts and Law',
    key:'courts',
    link:'/courts',
  },{
    label:'Polling',
    key:'polling',
    link:'/polling',
  },{
    label:'Senate',
    key:'senate',
    link:'/senate',
  },{
    label:'House of Representatives',
    key:'houseofreps',
    link:'/houseofreps',}
  ],
},{
  label:'Sports',
  link:'/sports',
  key:'sports',
  sublinks: [{
    label:'NFL',
    key:'nfl',
    link:'/nfl',
  },{
    label:'NBA',
    key:'nba',
    link:'/nba',
  },{
    label:'MLB',
    key:'mlb',
    link:'/mlb',
  }],
},{
  label:'News Letter',
  link:'/newsletter',
  key:'newsletter',
  sublinks:[],
}]

// <Content section={{label:'Opinions',link:''}} key='Opinions' />
// <Content section={{label:'Sports',link:''}} key='Sports' />
// <Content section={{label:'Local',link:''}} key='Local' />
// <Content section={{label:'National',link:''}} key='National' />
// <Content section={{label:'World',link:''}} key='World' />
// <Content section={{label:'Business',link:''}} key='Business' />
// <Content section={{label:'Tech',link:''}} key='Tech' />
// <Content section={{label:'Lifecycle',link:''}} key='Lifecycle' />
// <Content section={{label:'Entertainment',link:''}} key='Entertainment' />
// <Content section={{label:'Outlook',link:''}} key='Outlook' />
// <Content section={{label:'',link:''}} key='' />


export {List, MultiLink,}
