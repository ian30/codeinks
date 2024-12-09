<nav>
    <div class="logo">LOGO</div>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/codeinks">codeinks</a></li>
        <li><a href="/contact">contact</a></li>
    </ul>
</nav>

<style>
    ul {
        width: 50%;
        padding:0;
        margin:0;
        list-style: none;
        text-align: start;
    }
    li {
        display: inline-block;
        padding: .3rem 1rem;
        border-radius: .5rem;
    }
    li:hover {
        background-color: dimgrey;
    }
    a {
        color: aliceblue;
    }
    nav {
        display: flex;
        align-items: center;
        justify-items: flex-start;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 4rem;
        background-color: rgba(0,0,0,.8);
    }
</style>