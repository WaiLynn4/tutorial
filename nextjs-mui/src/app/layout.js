import{AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import StyledRoot from "./StyledRoot";
import DrawerNav from "@/components/DrawerNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyledRoot>{children}</StyledRoot>
          </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
