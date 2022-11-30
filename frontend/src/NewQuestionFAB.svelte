<script>
    import { useNavigate } from "svelte-navigator";
    const navigate = useNavigate();

    function handleClick() {
        navigate("/question")
    }
</script>

<button on:click={handleClick}>
    Ask a question
</button>

<style>
    button {
        position: fixed;
        right: 30px;
        bottom: 30px;
        padding: 10px 30px;
        border-radius: 15px;
        border: none;
        background: rgb(0,189,196);
        background: linear-gradient(90deg, rgba(0,189,196,1) 42%, rgba(0,212,255,1) 100%);
        color: white;
        font-size: 1.1rem;
        font-weight: 700;
    }
</style>