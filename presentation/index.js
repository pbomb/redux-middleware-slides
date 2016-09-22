// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  confusedCat: require("../assets/confused-cat.jpg"),
  github: require("../assets/social-media/png/384px/Rounded/github2-dreamstale35.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/redux-logo.png"),
  markdown: require("../assets/markdown.png"),
  twitter: require("../assets/social-media/png/384px/Rounded/twitter-dreamstale71.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#7744BE"
}, {
  primary: "Roboto Condensed",
  secondary: "Lobster Two",
  tertiary: "Roboto Sans Mono"
});

const imageSrc = (name) => images[name].replace("/", "");

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]}>
            <Heading size={1} fit>
              Redux Middleware Deep Dive
            </Heading>
            <Text textAlign="left" margin="1rem 0">
              <Image src={ imageSrc("github") } height="1em" margin="0.5rem auto -0.5rem auto" padding="0 1rem"/>@pbomb
            </Text>
            <Text textAlign="left">
              <Image src={ imageSrc("twitter") } height="1em" margin="0.5rem auto -0.5rem auto" padding="0 1rem"/>@mattparrish
            </Text>
            <Image src={ imageSrc("logo") } margin="2rem auto" height="4rem"/>
            <Text textAlign="right" textSize="1.5rem">Matt Parrish - <S type="italic">Team Lead @ CA Agile</S></Text>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Redux (Flux)
            </Heading>
            <List>
              <Appear><ListItem>State Management</ListItem></Appear>
              <Appear><ListItem>Single Store</ListItem></Appear>
              <Appear><ListItem>Dispatch Actions</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              What's special about middleware?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Async Operations
            </Heading>
            <List>
              <ListItem>Data fetching</ListItem>
              <ListItem>Deferred actions (polling, setTimeout, etc.)</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              React render
            </Heading>
            <List>
              <Appear><ListItem>Synchronous</ListItem></Appear>
              <Appear><ListItem>Pure</ListItem></Appear>
              <Appear><ListItem>Props + State = Output</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Action Creators
            </Heading>
            <CodePane
              lang="js"
              source={ require("raw!../assets/examples/action-object.js") }
              margin="20px auto"
            />
            <Appear>
              <CodePane
                lang="js"
                source={ require("raw!../assets/examples/action-dispatch.js") }
                margin="20px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              Redux Reducers
            </Heading>
            <List>
              <Appear><ListItem>Synchronous</ListItem></Appear>
              <Appear><ListItem>Pure</ListItem></Appear>
              <Appear><ListItem>Action + State = Next State</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Redux Reducer Example
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="80%"
            textSize="1.4rem"
            lang="js"
            code={ require("raw!../assets/examples/reducer.js") }
            ranges={[
              { loc: [0, 16] },
              { loc: [4, 5], note: "Reducer function" },
              { loc: [5, 7], note: "Handles ITERATION_CHANGED action" },
              { loc: [8, 12], note: "Returns next state" },
              { loc: [13, 14], note: "Returns unmodified state" }
            ]}
          />
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              Redux Middleware
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="80%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/redux-middleware.js") }
            ranges={[
              { loc: [0, 12] },
              { loc: [0, 3], note: "Imports Redux, middleware, reducers" },
              { loc: [4, 7], note: "Creates root reducer" },
              { loc: [7, 11], note: "Creates Redux store" }
            ]}
          />
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              Redux Thunk Middleware
            </Heading>
            <Text textAlign="left" bold margin="2rem auto">What's a thunk?!</Text>
            <Text textAlign="left">A thunk is a function that wraps an expression to delay its evaluation.</Text>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              Redux Thunk Simple Example
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="80%"
            textSize="1.4rem"
            lang="js"
            code={ require("raw!../assets/examples/redux-thunk.js") }
            ranges={[
              { loc: [0, 21] },
              { loc: [2, 11], note: "Returns action object" },
              { loc: [12, 20], note: "Async action creator" },
              { loc: [13, 14], note: "Returns thunk - Passed dispatch" },
              { loc: [14, 18], note: "Defer dispatching of action" }
            ]}
          />
          <CodeSlide
            transition={[]}
            maxWidth="80%"
            textSize="1.4rem"
            lang="js"
            code={ require("raw!../assets/examples/redux-thunk-impl.js") }
            ranges={[
              { loc: [0, 15] },
              { loc: [1, 8], note: "This is it!" },
              { loc: [1, 2], note: "Middleware API" },
              { loc: [2, 5], note: "Handles thunks. Calls thunk with dispatch and getState" },
              { loc: [6, 7], note: "Pass non-thunks through" }
            ]}
          />
          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              Redux Thunk Promise Example
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="80%"
            textSize="1.4rem"
            lang="js"
            code={ require("raw!../assets/examples/redux-thunk-fetch.js") }
            ranges={[
              { loc: [0, 23] },
              { loc: [0, 5], note: "3 actions - Pending, Success, Failure" },
              { loc: [6, 12], note: "Example of one of those actions" },
              { loc: [13, 14], note: "Exported async action creator" },
              { loc: [14, 21], note: "Thunk that returns a promise" },
              { loc: [15, 16], note: "Dispatches pending action" },
              { loc: [17, 18], note: "Dispatches success action" },
              { loc: [18, 19], note: "Dispatches failure action" }
            ]}
          />
          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              CA Agile Async Example
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-action.js") }
            ranges={[
              { loc: [0, 26] },
              { loc: [0, 6], note: "3 actions - Pending, Success, Failure" },
              { loc: [7, 13], note: "Example of one of those actions" },
              { loc: [14, 15], note: "Exported async action creator" },
              { loc: [15, 24], note: "Returns an action with metadata and callbacks" },
              { loc: [18, 19], note: "API call returns promise" },
              { loc: [19, 20], note: "Dispatches pending action" },
              { loc: [20, 21], note: "Dispatches success action" },
              { loc: [21, 22], note: "Dispatches failure action" }
            ]}
          />
          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              CA Agile API Middleware
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-api-middleware.js") }
            ranges={[
              { loc: [0, 20] },
              { loc: [0, 1], note: "Action type that is handled by this middleware" },
              { loc: [2, 3], note: "Implements middleware API" },
              { loc: [3, 6], note: "Pass through all other actions" },
              { loc: [7, 11], note: "Get state and action metadata" },
              { loc: [12, 13], note: "Dispatches pending action" },
              { loc: [14, 15], note: "Calls API function" },
              { loc: [15, 16], note: "Dispatches success action" },
              { loc: [16, 17], note: "Dispatches failure action" }
            ]}
          />
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              What else can we do with middleware?
            </Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Text>Middleware sees all dispatched actions</Text>
          </Slide>
          <Slide transition={["fade"]}>
            <Text>Let's revisit the API Middleware example again</Text>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-api-middleware-spans.js") }
            ranges={[
              { loc: [0, 28] },
              { loc: [13, 14], note: "Starts timer before doing work" },
              { loc: [18, 19], note: "Stops timer after API call finishes" },
              { loc: [22, 23], note: "Stops timer after API call finishes" }
            ]}
          />
          <Slide transition={["slide"]}>
            <Text>Lets add another Middleware at the end of the chain that measures each action.</Text>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-metrics-middleware.js") }
            ranges={[
              { loc: [0, 14] },
              { loc: [0, 1], note: "Imports startSpan function" },
              { loc: [2, 3], note: "Implements middleware API" },
              { loc: [4, 8], note: "Starts timer before processing action" },
              { loc: [9, 10], note: "Processes the action" },
              { loc: [10, 11], note: "Stops timer after processing action" }
            ]}
          />
          <Slide transition={["fade"]}>
            <Heading size={1} fit>What does this measure?</Heading>
            <List>
              <ListItem><S type="bold">All reducers</S> process the action</ListItem>
              <ListItem><S type="bold">All connected components</S> re-render, if needed</ListItem>
              <Appear><ListItem>This is a <S type="bold">great</S> area of the application to measure</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>How do we use these measurements?</Heading>
            <Text margin="2rem auto">Hugo!</Text>
            <Text margin="2rem auto">Splunk</Text>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>Let's take this example another step further</Heading>
            <Text margin="2rem auto" fit>How can we improve the performance of a given dispatch?</Text>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>Profile Action Middleware</Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-profile-action-middleware.js") }
            ranges={[
              { loc: [0, 10] },
              { loc: [0, 1], note: "Implements middleware API" },
              { loc: [1, 2], note: "Only profile when dispatched action matches window.profileAction" },
              { loc: [2, 3], note: "Starts profile before processing action" },
              { loc: [3, 4], note: "Processes the action" },
              { loc: [4, 5], note: "Stops profile after processing action" }
            ]}
          />
          <Slide transition={["fade"]}>
            <Heading size={1} fit>Demo!</Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>Profiling Tip</Heading>
            <List>
              <ListItem><S type="bold">Always</S> profile in production mode (minified)</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]}>
            <Link href="https://github.com/gaearon/redux-devtools" target="_blank">Redux Dev Tools</Link>
            <Text>Demo</Text>
          </Slide>
          <Slide transition={["fade"]}>
            <Link href="https://github.com/evgenyrodionov/redux-logger" target="_blank">redux-logger</Link>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>Other interesting middlewares</Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/yelouafi/redux-saga#redux-saga" target="_blank">redux-saga</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/redux-observable/redux-observable" target="_blank">redux-observable</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/redux-loop/redux-loop" target="_blank">redux-loop</Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>That's it!</Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>We're hiring! ;)</Heading>
            <Text>CA Technologies - Agile Business Unit</Text>
            <Text italic>(formerly Rally Software)</Text>
            <List>
              <ListItem>2 Software Engineers in <S type="bold">Denver (near Union Station)</S></ListItem>
              <ListItem>Sr. Principal Software Engineer in <S type="bold">Boulder</S></ListItem>
              <ListItem>Engineering Director in <S type="bold">Boulder</S></ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>Questions?</Heading>
            <Image src={ imageSrc("confusedCat") } height="15rem"/>
            <Text textAlign="left" margin="1rem 0">
              <Image src={ imageSrc("github") } height="1em" margin="0.5rem auto -0.5rem auto" padding="0 1rem"/>@pbomb
            </Text>
            <Text textAlign="left">
              <Image src={ imageSrc("twitter") } height="1em" margin="0.5rem auto -0.5rem auto" padding="0 1rem"/>@mattparrish
            </Text>
            <Text textAlign="right" textSize="1.5rem">Matt Parrish - <S type="italic">Team Lead @ CA Agile</S></Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
