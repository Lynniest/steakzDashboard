import { MdSupervisedUserCircle,MdAttachMoney, MdTrendingUp} from "react-icons/md";


export const fetchMockHRData = async() =>{
    const data = {
        allChartData: {
                            barChartData: {
                              chartProps: {
                                  chartTitle: "Reasons for Candidate Decline",
                                  keyName: "name",
                                  chartItems: [
                                          {
                                              itemName: "Declined_Candidates",
                                              fillColor: "pink",
                                              activeFillColor: "black",
                                              activeStokeColor: "hotpink",
                                          },
                                      ]
                              },
                              chartData: [
                            {
                              name: 'Technical',
                              Declined_Candidates: 55
                            },
                            {
                              name: 'Salary',
                              Declined_Candidates: 31
                            },
                            {
                              name: 'Exp',
                              Declined_Candidates: 7
                            },
                            {
                              name: 'AnotherOffer',
                              Declined_Candidates: 20
                            },
                            {
                              name: 'Others',
                              Declined_Candidates: 45
                            },
                        ]
                        },
                            pieChartData: {
                              chartProps: {
                                  chartTitle: "Application Sources",
                              },
                              chartData:[
                            { name: 'Linkedin', value: 78, color: "#0088FE" },
                            { name: 'Company Website', value: 50, color: '#FF8042'},
                            { name: 'Via Agencies', value: 35, color: "brown"  },
                            { name: 'Others', value: 56, color: '#00C49F' },

                              ],
                        }
,
        radChartData: {
    chartProps: {
        chartTitle: "Application sources",
        keyName: "dishName",
        prAxis: "yes",
        lines:[
                {
                    lineName: "this week",
                    datakey: "quantity",
                    strokeColor: "#8884d8",
                    fillColor: "#8884d8",
                    fillOpacity: 0.6,
                }
            ]
    },
    chartData: [
        {
            dishName: "Beef Wellington",
            quantity: 2570,
            weeklyLimit: 5000,
        },
        {
            dishName: "JapaneseA5 12oz",
            quantity: 1780,
            weeklyLimit: 5000,
        },
        {
            dishName: "Signature Steak",
            quantity: 1930,
            weeklyLimit: 5000,
        },
        {
            dishName: "Potato Puree",
            quantity: 1768,
            weeklyLimit: 5000,
        },
        {
            dishName: "Beef Tartar",
            quantity: 1590,
            weeklyLimit: 5000,
        },
        {
            dishName: "Mac and cheese",
            quantity: 1205,
            weeklyLimit: 5000,
        },      
    ]  
}
,
        dashLineChartData: {
  chartProps: {
    chartTitle: "Recruitment Stats",
  },
  chartItems: [
    {
      lineTitle: "candidate",
      lineColor: "yellow",
      strokeDasharray: "",
    }, 
  ],
  chartData: [
  {
    name: "CVs Submitted",
    candidate: 650
  },
  {
    name: "Candidate Interviewed",
    candidate: 480
  },
  {
    name: "Offers",
    candidate: 50
  },
  {
    name: "Candidate Placed",
    candidate: 125
  },
  {
    name: "Offers Rejected",
    candidate: 17
  },
],
}
    },
        topCardData:{
                                        timeUnit: "year",
                                        number: "2089",
                                        title: "Total Employee",
                                        progress: 5.7,
                                        icon: <MdSupervisedUserCircle size={40}/>,
                                        remark: ""
                                    },
        botCardData: {
                                        timeUnit: "any",
                                        number: "14",
                                        title: "Open Positions",
                                        progress: 0,
                                        icon: <MdTrendingUp size={40}/>,
                                        remark: "hire before: 12d"
                                    },
        topCardDataA: {
                                        timeUnit: "Total Roles",
                                        number: "79",
                                        title: "Total Roles",
                                        progress: 0,
                                        icon: <MdSupervisedUserCircle size={40}/>,
                                        remark: "7 New Roles"
                                    },
        botCardDataA: {
                                        timeUnit: "any",
                                        number: "157",
                                        title: "Applications to review",
                                        progress: 0,
                                        icon: <MdTrendingUp size={40}/>,
                                        remark: "hire before: 12d"
                                    }
    }
    return data;
}

