<script>
    // AMDG
	import { useNavigate } from "svelte-navigator";
    const navigate = useNavigate();

    let title, body;
	
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("https://api.chat.ekon.club/question", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body }) 
        });

        if (response.ok) {
            navigate("/")
        } else {
            alert("Something went wrong");
        }
    }

    function handleCancel () {
        navigate("/")
    }
</script>
<div class="container">
<form on:submit={handleSubmit}>
    <h1>Ask the people</h1>
        <label for="question-title">Title</label>
        <input
            type="text" 
            bind:value={title}
            id="question" 
            placeholder="Write your question's title here"
        />
        <br>
        <label for="question-description">Description</label>
        <textarea 
            bind:value={body}
            id="question" 
            placeholder="Write your question's description here"
        />
    <br>
    <input type="submit" value="Send" id="submit">
    <button on:click={handleCancel}>Cancel</button>
</form>
</div>
<style>

	h1 {
		text-align: center;
	}

    form {
        display: flex;
        flex-direction: column;
        padding: 30px;
		width: 500px;
    }

	label {
		font-size: .9rem;
		color: lightgray;
		margin: 0 0 10px 0;
	}

    textarea {
        resize: none;
		height: 175px;
    }

    #question {
        padding: 10px 20px;
        border: 1px solid lightgray;
        border-radius: 10px;
        outline: none;
    }

    #submit {
        background-color: rgb(40, 40, 210);
        border: none;
        padding: 10px 20px;
        color: white;
        border-radius: 10px;
    }

	button {
		background-color: rgb(210, 40, 40);
		border: none;
		margin: 10px 0;
		padding: 10px 20px;
		color: white;
		border-radius: 10px;
	}

	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>

