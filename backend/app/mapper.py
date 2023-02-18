
from typing import Any, Union


def map_data_from_kafka(data: dict) -> dict[str, Union[dict[str, Union[str, dict[str, dict[str, str]]]], str]]:
    """Получает json с данными кафки из бд и приводит его к читаемому состоянию"""
    exg_unit_kafka_data_map = {
        "У-171": {
            "podshipnics":{
                "podshipnik_1": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:27]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:65]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:74]"),
                        "warning_max": data.get("SM_Exgauster\\[2:83]"),
                        "warning_min": data.get("SM_Exgauster\\[2:92]"),
                    },
                    "vibro": {
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:0]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:137]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:149]"),
                            "warning_max": data.get("SM_Exgauster\\[2:161]"),
                            "warning_min": data.get("SM_Exgauster\\[2:173]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:1]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:138]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:150]"),
                            "warning_max": data.get("SM_Exgauster\\[2:162]"),
                            "warning_min": data.get("SM_Exgauster\\[2:174]"),
                        },
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:2]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:139]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:151]"),
                            "warning_max": data.get("SM_Exgauster\\[2:163]"),
                            "warning_min": data.get("SM_Exgauster\\[2:175]"),
                        },
                    },
                },
                "podshipnik_2": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:28]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:66]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:75]"),
                        "warning_max": data.get("SM_Exgauster\\[2:84]"),
                        "warning_min": data.get("SM_Exgauster\\[2:93]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:5]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:142]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:154]"),
                            "warning_max": data.get("SM_Exgauster\\[2:166]"),
                            "warning_min": data.get("SM_Exgauster\\[2:178]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:3]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:140]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:152]"),
                            "warning_max": data.get("SM_Exgauster\\[2:164]"),
                            "warning_min": data.get("SM_Exgauster\\[2:176]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:4]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:141]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:153]"),
                            "warning_max": data.get("SM_Exgauster\\[2:165]"),
                            "warning_min": data.get("SM_Exgauster\\[2:177]"),
                        },
                    },
                },
                "podshipnik_3": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:29]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:67]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:76]"),
                        "warning_max": data.get("SM_Exgauster\\[2:85]"),
                        "warning_min": data.get("SM_Exgauster\\[2:94]"),
                    },
                },
                "podshipnik_4": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:30]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:68]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:77]"),
                        "warning_max": data.get("SM_Exgauster\\[2:86]"),
                        "warning_min": data.get("SM_Exgauster\\[2:95]"),
                    },
                },
                "podshipnik_5": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:31]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:69]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:78]"),
                        "warning_max": data.get("SM_Exgauster\\[2:87]"),
                        "warning_min": data.get("SM_Exgauster\\[2:96]"),
                    },
                },
                "podshipnik_6": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:32]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:70]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:79]"),
                        "warning_max": data.get("SM_Exgauster\\[2:88]"),
                        "warning_min": data.get("SM_Exgauster\\[2:97]"),
                    },
                },
                "podshipnik_7": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:33]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:71]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:80]"),
                        "warning_max": data.get("SM_Exgauster\\[2:89]"),
                        "warning_min": data.get("SM_Exgauster\\[2:98]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:8]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:145]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:157]"),
                            "warning_max": data.get("SM_Exgauster\\[2:169]"),
                            "warning_min": data.get("SM_Exgauster\\[2:181]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:6]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:143]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:155]"),
                            "warning_max": data.get("SM_Exgauster\\[2:167]"),
                            "warning_min": data.get("SM_Exgauster\\[2:179]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:7]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:144]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:156]"),
                            "warning_max": data.get("SM_Exgauster\\[2:168]"),
                            "warning_min": data.get("SM_Exgauster\\[2:180]"),
                        },
                    },
                },
                "podshipnik_8": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:34]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:72]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:81]"),
                        "warning_max": data.get("SM_Exgauster\\[2:90]"),
                        "warning_min": data.get("SM_Exgauster\\[2:99]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:11]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:148]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:160]"),
                            "warning_max": data.get("SM_Exgauster\\[2:172]"),
                            "warning_min": data.get("SM_Exgauster\\[2:184]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:9]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:146]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:158]"),
                            "warning_max": data.get("SM_Exgauster\\[2:170]"),
                            "warning_min": data.get("SM_Exgauster\\[2:182]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:10]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:147]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:159]"),
                            "warning_max": data.get("SM_Exgauster\\[2:171]"),
                            "warning_min": data.get("SM_Exgauster\\[2:183]"),
                        },
                    },
                },
                "podshipnik_9": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:35]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:73]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:82]"),
                        "warning_max": data.get("SM_Exgauster\\[2:91]"),
                        "warning_min": data.get("SM_Exgauster\\[2:100]"),
                    },
                },
            },
            "freezer": {
                "oil": {
                "temperature_after": data.get("SM_Exgauster\\[2:42]"),
                "temperature_before": data.get("SM_Exgauster\\[2:41]"),
                },
                "water": {
                "temperature_after": data.get("SM_Exgauster\\[2:37]"),
                "temperature_before": data.get("SM_Exgauster\\[2:36]"),
                },
            },
            "gas_collector": {
                "temperature_before": data.get("SM_Exgauster\\[2:24]"),
                "underpressure_before": data.get("SM_Exgauster\\[2:61]"),
            },
            "gas_valve": {
                "gas_valve_closed": data.get("SM_Exgauster\\[4.1]"),
                "gas_valve_open": data.get("SM_Exgauster\\[4.2]"),
                "gas_valve_position": data.get("SM_Exgauster\\[4:6]"),
            },
            "main_drive": {
                "rotor_current": data.get("SM_Exgauster\\[4:2]"),
                "rotor_voltage": data.get("SM_Exgauster\\[4:4]"),
                "stator_current": data.get("SM_Exgauster\\[4:3]"),
                "stator_voltage": data.get("SM_Exgauster\\[4:5]"),
            },
            "oil_sys": {
                "oil_level": data.get("SM_Exgauster\\[4:0]"),
                "oil_pressure": data.get("SM_Exgauster\\[4:1]"),
            },
            "exgauster_status": data.get("SM_Exgauster\\[2.0]")
        },
        "У-172": {
            "podshipnics":{
                "podshipnik_1": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:43]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:101]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:110]"),
                        "warning_max": data.get("SM_Exgauster\\[2:119]"),
                        "warning_min": data.get("SM_Exgauster\\[2:128]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:14]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:187]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:199]"),
                            "warning_max": data.get("SM_Exgauster\\[2:211]"),
                            "warning_min": data.get("SM_Exgauster\\[2:223]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:12]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:185]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:197]"),
                            "warning_max": data.get("SM_Exgauster\\[2:209]"),
                            "warning_min": data.get("SM_Exgauster\\[2:221]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:13]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:186]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:198]"),
                            "warning_max": data.get("SM_Exgauster\\[2:210]"),
                            "warning_min": data.get("SM_Exgauster\\[2:222]"),
                        },
                    },
                },
                "podshipnik_2": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:44]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:102]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:111]"),
                        "warning_max": data.get("SM_Exgauster\\[2:120]"),
                        "warning_min": data.get("SM_Exgauster\\[2:129]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:17]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:190]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:202]"),
                            "warning_max": data.get("SM_Exgauster\\[2:214]"),
                            "warning_min": data.get("SM_Exgauster\\[2:226]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:15]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:188]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:200]"),
                            "warning_max": data.get("SM_Exgauster\\[2:212]"),
                            "warning_min": data.get("SM_Exgauster\\[2:224]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:16]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:189]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:201]"),
                            "warning_max": data.get("SM_Exgauster\\[2:213]"),
                            "warning_min": data.get("SM_Exgauster\\[2:225]"),
                        },
                    },
                },
                "podshipnik_3": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:45]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:103]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:112]"),
                        "warning_max": data.get("SM_Exgauster\\[2:121]"),
                        "warning_min": data.get("SM_Exgauster\\[2:130]"),
                    },
                },
                "podshipnik_4": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:47]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:104]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:113]"),
                        "warning_max": data.get("SM_Exgauster\\[2:122]"),
                        "warning_min": data.get("SM_Exgauster\\[2:131]"),
                    },
                },
                "podshipnik_5": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:48]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:105]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:114]"),
                        "warning_max": data.get("SM_Exgauster\\[2:123]"),
                        "warning_min": data.get("SM_Exgauster\\[2:132]"),
                    },
                },
                "podshipnik_6": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:49]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:106]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:115]"),
                        "warning_max": data.get("SM_Exgauster\\[2:124]"),
                        "warning_min": data.get("SM_Exgauster\\[2:133]"),
                    },
                },
                "podshipnik_7": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:50]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:107]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:116]"),
                        "warning_max": data.get("SM_Exgauster\\[2:125]"),
                        "warning_min": data.get("SM_Exgauster\\[2:134]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:20]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:193]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:205]"),
                            "warning_max": data.get("SM_Exgauster\\[2:217]"),
                            "warning_min": data.get("SM_Exgauster\\[2:229]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:18]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:191]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:203]"),
                            "warning_max": data.get("SM_Exgauster\\[2:215]"),
                            "warning_min": data.get("SM_Exgauster\\[2:227]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:19]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:192]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:204]"),
                            "warning_max": data.get("SM_Exgauster\\[2:216]"),
                            "warning_min": data.get("SM_Exgauster\\[2:228]"),
                        },
                    },
                },
                "podshipnik_8": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:51]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:108]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:117]"),
                        "warning_max": data.get("SM_Exgauster\\[2:126]"),
                        "warning_min": data.get("SM_Exgauster\\[2:135]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[2:23]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:196]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:208]"),
                            "warning_max": data.get("SM_Exgauster\\[2:220]"),
                            "warning_min": data.get("SM_Exgauster\\[2:232]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[2:21]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:194]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:206]"),
                            "warning_max": data.get("SM_Exgauster\\[2:218]"),
                            "warning_min": data.get("SM_Exgauster\\[2:230]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[2:22]"),
                            "alarm_max": data.get("SM_Exgauster\\[2:195]"),
                            "alarm_min": data.get("SM_Exgauster\\[2:207]"),
                            "warning_max": data.get("SM_Exgauster\\[2:219]"),
                            "warning_min": data.get("SM_Exgauster\\[2:231]"),
                        },
                    },
                },
                "podshipnik_9": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[2:52]"),
                        "alarm_max": data.get("SM_Exgauster\\[2:109]"),
                        "alarm_min": data.get("SM_Exgauster\\[2:118]"),
                        "warning_max": data.get("SM_Exgauster\\[2:127]"),
                        "warning_min": data.get("SM_Exgauster\\[2:136]"),
                    },
                },
            },
            "freezer": {
                "oil": {
                "temperature_after": data.get("SM_Exgauster\\[2:60]"),
                "temperature_before": data.get("SM_Exgauster\\[2:59]"),
                },
                "water": {
                "temperature_after": data.get("SM_Exgauster\\[2:54]"),
                "temperature_before": data.get("SM_Exgauster\\[2:53]"),
                },
            },
            "gas_collector": {
                "temperature_before": data.get("SM_Exgauster\\[2:25]"),
                "underpressure_before": data.get("SM_Exgauster\\[2:62]"),
            },
            "gas_valve": {
                "gas_valve_closed": data.get("SM_Exgauster\\[4.6]"),
                "gas_valve_open": data.get("SM_Exgauster\\[4.7]"),
                "gas_valve_position": data.get("SM_Exgauster\\[4:13]"),
            },
            "main_drive": {
                "rotor_current": data.get("SM_Exgauster\\[4:9]"),
                "rotor_voltage": data.get("SM_Exgauster\\[4:11]"),
                "stator_current": data.get("SM_Exgauster\\[4:10]"),
                "stator_voltage": data.get("SM_Exgauster\\[4:12]"),
            },
            "oil_sys": {
                "oil_level": data.get("SM_Exgauster\\[4:7]"),
                "oil_pressure": data.get("SM_Exgauster\\[4:8]"),
            },
            "exgauster_status": data.get("SM_Exgauster\\[2.1]")
        },
        "Ф-171": {
            "podshipnics":{
                "podshipnik_1": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:27]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:63]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:72]"),
                        "warning_max": data.get("SM_Exgauster\\[0:81]"),
                        "warning_min": data.get("SM_Exgauster\\[0:90]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:2]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:137]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:149]"),
                            "warning_max": data.get("SM_Exgauster\\[0:161]"),
                            "warning_min": data.get("SM_Exgauster\\[0:173]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:0]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:135]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:147]"),
                            "warning_max": data.get("SM_Exgauster\\[0:159]"),
                            "warning_min": data.get("SM_Exgauster\\[0:171]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:1]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:136]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:148]"),
                            "warning_max": data.get("SM_Exgauster\\[0:160]"),
                            "warning_min": data.get("SM_Exgauster\\[0:172]"),
                        },
                    },
                },
                "podshipnik_2": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:28]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:64]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:73]"),
                        "warning_max": data.get("SM_Exgauster\\[0:82]"),
                        "warning_min": data.get("SM_Exgauster\\[0:91]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:5]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:140]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:152]"),
                            "warning_max": data.get("SM_Exgauster\\[0:164]"),
                            "warning_min": data.get("SM_Exgauster\\[0:176]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:3]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:138]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:150]"),
                            "warning_max": data.get("SM_Exgauster\\[0:162]"),
                            "warning_min": data.get("SM_Exgauster\\[0:174]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:4]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:139]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:151]"),
                            "warning_max": data.get("SM_Exgauster\\[0:163]"),
                            "warning_min": data.get("SM_Exgauster\\[0:175]"),
                        },
                    },
                },
                "podshipnik_3": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:29]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:65]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:74]"),
                        "warning_max": data.get("SM_Exgauster\\[0:83]"),
                        "warning_min": data.get("SM_Exgauster\\[0:92]"),
                    },
                },
                "podshipnik_4": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:30]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:66]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:75]"),
                        "warning_max": data.get("SM_Exgauster\\[0:84]"),
                        "warning_min": data.get("SM_Exgauster\\[0:93]"),
                    },
                },
                "podshipnik_5": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:31]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:67]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:76]"),
                        "warning_max": data.get("SM_Exgauster\\[0:85]"),
                        "warning_min": data.get("SM_Exgauster\\[0:94]"),
                    },
                },
                "podshipnik_6": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:32]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:68]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:77]"),
                        "warning_max": data.get("SM_Exgauster\\[0:86]"),
                        "warning_min": data.get("SM_Exgauster\\[0:95]"),
                    },
                },
                "podshipnik_7": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:33]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:69]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:78]"),
                        "warning_max": data.get("SM_Exgauster\\[0:87]"),
                        "warning_min": data.get("SM_Exgauster\\[0:96]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:8]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:143]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:155]"),
                            "warning_max": data.get("SM_Exgauster\\[0:167]"),
                            "warning_min": data.get("SM_Exgauster\\[0:179]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:6]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:141]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:153]"),
                            "warning_max": data.get("SM_Exgauster\\[0:165]"),
                            "warning_min": data.get("SM_Exgauster\\[0:177]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:7]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:142]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:154]"),
                            "warning_max": data.get("SM_Exgauster\\[0:166]"),
                            "warning_min": data.get("SM_Exgauster\\[0:178]"),
                        },
                    },
                },
                "podshipnik_8": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:34]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:70]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:79]"),
                        "warning_max": data.get("SM_Exgauster\\[0:88]"),
                        "warning_min": data.get("SM_Exgauster\\[0:97]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:11]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:146]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:158]"),
                            "warning_max": data.get("SM_Exgauster\\[0:170]"),
                            "warning_min": data.get("SM_Exgauster\\[0:182]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:9]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:144]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:156]"),
                            "warning_max": data.get("SM_Exgauster\\[0:168]"),
                            "warning_min": data.get("SM_Exgauster\\[0:180]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:10]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:145]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:157]"),
                            "warning_max": data.get("SM_Exgauster\\[0:169]"),
                            "warning_min": data.get("SM_Exgauster\\[0:181]"),
                        },
                    },
                },
                "podshipnik_9": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:35]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:71]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:80]"),
                        "warning_max": data.get("SM_Exgauster\\[0:89]"),
                        "warning_min": data.get("SM_Exgauster\\[0:98]"),
                    },
                },
            },
            "freezer": {
                "oil": {
                "temperature_after": data.get("SM_Exgauster\\[0:42]"),
                "temperature_before": data.get("SM_Exgauster\\[0:41]"),
                },
                "water": {
                "temperature_after": data.get("SM_Exgauster\\[0:37]"),
                "temperature_before": data.get("SM_Exgauster\\[0:36]"),
                },
            },
            "gas_collector": {
                "temperature_before": data.get("SM_Exgauster\\[0:24]"),
                "underpressure_before": data.get("SM_Exgauster\\[0:61]"),
            },
            "gas_valve": {
                "gas_valve_closed": data.get("SM_Exgauster\\[1.1]"),
                "gas_valve_open": data.get("SM_Exgauster\\[1.2]"),
                "gas_valve_position": data.get("SM_Exgauster\\[1:6]"),
            },
            "main_drive": {
                "rotor_current": data.get("SM_Exgauster\\[1:2]"),
                "rotor_voltage": data.get("SM_Exgauster\\[1:4]"),
                "stator_current": data.get("SM_Exgauster\\[1:3]"),
                "stator_voltage": data.get("SM_Exgauster\\[1:5]"),
            },
            "oil_sys": {
                "oil_level": data.get("SM_Exgauster\\[1:0]"),
                "oil_pressure": data.get("SM_Exgauster\\[1:1]"),
            },
            "exgauster_status": data.get("SM_Exgauster\\[0.0]")
        },
        "Ф-172": {
            "podshipnics":{
                "podshipnik_1": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:43]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:99]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:108]"),
                        "warning_max": data.get("SM_Exgauster\\[0:117]"),
                        "warning_min": data.get("SM_Exgauster\\[0:126]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:14]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:185]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:197]"),
                            "warning_max": data.get("SM_Exgauster\\[0:209]"),
                            "warning_min": data.get("SM_Exgauster\\[0:221]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:12]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:183]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:195]"),
                            "warning_max": data.get("SM_Exgauster\\[0:207]"),
                            "warning_min": data.get("SM_Exgauster\\[0:219]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:13]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:184]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:196]"),
                            "warning_max": data.get("SM_Exgauster\\[0:208]"),
                            "warning_min": data.get("SM_Exgauster\\[0:220]"),
                        },
                    },
                },
                "podshipnik_2": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:44]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:100]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:109]"),
                        "warning_max": data.get("SM_Exgauster\\[0:118]"),
                        "warning_min": data.get("SM_Exgauster\\[0:127]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:17]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:188]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:200]"),
                            "warning_max": data.get("SM_Exgauster\\[0:212]"),
                            "warning_min": data.get("SM_Exgauster\\[0:224]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:15]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:186]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:198]"),
                            "warning_max": data.get("SM_Exgauster\\[0:210]"),
                            "warning_min": data.get("SM_Exgauster\\[0:222]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:16]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:187]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:199]"),
                            "warning_max": data.get("SM_Exgauster\\[0:211]"),
                            "warning_min": data.get("SM_Exgauster\\[0:223]"),
                        },
                    },
                },
                "podshipnik_3": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:45]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:101]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:110]"),
                        "warning_max": data.get("SM_Exgauster\\[0:119]"),
                        "warning_min": data.get("SM_Exgauster\\[0:128]"),
                    },
                },
                "podshipnik_4": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:47]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:102]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:111]"),
                        "warning_max": data.get("SM_Exgauster\\[0:120]"),
                        "warning_min": data.get("SM_Exgauster\\[0:129]"),
                    },
                },
                "podshipnik_5": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:48]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:103]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:112]"),
                        "warning_max": data.get("SM_Exgauster\\[0:121]"),
                        "warning_min": data.get("SM_Exgauster\\[0:130]"),
                    },
                },
                "podshipnik_6": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:49]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:104]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:113]"),
                        "warning_max": data.get("SM_Exgauster\\[0:122]"),
                        "warning_min": data.get("SM_Exgauster\\[0:131]"),
                    },
                },
                "podshipnik_7": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:50]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:105]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:114]"),
                        "warning_max": data.get("SM_Exgauster\\[0:123]"),
                        "warning_min": data.get("SM_Exgauster\\[0:132]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:20]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:191]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:203]"),
                            "warning_max": data.get("SM_Exgauster\\[0:215]"),
                            "warning_min": data.get("SM_Exgauster\\[0:227]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:18]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:189]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:201]"),
                            "warning_max": data.get("SM_Exgauster\\[0:213]"),
                            "warning_min": data.get("SM_Exgauster\\[0:225]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:19]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:190]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:202]"),
                            "warning_max": data.get("SM_Exgauster\\[0:214]"),
                            "warning_min": data.get("SM_Exgauster\\[0:226]"),
                        },
                    },
                },
                "podshipnik_8": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:51]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:106]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:115]"),
                        "warning_max": data.get("SM_Exgauster\\[0:124]"),
                        "warning_min": data.get("SM_Exgauster\\[0:133]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[0:23]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:194]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:206]"),
                            "warning_max": data.get("SM_Exgauster\\[0:218]"),
                            "warning_min": data.get("SM_Exgauster\\[0:230]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[0:21]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:192]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:204]"),
                            "warning_max": data.get("SM_Exgauster\\[0:216]"),
                            "warning_min": data.get("SM_Exgauster\\[0:228]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[0:22]"),
                            "alarm_max": data.get("SM_Exgauster\\[0:193]"),
                            "alarm_min": data.get("SM_Exgauster\\[0:205]"),
                            "warning_max": data.get("SM_Exgauster\\[0:217]"),
                            "warning_min": data.get("SM_Exgauster\\[0:229]"),
                        },
                    },
                },
                "podshipnik_9": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[0:52]"),
                        "alarm_max": data.get("SM_Exgauster\\[0:107]"),
                        "alarm_min": data.get("SM_Exgauster\\[0:116]"),
                        "warning_max": data.get("SM_Exgauster\\[0:125]"),
                        "warning_min": data.get("SM_Exgauster\\[0:134]"),
                    },
                },
            },
            "freezer": {
                "oil": {
                "temperature_after": data.get("SM_Exgauster\\[0:60]"),
                "temperature_before": data.get("SM_Exgauster\\[0:59]"),
                },
                "water": {
                "temperature_after": data.get("SM_Exgauster\\[0:54]"),
                "temperature_before": data.get("SM_Exgauster\\[0:53]"),
                },
            },
            "gas_collector": {
                "temperature_before": data.get("SM_Exgauster\\[0:25]"),
                "underpressure_before": data.get("SM_Exgauster\\[0:62]"),
            },
            "gas_valve": {
                "gas_valve_closed": data.get("SM_Exgauster\\[1.6]"),
                "gas_valve_open": data.get("SM_Exgauster\\[1.7]"),
                "gas_valve_position": data.get("SM_Exgauster\\[1:13]"),
            },
            "main_drive": {
                "rotor_current": data.get("SM_Exgauster\\[1:9]"),
                "rotor_voltage": data.get("SM_Exgauster\\[1:11]"),
                "stator_current": data.get("SM_Exgauster\\[1:10]"),
                "stator_voltage": data.get("SM_Exgauster\\[1:12]"),
            },
            "oil_sys": {
                "oil_level": data.get("SM_Exgauster\\[1:7]"),
                "oil_pressure": data.get("SM_Exgauster\\[1:8]"),
            },
            "exgauster_status": data.get("SM_Exgauster\\[0.1]")
        },
        "Х-171": {
            "podshipnics":{
                "podshipnik_1": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:27]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:63]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:72]"),
                        "warning_max": data.get("SM_Exgauster\\[3:81]"),
                        "warning_min": data.get("SM_Exgauster\\[3:90]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:2]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:137]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:149]"),
                            "warning_max": data.get("SM_Exgauster\\[3:161]"),
                            "warning_min": data.get("SM_Exgauster\\[3:173]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:0]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:135]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:147]"),
                            "warning_max": data.get("SM_Exgauster\\[3:159]"),
                            "warning_min": data.get("SM_Exgauster\\[3:171]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:1]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:136]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:148]"),
                            "warning_max": data.get("SM_Exgauster\\[3:160]"),
                            "warning_min": data.get("SM_Exgauster\\[3:172]"),
                        },
                    },
                },
                "podshipnik_2": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:28]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:64]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:73]"),
                        "warning_max": data.get("SM_Exgauster\\[3:82]"),
                        "warning_min": data.get("SM_Exgauster\\[3:91]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:5]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:140]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:152]"),
                            "warning_max": data.get("SM_Exgauster\\[3:164]"),
                            "warning_min": data.get("SM_Exgauster\\[3:176]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:3]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:138]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:150]"),
                            "warning_max": data.get("SM_Exgauster\\[3:162]"),
                            "warning_min": data.get("SM_Exgauster\\[3:174]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:4]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:139]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:151]"),
                            "warning_max": data.get("SM_Exgauster\\[3:163]"),
                            "warning_min": data.get("SM_Exgauster\\[3:175]"),
                        },
                    },
                },
                "podshipnik_3": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:29]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:65]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:74]"),
                        "warning_max": data.get("SM_Exgauster\\[3:83]"),
                        "warning_min": data.get("SM_Exgauster\\[3:92]"),
                    },
                },
                "podshipnik_4": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:30]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:66]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:75]"),
                        "warning_max": data.get("SM_Exgauster\\[3:84]"),
                        "warning_min": data.get("SM_Exgauster\\[3:93]"),
                    },
                },
                "podshipnik_5": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:31]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:67]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:76]"),
                        "warning_max": data.get("SM_Exgauster\\[3:85]"),
                        "warning_min": data.get("SM_Exgauster\\[3:94]"),
                    },
                },
                "podshipnik_6": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:32]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:68]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:77]"),
                        "warning_max": data.get("SM_Exgauster\\[3:86]"),
                        "warning_min": data.get("SM_Exgauster\\[3:95]"),
                    },
                },
                "podshipnik_7": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:33]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:69]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:78]"),
                        "warning_max": data.get("SM_Exgauster\\[3:87]"),
                        "warning_min": data.get("SM_Exgauster\\[3:96]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:8]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:143]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:155]"),
                            "warning_max": data.get("SM_Exgauster\\[3:167]"),
                            "warning_min": data.get("SM_Exgauster\\[3:179]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:6]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:141]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:153]"),
                            "warning_max": data.get("SM_Exgauster\\[3:165]"),
                            "warning_min": data.get("SM_Exgauster\\[3:177]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:7]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:142]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:154]"),
                            "warning_max": data.get("SM_Exgauster\\[3:166]"),
                            "warning_min": data.get("SM_Exgauster\\[3:178]"),
                        },
                    },
                },
                "podshipnik_8": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:34]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:70]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:79]"),
                        "warning_max": data.get("SM_Exgauster\\[3:88]"),
                        "warning_min": data.get("SM_Exgauster\\[3:97]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:11]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:146]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:158]"),
                            "warning_max": data.get("SM_Exgauster\\[3:170]"),
                            "warning_min": data.get("SM_Exgauster\\[3:182]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:9]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:144]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:156]"),
                            "warning_max": data.get("SM_Exgauster\\[3:168]"),
                            "warning_min": data.get("SM_Exgauster\\[3:180]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:10]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:145]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:157]"),
                            "warning_max": data.get("SM_Exgauster\\[3:169]"),
                            "warning_min": data.get("SM_Exgauster\\[3:181]"),
                        },
                    },
                },
                "podshipnik_9": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:35]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:71]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:80]"),
                        "warning_max": data.get("SM_Exgauster\\[3:89]"),
                        "warning_min": data.get("SM_Exgauster\\[3:98]"),
                    },
                },
            },
            "freezer": {
                "oil": {
                "temperature_after": data.get("SM_Exgauster\\[3:42]"),
                "temperature_before": data.get("SM_Exgauster\\[3:41]"),
                },
                "water": {
                "temperature_after": data.get("SM_Exgauster\\[3:37]"),
                "temperature_before": data.get("SM_Exgauster\\[3:36]"),
                },
            },
            "gas_collector": {
                "temperature_before": data.get("SM_Exgauster\\[3:24]"),
                "underpressure_before": data.get("SM_Exgauster\\[3:61]"),
            },
            "gas_valve": {
                "gas_valve_closed": data.get("SM_Exgauster\\[5.1]"),
                "gas_valve_open": data.get("SM_Exgauster\\[5.2]"),
                "gas_valve_position": data.get("SM_Exgauster\\[5:6]"),
            },
            "main_drive": {
                "rotor_current": data.get("SM_Exgauster\\[5:2]"),
                "rotor_voltage": data.get("SM_Exgauster\\[5:4]"),
                "stator_current": data.get("SM_Exgauster\\[5:3]"),
                "stator_voltage": data.get("SM_Exgauster\\[5:5]"),
            },
            "oil_sys": {
                "oil_level": data.get("SM_Exgauster\\[5:0]"),
                "oil_pressure": data.get("SM_Exgauster\\[5:1]"),
            },
            "exgauster_status": data.get("SM_Exgauster\\[3.0]")
        },
        "Х-172": {
            "podshipnics":{
                "podshipnik_1": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:43]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:99]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:108]"),
                        "warning_max": data.get("SM_Exgauster\\[3:117]"),
                        "warning_min": data.get("SM_Exgauster\\[3:126]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:14]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:185]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:197]"),
                            "warning_max": data.get("SM_Exgauster\\[3:209]"),
                            "warning_min": data.get("SM_Exgauster\\[3:221]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:12]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:183]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:195]"),
                            "warning_max": data.get("SM_Exgauster\\[3:207]"),
                            "warning_min": data.get("SM_Exgauster\\[3:219]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:13]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:184]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:196]"),
                            "warning_max": data.get("SM_Exgauster\\[3:208]"),
                            "warning_min": data.get("SM_Exgauster\\[3:220]"),
                        },
                    },
                },
                "podshipnik_2": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:44]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:100]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:109]"),
                        "warning_max": data.get("SM_Exgauster\\[3:118]"),
                        "warning_min": data.get("SM_Exgauster\\[3:127]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:17]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:188]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:200]"),
                            "warning_max": data.get("SM_Exgauster\\[3:212]"),
                            "warning_min": data.get("SM_Exgauster\\[3:224]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:15]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:186]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:198]"),
                            "warning_max": data.get("SM_Exgauster\\[3:210]"),
                            "warning_min": data.get("SM_Exgauster\\[3:222]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:16]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:187]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:199]"),
                            "warning_max": data.get("SM_Exgauster\\[3:211]"),
                            "warning_min": data.get("SM_Exgauster\\[3:223]"),
                        },
                    },
                },
                "podshipnik_3": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:45]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:101]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:110]"),
                        "warning_max": data.get("SM_Exgauster\\[3:119]"),
                        "warning_min": data.get("SM_Exgauster\\[3:128]"),
                    },
                },
                "podshipnik_4": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:47]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:102]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:111]"),
                        "warning_max": data.get("SM_Exgauster\\[3:120]"),
                        "warning_min": data.get("SM_Exgauster\\[3:129]"),
                    },
                },
                "podshipnik_5": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:48]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:103]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:112]"),
                        "warning_max": data.get("SM_Exgauster\\[3:121]"),
                        "warning_min": data.get("SM_Exgauster\\[3:130]"),
                    },
                },
                "podshipnik_6": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:49]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:104]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:113]"),
                        "warning_max": data.get("SM_Exgauster\\[3:122]"),
                        "warning_min": data.get("SM_Exgauster\\[3:131]"),
                    },
                },
                "podshipnik_7": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:50]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:105]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:114]"),
                        "warning_max": data.get("SM_Exgauster\\[3:123]"),
                        "warning_min": data.get("SM_Exgauster\\[3:132]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:20]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:191]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:203]"),
                            "warning_max": data.get("SM_Exgauster\\[3:215]"),
                            "warning_min": data.get("SM_Exgauster\\[3:227]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:18]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:189]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:201]"),
                            "warning_max": data.get("SM_Exgauster\\[3:213]"),
                            "warning_min": data.get("SM_Exgauster\\[3:225]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:19]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:190]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:202]"),
                            "warning_max": data.get("SM_Exgauster\\[3:214]"),
                            "warning_min": data.get("SM_Exgauster\\[3:226]"),
                        },
                    },
                },
                "podshipnik_8": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:51]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:106]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:115]"),
                        "warning_max": data.get("SM_Exgauster\\[3:124]"),
                        "warning_min": data.get("SM_Exgauster\\[3:133]"),
                    },
                    "vibro": {
                        "axial": {
                            "vibration_axial": data.get("SM_Exgauster\\[3:23]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:194]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:206]"),
                            "warning_max": data.get("SM_Exgauster\\[3:218]"),
                            "warning_min": data.get("SM_Exgauster\\[3:230]"),
                        },
                        "horizontal": {
                            "vibration_horizontal": data.get("SM_Exgauster\\[3:21]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:192]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:204]"),
                            "warning_max": data.get("SM_Exgauster\\[3:216]"),
                            "warning_min": data.get("SM_Exgauster\\[3:228]"),
                        },
                        "vertical": {
                            "vibration_vertical": data.get("SM_Exgauster\\[3:22]"),
                            "alarm_max": data.get("SM_Exgauster\\[3:193]"),
                            "alarm_min": data.get("SM_Exgauster\\[3:205]"),
                            "warning_max": data.get("SM_Exgauster\\[3:217]"),
                            "warning_min": data.get("SM_Exgauster\\[3:229]"),
                        },
                    },
                },
                "podshipnik_9": {
                    "tempreture": {
                        "temperature": data.get("SM_Exgauster\\[3:52]"),
                        "alarm_max": data.get("SM_Exgauster\\[3:107]"),
                        "alarm_min": data.get("SM_Exgauster\\[3:116]"),
                        "warning_max": data.get("SM_Exgauster\\[3:125]"),
                        "warning_min": data.get("SM_Exgauster\\[3:134]"),
                    },
                },
            },
            "freezer": {
                "oil": {
                "temperature_after": data.get("SM_Exgauster\\[3:60]"),
                "temperature_before": data.get("SM_Exgauster\\[3:59]"),
                },
                "water": {
                "temperature_after": data.get("SM_Exgauster\\[3:54]"),
                "temperature_before": data.get("SM_Exgauster\\[3:53]"),
                },
            },
            "gas_collector": {
                "temperature_before": data.get("SM_Exgauster\\[3:25]"),
                "underpressure_before": data.get("SM_Exgauster\\[3:62]"),
            },
            "gas_valve": {
                "gas_valve_closed": data.get("SM_Exgauster\\[5.6]"),
                "gas_valve_open": data.get("SM_Exgauster\\[5.7]"),
                "gas_valve_position": data.get("SM_Exgauster\\[5:13]"),
            },
            "main_drive": {
                "rotor_current": data.get("SM_Exgauster\\[5:9]"),
                "rotor_voltage": data.get("SM_Exgauster\\[5:11]"),
                "stator_current": data.get("SM_Exgauster\\[5:10]"),
                "stator_voltage": data.get("SM_Exgauster\\[5:12]"),
            },
            "oil_sys": {
                "oil_level": data.get("SM_Exgauster\\[5:7]"),
                "oil_pressure": data.get("SM_Exgauster\\[5:8]"),
            },
            "exgauster_status": data.get("SM_Exgauster\\[3.1]")
        },
    }

    return exg_unit_kafka_data_map

