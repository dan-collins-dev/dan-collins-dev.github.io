<style>
    .coin {
        width: 8px;
        height: 8px;
        overflow: hidden;
        background-color: red;
    }

    .coin-animation {
        
        translate: 0 -7px;
        width: fit-content;
        height: fit-content;
        animation: spin 0.45s steps(6) infinite;
    }

    @keyframes spin {
        from {
            transform: translate3d(0px, 0, 0);
        }
        to {
            transform: translate3d(-100%, 0, 0);
        }
    }
</style>


<div class="coin">
    <img class="coin-animation" src="/coin-Sheet.png" alt="A spinning coin" />
</div>