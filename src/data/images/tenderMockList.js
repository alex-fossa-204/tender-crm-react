export const tendersMockData = [
    {
        tenderNumber: "tnd-number-stub-1",
        tenderName: "СБЕР Риски (Java)",
        tenderStatus: "АКТИВНЫЙ",
        tenderType: "АУКЦИОН", //"2022-04-15 15:30:32"
        tenderCreationDate: {
            startDate: "2022-04-15 15:30:32",
            endDate: "2022-04-15 15:30:32"
        },
        tenderUpdateDate: {
            startDate: "2022-04-15 15:30:32",
            endDate: "2022-04-15 15:30:32"
        },
        tenderDeadlineDate: {
            startDate: "2022-04-15 15:30:32",
            endDate: "2022-04-15 15:30:32"
        },
        tenderCurrency: "RUB",
        tenderNmcCost: 250000,
        tenderFinalCost: 300000,
        tenderDescription: "Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся.",
        customerInfo: {
            customerName: "СБЕР",
            customerGeneralInfo: {}
        },
        tenderManager: {
            managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
            firstName: "Александр",
            middleName: "Александрович",
            lastName: "Иванов",
            position: "DM",
            grade: "J3",
            role: {
                roleName: "Admin",
                privileges: [
                    "read",
                    "create",
                    "update",
                    "delete"
                ]
            }
        },
        employeeDocumentRequirements: [
            {
                documentType: "Паспорт"
            },
            {
                documentType: "Договор о регистрации ЮР лица"
            }
        ],
        lots: [
            {
                lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
                lotGlobalState: "АКТИВНЫЙ",
                lotName: "Java Developers S2",
                lotCreationTimeStamp: {
                    startDate: "2022-04-15 15:30:32",
                    endDate: "2022-04-15 15:30:32"
                },
                lotUpdateTimeStamp: {
                    startDate: "2022-04-15 15:30:32",
                    endDate: "2022-04-15 15:30:32"
                },
                employees: [
                    {
                        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9010",
                        firstName: "Степан",
                        middleName: "Иванович",
                        lastName: "Иванов",
                        lotState: "ЗАКРЫТ",
                        employeeLocation: {
                            country: "Беларусь",
                            city: "Минск",
                            address: "пр-т Победителей 7",
                            isRemote: false
                        },
                        hiringDate: "2022-05-31",
                        currentProjectInfo: {
                            customer: "Сбер",
                            department: "КИБ",
                            position: "Developer",
                            startDate: "2021-05-17"
                        },
                        contacts: [
                            {
                                contactType: "skype",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "teams",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "phone",
                                contactValue: "+375291001010"
                            }
                        ],
                        technologies: [
                            {
                                technologyName: "Java",
                                grade: "M1"
                            },
                            {
                                technologyName: "Angular",
                                grade: "J2"
                            }
                        ]
                    },
                    {
                        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9011",
                        firstName: "Александр",
                        middleName: "Дмитриевич",
                        lastName: "Никифоров",
                        lotState: "АКТИВНЫЙ",
                        employeeLocation: {
                            country: "Беларусь",
                            city: "Минск",
                            address: "пр-т Победителей 7",
                            isRemote: false
                        },
                        hiringDate: "2022-05-31",
                        currentProjectInfo: {
                            customer: "Альфа Банк Казахстан",
                            department: "Договора",
                            position: "Developer",
                            startDate: "2021-05-17"
                        },
                        contacts: [
                            {
                                contactType: "skype",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "teams",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "phone",
                                contactValue: "+375291001010"
                            }
                        ],
                        technologies: [
                            {
                                technologyName: "Java",
                                grade: "M1"
                            },
                            {
                                technologyName: "Angular",
                                grade: "J2"
                            }
                        ]
                    },
                    {
                        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9012",
                        firstName: "Виктор",
                        middleName: "Иванович",
                        lastName: "Петров",
                        lotState: "ПОБЕДИЛ",
                        employeeLocation: {
                            country: "Беларусь",
                            city: "Минск",
                            address: "пр-т Победителей 7",
                            isRemote: false
                        },
                        hiringDate: "2022-05-31",
                        currentProjectInfo: {
                            customer: "Тиньков Банк",
                            department: "Переводы",
                            position: "Developer",
                            startDate: "2021-05-17"
                        },
                        contacts: [
                            {
                                contactType: "skype",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "teams",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "phone",
                                contactValue: "+375291001010"
                            }
                        ],
                        technologies: [
                            {
                                technologyName: "Java",
                                grade: "M1"
                            },
                            {
                                technologyName: "Angular",
                                grade: "J2"
                            }
                        ]
                    },
                    {
                        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9013",
                        firstName: "Михаил",
                        middleName: "Анжеевич",
                        lastName: "Жебровский",
                        lotState: "ЗАКРЫТ",
                        employeeLocation: {
                            country: "Беларусь",
                            city: "Минск",
                            address: "пр-т Победителей 7",
                            isRemote: false
                        },
                        hiringDate: "2022-05-31",
                        currentProjectInfo: {
                            customer: "Сбер",
                            department: "КИБ",
                            position: "Developer",
                            startDate: "2021-05-17"
                        },
                        contacts: [
                            {
                                contactType: "skype",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "teams",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "phone",
                                contactValue: "+375291001010"
                            }
                        ],
                        technologies: [
                            {
                                technologyName: "Java",
                                grade: "M1"
                            },
                            {
                                technologyName: "Angular",
                                grade: "J2"
                            }
                        ]
                    },
                    {
                        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                        firstName: "Александр",
                        middleName: "Александрович",
                        lastName: "Иванов",
                        lotState: "ЗАКРЫТ",
                        employeeLocation: {
                            country: "Беларусь",
                            city: "Минск",
                            address: "пр-т Победителей 7",
                            isRemote: false
                        },
                        hiringDate: "2022-05-31",
                        currentProjectInfo: {
                            customer: "Сбер",
                            department: "КИБ",
                            position: "Developer",
                            startDate: "2021-05-17"
                        },
                        contacts: [
                            {
                                contactType: "skype",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "teams",
                                contactValue: "stepanIvan01"
                            },
                            {
                                contactType: "phone",
                                contactValue: "+375291001010"
                            }
                        ],
                        technologies: [
                            {
                                technologyName: "Java",
                                grade: "M1"
                            },
                            {
                                technologyName: "Angular",
                                grade: "J2"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const cutomersMockData = [
    {
        customerName: "ПАО Сбербанк"
    },
    {
        customerName: "ПАО Альфа Банк"
    },
    {
        customerName: "ПАО Тинькоф Банк"
    }
]

export const managerMockData = [
    {
        managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Александр",
        middleName: "Александрович",
        lastName: "Иванов",
        position: "DM",
        grade: "J3",
        role: {
            roleName: "Admin",
            privileges: [
                "read",
                "create",
                "update",
                "delete"
            ]
        }
    },
    {
        managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Дмитрий",
        middleName: "Иванович",
        lastName: "Петров",
        position: "PC",
        grade: "J2",
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            }
        ],
        role: {
            roleName: "Admin",
            privileges: [
                "read",
                "create",
                "update",
                "delete"
            ]
        }
    }
];

export const employeeMockData = [
    {
        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Александр",
        middleName: "Александрович",
        lastName: "Иванов",
        lotState: "ЗАКРЫТ",
        employeeLocation: {
            country: "Беларусь",
            city: "Минск",
            address: "пр-т Победителей 7",
            isRemote: false
        },
        hiringDate: "2022-05-31",
        currentProjectInfo: {
            customer: "Сбер",
            department: "КИБ",
            position: "Developer",
            startDate: "2021-05-17"
        },
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            }
        ],
        technologies: [
            {
                technologyName: "Java",
                grade: "M1"
            },
            {
                technologyName: "Angular",
                grade: "J2"
            }
        ]
    },
    {
        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Александр",
        middleName: "Александрович",
        lastName: "Иванов",
        lotState: "ЗАКРЫТ",
        employeeLocation: {
            country: "Беларусь",
            city: "Минск",
            address: "пр-т Победителей 7",
            isRemote: false
        },
        hiringDate: "2022-05-31",
        currentProjectInfo: {
            customer: "Сбер",
            department: "КИБ",
            position: "Developer",
            startDate: "2021-05-17"
        },
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            }
        ],
        technologies: [
            {
                technologyName: "Java",
                grade: "M1"
            },
            {
                technologyName: "Angular",
                grade: "J2"
            }
        ]
    },
    {
        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Александр",
        middleName: "Александрович",
        lastName: "Иванов",
        lotState: "ЗАКРЫТ",
        employeeLocation: {
            country: "Беларусь",
            city: "Минск",
            address: "пр-т Победителей 7",
            isRemote: false
        },
        hiringDate: "2022-05-31",
        currentProjectInfo: {
            customer: "Сбер",
            department: "КИБ",
            position: "Developer",
            startDate: "2021-05-17"
        },
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            }
        ],
        technologies: [
            {
                technologyName: "Java",
                grade: "M1"
            },
            {
                technologyName: "Angular",
                grade: "J2"
            }
        ]
    },
    {
        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Александр",
        middleName: "Александрович",
        lastName: "Иванов",
        lotState: "ЗАКРЫТ",
        employeeLocation: {
            country: "Беларусь",
            city: "Минск",
            address: "пр-т Победителей 7",
            isRemote: false
        },
        hiringDate: "2022-05-31",
        currentProjectInfo: {
            customer: "Сбер",
            department: "КИБ",
            position: "Developer",
            startDate: "2021-05-17"
        },
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            }
        ],
        technologies: [
            {
                technologyName: "Java",
                grade: "M1"
            },
            {
                technologyName: "Angular",
                grade: "J2"
            }
        ]
    },
    ,
    {
        employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
        firstName: "Александр",
        middleName: "Александрович",
        lastName: "Иванов",
        lotState: "ЗАКРЫТ",
        employeeLocation: {
            country: "Беларусь",
            city: "Минск",
            address: "пр-т Победителей 7",
            isRemote: false
        },
        hiringDate: "2022-05-31",
        currentProjectInfo: {
            customer: "Сбер",
            department: "КИБ",
            position: "Developer",
            startDate: "2021-05-17"
        },
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            }
        ],
        technologies: [
            {
                technologyName: "Java",
                grade: "M1"
            },
            {
                technologyName: "Angular",
                grade: "J2"
            }
        ]
    }
];

