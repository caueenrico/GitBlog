export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<PageForm />} />
        <Route path="/checkout/success" element={<Success />} />

      </Route>
    </Routes>
  )
}