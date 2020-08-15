import React from 'react';

export const student_data = [
    {
        "name":"rajiv",
        "marks":{
            "Maths":"18",
            "English":"21",
            "Science":"45"
        },
        "rollNumber":"KV2017-5A2"
    },
    {
        "name":"abhishek",
        "marks":{
            "Maths":"43",
            "English":"30",
            "Science":"37"
        },
        "rollNumber":"KV2017-5A1"
    },
    {
        "name":"zoya",
        "marks":{
            "Maths":"42",
            "English":"31",
            "Science":"50"
        },
        "rollNumber":"KV2017-5A3"
    }
]

export const student_list_columns = [
    {
      title:<b><i>Student Name</i></b>,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render:name=><p>{name.charAt(0).toUpperCase() +
           name.slice(1)}</p>
    },


    {
      title:<b><i>Roll Number</i></b>,
      dataIndex: 'rollNumber',
      key: 'rollNumber',
    },
    {
      title:<b><i>Total Marks</i></b>,
      dataIndex: 'marks',
      render: marks => <p>{parseInt(marks["Maths"]) + parseInt(marks["English"]) + parseInt(marks["Science"])}</p>,
      key: 'marks',
      align: 'right',
    },
    {
      title:<b><i>Status</i></b>,
      dataIndex: 'marks',
      render: marks => <p>{(marks["Maths"] > 20 && marks["English"] > 20 && marks["Science"] > 20) ? "Pass" : "Fail"}</p>,
      key: 'marks'
    },
];