def map_exauster_data(data):
    """Получает json с данными кафки из бд и форматирует его для отправки по вебсокету"""

    exg_unit_kafka_data_map = map_data_from_kafka(data.get("data"))
    res = {
        "1": {},
        "2": {},
        "3": {},
        "moment": data.get("moment"),
    }
    aglo_exg_map = {
        "У-171": "1",
        "У-172": "1",
        "Ф-171": "2",
        "Ф-172": "2",
        "Х-171": "3",
        "Х-172": "3",
    }
    for exgauster_name, aglovec_num in aglo_exg_map.items():
        res[aglovec_num].update({
            exgauster_name: {
                "bearing": {},
                "coolant": {},
                "mainPrivod": {},
                "masloBack": {},
                "truba": {},
            }
        })
        exgauster_units = exg_unit_kafka_data_map[exgauster_name]
        for unit, sensors in exgauster_units.items():
            if unit == "podshipnics":
                for podshipnic, sensors_data in sensors.items():
                    res[aglovec_num][exgauster_name]["bearing"].update({podshipnic[-1]: {}})
                    for sensor_param, sensor_data in sensors_data.items():
                        if sensor_param == "tempreture":
                            sensor_val = sensor_data.get("temperature")
                            if sensor_val and sensor_val >= 65 and sensor_val < 75:
                                status = "warning"
                            elif sensor_val >= 75:
                                status = "danger"
                            else:
                                status = "normal"
                            res[aglovec_num][exgauster_name]["bearing"][podshipnic[-1]].update({"T": {"value": sensor_val, "state": status}})

                        elif sensor_param == "vibro":
                            for sens_roam, sens_data in sensor_data.items():
                                if sens_roam == "axial":
                                    name = "O"
                                elif sens_roam == "horizontal":
                                    name = "G"
                                else:
                                    name = "B"

                                sensor_val = sens_data.get(f"vibration_{sens_roam}")
                                if sensor_val and sensor_val >= sens_data.get(f"warning_max") and sensor_val < sens_data.get(f"alarm_max"):
                                    status = "warning"
                                elif sensor_val and sensor_val >= sens_data.get(f"alarm_max"):
                                    status = "danger"
                                else:
                                    status = "normal"

                                res[aglovec_num][exgauster_name]["bearing"][podshipnic[-1]].update({name: {"value": sensor_val, "state": status}})

            elif unit == "freezer":
                for cooler_item, cooler_data in sensors.items():
                    if cooler_item == "oil":
                        for o_param, o_val in cooler_data.items():
                            c_name = "after2" if o_param == "temperature_after" else "before2"
                            c_state = "warning" if o_val and o_val >= 30 else "normal"
                            res[aglovec_num][exgauster_name]["coolant"].update({c_name: {"value": o_val, "state": c_state}})

                    else:
                        for w_param, w_val in cooler_data.items():
                            c_name = "after1" if w_param == "temperature_after" else "before1"
                            c_state = "warning" if w_val and w_val >= 30 else "normal"
                            res[aglovec_num][exgauster_name]["coolant"].update({c_name: {"value": w_val, "state": c_state}})

            elif unit in ["gas_collector", "gas_valve"]:
                if unit == "gas_collector":
                    for gc_param, gc_val in sensors.items():
                        t_name = "temperature" if gc_param == "temperature_before" else "vacuum"
                        res[aglovec_num][exgauster_name]["truba"].update({t_name: gc_val})
                else:
                    res[aglovec_num][exgauster_name]["truba"].update({"damper": sensors.get("gas_valve_position")})

            elif unit == "main_drive":
                for drive_sensor_name, drive_sensor_val in sensors.items():
                    if drive_sensor_name == "rotor_current":
                        d_name = "I"
                        if exgauster_name in {"exgauster_u171", "exgauster_u172"}:
                            d_state = "warning" if drive_sensor_val and drive_sensor_val > 250 else "normal"
                        else:
                            d_state = "warning" if drive_sensor_val and drive_sensor_val > 200 else "normal"
                    elif drive_sensor_name == "rotor_voltage":
                        d_name = "URotor"
                        d_state = "normal"
                    elif drive_sensor_name == "stator_current":
                        d_name = "IDvig"
                        if drive_sensor_val and drive_sensor_val >= 280:
                            d_state = "danger"
                        elif drive_sensor_val and drive_sensor_val >= 230 and drive_sensor_val < 280:
                            d_state = "warning"
                        else:
                            d_state = "normal"
                    else:
                        d_name = "UStater"
                        d_state = "normal"

                    res[aglovec_num][exgauster_name]["mainPrivod"].update({d_name: {"value": drive_sensor_val, "state": d_state}})

            elif unit == "oil_sys":

                for oil_param, oil_val in sensors.items():
                    if oil_param == "oil_level":
                        maslo_name = "level"
                        if oil_val and oil_val < 20 and oil_val >= 10:
                            oil_state = "warning"
                        if oil_val and oil_val < 10:
                            oil_state = "danger"
                        else:
                            oil_state = "normal"
                    else:
                        maslo_name = "pressure"
                        if exgauster_name.startswith("У") and oil_val < 0.5:
                            oil_state = "danger"
                        elif oil_val < 0.2:
                            oil_state = "danger"
                        else:
                            oil_state = "normal"
                    res[aglovec_num][exgauster_name]["masloBack"].update({maslo_name: {"value": oil_val, "state": oil_state}})

        res[aglovec_num][exgauster_name]["prognozRouter"] = {"days": None, "state": None}
        res[aglovec_num][exgauster_name]["status"] = "run" if exgauster_units.get("exgauster_status") == 1.0 else "stop"

    return res
