import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./components/GlobalStyles";
import Page from "./components/Page";

const queryClient = new QueryClient();

// This code is only for TypeScript
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

// This code is for all users
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Page />
    </QueryClientProvider>
  );
}

export default App;
