import * as React from 'react' // tslint:disable-line
import { Route, Redirect } from 'react-router'
import MarkdownPage from './pages/markdown/Markdown'
import App from './components/App/App'

export default (
  <Route component={App}>
    <Redirect path='/' to='/overview/intro' />
    <Route path='/:chapter/:subchapter' component={MarkdownPage} />
  </Route>
)