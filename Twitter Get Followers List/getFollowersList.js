/**
 * API structure
 * - Method: GET
 * - URL: https://api.twitter.com/2/users/:id/followers
 * - AuthTokenRequired?: YES
 * - Example:
 *    https://api.twitter.com/2/users/1241221022222708736/followers?max_results=100
 *    - my username is: geekyorion_ but the id is: 1241221022222708736
 *      - TO GET THE ID YOU CAN USE: "https://api.twitter.com/2/users/by/username/{username}"
 *    - max_result: between 1 and 100
 */

// copy the response from the API
const response = {
  "data": [
    {
      "id": "1328202221205540864",
      "name": "Man in the Middle",
      "username": "kelvin_to0"
    },
    {
      "id": "1533461300902240263",
      "name": "Kashish Fatima",
      "username": "kashish__fatima"
    },
    {
      "id": "1517598201016205316",
      "name": "Micah Raybuck",
      "username": "realraybuck"
    },
    {
      "id": "1542459484395769856",
      "name": "Aleksandar",
      "username": "aleksandar_code"
    },
    {
      "id": "1216039939046920192",
      "name": "Akshit lakhera",
      "username": "AkshitLakhera"
    },
    {
      "id": "1396454484",
      "name": "REFA",
      "username": "RefaRayyan"
    },
    {
      "id": "218379543",
      "name": "Ashot Nalbandyan",
      "username": "Ashot_"
    },
    {
      "id": "31119336",
      "name": "Per Djurner",
      "username": "perdjurner"
    },
    {
      "id": "866467558114852864",
      "name": "Manticore Search",
      "username": "manticoresearch"
    },
    {
      "id": "1535843965853134856",
      "name": "Thanh Phung",
      "username": "talphein"
    },
    {
      "id": "1479843030547021828",
      "name": "Aws",
      "username": "AwsYaseen22"
    },
    {
      "id": "1925927425",
      "name": "Valentin Podkamennyi 🇺🇦",
      "username": "vpodk"
    },
    {
      "id": "1528857556122161152",
      "name": "Tatsiana Maksimuk",
      "username": "Tatsian_ka"
    },
    {
      "id": "1531497300094164992",
      "name": "Daniel Vi 👾",
      "username": "jdanielvi"
    },
    {
      "id": "1452426766799101952",
      "name": "Cosmos Asset Management",
      "username": "CosmosAssetMgmt"
    },
    {
      "id": "985941189064085504",
      "name": "☯Twitch☯",
      "username": "twitch_wears"
    },
    {
      "id": "1503538180783435776",
      "name": "Gregory Mitchell 💡",
      "username": "AlertMitchell"
    },
    {
      "id": "1518249938924507136",
      "name": "sakshi Agarwal",
      "username": "sakshiA07747390"
    },
    {
      "id": "1314745682952032256",
      "name": "Pradhuman_Singh",
      "username": "Pradhum66565787"
    },
    {
      "id": "4211514199",
      "name": "Anshu Kumar",
      "username": "anshu2kumar"
    },
    {
      "id": "749564774837547008",
      "name": "Gabriel Bissonnette",
      "username": "gabbissonnette"
    },
    {
      "id": "1364694702239272963",
      "name": "Code With Sahand",
      "username": "CodeWithSahand"
    },
    {
      "id": "1285150671805640706",
      "name": "Sphoorthy Konda",
      "username": "sphoorthyK11"
    },
    {
      "id": "1465913956929732616",
      "name": "Bao Nguyen Chi",
      "username": "lanchinhaicon"
    },
    {
      "id": "614481086",
      "name": "John Giordani",
      "username": "johngiordani"
    },
    {
      "id": "1445784371898638338",
      "name": "Sourav Das",
      "username": "das_dev_"
    },
    {
      "id": "268713094",
      "name": "Chetan Sharma",
      "username": "chetan_99sharma"
    },
    {
      "id": "19215767",
      "name": "Patrick E.",
      "username": "figment4"
    },
    {
      "id": "1274324679252045824",
      "name": "Vinay Sabhnani",
      "username": "sabhnani_vinay"
    },
    {
      "id": "1339095850786689024",
      "name": "Assured Elect",
      "username": "AssuredElect"
    },
    {
      "id": "1178302696476086272",
      "name": "Frank's Laboratory",
      "username": "code_laboratory"
    },
    {
      "id": "1478746098",
      "name": "Vasundhara Sharma",
      "username": "livedaydreams"
    }
  ],
  "meta": {
    "result_count": 32
  }
};

// sort the data as per the username
const data = response.data.sort((row1, row2) => row1.username.toLowerCase().localeCompare(row2.username.toLowerCase()));

// put username and name together
const result = data.map(row => `${row.username} (${row.name})`);

// if you run the whole file in the browser console then it will copy the result to the clipboard
copy(result);
