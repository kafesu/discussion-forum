<script>
    import { useParams, useNavigate } from "svelte-navigator";
    const navigate = useNavigate();
    const params = useParams();

    const { id } = $params;

    let answerInput = "";

    async function getQuestion() {
        const response = await fetch(`http://129.151.167.211:3000/question/${id}`);
        const question = await response.json();

        return question;
    }

    async function handleAnswerSubmit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/answer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ questionId: id, text: answerInput })
        });

        if (response.ok) {
            navigate("/")
        }
    }
</script>

<div class="container">
{#await getQuestion()}
    <p>Please wait a bit...</p>
{:then question}
	<div class="question"> 
    	<h1>{question.title}</h1>
    	<p>{question.body}</p>
	</div>
    <strong>Your answer:</strong>

    <form on:submit={handleAnswerSubmit}>
        <textarea bind:value={answerInput}/>
        <input type="submit" value="Send answer">
    </form>
{/await}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	strong {
		margin: 10px 0;
	}

	.question {
		background-color: rgb(255, 255, 255, 0.1);
		padding: 20px;
		border: 1px solid rgb(255, 255, 255, 0.2);
		border-radius: 5px;
		width: 500px;
	}

	h1 {}

	p {
		color: lightgray;
		font-size: .9rem;
	}

	form {
		width: 500px;
		display: flex;
		flex-direction: column;
	}

	textarea {
		resize: none;
		height: 200px;
	}

	input {
		background-color: rgb(30, 30, 210);
		border: none;
		padding: 10px 0px;
		border-radius: 5px;
		margin: 10px 0;
		color: white;
		font-weight: bold;
	}
</style>
