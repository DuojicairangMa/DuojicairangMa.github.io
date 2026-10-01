document.addEventListener(
    "DOMContentLoaded",
    function(){



    /*
    ===============================
    Section Observer

    监听页面滚动位置，
    自动切换导航状态
    ===============================
    */


    const sections =
        document.querySelectorAll(
            ".content-section[id]"
        );



    const navLinks =
        document.querySelectorAll(
            ".nav-links a[href^='#']"
        );






    const observerOptions = {


        root:null,


        /*
        上方20%区域和下方65%区域
        用于判断当前章节
        */


        rootMargin:
        "-20% 0px -65% 0px",


        threshold:0


    };







    const observer =
    new IntersectionObserver(

        function(entries){



            entries.forEach(

                function(entry){



                    if(entry.isIntersecting){



                        const currentID =
                        entry.target.getAttribute(
                            "id"
                        );





                        navLinks.forEach(

                            function(link){



                                link.classList.remove(
                                    "active"
                                );




                                if(
                                    link.getAttribute(
                                        "href"
                                    )
                                    ===
                                    "#" + currentID
                                ){


                                    link.classList.add(
                                        "active"
                                    );


                                }



                            }

                        );



                    }



                }


            );



        },

        observerOptions


    );








    sections.forEach(

        function(section){


            observer.observe(section);


        }

    );









    /*
    ===============================
    Smooth Scroll

    点击导航平滑移动
    ===============================
    */


    navLinks.forEach(

        function(link){



            link.addEventListener(

                "click",

                function(event){



                    const targetID =
                    this.getAttribute(
                        "href"
                    );




                    if(
                        !targetID.startsWith("#")
                    ){

                        return;

                    }





                    const target =
                    document.querySelector(
                        targetID
                    );






                    if(target){



                        event.preventDefault();





                        const navbar =
                        document.querySelector(
                            ".navbar"
                        );



                        const navbarHeight =
                        navbar.offsetHeight;







                        const targetPosition =
                        target.offsetTop
                        -
                        navbarHeight
                        -
                        20;






                        window.scrollTo({


                            top:
                            targetPosition,


                            behavior:
                            "smooth"


                        });



                    }



                }


            );



        }


    );



});