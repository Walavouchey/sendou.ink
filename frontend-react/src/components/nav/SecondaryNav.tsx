import React, { ReactNode, useContext, Suspense } from "react"
import { Box } from "@chakra-ui/core"
import MyThemeContext from "../../themeContext"
import { Router, RouteComponentProps } from "@reach/router"
import Loading from "../common/Loading"
import BuildsPageNav from "../builds/BuildsPageNav"
import "./Nav.css"

interface NavWithContentProps {
  title: string
  content: ReactNode
}

const NavWithContent: React.FC<RouteComponentProps & NavWithContentProps> = ({
  title,
  content,
}) => {
  const { themeColorWithShade } = useContext(MyThemeContext)
  return (
    <>
      <Box
        fontWeight="bold"
        fontSize="1.2rem"
        borderLeftColor={themeColorWithShade}
        borderLeftWidth="5px"
        pl="0.3rem"
        mb="0.5rem"
      >
        {title}
      </Box>
      {content}
    </>
  )
}

const SecondaryNav: React.FC = () => {
  const { bgColor, themeColorWithShade } = useContext(MyThemeContext)
  return (
    <Box
      flexShrink={0}
      className="hide-scroll"
      top={0}
      position="sticky"
      as="nav"
      h="100vh"
      w="200px"
      overflowY="scroll"
      bg={bgColor}
      p="0.5rem"
    >
      <Suspense fallback={<Loading />}>
        <Router>
          <NavWithContent
            path="/builds"
            title="Builds"
            content={<BuildsPageNav />}
          />
        </Router>
      </Suspense>
    </Box>
  )
}

export default SecondaryNav
