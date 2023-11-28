document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const bullet = document.getElementById("bullet");
    const enemy = document.querySelector(".enemy");

    document.addEventListener("keydown", function (e) {
        if (e.code === "Space" && !bullet.isVisible) {
            shoot();
        }
    });

    function shoot() {
        bullet.style.display = "block";
        bullet.style.bottom = "50px"; // Adjust the starting position of the bullet

        const bulletInterval = setInterval(function () {
            const bulletPosition = parseInt(bullet.style.bottom);
            const enemyPosition = parseInt(window.getComputedStyle(enemy).top);

            if (bulletPosition >= enemyPosition && bulletPosition <= enemyPosition + 50) {
                // Bullet hit the enemy
                alert("You hit the enemy!");
                resetGame();
            }

            if (bulletPosition >= 600) {
                // Bullet reached the top of the game container
                resetBullet();
            }

            bullet.style.bottom = (bulletPosition + 10) + "px";
        }, 20);

        function resetBullet() {
            clearInterval(bulletInterval);
            bullet.style.display = "none";
        }

        function resetGame() {
            resetBullet();
            // Additional game reset logic can be added here
        }
    }
});
