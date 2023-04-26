import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { PostPages } from './pages/PostPages'

interface PostpagesProps{
  posts: <Iposts></Iposts>
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPages posts={} />} />
      </Route>
    </Routes>
  )
}