import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "pico-remix-template",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => ([
  {
    rel: "stylesheet",
    href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.7.1/gridlex.min.css",
  }
])

function Document({ children }) {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="container">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/"><strong>PicoRemix</strong></Link>
            </li>
          </ul>
          <ul>
            <li><Link to="/">Layout</Link></li>
            <li><Link to="/">Elements</Link></li>
            <li><Link to="/">Components</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer>
        <p>&copy; You!</p>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
