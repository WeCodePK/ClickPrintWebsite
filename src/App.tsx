import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import RefundPage from './pages/RefundPage'

type Route = 'home' | 'register' | 'contact' | 'privacy' | 'terms' | 'refund'

function getInitialRoute(): Route {
  const path = window.location.pathname
  if (path === '/register') return 'register'
  if (path === '/contact') return 'contact'
  if (path === '/privacy') return 'privacy'
  if (path === '/terms') return 'terms'
  if (path === '/refund') return 'refund'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState<Route>(getInitialRoute)

  const go = (next: Route) => {
    const path = next === 'home' ? '/' : `/${next}`
    history.pushState({ route: next }, '', path)
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      const r: Route = e.state?.route ?? getInitialRoute()
      setRoute(r)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <Header
        currentRoute={route}
        isHome={route === 'home'}
        onHome={() => go('home')}
        onRegister={() => go('register')}
        onContact={() => go('contact')}
      />
      {route === 'home' && (
        <HomePage
          onRegister={() => go('register')}
          onContact={() => go('contact')}
          onPrivacy={() => go('privacy')}
          onTerms={() => go('terms')}
          onRefund={() => go('refund')}
        />
      )}
      {route === 'register' && (
        <RegisterPage
          onHome={() => go('home')}
          onRegister={() => go('register')}
          onContact={() => go('contact')}
          onPrivacy={() => go('privacy')}
          onTerms={() => go('terms')}
          onRefund={() => go('refund')}
        />
      )}
      {route === 'contact' && (
        <ContactPage
          onHome={() => go('home')}
          onRegister={() => go('register')}
          onContact={() => go('contact')}
          onPrivacy={() => go('privacy')}
          onTerms={() => go('terms')}
          onRefund={() => go('refund')}
        />
      )}
      {route === 'privacy' && (
        <PrivacyPage
          onHome={() => go('home')}
          onRegister={() => go('register')}
          onContact={() => go('contact')}
          onPrivacy={() => go('privacy')}
          onTerms={() => go('terms')}
          onRefund={() => go('refund')}
        />
      )}
      {route === 'terms' && (
        <TermsPage
          onHome={() => go('home')}
          onRegister={() => go('register')}
          onContact={() => go('contact')}
          onPrivacy={() => go('privacy')}
          onTerms={() => go('terms')}
          onRefund={() => go('refund')}
        />
      )}
      {route === 'refund' && (
        <RefundPage
          onHome={() => go('home')}
          onRegister={() => go('register')}
          onContact={() => go('contact')}
          onPrivacy={() => go('privacy')}
          onTerms={() => go('terms')}
          onRefund={() => go('refund')}
        />
      )}
    </>
  )
}
