FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('fullLayout', { main: 'heroUnit' })
  }
})

let loggedInCheck = () => { if (Meteor.userId()) { FlowRouter.go('dashboard') } }

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render('fullLayout', { main: 'signup' })
  },
  triggersEnter: loggedInCheck
})

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('fullLayout', { main: 'login' })
  },
  triggersEnter: loggedInCheck
})

let userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'userRoutes',
  triggersEnter: [
    () => { if (!Meteor.userId()) { FlowRouter.go('home') } }
  ]
})

userRoutes.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('mainLayout', {
       navigation: 'userNav',
       content: 'dashboard' 
      })
  }
})