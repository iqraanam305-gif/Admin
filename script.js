document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");

    /*
    =========================================================
    NEW HTML SYSTEM
    Reviews + Settings
    =========================================================
    */

    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", function () {

            sidebar.classList.add("sidebar-open");

        });

    }


    if (closeBtn && sidebar) {

        closeBtn.addEventListener("click", function () {

            sidebar.classList.remove("sidebar-open");

        });

    }



    /*
    =========================================================
    OLD HTML SYSTEM
    Index + Products + Orders + Analytics + Sales + Customers
    =========================================================
    */

    const menuToggle = document.getElementById("menu-toggle");
    const oldHamburger = document.querySelector(".hamburger");


    /*
    Add close button automatically to old sidebar
    */

    if (menuToggle && oldHamburger) {

        const oldSidebar = document.querySelector(".sidebar");

        if (oldSidebar && !oldSidebar.querySelector(".close-btn")) {

            const newCloseBtn = document.createElement("button");

            newCloseBtn.className = "close-btn";

            newCloseBtn.type = "button";

            newCloseBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

            oldSidebar.insertBefore(
                newCloseBtn,
                oldSidebar.firstElementChild
            );


            /*
            Close sidebar
            */

            newCloseBtn.addEventListener("click", function () {

                menuToggle.checked = false;

            });

        }

    }



    /*
    =========================================================
    CLOSE SIDEBAR WHEN CLICKING A LINK ON MOBILE
    =========================================================
    */

    const sidebarLinks = document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
            New system
            */

            if (sidebar) {

                sidebar.classList.remove("sidebar-open");

            }


            /*
            Old checkbox system
            */

            if (menuToggle) {

                menuToggle.checked = false;

            }

        });

    });



    /*
    =========================================================
    CLOSE SIDEBAR WHEN CLICKING OUTSIDE
    =========================================================
    */

    document.addEventListener("click", function (event) {

        if (window.innerWidth > 768) {
            return;
        }


        if (!sidebar) {
            return;
        }


        const clickedInsideSidebar =
            sidebar.contains(event.target);

        const clickedMenuButton =
            menuBtn && menuBtn.contains(event.target);

        const clickedOldHamburger =
            oldHamburger && oldHamburger.contains(event.target);


        if (
            !clickedInsideSidebar &&
            !clickedMenuButton &&
            !clickedOldHamburger
        ) {

            sidebar.classList.remove("sidebar-open");


            if (menuToggle) {

                menuToggle.checked = false;

            }

        }

    });



    /*
    =========================================================
    RESET SIDEBAR WHEN SCREEN BECOMES DESKTOP
    =========================================================
    */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            if (sidebar) {

                sidebar.classList.remove("sidebar-open");

            }

            if (menuToggle) {

                menuToggle.checked = false;

            }

        }

    });

});