export const lotsMockData = [
    {
        lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
        lotGlobalState: "АКТИВНЫЙ",
        lotName: "Java Developers S2",
        lotCreationTimeStamp: {
            startDate: "2022-07-13 15:34:44",
            endDate: "2022-07-13 15:34:44"
        },
        lotUpdateTimeStamp: "2022-07-13 15:34:44",
        lotManager: {
            managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
            firstName: "Александр",
            middleName: "Александрович",
            lastName: "Иванов",
            position: "DM",
            grade: "J3",
            role: {
                roleName: "Admin",
                privileges: [
                    "read",
                    "create",
                    "update",
                    "delete"
                ]
            }
        }
    }
];

export const technologiesMockData = [
    { technologyName: "Java" },
    { technologyName: "Python" },
    { technologyName: "React" },
    { technologyName: "Angular" },
    { technologyName: "System Analysis" },
    { technologyName: "Business Analysis" },
    { technologyName: "QA" },
    { technologyName: "AQA" },

];

export const userMockData =
{
    managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
    personalInfo: {
        firstName: "Дмитрий",
        middleName: "Иванович",
        lastName: "Петров",
        positions: [
            {
                shortcut: "PC",
                fullPosition: "Project Coordinator",
                grade: "J2",
                companyName: "Aston"
            }
        ],
        contacts: [
            {
                contactType: "skype",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "teams",
                contactValue: "stepanIvan01"
            },
            {
                contactType: "phone",
                contactValue: "+375291001010"
            },
            {
                contactType: "email",
                contactValue: "dmitryIvanov@mail.com"
            }
        ]
    },
    authorityInfo: {
        login: "dm.ivanov",
        email: "dmitryIvanov@mail.com",
        avatar: "",
        userState: "АКТИВНЫЙ",
        registrationDate: "2022-07-13 15:34:44",
        lastLoginDate: "2022-07-13 15:34:44",
        role: {
            roleName: "Admin",
            privileges: [
                "read",
                "create",
                "update",
                "delete"
            ]
        }
    },
    userTenders: [
        {
            tenderNumber: "tnd-number-stub-7",
            tenderName: "СБЕР Риски (Java)",
            tenderStatus: "АКТИВНЫЙ",
            tenderType: "АУКЦИОН", //"2022-04-15 15:30:32"
            tenderCreationDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderUpdateDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderDeadlineDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderCurrency: "RUB",
            tenderNmcCost: 250000,
            tenderFinalCost: 300000,
            tenderDescription: "Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся.",
            customerInfo: {
                customerName: "СБЕР",
                customerGeneralInfo: {}
            },
            tenderManager: {
                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                firstName: "Александр",
                middleName: "Александрович",
                lastName: "Иванов",
                position: "DM",
                grade: "J3",
                role: {
                    roleName: "Admin",
                    privileges: [
                        "read",
                        "create",
                        "update",
                        "delete"
                    ]
                }
            },
            employeeDocumentRequirements: [
                {
                    documentType: "Паспорт"
                },
                {
                    documentType: "Договор о регистрации ЮР лица"
                }
            ],
            lots: [
                {
                    lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
                    lotGlobalState: "АКТИВНЫЙ",
                    lotName: "Java Developers S2",
                    lotCreationTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    lotUpdateTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    employees: [
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9010",
                            firstName: "Степан",
                            middleName: "Иванович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9011",
                            firstName: "Александр",
                            middleName: "Дмитриевич",
                            lastName: "Никифоров",
                            lotState: "АКТИВНЫЙ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Альфа Банк Казахстан",
                                department: "Договора",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9012",
                            firstName: "Виктор",
                            middleName: "Иванович",
                            lastName: "Петров",
                            lotState: "ПОБЕДИЛ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Тиньков Банк",
                                department: "Переводы",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9013",
                            firstName: "Михаил",
                            middleName: "Анжеевич",
                            lastName: "Жебровский",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                            firstName: "Александр",
                            middleName: "Александрович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tenderNumber: "tnd-number-stub-8",
            tenderName: "СБЕР Риски (Java)",
            tenderStatus: "АКТИВНЫЙ",
            tenderType: "АУКЦИОН", //"2022-04-15 15:30:32"
            tenderCreationDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderUpdateDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderDeadlineDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderCurrency: "RUB",
            tenderNmcCost: 250000,
            tenderFinalCost: 300000,
            tenderDescription: "Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся.",
            customerInfo: {
                customerName: "СБЕР",
                customerGeneralInfo: {}
            },
            tenderManager: {
                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                firstName: "Александр",
                middleName: "Александрович",
                lastName: "Иванов",
                position: "DM",
                grade: "J3",
                role: {
                    roleName: "Admin",
                    privileges: [
                        "read",
                        "create",
                        "update",
                        "delete"
                    ]
                }
            },
            employeeDocumentRequirements: [
                {
                    documentType: "Паспорт"
                },
                {
                    documentType: "Договор о регистрации ЮР лица"
                }
            ],
            lots: [
                {
                    lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
                    lotGlobalState: "АКТИВНЫЙ",
                    lotName: "Java Developers S2",
                    lotCreationTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    lotUpdateTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    employees: [
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9010",
                            firstName: "Степан",
                            middleName: "Иванович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9011",
                            firstName: "Александр",
                            middleName: "Дмитриевич",
                            lastName: "Никифоров",
                            lotState: "АКТИВНЫЙ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Альфа Банк Казахстан",
                                department: "Договора",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9012",
                            firstName: "Виктор",
                            middleName: "Иванович",
                            lastName: "Петров",
                            lotState: "ПОБЕДИЛ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Тиньков Банк",
                                department: "Переводы",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9013",
                            firstName: "Михаил",
                            middleName: "Анжеевич",
                            lastName: "Жебровский",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                            firstName: "Александр",
                            middleName: "Александрович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tenderNumber: "tnd-number-stub-8",
            tenderName: "СБЕР Риски (Java)",
            tenderStatus: "АКТИВНЫЙ",
            tenderType: "АУКЦИОН", //"2022-04-15 15:30:32"
            tenderCreationDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderUpdateDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderDeadlineDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderCurrency: "RUB",
            tenderNmcCost: 250000,
            tenderFinalCost: 300000,
            tenderDescription: "Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся.",
            customerInfo: {
                customerName: "СБЕР",
                customerGeneralInfo: {}
            },
            tenderManager: {
                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                firstName: "Александр",
                middleName: "Александрович",
                lastName: "Иванов",
                position: "DM",
                grade: "J3",
                role: {
                    roleName: "Admin",
                    privileges: [
                        "read",
                        "create",
                        "update",
                        "delete"
                    ]
                }
            },
            employeeDocumentRequirements: [
                {
                    documentType: "Паспорт"
                },
                {
                    documentType: "Договор о регистрации ЮР лица"
                }
            ],
            lots: [
                {
                    lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
                    lotGlobalState: "АКТИВНЫЙ",
                    lotName: "Java Developers S2",
                    lotCreationTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    lotUpdateTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    employees: [
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9010",
                            firstName: "Степан",
                            middleName: "Иванович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9011",
                            firstName: "Александр",
                            middleName: "Дмитриевич",
                            lastName: "Никифоров",
                            lotState: "АКТИВНЫЙ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Альфа Банк Казахстан",
                                department: "Договора",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9012",
                            firstName: "Виктор",
                            middleName: "Иванович",
                            lastName: "Петров",
                            lotState: "ПОБЕДИЛ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Тиньков Банк",
                                department: "Переводы",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9013",
                            firstName: "Михаил",
                            middleName: "Анжеевич",
                            lastName: "Жебровский",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                            firstName: "Александр",
                            middleName: "Александрович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tenderNumber: "tnd-number-stub-9",
            tenderName: "СБЕР Риски (Java)",
            tenderStatus: "АКТИВНЫЙ",
            tenderType: "АУКЦИОН", //"2022-04-15 15:30:32"
            tenderCreationDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderUpdateDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderDeadlineDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderCurrency: "RUB",
            tenderNmcCost: 250000,
            tenderFinalCost: 300000,
            tenderDescription: "Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся.",
            customerInfo: {
                customerName: "СБЕР",
                customerGeneralInfo: {}
            },
            tenderManager: {
                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                firstName: "Александр",
                middleName: "Александрович",
                lastName: "Иванов",
                position: "DM",
                grade: "J3",
                role: {
                    roleName: "Admin",
                    privileges: [
                        "read",
                        "create",
                        "update",
                        "delete"
                    ]
                }
            },
            employeeDocumentRequirements: [
                {
                    documentType: "Паспорт"
                },
                {
                    documentType: "Договор о регистрации ЮР лица"
                }
            ],
            lots: [
                {
                    lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
                    lotGlobalState: "АКТИВНЫЙ",
                    lotName: "Java Developers S2",
                    lotCreationTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    lotUpdateTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    employees: [
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9010",
                            firstName: "Степан",
                            middleName: "Иванович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9011",
                            firstName: "Александр",
                            middleName: "Дмитриевич",
                            lastName: "Никифоров",
                            lotState: "АКТИВНЫЙ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Альфа Банк Казахстан",
                                department: "Договора",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9012",
                            firstName: "Виктор",
                            middleName: "Иванович",
                            lastName: "Петров",
                            lotState: "ПОБЕДИЛ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Тиньков Банк",
                                department: "Переводы",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9013",
                            firstName: "Михаил",
                            middleName: "Анжеевич",
                            lastName: "Жебровский",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                            firstName: "Александр",
                            middleName: "Александрович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tenderNumber: "tnd-number-stub-10",
            tenderName: "СБЕР Риски (Java)",
            tenderStatus: "АКТИВНЫЙ",
            tenderType: "АУКЦИОН", //"2022-04-15 15:30:32"
            tenderCreationDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderUpdateDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderDeadlineDate: {
                startDate: "2022-04-15 15:30:32",
                endDate: "2022-04-15 15:30:32"
            },
            tenderCurrency: "RUB",
            tenderNmcCost: 250000,
            tenderFinalCost: 300000,
            tenderDescription: "Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся. Тыры-пыры в попе дыры. Делаем тендер. Дела мутятся, бабки крутятся.",
            customerInfo: {
                customerName: "СБЕР",
                customerGeneralInfo: {}
            },
            tenderManager: {
                managerUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                firstName: "Александр",
                middleName: "Александрович",
                lastName: "Иванов",
                position: "DM",
                grade: "J3",
                role: {
                    roleName: "Admin",
                    privileges: [
                        "read",
                        "create",
                        "update",
                        "delete"
                    ]
                }
            },
            employeeDocumentRequirements: [
                {
                    documentType: "Паспорт"
                },
                {
                    documentType: "Договор о регистрации ЮР лица"
                }
            ],
            lots: [
                {
                    lotUuid: "9c6150d3-f3f3-4929-9848-9a761bad901e",
                    lotGlobalState: "АКТИВНЫЙ",
                    lotName: "Java Developers S2",
                    lotCreationTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    lotUpdateTimeStamp: {
                        startDate: "2022-04-15 15:30:32",
                        endDate: "2022-04-15 15:30:32"
                    },
                    employees: [
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9010",
                            firstName: "Степан",
                            middleName: "Иванович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9011",
                            firstName: "Александр",
                            middleName: "Дмитриевич",
                            lastName: "Никифоров",
                            lotState: "АКТИВНЫЙ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Альфа Банк Казахстан",
                                department: "Договора",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9012",
                            firstName: "Виктор",
                            middleName: "Иванович",
                            lastName: "Петров",
                            lotState: "ПОБЕДИЛ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Тиньков Банк",
                                department: "Переводы",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9013",
                            firstName: "Михаил",
                            middleName: "Анжеевич",
                            lastName: "Жебровский",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        },
                        {
                            employeeUuid: "9c6150d3-f3f3-4929-9848-9a761bad9014",
                            firstName: "Александр",
                            middleName: "Александрович",
                            lastName: "Иванов",
                            lotState: "ЗАКРЫТ",
                            employeeLocation: {
                                country: "Беларусь",
                                city: "Минск",
                                address: "пр-т Победителей 7",
                                isRemote: false
                            },
                            hiringDate: "2022-05-31",
                            currentProjectInfo: {
                                customer: "Сбер",
                                department: "КИБ",
                                position: "Developer",
                                startDate: "2021-05-17"
                            },
                            contacts: [
                                {
                                    contactType: "skype",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "teams",
                                    contactValue: "stepanIvan01"
                                },
                                {
                                    contactType: "phone",
                                    contactValue: "+375291001010"
                                }
                            ],
                            technologies: [
                                {
                                    technologyName: "Java",
                                    grade: "M1"
                                },
                                {
                                    technologyName: "Angular",
                                    grade: "J2"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};