export const fetchMockSalesData = async() => {
    const data = {
        allChartData: {
                    barChartData: {
    chartProps: {
        chartTitle: "Product Revenue",
        keyName: "name",
        chartItems: [
                {
                    itemName: "MainDish",
                    fillColor: "#8884d8",
                    activeFillColor: "gold",
                    activeStokeColor: "blue",
                },
                {
                    itemName: "Beverages",
                    fillColor: "aqua",
                    activeFillColor: "gold",
                    activeStokeColor: "lightblue",
                },
                {
                    itemName: "Desserts",
                    fillColor: "aliceblue",
                    activeFillColor: "gold",
                    activeStokeColor: "white",
                },
                {
                    itemName: "Appetizers",
                    fillColor: "#82ca9d",
                    activeFillColor: "gold",
                    activeStokeColor: "blue",
                }
            ]
    },
    chartData: [
  {
    name: 'Sun',
    MainDish: 4805,
    Beverages: 3507,
    Desserts: 3000,
    Appetizers: 2506
  },
  {
    name: 'Mon',
    MainDish: 4005,
    Beverages: 2507,
    Desserts: 3500,
    Appetizers: 3506
  },
  {
    name: 'Tue',
    MainDish: 5005,
    Beverages: 2807,
    Desserts: 2150,
    Appetizers: 3000
  },
  {
    name: 'Wed',
    MainDish: 4805,
    Beverages: 3507,
    Desserts: 3000,
    Appetizers: 2506
  },
  {
    name: 'Thu',
    MainDish: 4805,
    Beverages: 3507,
    Desserts: 3000,
    Appetizers: 2506
  },
  {
    name: 'Fri',
    MainDish: 6005,
    Beverages: 2007,
    Desserts: 3700,
    Appetizers: 1506
  },
  {
    name: 'Sat',
    MainDish: 5705,
    Beverages: 3007,
    Desserts: 3800,
    Appetizers: 2806
  },
]
},
        pieChartData: {
    chartProps: {
        chartTitle: "Payment Method Used",
    },
    chartData:[
  { name: 'Cash', value: 500, color: "#0088FE" },
  { name: 'Digital Wallet', value: 320, color: '#FF8042'},
  { name: 'Visa', value: 170, color: "brown"  },
  { name: 'Master', value: 120, color: '#00C49F' },

    ],
}
,
        radChartData: {
    chartProps: {
        chartTitle: "Top 6 Dishes Sale Chart",
        keyName: "dishName",
        prAxis: "no",
        lines:[
                {
                    lineName: "this week",
                    datakey: "quantity",
                    strokeColor: "#8884d8",
                    fillColor: "#8884d8",
                    fillOpacity: 0.6,
                }
            ]
    },
    chartData: [
        {
            dishName: "Beef Wellington",
            quantity: 2570,
            weeklyLimit: 5000,
        },
        {
            dishName: "JapaneseA5 12oz",
            quantity: 1780,
            weeklyLimit: 5000,
        },
        {
            dishName: "Signature Steak",
            quantity: 1930,
            weeklyLimit: 5000,
        },
        {
            dishName: "Potato Puree",
            quantity: 1768,
            weeklyLimit: 5000,
        },
        {
            dishName: "Beef Tartar",
            quantity: 1590,
            weeklyLimit: 5000,
        },
        {
            dishName: "Mac and cheese",
            quantity: 1205,
            weeklyLimit: 5000,
        },      
    ]  
}
,
        dashLineChartData: {
  chartProps: {
    chartTitle: "Weekly Sales By Branches",
  },
  chartItems: [
    {
      lineTitle: "branch1",
      lineColor: "yellow",
      strokeDasharray: "5 5",
    }, 
    {
      lineTitle: "branch2",
      lineColor: "turquoise",
      strokeDasharray: "3 3 8 2",
    }, 
    {
      lineTitle: "branch3",
      lineColor: "cornflowerblue",
      strokeDasharray: "3 4 5 2",
    }, 
    {
      lineTitle: "branch4",
      lineColor: "lime",
      strokeDasharray: "3 7 2",
    }, 
  ],
  chartData: [
  {
    name: "Sun",
    branch1: 4000,
    branch2: 2400,
    branch3: 2000,
    branch4: 1800,
  },
  {
    name: "Mon",
    branch1: 3000,
    branch2: 1398,
    branch3: 2300,
    branch4: 2800,
  },
  {
    name: "Tue",
    branch1: 2000,
    branch2: 3800,
    branch3: 2500,
    branch4: 1900,
  },
  {
    name: "Wed",
    branch1: 3180,
    branch2: 3908,
    branch3: 2800,
    branch4: 1800,
  },
  {
    name: "Thu",
    branch1: 1890,
    branch2: 4800,
    branch3: 1500,
    branch4: 3100,
  },
  {
    name: "Fri",
    branch1: 3290,
    branch2: 3800,
    branch3: 2800,
    branch4: 2000,
  },
  {
    name: "Sat",
    branch1: 3490,
    branch2: 4300,
    branch3: 2400,
    branch4: 1800,
  },
],
},
        },
        botCardData: {
                                            timeUnit: "week",
                                            number: "65874",
                                            title: "Weekly Sales",
                                            progress: -2,
                                            icon: <MdTrendingUp size={40}/>,
                                            remark: ""
                                        },
        topCardData: {
                                        timeUnit: "year",
                                        number: "USD 18.01M",
                                        title: "Revenue this year",
                                        progress: 7,
                                        icon: <MdAttachMoney size={40}/>,
                                        remark: ""
                                    }
    }
    return data;
}

