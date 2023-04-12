import React from 'react';
import { Container, Left, Right, Name, Text } from './Presentation.styled';
import FranklinImage from './../../../assets/franklin.png';

function Presentation() {
    return (
        <Container>
            <Left>
                <Name>
                    <p>BONJOUR, JE SUIS</p>
                    <h2>FRANKLIN HYRIOL</h2>
                    <p>Développeur Front-end</p>
                </Name>

                <Text>
                    <p><span>E</span>n tant qu'informaticien passionné, je suis déterminé à exploiter pleinement mes compétences en développement front-end pour offrir une expérience utilisateur optimale. Ma créativité me permet de trouver des solutions innovantes et de créer des projets exceptionnels. Ouvert à toutes nouvelles technologies, je suis motivé par la recherche des dernières tendances pour améliorer mes compétences et maintenir mon avantage compétitif dans un marché en constante évolution.</p>
                </Text>
            </Left>

            <Right>
                <img src={FranklinImage} alt="Franklin Hyriol image" />
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="5680.000000pt" height="6320.000000pt" viewBox="0 0 5680.000000 6320.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,6320.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M12250 63189 c-1745 -98 -3396 -857 -4706 -2164 -1129 -1126 -1941
-2605 -2349 -4280 -371 -1520 -419 -3122 -146 -4890 21 -137 37 -268 35 -290
-2 -22 -8 -242 -14 -490 -26 -1108 -56 -1632 -126 -2175 -135 -1054 -441
-2050 -1015 -3305 -113 -248 -501 -1017 -680 -1350 -89 -165 -353 -644 -587
-1065 -817 -1470 -1143 -2101 -1465 -2840 -639 -1467 -941 -2801 -914 -4025 7
-278 16 -414 43 -640 131 -1096 534 -2070 1173 -2830 106 -127 356 -380 486
-493 222 -192 465 -362 728 -508 81 -45 147 -85 145 -89 -2 -4 -68 -41 -148
-83 -443 -229 -790 -483 -1141 -832 -370 -369 -661 -767 -907 -1240 -572
-1100 -777 -2420 -597 -3836 166 -1306 638 -2663 1499 -4314 205 -391 363
-681 831 -1525 465 -836 616 -1113 816 -1495 772 -1477 1227 -2717 1409 -3845
95 -590 137 -1148 165 -2225 15 -590 26 -945 35 -1140 43 -892 132 -1565 289
-2185 44 -174 49 -204 55 -350 86 -2067 711 -3944 1800 -5409 420 -566 937
-1100 1456 -1506 1351 -1056 2946 -1571 4590 -1480 1656 92 3236 710 4645
1819 66 51 125 98 132 103 7 6 239 -98 680 -305 1619 -762 2352 -1070 3228
-1357 1733 -567 3288 -694 4685 -384 768 171 1404 445 2094 901 760 503 1492
1199 2307 2194 203 249 450 562 864 1099 878 1138 1230 1559 1720 2059 1145
1166 2254 1784 3555 1980 1331 200 2773 -16 4467 -668 641 -247 1228 -510
2418 -1086 1349 -653 1870 -892 2510 -1150 2108 -851 3816 -1075 5525 -724
1918 393 3548 1588 4364 3199 318 627 500 1242 572 1935 22 209 25 723 6 920
-90 911 -401 1730 -927 2440 -236 318 -565 652 -881 892 -531 404 -1254 749
-2110 1008 -303 92 -560 161 -1069 286 -1152 285 -1422 358 -1878 515 -1142
393 -1953 967 -2413 1710 -331 536 -454 1143 -343 1694 106 523 420 1037 874
1429 576 498 1304 823 2370 1061 311 70 483 102 1297 245 1074 188 1620 322
2179 536 1398 534 2294 1470 2538 2651 55 265 65 376 65 688 0 213 -4 318 -17
415 -99 737 -389 1389 -888 1990 -114 137 -389 411 -534 531 -520 431 -1109
750 -1750 949 -1242 385 -2623 391 -4290 20 -653 -146 -1093 -269 -2479 -694
-1228 -378 -1837 -542 -2508 -676 -1324 -265 -2397 -271 -3398 -19 -1539 386
-2668 1406 -2994 2704 -56 223 -77 384 -83 640 -9 390 44 702 184 1080 54 148
96 225 194 360 615 844 1540 1431 2699 1713 483 118 946 170 1525 171 576 0
1035 -42 1665 -155 760 -135 1447 -317 2985 -789 936 -287 1294 -391 1775
-514 1375 -351 2495 -457 3545 -336 1231 143 2270 621 3037 1396 579 585 923
1270 1035 2055 25 179 25 615 0 794 -99 698 -392 1272 -903 1765 -572 552
-1334 930 -2409 1196 -344 85 -649 145 -1420 279 -1024 178 -1538 296 -2045
470 -287 99 -660 264 -893 396 -926 525 -1517 1303 -1652 2174 -9 55 -18 174
-22 265 -27 750 299 1509 912 2126 553 555 1297 971 2326 1298 320 101 587
173 1425 381 1064 265 1488 389 1948 569 1058 416 1780 963 2303 1746 415 622
659 1311 745 2100 19 180 16 700 -5 900 -110 1008 -491 1933 -1123 2726 -138
174 -268 316 -470 514 -994 976 -2303 1576 -3804 1744 -405 46 -1021 55 -1410
22 -1227 -103 -2402 -441 -3995 -1149 -422 -187 -781 -357 -1930 -912 -1366
-660 -2108 -977 -2915 -1246 -1029 -342 -1907 -507 -2810 -525 -1656 -35
-2984 453 -4285 1575 -635 547 -1231 1213 -2135 2386 -974 1264 -1248 1600
-1701 2090 -192 207 -548 560 -724 716 -731 649 -1473 1100 -2235 1360 -1367
467 -2941 450 -4695 -50 -999 -285 -1884 -643 -3668 -1485 l-288 -136 -117
101 c-1096 947 -2324 1606 -3612 1938 -770 199 -1578 282 -2330 240z m910
-599 c1584 -131 3040 -731 4382 -1806 92 -74 169 -138 172 -143 6 -8 -47 -33
-504 -238 -1205 -541 -2034 -836 -3075 -1093 -424 -105 -678 -161 -1565 -346
-1349 -281 -1850 -399 -2460 -580 -1376 -410 -2467 -989 -3240 -1721 -648
-612 -1045 -1224 -1341 -2063 l-58 -165 4 85 c56 996 181 1752 425 2568 592
1981 1824 3631 3428 4591 529 316 1129 573 1677 716 456 120 784 171 1355 209
99 7 672 -3 800 -14z m-9352 -31195 c240 -71 582 -149 847 -194 529 -90 931
-129 2190 -211 929 -61 1420 -116 1950 -221 1132 -222 1977 -631 2611 -1264
511 -510 786 -1050 896 -1755 20 -129 22 -182 22 -490 0 -368 -5 -440 -60
-749 -74 -420 -237 -921 -463 -1423 -277 -616 -813 -1582 -1905 -3430 -135
-230 -357 -606 -492 -835 -1019 -1727 -1579 -2733 -2101 -3778 -915 -1828
-1519 -3478 -1843 -5028 -69 -333 -68 -327 -69 -242 -9 585 -45 1549 -71 1895
-97 1281 -347 2286 -890 3571 -329 779 -651 1410 -1493 2924 -791 1424 -1087
1993 -1387 2665 -873 1958 -1145 3636 -835 5155 161 792 485 1497 961 2095
123 155 463 498 604 612 268 215 574 404 872 538 216 99 476 199 516 200 12 0
75 -16 140 -35z m33994 -1830 c564 -703 1351 -1226 2313 -1538 1234 -400 2642
-407 4348 -22 637 144 1240 313 2462 690 1310 404 1922 567 2650 705 1346 255
2556 218 3570 -107 1189 -382 2125 -1191 2527 -2183 232 -572 287 -1159 162
-1730 -87 -395 -276 -777 -547 -1101 -493 -589 -1233 -1013 -2259 -1294 -389
-107 -715 -173 -1658 -339 -618 -109 -916 -167 -1211 -236 -1516 -353 -2529
-961 -3146 -1888 -162 -244 -328 -616 -399 -895 -103 -408 -111 -824 -24
-1247 177 -850 750 -1651 1590 -2219 480 -325 991 -569 1660 -792 386 -128
674 -208 1525 -419 828 -206 1060 -268 1380 -366 1065 -330 1842 -772 2372
-1352 268 -293 478 -601 653 -957 549 -1116 583 -2394 95 -3630 -103 -263
-300 -637 -470 -895 -309 -470 -771 -956 -1250 -1316 -714 -536 -1539 -904
-2440 -1088 -1482 -302 -2981 -131 -4786 547 -671 252 -1360 560 -2584 1152
-1306 633 -1816 867 -2415 1110 -1594 647 -2883 926 -4165 902 -610 -12 -1106
-80 -1645 -227 -1079 -293 -2099 -928 -3095 -1925 -542 -543 -925 -1000 -1935
-2310 -809 -1050 -1173 -1479 -1689 -1996 -611 -611 -1122 -1004 -1736 -1337
-1241 -673 -2786 -842 -4495 -493 -975 200 -1980 548 -3290 1138 -365 165
-1565 725 -1576 736 -2 2 124 131 279 287 156 157 343 353 417 435 1005 1132
1816 2473 2595 4290 347 810 563 1368 1200 3110 764 2088 1142 3010 1661 4047
635 1270 1287 2254 2070 3125 1185 1319 2649 2231 4158 2593 161 39 192 45
386 80 1106 199 2351 92 3842 -331 596 -169 995 -304 2503 -847 1800 -649
2756 -892 3905 -994 198 -18 988 -17 1175 0 1077 101 1953 415 2681 959 827
619 1345 1460 1485 2413 29 197 36 531 15 729 -60 564 -258 1089 -605 1604
-339 503 -833 977 -1431 1372 -613 405 -1247 710 -2445 1175 -1178 459 -1599
637 -2080 881 -225 114 -473 253 -669 376 -722 451 -1310 1022 -1673 1623 -54
90 -97 170 -76 140 10 -13 61 -78 115 -145z"/>
                    </g>
                </svg>
            </Right>
        </Container>
    )
}

export default Presentation;
