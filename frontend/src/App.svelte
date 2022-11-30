<script>
  import { Router, Route, link } from "svelte-navigator"
  import NewQuestion from "./NewQuestion.svelte";
  import Answer from "./Answer.svelte";
  import Feed from "./Feed.svelte";
</script>

<Router>
  <nav>
    <a use:link href="/">Safe Space</a>
    <ul>
      <li><a use:link href="/">Feed</a></li>
      <li><a use:link href="/guidelines">Community Guidelines</a></li>
    </ul>
  </nav>
  <main>
    <Route path="/" component={Feed}/>
    <Route path="/answer/:id" component={Answer}/>
    <Route path="/question" component={NewQuestion}/>
  </main>
</Router>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.055);
    padding: 20px;
  }

  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    padding: 0 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
