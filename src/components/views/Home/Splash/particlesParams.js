export default{
    particles:{
        number:{
            value: 50,
            density:{
                enable: true,
                value_area: 1000,
            },
        },
        color:{
            value: '#ffffff',
        },
        shape:{
            type: 'circle',
            stroke:{
                width: 0,
                color: '#000'
            },
            polygon:{
                nb_sides: 5,
            },
            image:{
                src:'img/github.svg',
                width: 100,
                height: 100
            },
        },
        opacity:{
            value: 0.3,
            random: false,
            anim:{
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            },
        },
        size:{
            value: 2.5,
            random: true,
            anim:{
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked:{
            enable: true,
            distance: 300,
            color:'#fff',
            opacity: 0.1,
            width: 1
        },
        move:{
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode:'out',
            bounce: false,
            attract:{
                enable: false,
                rotateX: 600,
                rotateY: 1200
            },
        },
    },
    interactivity:{
        detect_on: 'canvas',
        events:{
            onhover:{
                enable: true,
                mode: 'grab'
            },
            onClick:{
                enable: true,
                mode: 'push'
            },
            onresize:{
                enable: true,
                density_auto: true,
                density_area: 400
            }
        },
        modes:{
            grab:{
                distance: 100,
                line_linked:{
                    opacity: 1
                }
            },
            bubble:{
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse:{
                distance: 400,
                duration: 0.4
            },
            push:{
                particles_nb: 4
            },
            remove:{
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}