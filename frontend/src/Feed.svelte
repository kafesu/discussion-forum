<script>
    import Question from "./Question.svelte";
    import NewQuestionFAB from "./NewQuestionFAB.svelte";
	import { quotes } from "./lib/quotes.js";
	
	const index = Math.floor(Math.random() * quotes.length);
	const quote = quotes[index];

    async function getFeed() {
        const response = await fetch("http://localhost:3000/feed");
        const questions = await response.json();
		
        return questions.reverse();
    }
</script>


<section>
	<div class="questions">
		<NewQuestionFAB/>

		{#await getFeed()}
    		<p>Getting questions. Please wait</p>
		{:then questions} 
    		{#each questions as question}
        		<Question question={question}/>
        	{:else}
        		<p>No questions at the moment</p>
    		{/each}
		{:catch}
    		<p>Something went wrong. Please reload the page</p>
		{/await}
	</div>
	<div class="quote">
		<h1>{quote.text}</h1>
		<p>-{quote.author}</p>
	</div>
</section>

<style>
    section {
        padding: 30px;
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 20px;
    }

	.quote {
		margin: 30px 0;
		padding: 30px;
		background-color: #00c6ff;
		background: -webkit-linear-gradient(to right, #00c6ff, #0072ff);
		background: linear-gradient(to right, #00c6ff, #0072ff);
		height: fit-content;
		border-radius: 10px;
	}	
</style>

