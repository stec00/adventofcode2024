const input = `
85|65
21|49
21|66
49|74
49|39
49|87
17|84
17|88
17|46
17|99
97|15
97|55
97|46
97|13
97|38
38|88
38|95
38|63
38|81
38|79
38|18
14|55
14|47
14|58
14|13
14|62
14|42
14|89
18|42
18|55
18|58
18|82
18|44
18|86
18|26
18|73
66|62
66|14
66|38
66|18
66|19
66|15
66|29
66|87
66|49
46|84
46|82
46|95
46|89
46|42
46|64
46|65
46|19
46|58
46|26
42|69
42|94
42|23
42|22
42|87
42|98
42|88
42|25
42|81
42|92
42|26
86|79
86|89
86|73
86|63
86|98
86|99
86|92
86|22
86|66
86|25
86|42
86|65
99|69
99|82
99|81
99|42
99|64
99|94
99|98
99|79
99|95
99|44
99|26
99|92
99|25
84|86
84|22
84|98
84|73
84|89
84|19
84|18
84|79
84|92
84|29
84|65
84|88
84|26
84|38
63|14
63|76
63|53
63|69
63|25
63|46
63|81
63|84
63|23
63|87
63|93
63|24
63|13
63|62
63|97
87|13
87|76
87|93
87|85
87|18
87|47
87|99
87|97
87|52
87|17
87|86
87|53
87|58
87|29
87|39
87|19
39|95
39|92
39|86
39|58
39|63
39|79
39|65
39|88
39|19
39|26
39|38
39|99
39|73
39|22
39|82
39|42
39|18
44|84
44|39
44|53
44|76
44|62
44|85
44|13
44|17
44|97
44|19
44|93
44|69
44|66
44|14
44|87
44|47
44|24
44|23
95|22
95|63
95|52
95|23
95|24
95|97
95|26
95|25
95|21
95|62
95|44
95|73
95|81
95|66
95|53
95|14
95|69
95|87
95|93
19|98
19|18
19|42
19|79
19|99
19|82
19|86
19|95
19|63
19|15
19|73
19|65
19|22
19|29
19|38
19|21
19|55
19|88
19|58
19|89
52|62
52|17
52|93
52|13
52|46
52|19
52|99
52|42
52|85
52|47
52|39
52|18
52|84
52|55
52|97
52|38
52|76
52|15
52|58
52|14
52|82
92|97
92|47
92|21
92|44
92|25
92|63
92|53
92|14
92|23
92|13
92|52
92|24
92|81
92|69
92|46
92|85
92|66
92|62
92|93
92|22
92|17
92|74
13|82
13|26
13|55
13|79
13|88
13|98
13|76
13|73
13|29
13|86
13|42
13|84
13|95
13|15
13|94
13|64
13|58
13|38
13|39
13|18
13|65
13|99
13|19
81|53
81|97
81|17
81|15
81|29
81|62
81|39
81|13
81|87
81|47
81|93
81|46
81|74
81|66
81|24
81|52
81|14
81|76
81|19
81|84
81|49
81|69
81|85
81|23
47|42
47|95
47|18
47|58
47|19
47|15
47|39
47|13
47|88
47|86
47|55
47|82
47|46
47|94
47|84
47|64
47|99
47|79
47|85
47|76
47|65
47|38
47|89
47|29
89|21
89|73
89|53
89|65
89|24
89|98
89|52
89|81
89|95
89|66
89|64
89|26
89|25
89|44
89|74
89|92
89|94
89|22
89|63
89|87
89|49
89|23
89|79
89|69
74|14
74|46
74|17
74|88
74|93
74|85
74|13
74|18
74|38
74|19
74|99
74|76
74|55
74|84
74|15
74|97
74|82
74|29
74|47
74|62
74|39
74|86
74|42
74|58
64|24
64|25
64|53
64|23
64|81
64|17
64|62
64|49
64|63
64|98
64|87
64|73
64|74
64|26
64|93
64|21
64|44
64|52
64|22
64|95
64|14
64|92
64|69
64|66
15|42
15|79
15|88
15|99
15|73
15|98
15|94
15|21
15|63
15|26
15|89
15|58
15|64
15|95
15|22
15|86
15|25
15|55
15|65
15|92
15|44
15|38
15|18
15|82
23|13
23|93
23|85
23|53
23|49
23|18
23|14
23|46
23|76
23|97
23|52
23|86
23|74
23|15
23|19
23|47
23|87
23|58
23|38
23|84
23|39
23|17
23|62
23|29
65|93
65|21
65|74
65|94
65|23
65|69
65|24
65|49
65|87
65|63
65|64
65|81
65|52
65|22
65|44
65|92
65|17
65|73
65|25
65|26
65|66
65|98
65|53
65|95
88|52
88|79
88|64
88|44
88|26
88|21
88|23
88|63
88|81
88|73
88|49
88|53
88|94
88|89
88|25
88|92
88|87
88|22
88|24
88|95
88|69
88|66
88|98
88|65
76|15
76|88
76|42
76|19
76|82
76|58
76|29
76|84
76|92
76|79
76|64
76|55
76|65
76|95
76|86
76|73
76|98
76|38
76|39
76|94
76|99
76|89
76|26
76|18
94|44
94|98
94|74
94|64
94|63
94|21
94|24
94|14
94|49
94|81
94|22
94|87
94|69
94|53
94|93
94|92
94|23
94|52
94|26
94|73
94|95
94|25
94|17
94|66
24|93
24|23
24|19
24|38
24|39
24|17
24|85
24|52
24|76
24|13
24|29
24|74
24|62
24|15
24|14
24|97
24|47
24|53
24|69
24|46
24|87
24|49
24|66
24|84
25|62
25|52
25|85
25|84
25|13
25|69
25|87
25|19
25|14
25|39
25|24
25|74
25|23
25|76
25|44
25|66
25|53
25|97
25|17
25|81
25|47
25|49
25|93
25|46
53|76
53|74
53|17
53|58
53|29
53|82
53|19
53|84
53|13
53|15
53|85
53|93
53|18
53|38
53|46
53|55
53|62
53|97
53|14
53|99
53|39
53|47
53|86
53|52
62|97
62|85
62|94
62|29
62|88
62|58
62|15
62|42
62|79
62|76
62|46
62|55
62|89
62|38
62|39
62|47
62|13
62|65
62|99
62|19
62|82
62|84
62|18
62|86
93|88
93|13
93|79
93|18
93|15
93|86
93|19
93|14
93|58
93|47
93|62
93|84
93|99
93|89
93|76
93|82
93|55
93|85
93|42
93|39
93|46
93|29
93|38
93|97
22|52
22|13
22|76
22|87
22|14
22|63
22|66
22|17
22|62
22|44
22|81
22|97
22|24
22|93
22|53
22|47
22|46
22|74
22|21
22|85
22|23
22|25
22|49
22|69
73|52
73|49
73|47
73|81
73|69
73|98
73|53
73|93
73|24
73|17
73|21
73|14
73|63
73|22
73|46
73|25
73|44
73|97
73|23
73|87
73|66
73|74
73|62
73|92
55|24
55|82
55|63
55|89
55|21
55|88
55|64
55|98
55|92
55|79
55|66
55|73
55|22
55|25
55|49
55|65
55|26
55|69
55|94
55|81
55|42
55|95
55|23
55|44
26|14
26|92
26|24
26|53
26|49
26|98
26|47
26|81
26|93
26|63
26|23
26|74
26|17
26|25
26|69
26|62
26|73
26|52
26|22
26|97
26|87
26|44
26|21
26|66
29|63
29|65
29|95
29|64
29|73
29|99
29|58
29|42
29|94
29|86
29|82
29|25
29|89
29|18
29|88
29|92
29|21
29|98
29|26
29|22
29|38
29|79
29|15
29|55
82|92
82|44
82|26
82|66
82|95
82|42
82|89
82|94
82|98
82|24
82|21
82|63
82|81
82|25
82|23
82|22
82|87
82|79
82|65
82|88
82|73
82|69
82|49
82|64
98|44
98|97
98|22
98|14
98|24
98|63
98|87
98|93
98|66
98|17
98|21
98|46
98|53
98|25
98|69
98|47
98|74
98|92
98|81
98|23
98|52
98|85
98|49
98|62
69|15
69|14
69|13
69|18
69|46
69|39
69|19
69|84
69|76
69|23
69|74
69|62
69|93
69|29
69|66
69|53
69|87
69|52
69|17
69|49
69|47
69|38
69|85
69|97
58|42
58|21
58|92
58|95
58|24
58|65
58|98
58|55
58|82
58|22
58|26
58|73
58|64
58|94
58|89
58|69
58|63
58|44
58|86
58|25
58|79
58|99
58|81
58|88
79|49
79|52
79|63
79|64
79|92
79|25
79|17
79|73
79|81
79|98
79|65
79|74
79|66
79|53
79|44
79|94
79|22
79|87
79|69
79|21
79|23
79|24
79|95
79|26
85|76
85|79
85|86
85|84
85|73
85|39
85|89
85|29
85|94
85|88
85|82
85|38
85|99
85|18
85|64
85|13
85|95
85|26
85|19
85|55
85|42
85|15
85|58
21|44
21|76
21|14
21|46
21|84
21|13
21|74
21|25
21|47
21|62
21|87
21|93
21|69
21|23
21|81
21|85
21|17
21|97
21|52
21|39
21|53
21|24
49|15
49|52
49|53
49|84
49|93
49|14
49|58
49|29
49|18
49|62
49|76
49|47
49|99
49|46
49|86
49|38
49|19
49|17
49|85
49|13
49|97
17|42
17|86
17|62
17|97
17|93
17|15
17|47
17|58
17|29
17|18
17|55
17|13
17|76
17|85
17|89
17|19
17|38
17|82
17|14
17|39
97|65
97|64
97|29
97|86
97|18
97|76
97|47
97|99
97|82
97|39
97|42
97|89
97|85
97|94
97|58
97|79
97|19
97|84
97|88
38|86
38|44
38|22
38|42
38|21
38|58
38|89
38|98
38|92
38|64
38|25
38|82
38|94
38|55
38|73
38|99
38|26
38|65
14|38
14|85
14|97
14|88
14|29
14|39
14|82
14|19
14|79
14|76
14|15
14|65
14|99
14|46
14|18
14|84
14|86
18|65
18|81
18|89
18|94
18|88
18|99
18|21
18|92
18|98
18|63
18|64
18|79
18|95
18|25
18|24
18|22
66|13
66|52
66|39
66|53
66|85
66|74
66|23
66|47
66|97
66|84
66|17
66|76
66|58
66|93
66|46
46|94
46|39
46|18
46|29
46|15
46|85
46|86
46|76
46|79
46|13
46|99
46|38
46|55
46|88
42|95
42|79
42|65
42|21
42|66
42|24
42|89
42|44
42|53
42|73
42|49
42|64
42|63
86|88
86|26
86|44
86|24
86|95
86|64
86|81
86|21
86|82
86|94
86|69
86|55
99|23
99|24
99|55
99|63
99|73
99|89
99|66
99|65
99|21
99|88
99|22
84|58
84|94
84|39
84|42
84|55
84|15
84|99
84|82
84|95
84|64
63|74
63|44
63|21
63|52
63|85
63|49
63|17
63|66
63|47
87|84
87|74
87|38
87|62
87|55
87|15
87|14
87|46
39|64
39|98
39|15
39|29
39|94
39|89
39|55
44|46
44|74
44|52
44|81
44|29
44|49
95|74
95|98
95|49
95|17
95|92
19|26
19|94
19|92
19|64
52|29
52|74
52|86
92|49
92|87
13|89

74,17,93,14,97,47,46,13,76,84,39,29,15,38,18,58,55,82,42
17,14,76,84,39
17,93,47,46,84,15,99,82,88
21,24,69,66,23,74,17,93,13,76,84
85,89,65,13,55
52,74,17,93,14,62,97,47,85,13,76,84,39,19,29,15,38,58,86,55,82
87,69,74,24,81,19,46,44,49,84,17
39,14,13,93,85,66,29,15,52,23,97,69,84,47,87,74,53,76,62,46,49
99,55,82,42,88,89,79,65,94,64,95,26,73,98,92,22,63,21,25,44,24,69,66
98,92,22,63,21,44,81,24,69,66,49,87,52,74,17,93,14,62,97,47,46
84,93,82,85,19,74,29,52,46,14,18,38,62,47,99,97,55
49,89,88,95,87,65,81,53,92,79,66,26,44,25,64,63,69
24,69,66,49,87,74,97,85,76,84,15
22,21,47,81,87
19,29,15,38,86,99,55,88,89,79,65,94,95,26,73,22,63
74,17,93,14,62,97,47,85,13,76,84,39,19,29,15,38,18,58,86,99,55,82,42
88,89,79,94,64,95,73,22,63,25,44,81,69,66,53
23,93,46,85,38,18,58
94,64,26,73,98,92,22,63,25,44,81,24,69,23,49,87,53,52,74,17,93
55,92,89,99,18,65,21,63,58,15,29,88,64,79,98
76,82,13,73,79,88,99
84,15,58,99,88,89,79,65,64
46,85,63,52,13,22,21
88,86,92,18,38,15,73,98,65,21,29,82,64
47,13,76,39,19,38,82,42,88,79,64
89,65,64,15,82,29,94,86,99,55,79
64,81,44,55,63,82,58,22,18
13,86,99,55,42,79,65,95,73
66,49,87,53,52,74,17,93,14,62,97,47,46,85,13,76,84,39,19,29,15,38,18
38,18,58,99,82,42,89,79,65,94,64,95,73,21,44
38,99,17,19,15,97,53,76,58,18,29,13,84,93,62,52,87,47,14,86,39
79,65,95,26,98,22,63,21,25,44,24,49,87,53,74
63,21,24,66,23,87,53,52,74,93,14,46,85
25,81,69,66,23,49,87,52,74,93,46,13,76
81,62,21,47,87,66,74,44,25,92,98,22,49,69,52,46,23,14,63,93,24,17,53
86,55,82,42,88,89,79,94,64,95,73,98,92,63,21,81,69
89,65,95,98,25,24,52
73,55,25,81,88,95,98,24,94,79,23,22,69
18,58,99,55,82,65,94,22,21,25,81
81,24,69,66,23,49,87,52,74,62,47,46,85,76,39,19,29
38,18,58,86,99,42,65,94,95,26,73,98,92,63,44
93,52,13,46,21,81,97,53,47,25,74,87,24,22,49,62,44
97,46,76,29,93,58,47,53,15,14,18,13,85,84,49,38,19,39,86,74,52,87,17
14,62,47,46,13,84,39,19,29,15,38,18,58,86,99,55,82,89,79
38,98,29,26,22,15,64,99,18,73,21
87,53,52,14,85,29,99
95,26,73,92,22,63,21,25,44,81,69,23,53,52,17,14,62
42,86,88,89,98,92,82,65,29,94,58,39,73,55,19,95,22
29,86,97,55,42,84,82,58,94,15,65,18,79,99,85,38,13
85,13,76,39,19,38,18,58,86,99,55,82,88,89,65,94,64,95,26
23,21,66,53,74,98,93,52,81,25,24,49,63,73,44,26,95,94,87
52,21,44,95,24,98,64,63,69,81,26,17,49,22,66,65,87
62,97,47,46,85,84,39,19,29,15,18,86,89,79,65
25,44,81,69,23,49,87,53,52,74,17,93,14,62,47,46,85,13,76,84,39
47,58,99,55,82,88,64
89,99,42,81,95,79,65,94,25,18,64
53,14,97,47,84,15,55
84,39,19,29,15,38,18,58,86,99,82,42,88,89,79,65,94,95,26,98,92
92,81,21,49,66,89,26,65,94,73,98,87,53,64,95,24,79,25,88
47,85,29,55,42,65,64
26,92,63,44,69,23,87,53,97
74,23,19,81,47,84,76,66,29,69,62
29,13,47,93,84,81,17
22,21,25,69,49,53,52,17,93,62,97
82,42,88,89,79,65,94,64,95,26,73,98,92,22,63,21,25,44,81,24,66,23,49
13,76,84,19,29,15,38,18,58,86,55,82,88,89,79,65,94,64,95,26,73
24,66,53,17,93,97,46,85,13,39,29
13,76,39,38,18,88,94,95,73
73,92,22,23,49,87,74,17,14,97,47
25,73,52,14,21,17,23,81,66,92,98
64,95,21,44,81,23,87,17,14
94,73,92,22,81
47,76,19,87,74,24,44,39,84,53,93,49,69,85,62
55,82,42,89,65,94,64,95,73,92,22,63,44,81,24,66,23
86,84,42,92,15,98,95
58,55,64,95,98,21,81
85,82,19,55,39,74,97,46,93,29,86,84,15,58,13,99,14,18,62,17,47,52,76
49,82,66,69,95,94,65,64,98,81,79,23,42,92,22,63,26,88,73,44,24
63,98,89,95,21,92,55,26,99,18,64,73,58,82,42,22,79,65,15,94,88,25,38
73,98,25,44,24,66,23,49,87,53,74,17,62,97,47
74,47,53,52,99,55,58,46,97,18,29,62,13,76,14,19,17,86,39,38,85
58,42,79,65,64,92,24
47,15,76,82,85
26,98,63,66,49
84,38,18,99,55,82,88,79,95
89,93,88,58,39,13,18,42,15
74,17,93,62,97,47,46,85,13,76,39,19,15,38,18,58,86,99,55,82,42
21,81,24,49,53,52,17,62,47,85,76
93,87,92,26,62,23,69,98,44,74,53,22,14,81,52,66,97
76,39,53,17,19,74,84,66,85,52,44,23,46
74,17,23,24,52,63,47,97,62,81,92,49,69,25,21,85,87
15,58,88,26,73
42,79,98,44,69,49,87
76,84,39,18,55,89,95,73,98
19,18,58,42,89,65,95,26,73,22,63
87,53,52,74,17,93,14,62,97,47,85,13,84,39,19,29,15,18,58,86,99
49,87,53,17,93,14,62,97,47,46,85,13,84,19,29,15,38,18,86
13,84,39,19,38,58,86,55,42,88,79,94,64,95,26
74,62,47,46,38,86,42
49,64,23,98,66,92,88,94,42,95,87
24,69,66,23,49,87,53,52,74,17,93,14,62,97,47,46,85,76,84,39,19,29,15
64,95,73,98,22,21,44,69,87,52,14
87,24,47,15,29,17,97
58,55,42,89,98,25,24
65,39,64,42,29,82,94,89,88,76,19
63,21,44,24,23,49,53,52,74,14,97,47,85
79,94,64,95,26,73,98,92,63,21,25,44,81,24,69,23,49,87,74
46,85,13,84,39,19,86,99,55,42,88,89,79,65,94,64,95
18,29,58,86,94,65,46,84,47,38,97
46,53,47,85,93,49,86
62,29,97,19,46,66,74,76,18
14,84,39,76,97,86,93,47,29,15,74
63,21,25,44,81,69,66,23,49,87,52,93,14,62,97,47,85,13,76
46,17,53,49,23,39,97,14,85,66,76,18,47,52,19
99,73,82,65,42,94,92,86,25,26,88,89,95,64,21,22,15
22,46,25,69,74,93,66,47,21,87,14,23,63,97,62
82,76,84,15,19,47,39,42,14,29,99,88,58,97,89,79,18
53,93,14,97,85,29,58,86,55
73,98,92,63,21,25,44,81,24,69,66,87,53,52,74,17,93,14,62,97,47
26,92,44,24,23,87,53,74,97
21,44,69,87,53,74,62,85,13,76,84
89,79,65,64,95,26,73,92,63,25,44,81,24,69,66,23,87,53,52
94,55,38,99,73,92,63,88,22,98,18,26,42,82,89,19,95
82,73,94,42,19,38,39,99,65,86,55,95,89,84,18,88,64,79,29,26,92,15,58
18,86,82,98,88,55,58,64,44,95,42,65,99,21,92,81,94
44,98,63,52,21,81,24,49,87,53,26,73,22,97,25,14,74,93,17
65,86,42,18,89,82,46,29,85,84,38,47,94,99,55,19,13,64,79
92,22,63,21,81,24,69,23,49,52,74,93,14,97,85
42,88,89,79,65,95,26,73,63,44,81,24,69
95,26,73,92,63,21,25,44,81,24,69,23,49,87,53,52,17,93,62
25,44,81,24,69,66,49,53,52,74,17,93,14,62,97,47,46,85,13,76,84
94,64,95,26,73,98,92,22,63,21,25,44,24,66,23,49,87,53,52,17,93
15,29,97,14,89,42,58,18,19,13,88
82,42,88,89,79,65,94,64,95,26,98,92,22,63,21,44,81,69,66,23,49
52,17,74,92,44
21,25,81,24,69,66,87,53,93,14,97,47,46,85,13,76,84
74,47,85,15,18,58,99,82,42
81,24,69,66,23,49,87,52,74,17,93,14,62,97,47,46,85,13,76,84,39,19,29
79,94,64,26,73,63,21,81,23,87,53,52,74
79,94,64,26,73,25,81,24,69,66,23,87,53,52,74
79,94,73,25,66,52,74
14,62,97,47,46,85,13,76,84,19,29,15,38,18,58,55,82,42,88,89,79
42,88,89,82,55,81,64,26,73,92,94,79,25,63,22,24,98
53,87,13,62,66,17,93,14,52,74,85,97,49
69,66,47,85,39,29,38
63,21,81,64,73,95,87,66,93,14,23
65,82,89,19,39,55,98,84,76,38,64,18,95,99,79
86,42,88,89,79,65,95,26,73,98,92,22,63,24,69
88,79,64,73,63
23,49,87,53,52,17,93,14,62,97,47,46,85,13,76,84,39,19,29,15,38,18,58
52,74,17,93,14,62,97,85,13,76,84,39,19,29,15,58,99,55,82
81,49,74,17,13,76,84,39,29
95,81,21,52,98,53,87,44,24,94,23,73,64,69,49,25,26,63,74,66,17,92,65
21,25,92,26,64,22,95,89,98,53,63,52,44,87,24
44,22,89,64,92,82,23,21,63,55,88,24,94,95,69,98,26,79,81,66,42,65,25
42,88,89,79,65,94,64,95,26,73,98,92,22,63,21,25,44,81,24,69,66,23,49
76,39,19,29,15,18,86,99,82,79,65,94,95,26,73
26,69,81,49,21,89,95,52,65
53,52,47,76,38,58,55
92,22,63,74,93,47,85
86,99,55,42,88,89,79,65,94,95,26,73,98,22,21,25,44,24,69
76,84,39,19,29,15,38,18,58,86,99,55,82,42,88,89,79,65,64,95,26,73,98
92,22,88,64,65,42,95,86,26,44,58,99,63
85,17,66,97,53,15,47,38,29,23,14,62,84,46,93
25,93,98,26,14,21,66,73,62,44,97,92,74,87,24,52,22
87,13,85,52,47,29,74,62,24,76,23,15,93,19,53,69,39,97,46
55,42,79,65,94,95,26,22,63,21,44,81,24,66,23
23,49,87,74,17,93,47,46,85,19,18
62,97,46,85,13,76,39,15,38,18,58,86,82,42,88,89,65
52,62,19,18,86,55,82
64,94,65,55,24,88,44,86,69,99,92
85,76,84,39,19,58,86,55,42,88,89,79,65,64,95
15,38,18,82,88,79,95,73,22,63,21
39,99,46,88,84,97,58,14,29,85,55,19,76,86,17,13,62
82,73,89,22,42,26,95,98,44,55,21,92,64,24,69,25,63
89,26,73,65,66,79,55,99,63,69,82,94,81
93,97,25,63,49,46,47,13,76,87,21
21,25,44,81,24,69,66,49,87,52,74,17,93,14,62,97,47,46,13,76,84
38,82,29,85,84,46,64,39,15,58,94,42,76,79,95
19,29,38,58,86,82,42,88,89,65,94,95,73,98,92,22,63
14,62,97,47,46,13,76,84,39,19,29,38,18,58,86,99,82,42,88,89,79
97,47,46,85,13,76,84,39,19,15,38,18,58,86,99,82,88,89,79,65,94
53,17,47,93,84,39,46,85,18,15,13,23,14,76,38,87,97,62,74,52,66
13,76,84,39,29,15,38,99,82,42,88,89,79,65,94,95,73
97,46,76,39,19,15,38,86,55,89,79
84,39,18,58,86,89,65,73,92
64,76,13,15,89,73,99
46,85,76,84,19,15,38,86,99,55,42,88,79,94,64
69,66,49,87,53,74,17,93,14,62,97,47,46,85,76,84,39,19,38`;

function parseInput(input) {
    const [rulesPart, updatesPart] = input.trim().split("\n\n");
    const rules = rulesPart.split("\n").map(line => line.split("|").map(Number));
    const updates = updatesPart.split("\n").map(line => line.split(",").map(Number));
    return { rules, updates };
}

function isUpdateValid(update, rules) {
    const pageIndex = new Map();
    update.forEach((page, index) => pageIndex.set(page, index));

    for (const [x, y] of rules) {
        if (pageIndex.has(x) && pageIndex.has(y)) {
            if (pageIndex.get(x) >= pageIndex.get(y)) {
                return false;
            }
        }
    }
    return true;
}

function findMiddlePage(update) {
    const midIndex = Math.floor(update.length / 2);
    return update[midIndex];
}

function sumMiddlePages(input) {
    const { rules, updates } = parseInput(input);

    let total = 0;
    for (const update of updates) {
        if (isUpdateValid(update, rules)) {
            total += findMiddlePage(update);
        }
    }
    return total;
}

// Calculate the result
const result = sumMiddlePages(input);
console.log("Sum of middle pages:", result);
