import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import sharedStyles from "./styles/shared.css";
import Error from "./components/util/Error";

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={caught.statusText}>
      <main>
        <Error title={caught.statusText}>
          <p>
            {caught.data?.message ||
              "Something went wrong. Please try again later"}
          </p>
          <p>
            Back to <Link to={"/"}>Safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document title="An error occurred">
      <main>
        <Error title={caught.statusText}>
          <p>
            {error.message || "Something went wrong. Please try again later"}
          </p>
          <p>
            Back to <Link to={"/"}>Safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: sharedStyles }];
};
