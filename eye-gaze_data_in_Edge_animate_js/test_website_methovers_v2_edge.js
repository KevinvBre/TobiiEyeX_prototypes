/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'hover',
                            symbolName: 'hover',
                            type: 'rect',
                            rect: ['0', '0', '1920', '2800', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'cursor',
                            type: 'rect',
                            rect: ['-319px', '21px', '80', '70', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920', '1000px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid87",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hover}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid88",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hover}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "hovertest": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '247px', '247px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 247, 247]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "ContentShouldHover": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'header',
                            type: 'image',
                            rect: [0, 0, '1921px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/header.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1925, 1080]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "menuv2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'categories42',
                            type: 'image',
                            rect: ['0', '0', '268px', '150px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/categories42.png', '0px', '0px']
                        },
                        {
                            id: 'categories_10242',
                            type: 'image',
                            rect: ['-394', '150', '1920', '0', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/categories_10242.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '268', '150', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268', '150']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid67",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid56",
                            "height",
                            0,
                            250,
                            "linear",
                            "${categories_10242}",
                            '0px',
                            '150px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid51",
                            "width",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '268px',
                            '268px'
                        ]
                    ]
                }
            },
            "settingsmenuv2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'settings2',
                            rect: [247, 0, '280px', '157px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/settings2.png', '0px', '0px']
                        },
                        {
                            rect: [-33, 0, 280, 167, 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 280, 155]
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid66",
                            "left",
                            0,
                            250,
                            "linear",
                            "${settings2}",
                            '247px',
                            '-87px'
                        ],
                        [
                            "eid63",
                            "width",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid64",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid62",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '-33px',
                            '-33px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid61",
                            "height",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '167px',
                            '167px'
                        ]
                    ]
                }
            },
            "blok1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'blikje4',
                            type: 'image',
                            rect: ['603', '0', '301px', '257px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blikje4.png', '0px', '0px']
                        },
                        {
                            id: 'blikje3',
                            type: 'image',
                            rect: ['603', '257', '301px', '257px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blikje3.png', '0px', '0px']
                        },
                        {
                            id: 'blikje2',
                            type: 'image',
                            rect: ['904', '257', '301px', '257px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blikje2.png', '0px', '0px']
                        },
                        {
                            id: 'blikje1',
                            type: 'image',
                            rect: ['904', '0', '301px', '257px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blikje1.png', '0px', '0px']
                        },
                        {
                            id: 'secret',
                            type: 'image',
                            rect: ['0', '0', '603px', '513px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/secret.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1205', '514', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1200', '513']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid80",
                            "top",
                            0,
                            500,
                            "linear",
                            "${blikje1}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            500,
                            "linear",
                            "${secret}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid71",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1205px',
                            '1205px'
                        ],
                        [
                            "eid93",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '1200px',
                            '1200px'
                        ],
                        [
                            "eid82",
                            "top",
                            0,
                            500,
                            "linear",
                            "${blikje4}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            500,
                            "linear",
                            "${blikje3}",
                            '257px',
                            '237px'
                        ],
                        [
                            "eid81",
                            "top",
                            0,
                            500,
                            "linear",
                            "${blikje2}",
                            '257px',
                            '237px'
                        ],
                        [
                            "eid94",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '513px',
                            '513px'
                        ],
                        [
                            "eid70",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '514px',
                            '514px'
                        ]
                    ]
                }
            },
            "hover": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '1.00304']],
                            id: 'imgblok_11',
                            symbolName: 'imgblok_11',
                            rect: ['2px', '663px', '385', '329', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '8px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok2',
                            symbolName: 'imgblok',
                            type: 'rect'
                        },
                        {
                            rect: ['391px', '8px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_1',
                            symbolName: 'imgblok_1',
                            type: 'rect'
                        },
                        {
                            rect: ['770px', '8px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_2',
                            symbolName: 'imgblok_2',
                            type: 'rect'
                        },
                        {
                            rect: ['1149px', '8px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_3',
                            symbolName: 'imgblok_3',
                            type: 'rect'
                        },
                        {
                            rect: ['1527px', '9px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_4',
                            symbolName: 'imgblok_4',
                            type: 'rect'
                        },
                        {
                            rect: ['1148px', '663px', null, null, 'auto', 'auto'],
                            id: 'imgblok_15',
                            symbolName: 'imgblok_15',
                            type: 'rect'
                        },
                        {
                            rect: ['1527px', '662px', null, null, 'auto', 'auto'],
                            id: 'imgblok_12',
                            symbolName: 'imgblok_12',
                            type: 'rect'
                        },
                        {
                            rect: ['11px', '334px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_5',
                            symbolName: 'imgblok_5',
                            type: 'rect'
                        },
                        {
                            rect: ['389px', '662px', null, null, 'auto', 'auto'],
                            id: 'imgblok_13',
                            symbolName: 'imgblok_13',
                            type: 'rect'
                        },
                        {
                            rect: ['768px', '661px', null, null, 'auto', 'auto'],
                            id: 'imgblok_14',
                            symbolName: 'imgblok_14',
                            type: 'rect'
                        },
                        {
                            rect: ['390px', '334px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_6',
                            symbolName: 'imgblok_6',
                            type: 'rect'
                        },
                        {
                            rect: ['768px', '335px', '379', '329', 'auto', 'auto'],
                            id: 'imgblok_7',
                            symbolName: 'imgblok_7',
                            type: 'rect'
                        },
                        {
                            rect: ['1148px', '335px', null, null, 'auto', 'auto'],
                            id: 'imgblok_82',
                            symbolName: 'imgblok_8',
                            type: 'rect'
                        },
                        {
                            rect: ['1527px', '335px', null, null, 'auto', 'auto'],
                            id: 'imgblok_9',
                            symbolName: 'imgblok_9',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '2798px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid620",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_11}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid619",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_4}",
                            '1527px',
                            '1527px'
                        ],
                        [
                            "eid622",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_9}",
                            '1527px',
                            '1527px'
                        ],
                        [
                            "eid617",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_1}",
                            '391px',
                            '391px'
                        ],
                        [
                            "eid634",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_11}",
                            '663px',
                            '663px'
                        ],
                        [
                            "eid667",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_15}",
                            '1148px',
                            '1148px'
                        ],
                        [
                            "eid615",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_5}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid632",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok2}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid630",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_9}",
                            '335px',
                            '335px'
                        ],
                        [
                            "eid654",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_13}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid631",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_4}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid717",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_12}",
                            '1527px',
                            '1527px'
                        ],
                        [
                            "eid643",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_7}",
                            '335px',
                            '335px'
                        ],
                        [
                            "eid641",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_3}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid672",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_12}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid633",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_6}",
                            '334px',
                            '334px'
                        ],
                        [
                            "eid644",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_2}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid618",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_3}",
                            '1149px',
                            '1149px'
                        ],
                        [
                            "eid668",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_15}",
                            '663px',
                            '663px'
                        ],
                        [
                            "eid636",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_1}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid662",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_14}",
                            '661px',
                            '661px'
                        ],
                        [
                            "eid712",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_13}",
                            '389px',
                            '389px'
                        ],
                        [
                            "eid621",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_2}",
                            '770px',
                            '770px'
                        ],
                        [
                            "eid626",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_82}",
                            '1148px',
                            '1148px'
                        ],
                        [
                            "eid629",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_6}",
                            '390px',
                            '390px'
                        ],
                        [
                            "eid661",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_14}",
                            '768px',
                            '768px'
                        ],
                        [
                            "eid624",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok_7}",
                            '768px',
                            '768px'
                        ],
                        [
                            "eid637",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_82}",
                            '335px',
                            '335px'
                        ],
                        [
                            "eid642",
                            "top",
                            0,
                            0,
                            "linear",
                            "${imgblok_5}",
                            '334px',
                            '334px'
                        ],
                        [
                            "eid648",
                            "left",
                            0,
                            0,
                            "linear",
                            "${imgblok2}",
                            '11px',
                            '11px'
                        ]
                    ]
                }
            },
            "starwars": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'settings2',
                            type: 'image',
                            rect: [247, 0, '280px', '157px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/settings2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [-33, 0, 280, 167, 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 280, 155]
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid64",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid63",
                            "width",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid61",
                            "height",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid62",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '-33px',
                            '-33px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid66",
                            "left",
                            0,
                            250,
                            "linear",
                            "${settings2}",
                            '247px',
                            '-87px'
                        ]
                    ]
                }
            },
            "blok1_starwars": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'nieuws22',
                            rect: [0, 0, '739px', '247px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nieuws22.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '163.06%', '208.1%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 739, 247]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid106",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '739px',
                            '739px'
                        ],
                        [
                            "eid111",
                            "width",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '163.06%',
                            '100%'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid108",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid110",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '208.1%',
                            '100%'
                        ],
                        [
                            "eid109",
                            "top",
                            0,
                            500,
                            "linear",
                            "${nieuws22}",
                            '0px',
                            '-20px'
                        ]
                    ]
                }
            },
            "blok1_latest": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'latestnews2',
                            type: 'image',
                            rect: [0, 0, '442px', '819px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/latestnews.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '59.82%', '331.58%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 200, 819]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            500,
                            "linear",
                            "${latestnews2}",
                            '0px',
                            '739px'
                        ],
                        [
                            "eid155",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '331.58%',
                            '100%'
                        ],
                        [
                            "eid143",
                            "width",
                            0,
                            500,
                            "linear",
                            "${symbolSelector}",
                            '200px',
                            '739px'
                        ],
                        [
                            "eid156",
                            "width",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '59.82%',
                            '100%'
                        ],
                        [
                            "eid139",
                            "top",
                            0,
                            500,
                            "linear",
                            "${latestnews2}",
                            '0px',
                            '340px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid145",
                            "height",
                            0,
                            500,
                            "linear",
                            "${symbolSelector}",
                            '819px',
                            '247px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "blok1_latestv2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'latestnews2',
                            rect: [0, 0, '442px', '819px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/latestnews2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 442, 819]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid159",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '442px',
                            '442px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid161",
                            "top",
                            0,
                            500,
                            "linear",
                            "${latestnews2}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid160",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '819px',
                            '819px'
                        ]
                    ]
                }
            },
            "blok1_latestv2_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ploygonsquare',
                            rect: [0, 0, '266px', '267px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ploygonsquare.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 266, 267]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "top",
                            0,
                            500,
                            "linear",
                            "${ploygonsquare}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid171",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid170",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '266px',
                            '266px'
                        ]
                    ]
                }
            },
            "blok1_latestv2_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'stream3vierkant',
                            rect: [0, 0, '266px', '266px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stream3vierkant.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 266, 267]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid175",
                            "top",
                            0,
                            500,
                            "linear",
                            "${stream3vierkant}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid170",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '266px',
                            '266px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid171",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "blok1_latestv2_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bigevent',
                            rect: [0, 0, '455px', '552px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bigevent.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 455, 522]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid178",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '455px',
                            '455px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid179",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '522px',
                            '522px'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            500,
                            "linear",
                            "${bigevent}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "blok1_latestv2_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bigevent',
                            type: 'image',
                            rect: [0, 0, '455px', '552px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bigevent.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 455, 522]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid178",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '455px',
                            '455px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            500,
                            "linear",
                            "${bigevent}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid179",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '522px',
                            '522px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos6',
                            rect: ['0', '0', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos6.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid204",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos6}",
                            '0px',
                            '-17px'
                        ],
                        [
                            "eid203",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos6}",
                            '379px',
                            '423px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid202",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos6}",
                            '327px',
                            '365px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid205",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos6}",
                            '0px',
                            '-20px'
                        ]
                    ]
                }
            },
            "imgblok_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'foto1',
                            rect: ['3', '1', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foto1.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid219",
                            "left",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '3px',
                            '-20px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid213",
                            "height",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '327px',
                            '365px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid217",
                            "top",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '1px',
                            '-19px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid215",
                            "width",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '379px',
                            '423px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos2',
                            rect: ['0', '1', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos2.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid227",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos2}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid228",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos2}",
                            '327px',
                            '369px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid226",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos2}",
                            '1px',
                            '-19px'
                        ],
                        [
                            "eid229",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos2}",
                            '379px',
                            '428px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos3',
                            rect: ['0', '0', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos3.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid238",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos3}",
                            '379px',
                            '432px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid237",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos3}",
                            '327px',
                            '373px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid236",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos3}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid235",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos3}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "imgblok_4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos4',
                            rect: ['0', '1', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos4.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid241",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos4}",
                            '1px',
                            '-19px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid244",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos4}",
                            '379px',
                            '423px'
                        ],
                        [
                            "eid242",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos4}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid243",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos4}",
                            '327px',
                            '365px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok_5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos5',
                            rect: ['0', '1', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo4.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid284",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos5}",
                            '327px',
                            '371px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid282",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos5}",
                            '1px',
                            '-19px'
                        ],
                        [
                            "eid285",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos5}",
                            '379px',
                            '430px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid283",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos5}",
                            '0px',
                            '-20px'
                        ]
                    ]
                }
            },
            "imgblok_6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos7',
                            rect: ['0', '2', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos7.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid288",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos7}",
                            '2px',
                            '-18px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid290",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos7}",
                            '327px',
                            '375px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid289",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos7}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid291",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos7}",
                            '379px',
                            '435px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok_7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos8',
                            rect: ['0', '1', '379', '327', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos8.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0px', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid303",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos8}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid302",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos8}",
                            '1px',
                            '-19px'
                        ],
                        [
                            "eid304",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos8}",
                            '327px',
                            '365px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid305",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos8}",
                            '379px',
                            '423px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "imgblok_8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos9',
                            rect: ['0px', '2px', '379px', '327px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos9.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid313",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos9}",
                            '2px',
                            '-18px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid316",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos9}",
                            '379px',
                            '425px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid315",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos9}",
                            '327px',
                            '367px'
                        ],
                        [
                            "eid314",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos9}",
                            '0px',
                            '-20px'
                        ]
                    ]
                }
            },
            "imgblok_9": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fotos10',
                            rect: ['-1px', '3px', '379px', '327px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fotos10.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid323",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fotos10}",
                            '-1px',
                            '-21px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid325",
                            "width",
                            0,
                            500,
                            "linear",
                            "${fotos10}",
                            '379px',
                            '429px'
                        ],
                        [
                            "eid324",
                            "height",
                            0,
                            500,
                            "linear",
                            "${fotos10}",
                            '327px',
                            '370px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid322",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fotos10}",
                            '3px',
                            '-17px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "imgblok_10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'foto1',
                            rect: [3, 1, 379, 327, 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/foto1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 379, 329]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid219",
                            "left",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '3px',
                            '-20px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid213",
                            "height",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '327px',
                            '365px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid215",
                            "width",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '379px',
                            '423px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid217",
                            "top",
                            0,
                            500,
                            "linear",
                            "${foto1}",
                            '1px',
                            '-19px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ]
                    ]
                }
            },
            "imgblok_11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['10px', '-41px', '385px', '329px', 'auto', 'auto'],
                            id: 'photo1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/photo1.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '385px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid458",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${photo1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid420",
                            "left",
                            0,
                            500,
                            "linear",
                            "${photo1}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid443",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid444",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid419",
                            "height",
                            0,
                            500,
                            "linear",
                            "${photo1}",
                            '327px',
                            '371px'
                        ],
                        [
                            "eid418",
                            "top",
                            0,
                            500,
                            "linear",
                            "${photo1}",
                            '1px',
                            '-41px'
                        ],
                        [
                            "eid449",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid450",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid451",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid452",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid456",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid457",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid445",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid446",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid421",
                            "width",
                            0,
                            500,
                            "linear",
                            "${photo1}",
                            '379px',
                            '430px'
                        ]
                    ]
                }
            },
            "imgblok_13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo3',
                            rect: ['-30px', '-1px', '378px', '330px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo3.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid714",
                            "top",
                            0,
                            500,
                            "linear",
                            "${photo3}",
                            '-1px',
                            '-37px'
                        ],
                        [
                            "eid686",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid687",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid713",
                            "height",
                            0,
                            500,
                            "linear",
                            "${photo3}",
                            '330px',
                            '366px'
                        ],
                        [
                            "eid716",
                            "left",
                            0,
                            500,
                            "linear",
                            "${photo3}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid694",
                            "width",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '122.95%'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid693",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '-75px'
                        ],
                        [
                            "eid715",
                            "width",
                            0,
                            500,
                            "linear",
                            "${photo3}",
                            '378px',
                            '419px'
                        ],
                        [
                            "eid695",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '-40px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid692",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '122.94%'
                        ]
                    ]
                }
            },
            "imgblok_14": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo5',
                            rect: ['-22px', '-41px', '427px', '370px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo5.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid702",
                            "width",
                            0,
                            500,
                            "linear",
                            "${photo5}",
                            '379px',
                            '427px'
                        ],
                        [
                            "eid703",
                            "left",
                            0,
                            500,
                            "linear",
                            "${photo5}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid701",
                            "top",
                            0,
                            500,
                            "linear",
                            "${photo5}",
                            '0px',
                            '-41px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid700",
                            "height",
                            0,
                            500,
                            "linear",
                            "${photo5}",
                            '329px',
                            '370px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok_15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo2',
                            rect: ['-35px', '-1px', '379px', '330px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo2.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid704",
                            "height",
                            0,
                            500,
                            "linear",
                            "${photo2}",
                            '330px',
                            '385px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid233",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid234",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid706",
                            "left",
                            0,
                            500,
                            "linear",
                            "${photo2}",
                            '0px',
                            '-35px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid162",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid163",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid707",
                            "width",
                            0,
                            500,
                            "linear",
                            "${photo2}",
                            '379px',
                            '442px'
                        ],
                        [
                            "eid705",
                            "top",
                            0,
                            500,
                            "linear",
                            "${photo2}",
                            '-1px',
                            '-56px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid165",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ]
                    ]
                }
            },
            "imgblok_12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo8',
                            rect: ['0px', '0px', '379px', '328px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo8.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '379', '329']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid718",
                            "height",
                            0,
                            499,
                            "linear",
                            "${photo8}",
                            '328px',
                            '389px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid721",
                            "width",
                            0,
                            499,
                            "linear",
                            "${photo8}",
                            '379px',
                            '449px'
                        ],
                        [
                            "eid724",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid725",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid5",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(228,19,19,1.00)',
                            'rgba(228,19,19,1.00)'
                        ],
                        [
                            "eid719",
                            "top",
                            0,
                            499,
                            "linear",
                            "${photo8}",
                            '0px',
                            '-61px'
                        ],
                        [
                            "eid196",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '379px',
                            '379px'
                        ],
                        [
                            "eid722",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid723",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid709",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid710",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid720",
                            "left",
                            0,
                            499,
                            "linear",
                            "${photo8}",
                            '0px',
                            '-70px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("test_website_methovers_v2_edgeActions.js");
})("EDGE-51211398");
