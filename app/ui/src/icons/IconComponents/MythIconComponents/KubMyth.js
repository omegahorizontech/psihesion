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

    <path d="M10.0251,50.61833c-0.03724,0-0.07448,0-0.11367-0.00196c-1.30332-0.03332-2.42438-0.62716-3.24165-1.71685   c-0.44489-0.59188-0.44881-1.40524-0.0098-2.00104c2.28718-3.10838,3.47291-5.25249,4.06284-6.71946   c-2.07748,0.1176-4.28626,0.58209-6.59305,1.39054c-0.56249,0.19991-1.19357,0.07938-1.65022-0.31162   c-1.98536-1.71098-2.78499-3.44254-2.37538-5.14763c0.49193-2.04514,2.62624-3.57875,6.67144-4.76937   c-0.04704-0.72222,0.07252-1.44051,0.35866-2.13235c1.02894-2.48807,4.12359-4.59004,9.7269-6.60088   c3.4004-3.56601,5.64054-7.15847,6.6636-10.68038c0.21559-0.74671,0.92506-1.23473,1.69138-1.20925   c0.77611,0.03822,1.42484,0.60266,1.56987,1.36702c0.72516,3.86685,0.52525,7.37112-0.59188,10.47851   c2.54981-2.00986,4.67236-4.89677,6.34022-8.63426c0.32338-0.72026,1.10929-1.12301,1.87561-0.95838   c0.77415,0.16169,1.3288,0.84079,1.33468,1.63062c0.04704,6.49211-2.11863,11.78967-6.44801,15.80939   c1.61886-0.19109,3.0535-0.51937,4.2941-0.98484c0.68988-0.26066,1.47187-0.03724,1.92265,0.55073   c0.44881,0.586,0.46253,1.3974,0.03136,1.9981c-1.93832,2.7017-5.02906,4.55673-9.20361,5.52589   c-0.30182,1.4072-1.368,3.04174-4.38818,4.05304C16.74554,47.73044,12.94337,50.61833,10.0251,50.61833z M11.75764,36.79332   c0.42137,0,0.83687,0.01274,1.24844,0.03822c0.45665,0.02744,0.88391,0.24107,1.17985,0.5909   c0.29398,0.34886,0.43509,0.80453,0.38806,1.25922c-0.22539,2.12745-1.53263,4.91735-3.99032,8.49511   c1.23277-0.34396,3.91193-1.92265,9.1115-8.15213c0.21167-0.25576,0.49781-0.44293,0.81727-0.53603   c2.73012-0.7967,2.60272-1.82563,2.55961-2.16371c-0.10975-0.88489,0.49193-1.70216,1.36996-1.85993   c0.78787-0.14111,1.52675-0.31064,2.21663-0.50957c-0.88587,0.02156-1.81681,0.0098-2.78891-0.03038   c-0.74672-0.03136-1.38172-0.55171-1.56007-1.27784c-0.17639-0.72516,0.14699-1.48167,0.79375-1.85405   c3.58659-2.06082,6.11483-4.66158,7.61806-7.85815c-2.39302,2.5988-5.20937,4.42346-8.43337,5.45141   c-0.71144,0.22539-1.49735-0.04606-1.91088-0.67616c-0.41354-0.62814-0.35866-1.45521,0.13327-2.02358   c1.55223-1.78741,2.56157-3.78747,3.03586-6.03546c-1.22493,1.85797-2.736,3.70908-4.54693,5.57489   c-0.18031,0.18619-0.40178,0.32828-0.64676,0.41451c-6.22067,2.18331-7.75526,3.9766-8.11587,4.85071   c-0.17835,0.43019-0.15287,0.82315,0.08231,1.3141c0.22147,0.45567,0.22343,0.9868,0.00588,1.44443   c-0.21559,0.45861-0.62716,0.79375-1.11909,0.91429c-5.44063,1.32782-5.82281,2.67328-5.83653,2.73011   c-0.0392,0.16365,0.07644,0.56543,0.635,1.17985C6.7031,37.22253,9.30191,36.79332,11.75764,36.79332z"></path><path d="M39.92703,60.66665c-0.64872,0-1.26608-0.38022-1.54047-1.01326c-0.36846-0.85059,0.02352-1.83837,0.87411-2.20683   c2.26563-0.97798,4.34114-2.53609,6.17363-4.62924c0.14307-0.16463,0.3175-0.2979,0.51153-0.3959   c7.40052-3.70026,15.39684-3.52779,23.78318,0.50761c3.37492-2.39498,6.82431-3.26516,10.30898-2.6086   c-2.2813-10.21589-8.24915-17.17445-18.60517-21.77234c-9.6975-4.30782-17.05294-5.63858-23.28537-4.12849   c8.10999,6.0286,11.969,13.25763,11.47707,21.52539c-0.05096,0.84275-0.71928,1.51695-1.56203,1.57477   c-6.90467,0.47037-11.55155,3.27692-14.20131,8.57645c-0.41158,0.82315-1.4072,1.16221-2.23623,0.75847   c-0.82707-0.40374-1.17593-1.3974-0.78199-2.22839c4.38622-9.24085,3.92761-15.45171-1.40132-18.98832   c-0.77415-0.51251-0.98386-1.55419-0.47233-2.32638s1.55615-0.98288,2.32638-0.47037   c4.94478,3.27987,6.77728,8.25013,5.49159,14.83043c2.61644-1.78938,5.79538-2.91239,9.52111-3.35826   c-0.08231-7.35544-4.28234-13.58689-12.80195-19.01184c-0.52721-0.33612-0.82315-0.93682-0.77023-1.55909   s0.44685-1.16417,1.02306-1.40524c7.82581-3.27398,16.78051-2.30286,29.03566,3.14365   c12.3747,5.49355,19.0677,14.07098,21.05894,26.99346c0.09408,0.60168-0.14699,1.20533-0.62716,1.57967   c-0.48213,0.37238-1.12498,0.45861-1.68746,0.21951c-3.55718-1.51107-7.02422-0.87999-10.59316,1.93441   c-0.51545,0.40765-1.22297,0.47233-1.80505,0.17639c-7.7239-3.97072-14.73244-4.33134-21.4078-1.10146   c-2.10883,2.34402-4.50969,4.10791-7.13985,5.24465C40.37585,60.62157,40.15046,60.66665,39.92703,60.66665z"></path><path d="M28.61851,89.2829c-1.55419,0-3.21225-0.09996-4.98006-0.2979c-0.48605-0.05488-0.92311-0.31947-1.19945-0.7232   c-1.35232-1.98536-1.61494-3.69633-0.78199-5.08394c1.14065-1.90892,4.07264-2.589,9.42704-2.17155   c0.53309-2.46749,1.53067-4.52145,2.98098-6.14031c-2.3303-0.97014-3.83353-2.3205-4.56065-4.09028   c-0.97602-2.37733-0.37826-5.3054,1.77957-8.7058c0.49585-0.78199,1.52871-1.01326,2.31658-0.51741   c0.78199,0.49585,1.01326,1.53263,0.51741,2.31658c-1.53851,2.42634-2.04612,4.31958-1.50911,5.63074   c0.68988,1.6757,3.23381,2.5792,5.24857,3.03978c0.66244,0.15287,1.16809,0.68987,1.2798,1.36211   c0.11171,0.67028-0.19403,1.34252-0.77219,1.70118c-2.39106,1.48167-3.77277,3.91389-4.22747,7.43384   c-0.11563,0.90742-0.96034,1.56203-1.84425,1.45423c-6.77335-0.73104-7.72978,0.3763-7.75917,0.41354l0,0   c0.00588,0-0.01568,0.24694,0.29006,0.82903c4.13927,0.39786,7.63374,0.1666,10.41874-0.67616   c0.635-1.10538,0.98778-2.30482,1.07401-3.65126c0.03136-0.48017,0.26654-0.9231,0.6448-1.21709   c3.98052-3.09466,5.92865-5.42888,5.78753-6.93995c-0.16267-2.24014-1.70901-4.0256-4.59789-5.33871   c-0.84471-0.38414-1.21709-1.37976-0.83491-2.22251c0.38414-0.84275,1.37388-1.21905,2.22251-0.83491   c5.09961,2.31854,6.37942,5.69542,6.55581,8.11979c0.25479,2.73796-1.6953,5.58567-6.50093,9.41528   c-0.22931,1.82073-0.85059,3.50231-1.85601,5.00751c-0.20383,0.30574-0.50173,0.537-0.84863,0.65656   C34.50208,88.87328,31.77,89.2829,28.61851,89.2829z"></path><path d="M54.41645,88.838c-1.98732,0-4.11184-0.20187-6.36766-0.60756c-0.58405-0.10583-1.0701-0.51153-1.27588-1.06814   c-0.68596-1.85405-0.19991-3.18677,0.3273-3.97856c0.83099-1.24452,2.3891-2.11863,4.78799-2.65956   c-2.09315-1.66786-4.25294-4.12947-6.09916-7.53967c-0.92311-1.68942-1.02894-3.46507-0.30182-5.13293   c1.79133-4.11771,8.22759-6.52445,13.31152-7.81797c0.89371-0.22931,1.81093,0.31358,2.04024,1.21317   c0.22735,0.89762-0.31554,1.81093-1.21317,2.04024c-5.9796,1.52087-10.11496,3.72966-11.06158,5.90317   c-0.30966,0.71143-0.25478,1.4072,0.17247,2.18919c2.97118,5.48767,6.74592,8.03552,9.07622,8.55293   c0.82315,0.18227,1.38172,0.94858,1.30724,1.78937c-0.07644,0.83883-0.76239,1.49343-1.60514,1.52675   c-6.12072,0.24107-7.38092,1.4366-7.62199,1.79722c-0.01372,0.01959-0.0294,0.04507-0.04704,0.07839   c5.07413,0.75652,9.26044,0.32534,12.48445-1.27785c0.55465-2.52236-0.58992-3.70222-1.53655-4.38033   c-1.82661-1.41308-3.29456-2.43417-4.53321-3.15933c-0.65068-0.38022-0.96818-1.14849-0.77612-1.87757   c0.19403-0.72907,0.85059-1.2406,1.60318-1.24844c2.0912-0.02351,3.51015-0.47625,4.21963-1.34447   c0.65264-0.79768,0.80943-2.10492,0.46645-3.88449c-0.17443-0.90939,0.42138-1.78938,1.33076-1.96576   c0.91135-0.16267,1.78938,0.41941,1.96576,1.33076c0.53897,2.80264,0.14896,5.0369-1.16221,6.64204   c-0.62912,0.77023-1.45031,1.368-2.45769,1.79525c0.43117,0.31947,0.87999,0.65852,1.3484,1.0211   c2.75363,1.9736,3.68262,5.07806,2.56744,8.70383c-0.12543,0.40961-0.40373,0.75652-0.77808,0.96622   C61.76993,88.04033,58.36365,88.838,54.41645,88.838z"></path><path d="M33.1576,81.48844c-0.17835,0-0.35866-0.0294-0.53701-0.09016c-8.28834-2.79675-13.59962-7.19276-15.36156-12.71572   C15.7166,63.8495,17.0258,58.36575,21.04748,52.8232c3.06722-4.24511,5.82477-8.44024,5.20545-10.34328   c-0.25871-0.79571-1.30724-1.50029-3.12013-2.09512c-0.87999-0.2881-1.36016-1.23668-1.07206-2.11765   c0.29202-0.87901,1.23473-1.35722,2.11863-1.07108c1.86777,0.61246,4.44501,1.71882,5.2662,4.24707   c1.0407,3.20049-1.09753,7.00756-5.67974,13.34974c-3.41803,4.71156-4.53125,9.04094-3.31024,12.86859   c1.42484,4.46461,6.00312,8.11588,13.23901,10.55788c0.87803,0.29594,1.35036,1.24845,1.05246,2.12648   C34.51188,81.04551,33.85728,81.48844,33.1576,81.48844z"></path><path d="M43.33135,82.85448c-1.47383,0-3.06329-0.09995-4.79191-0.2979c-0.91919-0.10583-1.58162-0.93879-1.47579-1.85993   c0.10583-0.91918,0.93486-1.58359,1.85993-1.47579c5.88553,0.6742,9.72298,0.16855,12.82155-1.70314   c0.79572-0.48409,1.82465-0.22343,2.30482,0.56837c0.47821,0.79375,0.22343,1.82661-0.56837,2.30482   C50.72403,82.05485,47.49022,82.85448,43.33135,82.85448z"></path><path d="M73.67622,82.40958c-3.32201,0-6.91839-0.41158-10.77936-1.24648c-0.90546-0.19599-1.48167-1.0897-1.28568-1.99516   s1.09166-1.47971,1.99516-1.28568c18.01524,3.89233,28.88867-1.54047,32.31455-16.15139   c2.0422-8.61565-0.3371-16.56591-6.88115-22.99432c-0.66048-0.6497-0.67028-1.71294-0.02156-2.37342   c0.65264-0.6595,1.71294-0.6693,2.37342-0.02156c7.42796,7.29762,10.1228,16.34248,7.79641,26.15953   C96.12471,75.56175,87.20724,82.40958,73.67622,82.40958z"></path><path d="M80.69847,72.96099c-0.10583,0-0.21362-0.00196-0.31946-0.00784c-2.70856-0.14111-5.10158-2.05788-7.31429-5.85613   c-6.56757-8.38046-13.16845-11.10078-20.17307-8.31382c-3.53955,1.20141-7.86893,1.82465-12.94503,1.88149   c-0.00784,0-0.01372,0-0.0196,0c-0.91918,0-1.66786-0.73888-1.67766-1.65806c-0.01176-0.92702,0.733-1.68746,1.65806-1.69726   c4.72332-0.05292,8.70188-0.61736,11.82593-1.6757c8.40594-3.3416,16.52181-0.15875,24.04776,9.48779   c0.049,0.06271,0.09212,0.1274,0.13131,0.19403c1.09557,1.90108,2.79088,4.18827,4.64297,4.28626   c1.53066,0.06664,3.37099-1.31704,5.3446-4.0354c4.85267-6.59108,4.49989-14.63248-1.07206-24.59064   c-0.45273-0.80845-0.16463-1.83151,0.64481-2.28326c0.80943-0.45763,1.83053-0.16365,2.28326,0.6448   c6.19714,11.07138,6.48329,20.56309,0.85451,28.21055C85.97056,71.18338,83.37763,72.96099,80.69847,72.96099z"></path><path d="M86.29394,41.83511c-0.09995,0-0.19991-0.00882-0.30182-0.02744c-4.11967-0.74868-5.91297-2.72816-6.693-4.25589   c-1.20729-2.37048-0.97211-5.33774,0.69968-8.81751c1.46404-2.98,2.18331-5.15155,1.54439-7.47597   c-0.16267-0.59482,0.01372-1.23179,0.46057-1.65806c0.44685-0.42726,1.09165-0.57229,1.67766-0.3812   c6.21871,2.02456,9.17617,5.99038,8.11784,10.88127c-0.67616,3.21225-1.01718,5.10745-0.14111,6.58129   c0.4743,0.79767,0.21167,1.82661-0.58601,2.29992c-0.79375,0.47331-1.82465,0.21363-2.29894-0.58503   c-1.5875-2.67132-0.97014-5.60232-0.25674-8.99586c0.62521-2.88887-1.14849-4.75859-3.38471-5.95216   c-0.09995,2.16567-0.90742,4.29704-2.11275,6.75278c-0.81532,1.69628-1.61102,4.09713-0.72908,5.82575   c0.78788,1.54536,2.7752,2.20095,4.30195,2.47827c0.91135,0.16561,1.51694,1.03971,1.35036,1.95106   C87.7952,41.26675,87.08965,41.83511,86.29394,41.83511z"></path><path d="M69.90932,56.56853c-0.63304,0.00196-1.23865-0.35866-1.52283-0.97014   c-4.44697-9.55149-16.15531-19.73014-34.8036-30.25079c-0.73495-0.4155-1.04658-1.31116-0.72908-2.09414   c0.31554-0.78101,1.16025-1.20533,1.9834-0.99072c24.91011,6.57443,41.33588,16.54533,48.8148,29.63342   c0.46057,0.80551,0.18031,1.83053-0.62325,2.28914c-0.80355,0.46253-1.82857,0.18031-2.28914-0.62324   c-5.68954-9.95522-17.10782-18.04268-34.01965-24.1242c12.69416,8.45004,20.98643,16.74622,24.70824,24.74548   c0.39198,0.83883,0.02744,1.83837-0.81335,2.22839C70.38557,56.51954,70.14646,56.56853,69.90932,56.56853z"></path><path d="M13.58425,32.0504c-0.75064,0-1.43463-0.50859-1.6267-1.27098c-0.22539-0.89861,0.32142-1.80995,1.22101-2.03534   l0.684-0.17149c0.89763-0.22539,1.81093,0.32044,2.03632,1.22003c0.22539,0.89861-0.32142,1.80995-1.22101,2.03534l-0.684,0.17149   C13.85668,32.03374,13.71948,32.0504,13.58425,32.0504z"></path>

  </svg>
);

export default SVG;
