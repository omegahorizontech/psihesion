import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 100 100"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >

    <path d="M43.83811,29.54918c-0.01965,0-0.04127-0.00098-0.06092-0.00197c-7.01215-0.24959-13.50939-4.64594-17.51071-11.80646   c-9.42748-2.33771-17.0921-6.21031-22.84647-11.53918c-0.00393,5.54309,2.90863,9.4324,8.83004,11.83496   c0.87652,0.35572,1.29906,1.35408,0.94334,2.22962c-0.35375,0.87554-1.35212,1.30004-2.22864,0.94236   C2.37054,17.72208-1.28292,11.1079,0.39936,2.08134c0.11988-0.64265,0.59548-1.1605,1.22437-1.33541   c0.62693-0.17491,1.30495,0.02358,1.73731,0.51294c5.70326,6.42452,13.69805,10.7855,24.44228,13.33251   c0.4815,0.11497,0.89028,0.43236,1.12021,0.8716c3.11695,5.94696,8.10484,9.79794,13.54869,10.5418   c0.50115-1.86604,1.30495-3.31544,1.98101-4.53097c0.45791-0.82837,1.49951-1.12316,2.3269-0.66623   c0.82542,0.45889,1.12414,1.5005,0.66426,2.3269c-0.79398,1.43073-1.61546,2.90961-1.91222,4.95056   C45.40837,28.92814,44.68515,29.54918,43.83811,29.54918z"></path><path d="M16.85668,30.80401c-0.04324,0-0.08647-0.00196-0.12971-0.00491c-9.27223-0.69375-14.35249-6.66036-15.0993-17.73573   c-0.06289-0.94334,0.65051-1.75893,1.59188-1.8228c0.92369-0.05896,1.75893,0.64854,1.82379,1.59286   c0.63086,9.36656,4.42386,13.9899,11.93912,14.55197c0.94334,0.07075,1.64888,0.89224,1.57813,1.8346   C18.49376,30.11911,17.74302,30.80401,16.85668,30.80401z"></path><path d="M20.49442,38.09719c-4.78744,0-10.10158-2.32297-13.02199-11.14809c-0.29676-0.89715,0.19063-1.86506,1.0868-2.16182   c0.89814-0.30069,1.86702,0.18867,2.16378,1.08681c2.31118,6.9866,6.2162,9.70753,12.2575,8.55391   c0.93155-0.17688,1.82379,0.43335,2.00066,1.36194c0.17687,0.9286-0.43236,1.82379-1.35998,2.00066   C22.62676,37.97927,21.57337,38.09719,20.49442,38.09719z"></path><path d="M24.41517,42.9033c-4.82281,0-7.77075-3.18868-9.52182-6.4373c-0.45005-0.8323-0.13953-1.86997,0.69375-2.31904   c0.82935-0.45103,1.87095-0.13757,2.31707,0.69374c2.71603,5.03212,6.53065,5.93713,12.37542,2.94007   c0.84311-0.43433,1.87292-0.09728,2.30332,0.7419c0.4304,0.84114,0.09826,1.87292-0.74288,2.3043   C28.97267,42.29799,26.51607,42.9033,24.41517,42.9033z"></path><path d="M41.72739,42.04251c-0.21815,0-0.44023-0.04127-0.65248-0.12971c-7.40717-3.05799-12.55033-6.81562-15.28601-11.16774   c-0.50311-0.80085-0.26335-1.8572,0.53849-2.36031c0.8038-0.50115,1.8572-0.25942,2.35835,0.53849   c2.35048,3.73896,6.95712,7.04457,13.69412,9.82545c0.87455,0.36063,1.28923,1.36096,0.92958,2.23453   C43.03627,41.64355,42.39952,42.04251,41.72739,42.04251z"></path><path d="M31.05981,41.01564c-0.71733,0-1.38553-0.45398-1.62333-1.17131c-0.29872-0.89716,0.1867-1.86604,1.08287-2.16378   c1.24403-0.41467,2.39372-1.07206,3.41567-1.9535c0.71537-0.6171,1.79431-0.54045,2.41337,0.17688   c0.6171,0.71537,0.53849,1.79627-0.17688,2.41337c-1.36194,1.17623-2.90076,2.05373-4.57126,2.60991   C31.42142,40.98715,31.23865,41.01564,31.05981,41.01564z"></path><path d="M42.24033,61.09597c-0.17295,0-0.34982-0.02751-0.52473-0.08254c-0.9001-0.29086-1.39339-1.25385-1.10449-2.15395   c1.54275-4.78547,1.36194-10.87394-0.53849-18.09342c-0.24173-0.91386,0.30462-1.84933,1.21848-2.09008   c0.91189-0.23878,1.84933,0.30265,2.09106,1.21946c2.06945,7.86115,2.23257,14.5952,0.48739,20.0135   C43.63568,60.63412,42.96355,61.09597,42.24033,61.09597z"></path><path d="M50.00125,99.31687c-0.59352,0-1.16935-0.30855-1.48576-0.86079c-4.19982-7.31676-5.71506-18.38133-4.50051-32.88319   c0.07861-0.93941,0.88831-1.64101,1.84933-1.5624c0.94137,0.07861,1.64101,0.906,1.5624,1.84933   c-1.15559,13.79435,0.21029,24.18876,4.05635,30.89432c0.47167,0.81952,0.18867,1.86506-0.63282,2.33476   C50.58297,99.24416,50.29015,99.31687,50.00125,99.31687z"></path><path d="M38.81876,88.42133c-0.1356,0-0.27317-0.01572-0.40878-0.04913c-0.61121-0.15133-1.09074-0.62496-1.24796-1.2342   c-1.86899-7.23029-0.73502-16.49663,3.4648-28.32569c0.31838-0.89224,1.30102-1.35801,2.1854-1.0416   c0.89224,0.31641,1.35801,1.29512,1.0416,2.1854c-3.28989,9.26437-4.61646,17.0017-3.96005,23.06854   c1.64691-1.82771,3.29579-3.91682,3.82445-6.0295c0.22994-0.91779,1.15952-1.4779,2.07534-1.24599   c0.91779,0.22993,1.47593,1.15952,1.24599,2.07534c-0.88634,3.53751-3.80873,6.66232-5.94303,8.94402   c-0.35768,0.38126-0.69768,0.74484-1.00819,1.0868C39.76014,88.22086,39.29633,88.42133,38.81876,88.42133z"></path><path d="M39.21772,58.13035c-0.10023,0-0.20242-0.00983-0.30265-0.02751c-0.56797-0.1022-1.0475-0.48346-1.27154-1.01409   c-0.77825-1.82968-1.7491-2.944-2.96955-3.40781c-0.88438-0.33606-1.32853-1.3246-0.99247-2.20702   c0.33606-0.88438,1.33443-1.32853,2.20702-0.99247c1.51131,0.57386,2.78678,1.64691,3.80873,3.19949   c2.11465-1.63905,4.64201-2.68458,7.53884-3.11891c0.93548-0.15329,1.80413,0.50311,1.94564,1.43859   c0.13953,0.93548-0.50311,1.8061-1.43859,1.94563c-2.99903,0.45005-5.38096,1.64298-7.28336,3.64954   C40.13354,57.93972,39.68349,58.13035,39.21772,58.13035z"></path><path d="M57.41431,29.15022c-0.49525,0-0.96692-0.21422-1.29119-0.58959c-0.34-0.39011-0.48346-0.91386-0.39306-1.42287   c-0.07664-0.49525-1.40125-3.12775-2.4291-4.24797c-0.63872-0.6967-0.59155-1.77957,0.10613-2.41829   c0.69571-0.63675,1.77858-0.59254,2.4173,0.10514c0.78022,0.85195,2.26401,3.09827,2.94793,5.03212   c5.04293-0.67704,9.09732-4.01312,12.36362-10.15562c0.22994-0.43335,0.63676-0.74681,1.11432-0.8608   c10.6322-2.53424,18.83531-7.01804,24.38136-13.3276c0.43237-0.49132,1.11235-0.69473,1.73928-0.51982   c0.63085,0.17393,1.10842,0.69276,1.2283,1.3364c1.68622,9.04917-1.96922,15.66432-10.56931,19.12814   c-0.86669,0.3508-1.87292-0.06977-2.22667-0.94727c-0.35179-0.87652,0.07272-1.8739,0.94923-2.22667   c5.91944-2.38488,8.83003-6.26828,8.82806-11.81727c-5.70129,5.30235-13.34823,9.17003-22.7934,11.52248   c-4.09566,7.32856-9.57881,11.16578-16.31189,11.40751C57.45558,29.14924,57.43396,29.15022,57.41431,29.15022z"></path><path d="M83.19888,30.80401c-0.88634,0-1.63708-0.6849-1.7039-1.58304c-0.07076-0.94236,0.63479-1.76385,1.57813-1.83558   c7.41109-0.55814,11.31809-5.31807,11.93912-14.55197c0.06486-0.94334,0.90797-1.63315,1.82379-1.59286   c0.94137,0.06387,1.65477,0.87947,1.59188,1.8228c-0.92958,13.78846-8.72392,17.25522-15.0993,17.73573   C83.28535,30.80205,83.24212,30.80401,83.19888,30.80401z"></path><path d="M79.52576,38.09818c-1.08484,0-2.14609-0.1189-3.14445-0.30757c-0.92958-0.17491-1.54079-1.06911-1.36588-1.9987   c0.17491-0.93056,1.08484-1.54177,1.9987-1.36391c6.12187,1.15657,10.00135-1.56535,12.2575-8.5431   c0.29282-0.89912,1.25581-1.39536,2.15592-1.10154c0.9001,0.29086,1.39339,1.25582,1.10252,2.15494   C89.67057,35.77226,84.34268,38.09818,79.52576,38.09818z"></path><path d="M75.64039,42.9033c-2.10089,0-4.5575-0.60531-7.42486-2.07632c-0.84114-0.43138-1.17328-1.46316-0.74287-2.3043   c0.42843-0.83918,1.45824-1.17623,2.30331-0.7419c5.84476,2.9951,9.65939,2.09401,12.37541-2.94007   c0.44612-0.83131,1.48576-1.14478,2.31708-0.69374c0.83328,0.44907,1.14379,1.48674,0.69374,2.31904   C83.41113,39.71364,80.46124,42.9033,75.64039,42.9033z"></path><path d="M58.32817,42.04251c-0.67016,0-1.30692-0.39699-1.58009-1.05438c-0.36358-0.87259,0.04913-1.8739,0.92172-2.23748   c6.76059-2.81232,11.36919-6.11892,13.70002-9.82742c0.50311-0.79791,1.5565-1.04259,2.35835-0.53849   c0.80183,0.50311,1.0416,1.55946,0.53849,2.36031c-2.71407,4.3197-7.85526,8.07635-15.28011,11.16578   C58.77036,42.00025,58.54828,42.04251,58.32817,42.04251z"></path><path d="M68.99575,41.01564c-0.17294,0-0.34785-0.02653-0.5208-0.08156c-1.66656-0.53259-3.16805-1.38848-4.59092-2.61678   c-0.71536-0.6171-0.79398-1.69801-0.17688-2.41337c0.6171-0.71733,1.69604-0.79398,2.41338-0.17688   c1.06715,0.92074,2.17754,1.55749,3.39601,1.94662c0.90011,0.28791,1.39732,1.25091,1.10843,2.15101   C70.39307,40.55184,69.72094,41.01564,68.99575,41.01564z"></path><path d="M57.81523,61.09597c-0.72322,0-1.39536-0.46184-1.62922-1.18703c-1.74517-5.4183-1.58206-12.15236,0.48739-20.0135   c0.23976-0.91681,1.17327-1.45824,2.09106-1.21946c0.91386,0.24075,1.46021,1.17623,1.21848,2.09008   c-1.90043,7.21948-2.08124,13.30795-0.53849,18.09342c0.2889,0.9001-0.20439,1.86309-1.10449,2.15395   C58.16505,61.06845,57.98817,61.09597,57.81523,61.09597z"></path><path d="M49.99732,99.31687c-0.29283,0-0.58762-0.07468-0.85883-0.2319c-0.81756-0.47559-1.09467-1.52309-0.61907-2.34065   c3.83624-6.58961,5.21784-16.98402,4.10942-30.89236c-0.07468-0.94137,0.62693-1.76679,1.57026-1.84147   c0.91582-0.08844,1.7668,0.62692,1.84148,1.57026c1.1831,14.8222-0.31052,25.58018-4.56143,32.88515   C51.16077,99.01225,50.5869,99.31687,49.99732,99.31687z"></path><path d="M61.1798,88.42133c-0.48542,0-0.95709-0.20832-1.2853-0.58173c-0.33606-0.38127-0.71143-0.79005-1.10842-1.22044   c-2.18343-2.37407-4.90339-5.32986-5.77008-8.79466c-0.22994-0.91582,0.32821-1.84541,1.24599-2.07534   c0.91779-0.22994,1.84737,0.3282,2.07534,1.24599c0.52473,2.10089,2.16968,4.19196,3.79301,6.01378   c0.67999-6.04326-0.63479-13.77666-3.92861-23.05282c-0.31641-0.89027,0.14936-1.86899,1.0416-2.1854   c0.88634-0.31641,1.86702,0.14936,2.1854,1.0416c4.21161,11.86444,5.32593,21.1347,3.40388,28.33748   c-0.16116,0.61121-0.64855,1.08288-1.26171,1.22634C61.44118,88.4056,61.30951,88.42133,61.1798,88.42133z"></path><path d="M60.78085,58.13035c-0.47363,0-0.93155-0.19653-1.25778-0.55225c-1.80413-1.95546-4.23127-3.17787-7.21457-3.63185   c-0.93547-0.14346-1.57616-1.01605-1.43466-1.94956c0.14347-0.93548,1.03963-1.57616,1.94957-1.43466   c2.87128,0.43826,5.42616,1.50541,7.50543,3.12481c1.04946-1.57026,2.31707-2.62759,3.8382-3.20538   c0.87652-0.33606,1.87096,0.10809,2.20702,0.99247c0.33607,0.88242-0.10809,1.87096-0.99247,2.20702   c-1.21062,0.45988-2.20505,1.58599-3.04029,3.43925c-0.23584,0.52473-0.7193,0.89617-1.2853,0.98854   C60.96362,58.12249,60.87125,58.13035,60.78085,58.13035z"></path><path d="M45.94883,24.01591c-0.48739,0-0.97282-0.20832-1.31085-0.61219c-3.82248-4.56143-3.76942-8.48808-2.48019-11.47629   c-1.6646,0.1641-3.96988,0.63381-7.13989,1.67639c-0.65837,0.22011-1.39339,0.01277-1.84344-0.52277   s-0.53063-1.29021-0.20242-1.90731c2.02425-3.7989,5.13726-6.22996,9.28402-7.26075   c-0.49525-0.43236-0.70161-1.11432-0.5208-1.75304c0.18867-0.67213,0.76646-1.16148,1.46021-1.23715   c9.58078-1.04553,12.80188,2.59221,13.7295,6.19164c2.02031,1.0986,3.32526,2.46742,3.88341,4.07797   c0.55028,1.585,0.36357,3.31642-0.55028,5.14611c-0.22797,0.45595-0.64658,0.78611-1.1438,0.90108   c-0.49525,0.11497-1.01802,0.00295-1.42287-0.30462c-3.15822-2.40453-4.59484-1.77072-5.06062-1.56535   c-0.86473,0.38127-1.87488-0.00884-2.25811-0.87455c-0.38127-0.86473,0.00983-1.87488,0.87455-2.25615   c1.96136-0.86866,4.08387-0.6682,6.43828,0.61022c-0.01572-0.1867-0.05109-0.36456-0.11005-0.53456   c-0.39109-1.12611-1.78448-1.97806-2.88308-2.49493c-0.51097-0.23977-0.87062-0.71635-0.96103-1.27351   c-0.1926-1.17819-0.64658-3.96005-5.97054-4.34722c0.26728,0.4471,0.31837,1.00033,0.12381,1.5005   c-0.24763,0.63282-0.84507,1.05929-1.5231,1.0868c-2.83591,0.11693-5.16085,0.81363-7.01411,2.1117   c2.43892-0.48051,4.47889-0.58762,6.08453-0.31838c0.59745,0.10023,1.09859,0.50803,1.31674,1.07305   c0.21618,0.56404,0.11988,1.20276-0.25549,1.67737c-2.48805,3.14348-2.24436,6.28106,0.76646,9.87459   c0.60727,0.72519,0.51294,1.80413-0.21225,2.41141C46.72708,23.88423,46.33795,24.01591,45.94883,24.01591z"></path><path d="M54.56071,23.44499c-0.30658,0-0.61906-0.08254-0.9001-0.25647c-0.80184-0.4982-1.05143-1.55258-0.55225-2.35638   c1.31871-2.13136,1.89061-4.26369,1.74321-6.51788c-0.06092-0.94334,0.65247-1.75697,1.59581-1.81887   c0.97871-0.06485,1.75893,0.65248,1.81985,1.5968c0.1926,2.94793-0.56404,5.82216-2.25025,8.54212   C55.69469,23.15708,55.13458,23.44499,54.56071,23.44499z"></path>

  </svg>
);

export default SVG;
