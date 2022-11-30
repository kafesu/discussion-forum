<script>
    import { useNavigate } from "svelte-navigator";
    const navigate = useNavigate();

    export let question = {}
    let showAnswers = false;

    function handleAnswer() {
        navigate(`/answer/${question.id}`);
    }

    function toggleShowAnswers() {
        showAnswers = !showAnswers;
    }
</script>

<div>
    <h2>{question.title}</h2>
    <p>{question.body}</p>
    <span>{question.answers.length} {question.answers.length === 1 ? 'answer' : 'answers' }</span>

    <button class="show-answers" on:click={toggleShowAnswers}>{(showAnswers ? 'Hide': 'Show') + ' Answers'}</button>
    <button class="answer" on:click={handleAnswer}>Answer</button>
	
    {#if showAnswers}
        	{#each question.answers as answer}
            	<div class="answer-text">{answer.text}</div>
        	{/each}
    {/if}
</div>

<style>

    div {
		border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px;
        margin: 30px 0px;
		border-radius: 5px;
    }

	div:hover {
		background-color: rgba(255, 255, 255, 0.05)
	}
	
    h2 {
        font-weight: 400;
        font-size: 1.5rem;
		margin-bottom: 10px;
    }
	
    p {
        color: rgb(255, 255, 255, 0.8);
		margin-bottom: 10px;
    }

	span {
		font-size: 0.85rem;
		color: rgb(255, 255, 255, 0.8);
	}

	.show-answers, .answer {
		background-color: transparent;
		border: none;
		cursor: pointer
	}

	.show-answers {
		color: rgb(30, 30, 190);
	}

	.answer {
		color: rgb(30, 190, 30);
	}

	.answers-list {
		margin: 10px 40px;
	}
</style>