export const fetchMockUserData = (username) => {
  const exeData = {"_id":{"$oid":"65633a905b108b9b8504e832"},"username":"TestExe","email":"testexecutive@gmail.com","password":"$2b$10$L72kb7bxTDejaNWAzjF5PeAo.gVrc9tzrUp35b/C0QmFC81kk4l5y","img":"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png","role":"CEO","roleCategory":"executive","isActive":true,"phoneNo":"09127486889","address":"Someone in the universe","createdAt":{"$date":{"$numberLong":"1701001872593"}},"updatedAt":{"$date":{"$numberLong":"1701001872593"}},"__v":{"$numberInt":"0"}}
  const opData = {"_id":{"$oid":"6563391a5b108b9b8504e82e"},"username":"TestOp","email":"testoperational@gmail.com","password":"$2b$10$JwsUJ0j8u4EH79dck/uOjOahu68WSu3kI4ENfRYLlstCvMc0jGRGq","img":"https://static.vecteezy.com/system/resources/thumbnails/001/936/523/small/cute-bakery-chef-girl-welcome-smiling-cartoon-art-illustration-vector.jpg","role":"Chef","roleCategory":"operational","isActive":true,"phoneNo":"09125456789","address":"Someone in the universe","createdAt":{"$date":{"$numberLong":"1701001498702"}},"updatedAt":{"$date":{"$numberLong":"1701001498702"}},"__v":{"$numberInt":"0"}}
  const tactData = {"_id":{"$oid":"65633a235b108b9b8504e830"},"username":"TestTact","email":"testtactical@gmail.com","password":"$2b$10$oxlduZ3oUWuxOqnQ7sRLqufiA9Q/wH07/4LQcca4a9M7Qvm1gYxqC","img":"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png","role":"Inventory Control Specialist","roleCategory":"tactical","isActive":true,"phoneNo":"09125456889","address":"Someone in the universe","createdAt":{"$date":{"$numberLong":"1701001763231"}},"updatedAt":{"$date":{"$numberLong":"1701001763231"}},"__v":{"$numberInt":"0"}}
  const admData = {"_id":{"$oid":"656337715b108b9b8504e82c"},"username":"Adminstrator01","email":"firstadm@gmail.com","password":"$2b$10$i7Q9o0AKTZnhK65nArp7S.QWsOEXLPGagE2SpwyAFtRuekGiRklOm","img":"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg","role":"admin","roleCategory":"adminstrator","isActive":true,"phoneNo":"09123456789","address":"Somewhere in the universe","createdAt":{"$date":{"$numberLong":"1701001073611"}},"updatedAt":{"$date":{"$numberLong":"1701001073611"}},"__v":{"$numberInt":"0"}}  
    return tactData;
  }

