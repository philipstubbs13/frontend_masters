<div class="modal-background">
    <div class="modal">
        <slot />
    </div>
</div>

<style>
    .modal-background {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        display: grid;
        place-items: center;
        z-index: 999;
    }
</style>