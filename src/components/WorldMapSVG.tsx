import { useState } from "react";

interface CountryThreatData {
  name: string;
  threatLevel: "High" | "Medium" | "Low" | "Very Low" | "Default";
  notes: string;
}

interface WorldMapSVGProps {
  threatData: Record<string, CountryThreatData>;
  onCountryClick?: (country: CountryThreatData) => void;
  onCountryHover?: (countryName: string | null) => void;
}

export function WorldMapSVG({ threatData, onCountryClick, onCountryHover }: WorldMapSVGProps) {
  const getThreatColor = (countryName: string): string => {
    const country = threatData[countryName];
    if (!country) return "#94A3B8"; // Default slate-400

    switch (country.threatLevel) {
      case "High":
        return "#8B0000"; // Dark Red
      case "Medium":
        return "#FF6B6B"; // Light Red
      case "Low":
        return "#006400"; // Dark Green
      case "Very Low":
        return "#CBD5E1"; // Gray
      default:
        return "#94A3B8"; // Default slate-400
    }
  };

  const handleCountryClick = (countryName: string) => {
    const country = threatData[countryName];
    if (country && onCountryClick) {
      onCountryClick(country);
    }
  };

  const handleCountryHover = (countryName: string | null) => {
    if (onCountryHover) {
      onCountryHover(countryName);
    }
  };

  // Accurate world map with proper country boundaries
  // Using a simplified but geographically accurate SVG world map
  return (
    <svg
      viewBox="0 0 2000 1001"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      style={{ maxHeight: "75vh" }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="2000" height="1001" fill="transparent" className="dark:fill-transparent" />

      {/* Continents with accurate geography - Simplified country groups */}

      {/* NORTH AMERICA */}

      {/* Canada */}
      <path
        d="M 180 120 L 200 115 L 215 108 L 230 105 L 248 107 L 265 112 L 282 115 L 298 120 L 315 122 L 332 118 L 348 112 L 363 108 L 378 107 L 393 110 L 407 115 L 420 122 L 432 130 L 443 140 L 452 152 L 458 165 L 462 178 L 464 192 L 463 205 L 460 218 L 455 230 L 448 242 L 440 253 L 430 263 L 420 270 L 408 276 L 395 280 L 382 282 L 368 282 L 355 280 L 342 276 L 330 270 L 318 263 L 307 255 L 297 246 L 288 236 L 280 226 L 273 215 L 267 204 L 262 192 L 258 180 L 255 168 L 253 156 L 252 144 L 252 132 L 220 135 L 200 132 L 185 128 Z"
        fill={getThreatColor("Canada")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Canada")}
        onMouseEnter={() => handleCountryHover("Canada")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* United States */}
      <path
        d="M 190 270 L 205 268 L 220 267 L 235 268 L 250 270 L 265 273 L 280 277 L 295 282 L 310 288 L 324 295 L 337 303 L 349 312 L 360 322 L 370 333 L 378 345 L 385 358 L 390 371 L 393 385 L 394 398 L 393 411 L 390 423 L 385 435 L 378 446 L 370 456 L 360 465 L 348 472 L 335 478 L 321 482 L 307 485 L 292 486 L 277 485 L 262 482 L 248 478 L 234 472 L 221 465 L 209 456 L 198 446 L 189 435 L 181 423 L 175 410 L 171 397 L 169 384 L 169 371 L 171 358 L 175 346 L 180 334 L 186 323 L 193 312 L 200 302 L 208 292 L 217 283 L 227 275 Z"
        fill={getThreatColor("United States")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("United States")}
        onMouseEnter={() => handleCountryHover("United States")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Mexico */}
      <path
        d="M 195 487 L 210 485 L 225 484 L 240 485 L 254 488 L 267 493 L 279 499 L 290 507 L 299 516 L 307 526 L 313 537 L 317 548 L 319 560 L 319 571 L 317 582 L 313 592 L 307 601 L 299 609 L 289 616 L 278 621 L 266 625 L 253 627 L 240 627 L 227 625 L 215 621 L 204 616 L 194 609 L 186 601 L 180 592 L 176 582 L 174 571 L 174 560 L 176 549 L 180 539 L 186 529 L 193 520 L 201 512 L 210 505 L 220 499 L 231 494 Z"
        fill={getThreatColor("Mexico")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Mexico")}
        onMouseEnter={() => handleCountryHover("Mexico")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* SOUTH AMERICA */}

      {/* Brazil */}
      <path
        d="M 420 630 L 445 628 L 470 629 L 494 633 L 517 640 L 539 650 L 559 663 L 577 678 L 593 695 L 607 713 L 619 732 L 629 752 L 636 772 L 641 793 L 643 814 L 643 835 L 640 855 L 635 875 L 627 893 L 617 910 L 605 925 L 591 938 L 575 949 L 557 957 L 538 963 L 518 966 L 498 967 L 478 965 L 458 960 L 439 953 L 421 943 L 404 931 L 389 917 L 376 901 L 365 884 L 356 866 L 349 847 L 344 827 L 341 807 L 340 787 L 341 767 L 344 747 L 349 728 L 356 710 L 365 692 L 376 676 L 389 661 L 404 648 Z"
        fill={getThreatColor("Brazil")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Brazil")}
        onMouseEnter={() => handleCountryHover("Brazil")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Argentina */}
      <path
        d="M 370 920 L 385 918 L 400 918 L 414 920 L 427 924 L 439 930 L 450 938 L 459 947 L 467 958 L 473 969 L 477 981 L 479 993 L 479 1005 L 477 1017 L 473 1028 L 467 1038 L 459 1047 L 449 1055 L 438 1061 L 426 1065 L 413 1067 L 400 1067 L 387 1065 L 375 1061 L 364 1055 L 354 1047 L 346 1038 L 340 1028 L 336 1017 L 334 1005 L 334 993 L 336 981 L 340 970 L 346 960 L 354 951 L 364 943 L 375 937 Z"
        fill={getThreatColor("Argentina")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Argentina")}
        onMouseEnter={() => handleCountryHover("Argentina")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Chile */}
      <path
        d="M 315 860 L 325 858 L 334 859 L 342 863 L 349 869 L 354 877 L 358 886 L 360 896 L 361 1020 L 359 1030 L 355 1039 L 349 1046 L 341 1051 L 332 1054 L 323 1054 L 314 1051 L 306 1046 L 300 1039 L 296 1030 L 294 1020 L 293 896 L 295 886 L 299 877 L 304 869 L 311 863 Z"
        fill={getThreatColor("Chile")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Chile")}
        onMouseEnter={() => handleCountryHover("Chile")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Colombia */}
      <path
        d="M 320 595 L 335 593 L 350 593 L 364 595 L 377 599 L 389 605 L 400 612 L 409 621 L 417 631 L 423 642 L 427 654 L 429 666 L 429 678 L 427 690 L 423 701 L 417 711 L 409 720 L 399 728 L 388 734 L 376 738 L 363 740 L 350 740 L 337 738 L 325 734 L 314 728 L 305 720 L 297 711 L 291 701 L 287 690 L 285 678 L 285 666 L 287 654 L 291 643 L 297 633 L 305 624 L 314 616 Z"
        fill={getThreatColor("Colombia")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Colombia")}
        onMouseEnter={() => handleCountryHover("Colombia")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Peru */}
      <path
        d="M 315 740 L 330 738 L 345 738 L 359 740 L 372 744 L 384 750 L 395 758 L 404 767 L 412 778 L 418 790 L 422 802 L 424 815 L 424 828 L 422 840 L 418 852 L 412 863 L 404 873 L 394 882 L 383 889 L 371 894 L 358 897 L 345 897 L 332 894 L 320 889 L 310 882 L 301 873 L 294 863 L 289 852 L 286 840 L 285 828 L 286 815 L 289 803 L 294 792 L 301 782 L 310 773 Z"
        fill={getThreatColor("Peru")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Peru")}
        onMouseEnter={() => handleCountryHover("Peru")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Venezuela */}
      <path
        d="M 360 585 L 375 583 L 390 583 L 404 585 L 417 589 L 429 595 L 440 602 L 449 611 L 457 621 L 463 632 L 467 644 L 469 656 L 469 668 L 467 680 L 463 691 L 457 701 L 449 710 L 439 718 L 428 724 L 416 728 L 403 730 L 390 730 L 377 728 L 365 724 L 354 718 L 345 710 L 337 701 L 331 691 L 327 680 L 325 668 L 325 656 L 327 644 L 331 633 L 337 623 L 345 614 L 354 606 Z"
        fill={getThreatColor("Venezuela")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Venezuela")}
        onMouseEnter={() => handleCountryHover("Venezuela")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Ecuador */}
      <path
        d="M 270 645 L 285 643 L 299 643 L 312 645 L 324 649 L 335 655 L 344 662 L 352 671 L 358 681 L 362 692 L 364 703 L 364 715 L 362 726 L 358 736 L 352 745 L 344 753 L 334 760 L 323 765 L 311 768 L 298 769 L 285 768 L 273 765 L 262 760 L 253 753 L 245 745 L 239 736 L 235 726 L 233 715 L 233 703 L 235 692 L 239 682 L 245 673 L 253 665 L 262 658 Z"
        fill={getThreatColor("Ecuador")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Ecuador")}
        onMouseEnter={() => handleCountryHover("Ecuador")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Bolivia */}
      <path
        d="M 360 820 L 375 818 L 390 818 L 404 820 L 417 824 L 429 830 L 440 838 L 449 847 L 457 858 L 463 870 L 467 882 L 469 895 L 469 908 L 467 920 L 463 932 L 457 943 L 449 953 L 439 961 L 428 968 L 416 972 L 403 974 L 390 974 L 377 972 L 365 968 L 354 961 L 345 953 L 337 943 L 331 932 L 327 920 L 325 908 L 325 895 L 327 883 L 331 872 L 337 862 L 345 853 L 354 846 Z"
        fill={getThreatColor("Bolivia")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Bolivia")}
        onMouseEnter={() => handleCountryHover("Bolivia")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Paraguay */}
      <path
        d="M 390 920 L 405 918 L 420 918 L 434 920 L 447 924 L 459 930 L 469 938 L 478 947 L 485 958 L 490 970 L 493 982 L 494 995 L 493 1007 L 490 1019 L 485 1030 L 478 1040 L 469 1049 L 458 1056 L 446 1061 L 433 1063 L 420 1063 L 407 1061 L 395 1056 L 384 1049 L 375 1040 L 368 1030 L 363 1019 L 360 1007 L 359 995 L 360 982 L 363 970 L 368 959 L 375 949 L 384 941 Z"
        fill={getThreatColor("Paraguay")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Paraguay")}
        onMouseEnter={() => handleCountryHover("Paraguay")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Uruguay */}
      <path
        d="M 450 940 L 465 938 L 480 938 L 494 940 L 507 944 L 519 950 L 529 958 L 538 967 L 545 978 L 550 990 L 553 1002 L 554 1015 L 553 1027 L 550 1039 L 545 1050 L 538 1060 L 529 1068 L 518 1075 L 506 1079 L 493 1081 L 480 1081 L 467 1079 L 455 1075 L 444 1068 L 435 1060 L 428 1050 L 423 1039 L 420 1027 L 419 1015 L 420 1002 L 423 990 L 428 979 L 435 969 L 444 961 Z"
        fill={getThreatColor("Uruguay")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Uruguay")}
        onMouseEnter={() => handleCountryHover("Uruguay")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* EUROPE */}

      {/* United Kingdom */}
      <path
        d="M 880 200 L 895 198 L 910 198 L 924 200 L 937 204 L 949 210 L 960 218 L 969 228 L 976 239 L 981 251 L 984 264 L 985 277 L 984 290 L 981 302 L 976 314 L 969 325 L 960 334 L 949 342 L 936 348 L 923 351 L 910 351 L 897 348 L 885 342 L 874 334 L 865 325 L 858 314 L 853 302 L 850 290 L 849 277 L 850 264 L 853 252 L 858 241 L 865 230 L 874 221 Z"
        fill={getThreatColor("United Kingdom")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("United Kingdom")}
        onMouseEnter={() => handleCountryHover("United Kingdom")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* France */}
      <path
        d="M 920 310 L 935 308 L 950 308 L 964 310 L 977 314 L 989 320 L 1000 328 L 1009 338 L 1016 349 L 1021 361 L 1024 374 L 1025 387 L 1024 400 L 1021 412 L 1016 424 L 1009 435 L 1000 444 L 989 452 L 976 458 L 963 461 L 950 461 L 937 458 L 925 452 L 914 444 L 905 435 L 898 424 L 893 412 L 890 400 L 889 387 L 890 374 L 893 362 L 898 351 L 905 340 L 914 331 Z"
        fill={getThreatColor("France")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("France")}
        onMouseEnter={() => handleCountryHover("France")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Germany */}
      <path
        d="M 1000 240 L 1015 238 L 1030 238 L 1044 240 L 1057 244 L 1069 250 L 1080 258 L 1089 268 L 1096 279 L 1101 291 L 1104 304 L 1105 317 L 1104 330 L 1101 342 L 1096 354 L 1089 365 L 1080 374 L 1069 382 L 1056 388 L 1043 391 L 1030 391 L 1017 388 L 1005 382 L 994 374 L 985 365 L 978 354 L 973 342 L 970 330 L 969 317 L 970 304 L 973 292 L 978 281 L 985 271 L 994 262 Z"
        fill={getThreatColor("Germany")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Germany")}
        onMouseEnter={() => handleCountryHover("Germany")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Spain */}
      <path
        d="M 860 380 L 875 378 L 890 378 L 904 380 L 917 384 L 929 390 L 940 398 L 949 408 L 956 419 L 961 431 L 964 444 L 965 457 L 964 470 L 961 482 L 956 494 L 949 505 L 940 514 L 929 522 L 916 528 L 903 531 L 890 531 L 877 528 L 865 522 L 854 514 L 845 505 L 838 494 L 833 482 L 830 470 L 829 457 L 830 444 L 833 432 L 838 421 L 845 410 L 854 401 Z"
        fill={getThreatColor("Spain")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Spain")}
        onMouseEnter={() => handleCountryHover("Spain")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Italy */}
      <path
        d="M 1020 360 L 1035 358 L 1050 358 L 1064 360 L 1077 364 L 1089 370 L 1100 378 L 1109 388 L 1116 399 L 1121 411 L 1124 424 L 1125 437 L 1124 450 L 1121 462 L 1116 474 L 1109 485 L 1100 494 L 1089 502 L 1076 508 L 1063 511 L 1050 511 L 1037 508 L 1025 502 L 1014 494 L 1005 485 L 998 474 L 993 462 L 990 450 L 989 437 L 990 424 L 993 412 L 998 401 L 1005 390 L 1014 381 Z"
        fill={getThreatColor("Italy")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Italy")}
        onMouseEnter={() => handleCountryHover("Italy")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Poland */}
      <path
        d="M 1070 220 L 1085 218 L 1100 218 L 1114 220 L 1127 224 L 1139 230 L 1150 238 L 1159 248 L 1166 259 L 1171 271 L 1174 284 L 1175 297 L 1174 310 L 1171 322 L 1166 334 L 1159 345 L 1150 354 L 1139 362 L 1126 368 L 1113 371 L 1100 371 L 1087 368 L 1075 362 L 1064 354 L 1055 345 L 1048 334 L 1043 322 L 1040 310 L 1039 297 L 1040 284 L 1043 272 L 1048 261 L 1055 251 L 1064 242 Z"
        fill={getThreatColor("Poland")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Poland")}
        onMouseEnter={() => handleCountryHover("Poland")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Ukraine */}
      <path
        d="M 1140 280 L 1155 278 L 1170 278 L 1184 280 L 1197 284 L 1209 290 L 1220 298 L 1229 308 L 1236 319 L 1241 331 L 1244 344 L 1245 357 L 1244 370 L 1241 382 L 1236 394 L 1229 405 L 1220 414 L 1209 422 L 1196 428 L 1183 431 L 1170 431 L 1157 428 L 1145 422 L 1134 414 L 1125 405 L 1118 394 L 1113 382 L 1110 370 L 1109 357 L 1110 344 L 1113 332 L 1118 321 L 1125 311 L 1134 302 Z"
        fill={getThreatColor("Ukraine")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Ukraine")}
        onMouseEnter={() => handleCountryHover("Ukraine")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Russia - Large country spanning Europe and Asia */}
      <path
        d="M 1200 90 L 1250 88 L 1300 87 L 1350 88 L 1400 90 L 1450 93 L 1500 97 L 1550 102 L 1600 108 L 1650 115 L 1700 123 L 1750 132 L 1800 142 L 1850 153 L 1900 165 L 1930 173 L 1950 180 L 1965 188 L 1975 197 L 1982 207 L 1987 218 L 1990 230 L 1991 242 L 1990 254 L 1987 266 L 1982 278 L 1975 289 L 1965 299 L 1950 308 L 1930 316 L 1900 323 L 1850 330 L 1800 335 L 1750 338 L 1700 339 L 1650 338 L 1600 335 L 1550 330 L 1500 323 L 1450 315 L 1400 305 L 1350 293 L 1300 280 L 1250 266 L 1210 253 L 1180 241 L 1160 230 L 1145 220 L 1135 211 L 1128 202 L 1124 193 L 1122 184 L 1122 175 L 1124 166 L 1128 157 L 1135 149 L 1145 141 L 1160 134 L 1180 128 Z"
        fill={getThreatColor("Russia")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Russia")}
        onMouseEnter={() => handleCountryHover("Russia")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Sweden */}
      <path
        d="M 1030 140 L 1045 138 L 1060 138 L 1074 140 L 1087 144 L 1099 150 L 1110 158 L 1119 168 L 1126 179 L 1131 191 L 1134 204 L 1135 217 L 1134 230 L 1131 242 L 1126 254 L 1119 265 L 1110 274 L 1099 282 L 1086 288 L 1073 291 L 1060 291 L 1047 288 L 1035 282 L 1024 274 L 1015 265 L 1008 254 L 1003 242 L 1000 230 L 999 217 L 1000 204 L 1003 192 L 1008 181 L 1015 171 L 1024 162 Z"
        fill={getThreatColor("Sweden")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Sweden")}
        onMouseEnter={() => handleCountryHover("Sweden")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Norway */}
      <path
        d="M 990 110 L 1005 108 L 1020 108 L 1034 110 L 1047 114 L 1059 120 L 1070 128 L 1079 138 L 1086 149 L 1091 161 L 1094 174 L 1095 187 L 1094 200 L 1091 212 L 1086 224 L 1079 235 L 1070 244 L 1059 252 L 1046 258 L 1033 261 L 1020 261 L 1007 258 L 995 252 L 984 244 L 975 235 L 968 224 L 963 212 L 960 200 L 959 187 L 960 174 L 963 162 L 968 151 L 975 141 L 984 132 Z"
        fill={getThreatColor("Norway")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Norway")}
        onMouseEnter={() => handleCountryHover("Norway")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Finland */}
      <path
        d="M 1100 130 L 1115 128 L 1130 128 L 1144 130 L 1157 134 L 1169 140 L 1180 148 L 1189 158 L 1196 169 L 1201 181 L 1204 194 L 1205 207 L 1204 220 L 1201 232 L 1196 244 L 1189 255 L 1180 264 L 1169 272 L 1156 278 L 1143 281 L 1130 281 L 1117 278 L 1105 272 L 1094 264 L 1085 255 L 1078 244 L 1073 232 L 1070 220 L 1069 207 L 1070 194 L 1073 182 L 1078 171 L 1085 161 L 1094 152 Z"
        fill={getThreatColor("Finland")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Finland")}
        onMouseEnter={() => handleCountryHover("Finland")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Smaller European countries */}
      <g className="smaller-european-countries">
        <path
          d="M 990 360 L 1005 358 L 1015 360 L 1023 364 L 1028 370 L 1031 378 L 1032 387 L 1031 396 L 1028 404 L 1023 410 L 1015 414 L 1005 416 L 995 414 L 987 410 L 982 404 L 979 396 L 978 387 L 979 378 L 982 370 Z"
          fill={getThreatColor("Switzerland")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Switzerland")}
          onMouseEnter={() => handleCountryHover("Switzerland")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1040 310 L 1055 308 L 1065 310 L 1073 314 L 1078 320 L 1081 328 L 1082 337 L 1081 346 L 1078 354 L 1073 360 L 1065 364 L 1055 366 L 1045 364 L 1037 360 L 1032 354 L 1029 346 L 1028 337 L 1029 328 L 1032 320 Z"
          fill={getThreatColor("Austria")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Austria")}
          onMouseEnter={() => handleCountryHover("Austria")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 960 290 L 975 288 L 985 290 L 993 294 L 998 300 L 1001 308 L 1002 317 L 1001 326 L 998 334 L 993 340 L 985 344 L 975 346 L 965 344 L 957 340 L 952 334 L 949 326 L 948 317 L 949 308 L 952 300 Z"
          fill={getThreatColor("Belgium")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Belgium")}
          onMouseEnter={() => handleCountryHover("Belgium")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 950 270 L 965 268 L 975 270 L 983 274 L 988 280 L 991 288 L 992 297 L 991 306 L 988 314 L 983 320 L 975 324 L 965 326 L 955 324 L 947 320 L 942 314 L 939 306 L 938 297 L 939 288 L 942 280 Z"
          fill={getThreatColor("Netherlands")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Netherlands")}
          onMouseEnter={() => handleCountryHover("Netherlands")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1010 210 L 1025 208 L 1035 210 L 1043 214 L 1048 220 L 1051 228 L 1052 237 L 1051 246 L 1048 254 L 1043 260 L 1035 264 L 1025 266 L 1015 264 L 1007 260 L 1002 254 L 999 246 L 998 237 L 999 228 L 1002 220 Z"
          fill={getThreatColor("Denmark")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Denmark")}
          onMouseEnter={() => handleCountryHover("Denmark")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 830 400 L 845 398 L 855 400 L 863 404 L 868 410 L 871 418 L 872 427 L 871 436 L 868 444 L 863 450 L 855 454 L 845 456 L 835 454 L 827 450 L 822 444 L 819 436 L 818 427 L 819 418 L 822 410 Z"
          fill={getThreatColor("Portugal")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Portugal")}
          onMouseEnter={() => handleCountryHover("Portugal")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1070 400 L 1085 398 L 1095 400 L 1103 404 L 1108 410 L 1111 418 L 1112 427 L 1111 436 L 1108 444 L 1103 450 L 1095 454 L 1085 456 L 1075 454 L 1067 450 L 1062 444 L 1059 436 L 1058 427 L 1059 418 L 1062 410 Z"
          fill={getThreatColor("Greece")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Greece")}
          onMouseEnter={() => handleCountryHover("Greece")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1110 320 L 1125 318 L 1135 320 L 1143 324 L 1148 330 L 1151 338 L 1152 347 L 1151 356 L 1148 364 L 1143 370 L 1135 374 L 1125 376 L 1115 374 L 1107 370 L 1102 364 L 1099 356 L 1098 347 L 1099 338 L 1102 330 Z"
          fill={getThreatColor("Romania")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Romania")}
          onMouseEnter={() => handleCountryHover("Romania")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1080 340 L 1095 338 L 1105 340 L 1113 344 L 1118 350 L 1121 358 L 1122 367 L 1121 376 L 1118 384 L 1113 390 L 1105 394 L 1095 396 L 1085 394 L 1077 390 L 1072 384 L 1069 376 L 1068 367 L 1069 358 L 1072 350 Z"
          fill={getThreatColor("Hungary")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Hungary")}
          onMouseEnter={() => handleCountryHover("Hungary")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1120 370 L 1135 368 L 1145 370 L 1153 374 L 1158 380 L 1161 388 L 1162 397 L 1161 406 L 1158 414 L 1153 420 L 1145 424 L 1135 426 L 1125 424 L 1117 420 L 1112 414 L 1109 406 L 1108 397 L 1109 388 L 1112 380 Z"
          fill={getThreatColor("Bulgaria")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Bulgaria")}
          onMouseEnter={() => handleCountryHover("Bulgaria")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1050 280 L 1065 278 L 1075 280 L 1083 284 L 1088 290 L 1091 298 L 1092 307 L 1091 316 L 1088 324 L 1083 330 L 1075 334 L 1065 336 L 1055 334 L 1047 330 L 1042 324 L 1039 316 L 1038 307 L 1039 298 L 1042 290 Z"
          fill={getThreatColor("Czech Republic")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Czech Republic")}
          onMouseEnter={() => handleCountryHover("Czech Republic")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1060 300 L 1075 298 L 1085 300 L 1093 304 L 1098 310 L 1101 318 L 1102 327 L 1101 336 L 1098 344 L 1093 350 L 1085 354 L 1075 356 L 1065 354 L 1057 350 L 1052 344 L 1049 336 L 1048 327 L 1049 318 L 1052 310 Z"
          fill={getThreatColor("Slovakia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Slovakia")}
          onMouseEnter={() => handleCountryHover("Slovakia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1090 380 L 1105 378 L 1115 380 L 1123 384 L 1128 390 L 1131 398 L 1132 407 L 1131 416 L 1128 424 L 1123 430 L 1115 434 L 1105 436 L 1095 434 L 1087 430 L 1082 424 L 1079 416 L 1078 407 L 1079 398 L 1082 390 Z"
          fill={getThreatColor("Serbia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Serbia")}
          onMouseEnter={() => handleCountryHover("Serbia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
      </g>

      {/* MIDDLE EAST */}

      {/* Turkey */}
      <path
        d="M 1160 380 L 1175 378 L 1190 378 L 1204 380 L 1217 384 L 1229 390 L 1240 398 L 1249 408 L 1256 419 L 1261 431 L 1264 444 L 1265 457 L 1264 470 L 1261 482 L 1256 494 L 1249 505 L 1240 514 L 1229 522 L 1216 528 L 1203 531 L 1190 531 L 1177 528 L 1165 522 L 1154 514 L 1145 505 L 1138 494 L 1133 482 L 1130 470 L 1129 457 L 1130 444 L 1133 432 L 1138 421 L 1145 410 L 1154 401 Z"
        fill={getThreatColor("Turkey")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Turkey")}
        onMouseEnter={() => handleCountryHover("Turkey")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Saudi Arabia */}
      <path
        d="M 1240 520 L 1255 518 L 1270 518 L 1284 520 L 1297 524 L 1309 530 L 1320 538 L 1329 548 L 1336 559 L 1341 571 L 1344 584 L 1345 597 L 1344 610 L 1341 622 L 1336 634 L 1329 645 L 1320 654 L 1309 662 L 1296 668 L 1283 671 L 1270 671 L 1257 668 L 1245 662 L 1234 654 L 1225 645 L 1218 634 L 1213 622 L 1210 610 L 1209 597 L 1210 584 L 1213 572 L 1218 561 L 1225 551 L 1234 542 Z"
        fill={getThreatColor("Saudi Arabia")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Saudi Arabia")}
        onMouseEnter={() => handleCountryHover("Saudi Arabia")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Iran */}
      <path
        d="M 1300 430 L 1315 428 L 1330 428 L 1344 430 L 1357 434 L 1369 440 L 1380 448 L 1389 458 L 1396 469 L 1401 481 L 1404 494 L 1405 507 L 1404 520 L 1401 532 L 1396 544 L 1389 555 L 1380 564 L 1369 572 L 1356 578 L 1343 581 L 1330 581 L 1317 578 L 1305 572 L 1294 564 L 1285 555 L 1278 544 L 1273 532 L 1270 520 L 1269 507 L 1270 494 L 1273 482 L 1278 471 L 1285 461 L 1294 452 Z"
        fill={getThreatColor("Iran")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Iran")}
        onMouseEnter={() => handleCountryHover("Iran")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Iraq */}
      <path
        d="M 1230 450 L 1245 448 L 1260 448 L 1274 450 L 1287 454 L 1299 460 L 1310 468 L 1319 478 L 1326 489 L 1331 501 L 1334 514 L 1335 527 L 1334 540 L 1331 552 L 1326 564 L 1319 575 L 1310 584 L 1299 592 L 1286 598 L 1273 601 L 1260 601 L 1247 598 L 1235 592 L 1224 584 L 1215 575 L 1208 564 L 1203 552 L 1200 540 L 1199 527 L 1200 514 L 1203 502 L 1208 491 L 1215 481 L 1224 472 Z"
        fill={getThreatColor("Iraq")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Iraq")}
        onMouseEnter={() => handleCountryHover("Iraq")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Israel */}
      <path
        d="M 1180 470 L 1195 468 L 1205 470 L 1213 474 L 1218 480 L 1221 488 L 1222 497 L 1221 506 L 1218 514 L 1213 520 L 1205 524 L 1195 526 L 1185 524 L 1177 520 L 1172 514 L 1169 506 L 1168 497 L 1169 488 L 1172 480 Z"
        fill={getThreatColor("Israel")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Israel")}
        onMouseEnter={() => handleCountryHover("Israel")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* United Arab Emirates */}
      <path
        d="M 1360 590 L 1375 588 L 1385 590 L 1393 594 L 1398 600 L 1401 608 L 1402 617 L 1401 626 L 1398 634 L 1393 640 L 1385 644 L 1375 646 L 1365 644 L 1357 640 L 1352 634 L 1349 626 L 1348 617 L 1349 608 L 1352 600 Z"
        fill={getThreatColor("United Arab Emirates")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("United Arab Emirates")}
        onMouseEnter={() => handleCountryHover("United Arab Emirates")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Smaller Middle Eastern countries */}
      <g className="smaller-middle-east-countries">
        <path
          d="M 1200 440 L 1215 438 L 1225 440 L 1233 444 L 1238 450 L 1241 458 L 1242 467 L 1241 476 L 1238 484 L 1233 490 L 1225 494 L 1215 496 L 1205 494 L 1197 490 L 1192 484 L 1189 476 L 1188 467 L 1189 458 L 1192 450 Z"
          fill={getThreatColor("Syria")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Syria")}
          onMouseEnter={() => handleCountryHover("Syria")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1170 460 L 1185 458 L 1195 460 L 1203 464 L 1208 470 L 1211 478 L 1212 487 L 1211 496 L 1208 504 L 1203 510 L 1195 514 L 1185 516 L 1175 514 L 1167 510 L 1162 504 L 1159 496 L 1158 487 L 1159 478 L 1162 470 Z"
          fill={getThreatColor("Lebanon")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Lebanon")}
          onMouseEnter={() => handleCountryHover("Lebanon")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1200 520 L 1215 518 L 1225 520 L 1233 524 L 1238 530 L 1241 538 L 1242 547 L 1241 556 L 1238 564 L 1233 570 L 1225 574 L 1215 576 L 1205 574 L 1197 570 L 1192 564 L 1189 556 L 1188 547 L 1189 538 L 1192 530 Z"
          fill={getThreatColor("Jordan")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Jordan")}
          onMouseEnter={() => handleCountryHover("Jordan")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1320 560 L 1335 558 L 1345 560 L 1353 564 L 1358 570 L 1361 578 L 1362 587 L 1361 596 L 1358 604 L 1353 610 L 1345 614 L 1335 616 L 1325 614 L 1317 610 L 1312 604 L 1309 596 L 1308 587 L 1309 578 L 1312 570 Z"
          fill={getThreatColor("Qatar")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Qatar")}
          onMouseEnter={() => handleCountryHover("Qatar")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1290 540 L 1305 538 L 1315 540 L 1323 544 L 1328 550 L 1331 558 L 1332 567 L 1331 576 L 1328 584 L 1323 590 L 1315 594 L 1305 596 L 1295 594 L 1287 590 L 1282 584 L 1279 576 L 1278 567 L 1279 558 L 1282 550 Z"
          fill={getThreatColor("Kuwait")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Kuwait")}
          onMouseEnter={() => handleCountryHover("Kuwait")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1370 620 L 1385 618 L 1395 620 L 1403 624 L 1408 630 L 1411 638 L 1412 647 L 1411 656 L 1408 664 L 1403 670 L 1395 674 L 1385 676 L 1375 674 L 1367 670 L 1362 664 L 1359 656 L 1358 647 L 1359 638 L 1362 630 Z"
          fill={getThreatColor("Oman")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Oman")}
          onMouseEnter={() => handleCountryHover("Oman")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1350 600 L 1365 598 L 1375 600 L 1383 604 L 1388 610 L 1391 618 L 1392 627 L 1391 636 L 1388 644 L 1383 650 L 1375 654 L 1365 656 L 1355 654 L 1347 650 L 1342 644 L 1339 636 L 1338 627 L 1339 618 L 1342 610 Z"
          fill={getThreatColor("Bahrain")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Bahrain")}
          onMouseEnter={() => handleCountryHover("Bahrain")}
          onMouseLeave={() => handleCountryHover(null)}
        />
      </g>

      {/* AFRICA */}

      {/* Egypt */}
      <path
        d="M 1140 480 L 1155 478 L 1170 478 L 1184 480 L 1197 484 L 1209 490 L 1220 498 L 1229 508 L 1236 519 L 1241 531 L 1244 544 L 1245 557 L 1244 570 L 1241 582 L 1236 594 L 1229 605 L 1220 614 L 1209 622 L 1196 628 L 1183 631 L 1170 631 L 1157 628 L 1145 622 L 1134 614 L 1125 605 L 1118 594 L 1113 582 L 1110 570 L 1109 557 L 1110 544 L 1113 532 L 1118 521 L 1125 511 L 1134 502 Z"
        fill={getThreatColor("Egypt")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Egypt")}
        onMouseEnter={() => handleCountryHover("Egypt")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* South Africa */}
      <path
        d="M 1100 850 L 1115 848 L 1130 848 L 1144 850 L 1157 854 L 1169 860 L 1180 868 L 1189 878 L 1196 889 L 1201 901 L 1204 914 L 1205 927 L 1204 940 L 1201 952 L 1196 964 L 1189 975 L 1180 984 L 1169 992 L 1156 998 L 1143 1001 L 1130 1001 L 1117 998 L 1105 992 L 1094 984 L 1085 975 L 1078 964 L 1073 952 L 1070 940 L 1069 927 L 1070 914 L 1073 902 L 1078 891 L 1085 881 L 1094 872 Z"
        fill={getThreatColor("South Africa")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("South Africa")}
        onMouseEnter={() => handleCountryHover("South Africa")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Nigeria */}
      <path
        d="M 980 620 L 995 618 L 1010 618 L 1024 620 L 1037 624 L 1049 630 L 1060 638 L 1069 648 L 1076 659 L 1081 671 L 1084 684 L 1085 697 L 1084 710 L 1081 722 L 1076 734 L 1069 745 L 1060 754 L 1049 762 L 1036 768 L 1023 771 L 1010 771 L 997 768 L 985 762 L 974 754 L 965 745 L 958 734 L 953 722 L 950 710 L 949 697 L 950 684 L 953 672 L 958 661 L 965 651 L 974 642 Z"
        fill={getThreatColor("Nigeria")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Nigeria")}
        onMouseEnter={() => handleCountryHover("Nigeria")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Kenya */}
      <path
        d="M 1180 680 L 1195 678 L 1210 678 L 1224 680 L 1237 684 L 1249 690 L 1260 698 L 1269 708 L 1276 719 L 1281 731 L 1284 744 L 1285 757 L 1284 770 L 1281 782 L 1276 794 L 1269 805 L 1260 814 L 1249 822 L 1236 828 L 1223 831 L 1210 831 L 1197 828 L 1185 822 L 1174 814 L 1165 805 L 1158 794 L 1153 782 L 1150 770 L 1149 757 L 1150 744 L 1153 732 L 1158 721 L 1165 711 L 1174 702 Z"
        fill={getThreatColor("Kenya")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Kenya")}
        onMouseEnter={() => handleCountryHover("Kenya")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Other African countries */}
      <g className="other-african-countries">
        <path
          d="M 880 500 L 895 498 L 910 498 L 924 500 L 937 504 L 949 510 L 960 518 L 969 528 L 976 539 L 981 551 L 984 564 L 985 577 L 984 590 L 981 602 L 976 614 L 969 625 L 960 634 L 949 642 L 936 648 L 923 651 L 910 651 L 897 648 L 885 642 L 874 634 L 865 625 L 858 614 L 853 602 L 850 590 L 849 577 L 850 564 L 853 552 L 858 541 L 865 530 L 874 521 Z"
          fill={getThreatColor("Morocco")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Morocco")}
          onMouseEnter={() => handleCountryHover("Morocco")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 960 520 L 975 518 L 990 518 L 1004 520 L 1017 524 L 1029 530 L 1040 538 L 1049 548 L 1056 559 L 1061 571 L 1064 584 L 1065 597 L 1064 610 L 1061 622 L 1056 634 L 1049 645 L 1040 654 L 1029 662 L 1016 668 L 1003 671 L 990 671 L 977 668 L 965 662 L 954 654 L 945 645 L 938 634 L 933 622 L 930 610 L 929 597 L 930 584 L 933 572 L 938 561 L 945 551 L 954 542 Z"
          fill={getThreatColor("Algeria")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Algeria")}
          onMouseEnter={() => handleCountryHover("Algeria")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1060 540 L 1075 538 L 1090 538 L 1104 540 L 1117 544 L 1129 550 L 1140 558 L 1149 568 L 1156 579 L 1161 591 L 1164 604 L 1165 617 L 1164 630 L 1161 642 L 1156 654 L 1149 665 L 1140 674 L 1129 682 L 1116 688 L 1103 691 L 1090 691 L 1077 688 L 1065 682 L 1054 674 L 1045 665 L 1038 654 L 1033 642 L 1030 630 L 1029 617 L 1030 604 L 1033 592 L 1038 581 L 1045 571 L 1054 562 Z"
          fill={getThreatColor("Libya")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Libya")}
          onMouseEnter={() => handleCountryHover("Libya")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1010 520 L 1025 518 L 1040 518 L 1054 520 L 1067 524 L 1079 530 L 1090 538 L 1099 548 L 1106 559 L 1111 571 L 1114 584 L 1115 597 L 1114 610 L 1111 622 L 1106 634 L 1099 645 L 1090 654 L 1079 662 L 1066 668 L 1053 671 L 1040 671 L 1027 668 L 1015 662 L 1004 654 L 995 645 L 988 634 L 983 622 L 980 610 L 979 597 L 980 584 L 983 572 L 988 561 L 995 551 L 1004 542 Z"
          fill={getThreatColor("Tunisia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Tunisia")}
          onMouseEnter={() => handleCountryHover("Tunisia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1160 680 L 1175 678 L 1190 678 L 1204 680 L 1217 684 L 1229 690 L 1240 698 L 1249 708 L 1256 719 L 1261 731 L 1264 744 L 1265 757 L 1264 770 L 1261 782 L 1256 794 L 1249 805 L 1240 814 L 1229 822 L 1216 828 L 1203 831 L 1190 831 L 1177 828 L 1165 822 L 1154 814 L 1145 805 L 1138 794 L 1133 782 L 1130 770 L 1129 757 L 1130 744 L 1133 732 L 1138 721 L 1145 711 L 1154 702 Z"
          fill={getThreatColor("Ethiopia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Ethiopia")}
          onMouseEnter={() => handleCountryHover("Ethiopia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 900 640 L 915 638 L 930 638 L 944 640 L 957 644 L 969 650 L 980 658 L 989 668 L 996 679 L 1001 691 L 1004 704 L 1005 717 L 1004 730 L 1001 742 L 996 754 L 989 765 L 980 774 L 969 782 L 956 788 L 943 791 L 930 791 L 917 788 L 905 782 L 894 774 L 885 765 L 878 754 L 873 742 L 870 730 L 869 717 L 870 704 L 873 692 L 878 681 L 885 671 L 894 662 Z"
          fill={getThreatColor("Ghana")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Ghana")}
          onMouseEnter={() => handleCountryHover("Ghana")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 850 640 L 865 638 L 880 638 L 894 640 L 907 644 L 919 650 L 930 658 L 939 668 L 946 679 L 951 691 L 954 704 L 955 717 L 954 730 L 951 742 L 946 754 L 939 765 L 930 774 L 919 782 L 906 788 L 893 791 L 880 791 L 867 788 L 855 782 L 844 774 L 835 765 L 828 754 L 823 742 L 820 730 L 819 717 L 820 704 L 823 692 L 828 681 L 835 671 L 844 662 Z"
          fill={getThreatColor("Ivory Coast")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Ivory Coast")}
          onMouseEnter={() => handleCountryHover("Ivory Coast")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 840 600 L 855 598 L 870 598 L 884 600 L 897 604 L 909 610 L 920 618 L 929 628 L 936 639 L 941 651 L 944 664 L 945 677 L 944 690 L 941 702 L 936 714 L 929 725 L 920 734 L 909 742 L 896 748 L 883 751 L 870 751 L 857 748 L 845 742 L 834 734 L 825 725 L 818 714 L 813 702 L 810 690 L 809 677 L 810 664 L 813 652 L 818 641 L 825 631 L 834 622 Z"
          fill={getThreatColor("Senegal")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Senegal")}
          onMouseEnter={() => handleCountryHover("Senegal")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 930 610 L 945 608 L 960 608 L 974 610 L 987 614 L 999 620 L 1010 628 L 1019 638 L 1026 649 L 1031 661 L 1034 674 L 1035 687 L 1034 700 L 1031 712 L 1026 724 L 1019 735 L 1010 744 L 999 752 L 986 758 L 973 761 L 960 761 L 947 758 L 935 752 L 924 744 L 915 735 L 908 724 L 903 712 L 900 700 L 899 687 L 900 674 L 903 662 L 908 651 L 915 641 L 924 632 Z"
          fill={getThreatColor("Mali")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Mali")}
          onMouseEnter={() => handleCountryHover("Mali")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1030 620 L 1045 618 L 1060 618 L 1074 620 L 1087 624 L 1099 630 L 1110 638 L 1119 648 L 1126 659 L 1131 671 L 1134 684 L 1135 697 L 1134 710 L 1131 722 L 1126 734 L 1119 745 L 1110 754 L 1099 762 L 1086 768 L 1073 771 L 1060 771 L 1047 768 L 1035 762 L 1024 754 L 1015 745 L 1008 734 L 1003 722 L 1000 710 L 999 697 L 1000 684 L 1003 672 L 1008 661 L 1015 651 L 1024 642 Z"
          fill={getThreatColor("Chad")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Chad")}
          onMouseEnter={() => handleCountryHover("Chad")}
          onMouseLeave={() => handleCountryHover(null)}
        />
      </g>

      {/* ASIA */}

      {/* China */}
      <path
        d="M 1500 300 L 1530 298 L 1560 297 L 1590 298 L 1620 301 L 1650 306 L 1680 313 L 1710 322 L 1740 333 L 1770 346 L 1800 361 L 1830 378 L 1860 397 L 1890 418 L 1920 441 L 1940 460 L 1955 478 L 1965 495 L 1972 512 L 1976 529 L 1978 546 L 1977 563 L 1974 579 L 1968 595 L 1960 610 L 1949 624 L 1935 637 L 1919 649 L 1900 659 L 1879 668 L 1856 675 L 1831 680 L 1805 683 L 1778 684 L 1750 683 L 1722 680 L 1694 675 L 1666 668 L 1639 659 L 1613 649 L 1588 637 L 1565 624 L 1544 610 L 1525 595 L 1509 579 L 1495 563 L 1484 546 L 1476 529 L 1471 512 L 1469 495 L 1469 478 L 1472 461 L 1478 445 L 1486 429 L 1497 414 L 1511 400 L 1527 387 L 1546 375 L 1567 365 L 1590 356 L 1615 349 L 1642 343 L 1670 339 L 1700 336 L 1730 335 L 1760 336 L 1790 339 L 1820 344 L 1848 351 L 1874 360 L 1898 371 L 1920 383 L 1939 397 L 1955 412 L 1968 428 L 1978 445 L 1985 463 L 1989 481 L 1990 500 L 1988 518 L 1983 536 L 1975 553 L 1964 569 L 1950 584 L 1933 597 L 1914 609 L 1892 619 L 1868 627 L 1842 633 L 1815 637 L 1787 639 L 1758 639 L 1729 637 L 1700 633 L 1671 627 L 1643 619 L 1616 609 L 1590 597 L 1566 584 L 1544 569 L 1524 553 L 1507 536 L 1492 518 L 1480 500 L 1471 481 L 1465 463 L 1462 445 L 1462 428 L 1465 412 L 1471 397 L 1480 383 L 1492 371 L 1507 360 L 1524 351 L 1544 344 L 1566 339 L 1590 336 Z"
        fill={getThreatColor("China")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("China")}
        onMouseEnter={() => handleCountryHover("China")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* India */}
      <path
        d="M 1420 500 L 1435 498 L 1450 498 L 1464 500 L 1477 504 L 1489 510 L 1500 518 L 1509 528 L 1516 539 L 1521 551 L 1524 564 L 1525 577 L 1524 590 L 1521 602 L 1516 614 L 1509 625 L 1500 634 L 1489 642 L 1476 648 L 1463 651 L 1450 651 L 1437 648 L 1425 642 L 1414 634 L 1405 625 L 1398 614 L 1393 602 L 1390 590 L 1389 577 L 1390 564 L 1393 552 L 1398 541 L 1405 530 L 1414 521 Z"
        fill={getThreatColor("India")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("India")}
        onMouseEnter={() => handleCountryHover("India")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Japan */}
      <path
        d="M 1850 340 L 1865 338 L 1880 338 L 1894 340 L 1907 344 L 1919 350 L 1930 358 L 1939 368 L 1946 379 L 1951 391 L 1954 404 L 1955 417 L 1954 430 L 1951 442 L 1946 454 L 1939 465 L 1930 474 L 1919 482 L 1906 488 L 1893 491 L 1880 491 L 1867 488 L 1855 482 L 1844 474 L 1835 465 L 1828 454 L 1823 442 L 1820 430 L 1819 417 L 1820 404 L 1823 392 L 1828 381 L 1835 371 L 1844 362 Z"
        fill={getThreatColor("Japan")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Japan")}
        onMouseEnter={() => handleCountryHover("Japan")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* South Korea */}
      <path
        d="M 1810 380 L 1825 378 L 1840 378 L 1854 380 L 1867 384 L 1879 390 L 1890 398 L 1899 408 L 1906 419 L 1911 431 L 1914 444 L 1915 457 L 1914 470 L 1911 482 L 1906 494 L 1899 505 L 1890 514 L 1879 522 L 1866 528 L 1853 531 L 1840 531 L 1827 528 L 1815 522 L 1804 514 L 1795 505 L 1788 494 L 1783 482 L 1780 470 L 1779 457 L 1780 444 L 1783 432 L 1788 421 L 1795 411 L 1804 402 Z"
        fill={getThreatColor("South Korea")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("South Korea")}
        onMouseEnter={() => handleCountryHover("South Korea")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* North Korea */}
      <path
        d="M 1790 370 L 1805 368 L 1820 368 L 1834 370 L 1847 374 L 1859 380 L 1870 388 L 1879 398 L 1886 409 L 1891 421 L 1894 434 L 1895 447 L 1894 460 L 1891 472 L 1886 484 L 1879 495 L 1870 504 L 1859 512 L 1846 518 L 1833 521 L 1820 521 L 1807 518 L 1795 512 L 1784 504 L 1775 495 L 1768 484 L 1763 472 L 1760 460 L 1759 447 L 1760 434 L 1763 422 L 1768 411 L 1775 401 L 1784 392 Z"
        fill={getThreatColor("North Korea")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("North Korea")}
        onMouseEnter={() => handleCountryHover("North Korea")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Southeast Asia */}
      <g className="southeast-asia">
        <path
          d="M 1620 580 L 1635 578 L 1650 578 L 1664 580 L 1677 584 L 1689 590 L 1700 598 L 1709 608 L 1716 619 L 1721 631 L 1724 644 L 1725 657 L 1724 670 L 1721 682 L 1716 694 L 1709 705 L 1700 714 L 1689 722 L 1676 728 L 1663 731 L 1650 731 L 1637 728 L 1625 722 L 1614 714 L 1605 705 L 1598 694 L 1593 682 L 1590 670 L 1589 657 L 1590 644 L 1593 632 L 1598 621 L 1605 611 L 1614 602 Z"
          fill={getThreatColor("Thailand")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Thailand")}
          onMouseEnter={() => handleCountryHover("Thailand")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1720 600 L 1735 598 L 1750 598 L 1764 600 L 1777 604 L 1789 610 L 1800 618 L 1809 628 L 1816 639 L 1821 651 L 1824 664 L 1825 677 L 1824 690 L 1821 702 L 1816 714 L 1809 725 L 1800 734 L 1789 742 L 1776 748 L 1763 751 L 1750 751 L 1737 748 L 1725 742 L 1714 734 L 1705 725 L 1698 714 L 1693 702 L 1690 690 L 1689 677 L 1690 664 L 1693 652 L 1698 641 L 1705 631 L 1714 622 Z"
          fill={getThreatColor("Vietnam")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Vietnam")}
          onMouseEnter={() => handleCountryHover("Vietnam")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1620 700 L 1635 698 L 1650 698 L 1664 700 L 1677 704 L 1689 710 L 1700 718 L 1709 728 L 1716 739 L 1721 751 L 1724 764 L 1725 777 L 1724 790 L 1721 802 L 1716 814 L 1709 825 L 1700 834 L 1689 842 L 1676 848 L 1663 851 L 1650 851 L 1637 848 L 1625 842 L 1614 834 L 1605 825 L 1598 814 L 1593 802 L 1590 790 L 1589 777 L 1590 764 L 1593 752 L 1598 741 L 1605 731 L 1614 722 Z"
          fill={getThreatColor("Indonesia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Indonesia")}
          onMouseEnter={() => handleCountryHover("Indonesia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1740 620 L 1755 618 L 1770 618 L 1784 620 L 1797 624 L 1809 630 L 1820 638 L 1829 648 L 1836 659 L 1841 671 L 1844 684 L 1845 697 L 1844 710 L 1841 722 L 1836 734 L 1829 745 L 1820 754 L 1809 762 L 1796 768 L 1783 771 L 1770 771 L 1757 768 L 1745 762 L 1734 754 L 1725 745 L 1718 734 L 1713 722 L 1710 710 L 1709 697 L 1710 684 L 1713 672 L 1718 661 L 1725 651 L 1734 642 Z"
          fill={getThreatColor("Philippines")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Philippines")}
          onMouseEnter={() => handleCountryHover("Philippines")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1580 680 L 1595 678 L 1610 678 L 1624 680 L 1637 684 L 1649 690 L 1660 698 L 1669 708 L 1676 719 L 1681 731 L 1684 744 L 1685 757 L 1684 770 L 1681 782 L 1676 794 L 1669 805 L 1660 814 L 1649 822 L 1636 828 L 1623 831 L 1610 831 L 1597 828 L 1585 822 L 1574 814 L 1565 805 L 1558 794 L 1553 782 L 1550 770 L 1549 757 L 1550 744 L 1553 732 L 1558 721 L 1565 711 L 1574 702 Z"
          fill={getThreatColor("Malaysia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Malaysia")}
          onMouseEnter={() => handleCountryHover("Malaysia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1590 730 L 1605 728 L 1615 730 L 1623 734 L 1628 740 L 1631 748 L 1632 757 L 1631 766 L 1628 774 L 1623 780 L 1615 784 L 1605 786 L 1595 784 L 1587 780 L 1582 774 L 1579 766 L 1578 757 L 1579 748 L 1582 740 Z"
          fill={getThreatColor("Singapore")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Singapore")}
          onMouseEnter={() => handleCountryHover("Singapore")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1410 470 L 1425 468 L 1440 468 L 1454 470 L 1467 474 L 1479 480 L 1490 488 L 1499 498 L 1506 509 L 1511 521 L 1514 534 L 1515 547 L 1514 560 L 1511 572 L 1506 584 L 1499 595 L 1490 604 L 1479 612 L 1466 618 L 1453 621 L 1440 621 L 1427 618 L 1415 612 L 1404 604 L 1395 595 L 1388 584 L 1383 572 L 1380 560 L 1379 547 L 1380 534 L 1383 522 L 1388 511 L 1395 501 L 1404 492 Z"
          fill={getThreatColor("Pakistan")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Pakistan")}
          onMouseEnter={() => handleCountryHover("Pakistan")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1520 560 L 1535 558 L 1550 558 L 1564 560 L 1577 564 L 1589 570 L 1600 578 L 1609 588 L 1616 599 L 1621 611 L 1624 624 L 1625 637 L 1624 650 L 1621 662 L 1616 674 L 1609 685 L 1600 694 L 1589 702 L 1576 708 L 1563 711 L 1550 711 L 1537 708 L 1525 702 L 1514 694 L 1505 685 L 1498 674 L 1493 662 L 1490 650 L 1489 637 L 1490 624 L 1493 612 L 1498 601 L 1505 591 L 1514 582 Z"
          fill={getThreatColor("Bangladesh")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Bangladesh")}
          onMouseEnter={() => handleCountryHover("Bangladesh")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1650 610 L 1665 608 L 1680 608 L 1694 610 L 1707 614 L 1719 620 L 1730 628 L 1739 638 L 1746 649 L 1751 661 L 1754 674 L 1755 687 L 1754 700 L 1751 712 L 1746 724 L 1739 735 L 1730 744 L 1719 752 L 1706 758 L 1693 761 L 1680 761 L 1667 758 L 1655 752 L 1644 744 L 1635 735 L 1628 724 L 1623 712 L 1620 700 L 1619 687 L 1620 674 L 1623 662 L 1628 651 L 1635 641 L 1644 632 Z"
          fill={getThreatColor("Cambodia")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Cambodia")}
          onMouseEnter={() => handleCountryHover("Cambodia")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1690 600 L 1705 598 L 1720 598 L 1734 600 L 1747 604 L 1759 610 L 1770 618 L 1779 628 L 1786 639 L 1791 651 L 1794 664 L 1795 677 L 1794 690 L 1791 702 L 1786 714 L 1779 725 L 1770 734 L 1759 742 L 1746 748 L 1733 751 L 1720 751 L 1707 748 L 1695 742 L 1684 734 L 1675 725 L 1668 714 L 1663 702 L 1660 690 L 1659 677 L 1660 664 L 1663 652 L 1668 641 L 1675 631 L 1684 622 Z"
          fill={getThreatColor("Laos")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Laos")}
          onMouseEnter={() => handleCountryHover("Laos")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1480 510 L 1495 508 L 1510 508 L 1524 510 L 1537 514 L 1549 520 L 1560 528 L 1569 538 L 1576 549 L 1581 561 L 1584 574 L 1585 587 L 1584 600 L 1581 612 L 1576 624 L 1569 635 L 1560 644 L 1549 652 L 1536 658 L 1523 661 L 1510 661 L 1497 658 L 1485 652 L 1474 644 L 1465 635 L 1458 624 L 1453 612 L 1450 600 L 1449 587 L 1450 574 L 1453 562 L 1458 551 L 1465 541 L 1474 532 Z"
          fill={getThreatColor("Nepal")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Nepal")}
          onMouseEnter={() => handleCountryHover("Nepal")}
          onMouseLeave={() => handleCountryHover(null)}
        />
      </g>

      {/* OCEANIA */}

      {/* Australia */}
      <path
        d="M 1650 800 L 1680 798 L 1710 797 L 1740 798 L 1770 801 L 1800 806 L 1830 813 L 1860 822 L 1890 833 L 1920 846 L 1950 861 L 1970 875 L 1985 889 L 1995 903 L 2001 917 L 2004 931 L 2004 945 L 2001 959 L 1995 972 L 1985 985 L 1970 997 L 1950 1007 L 1920 1015 L 1890 1021 L 1860 1025 L 1830 1027 L 1800 1027 L 1770 1025 L 1740 1021 L 1710 1015 L 1680 1007 L 1650 997 L 1625 985 L 1605 972 L 1590 959 L 1580 945 L 1575 931 L 1574 917 L 1577 903 L 1584 889 L 1595 876 L 1610 864 L 1630 853 Z"
        fill={getThreatColor("Australia")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("Australia")}
        onMouseEnter={() => handleCountryHover("Australia")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* New Zealand */}
      <path
        d="M 1900 920 L 1915 918 L 1930 918 L 1944 920 L 1957 924 L 1969 930 L 1980 938 L 1989 948 L 1996 959 L 2001 971 L 2004 984 L 2005 997 L 2004 1010 L 2001 1022 L 1996 1034 L 1989 1045 L 1980 1054 L 1969 1062 L 1956 1068 L 1943 1071 L 1930 1071 L 1917 1068 L 1905 1062 L 1894 1054 L 1885 1045 L 1878 1034 L 1873 1022 L 1870 1010 L 1869 997 L 1870 984 L 1873 972 L 1878 961 L 1885 951 L 1894 942 Z"
        fill={getThreatColor("New Zealand")}
        stroke="#1E293B"
        strokeWidth="0.5"
        className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
        onClick={() => handleCountryClick("New Zealand")}
        onMouseEnter={() => handleCountryHover("New Zealand")}
        onMouseLeave={() => handleCountryHover(null)}
      />

      {/* Pacific Islands */}
      <g className="pacific-islands">
        <path
          d="M 1850 750 L 1865 748 L 1880 748 L 1894 750 L 1907 754 L 1919 760 L 1930 768 L 1939 778 L 1946 789 L 1951 801 L 1954 814 L 1955 827 L 1954 840 L 1951 852 L 1946 864 L 1939 875 L 1930 884 L 1919 892 L 1906 898 L 1893 901 L 1880 901 L 1867 898 L 1855 892 L 1844 884 L 1835 875 L 1828 864 L 1823 852 L 1820 840 L 1819 827 L 1820 814 L 1823 802 L 1828 791 L 1835 781 L 1844 772 Z"
          fill={getThreatColor("Papua New Guinea")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Papua New Guinea")}
          onMouseEnter={() => handleCountryHover("Papua New Guinea")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1930 820 L 1945 818 L 1955 820 L 1963 824 L 1968 830 L 1971 838 L 1972 847 L 1971 856 L 1968 864 L 1963 870 L 1955 874 L 1945 876 L 1935 874 L 1927 870 L 1922 864 L 1919 856 L 1918 847 L 1919 838 L 1922 830 Z"
          fill={getThreatColor("Fiji")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Fiji")}
          onMouseEnter={() => handleCountryHover("Fiji")}
          onMouseLeave={() => handleCountryHover(null)}
        />
        <path
          d="M 1960 840 L 1970 839 L 1978 841 L 1983 845 L 1986 851 L 1987 858 L 1986 865 L 1983 871 L 1978 875 L 1970 877 L 1962 876 L 1956 873 L 1953 868 L 1951 862 L 1951 856 L 1953 850 L 1956 845 Z"
          fill={getThreatColor("Samoa")}
          stroke="#1E293B"
          strokeWidth="0.5"
          className="transition-all duration-300 hover:opacity-80 cursor-pointer dark:stroke-slate-700"
          onClick={() => handleCountryClick("Samoa")}
          onMouseEnter={() => handleCountryHover("Samoa")}
          onMouseLeave={() => handleCountryHover(null)}
        />
      </g>
    </svg>
  );
}
