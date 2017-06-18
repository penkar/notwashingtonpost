const initial = {
  stories: [{
    title:"Text suicide trial",
    href:'',
  },{
    title:"Carrie Fisher",
    href:'',
  },{
    title:"Ted Nugent",
    href:'',
  },{
    title:"MS-13",
    href:'',
  },{
    title:"Whole Foods",
    href:'',
  },{
    title:"‘Julius Caesar’ protest",
    href:'',
  },{
    title:"'Handmaid's Tale'",
    href:'',
  },{
    title:"Draft Rumors",
    href:'',
  },{
    title:"Shock Jock Rock",
    href:'',
  },{
    title:"‘Rocky’ director",
    href:'',
  },{
    title:"Ward-Kovalev",
    href:'',
  },{
    title:"The Freeze",
    href:'',
  }],
}

const newsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'expression':
    default:
      return state;
  }
}

export default newsReducer
