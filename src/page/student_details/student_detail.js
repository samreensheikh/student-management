import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { student_data, student_list_columns } from '../../contants/student_data';
import './student_detail.css';

class StudentDetail extends Component {
  constructor() {
    super();
    this.state = {
      student_data: student_data
    }
    this.processData(student_data)
  };

  processData = (data) => {
    let maxMarkStudent={ rollNumber: null, maxMarks: -1 };
    let subjectsArray = ["Maths", "English", "Science"];
    data.forEach(studentRecord => {
      let sumOfSubject = subjectsArray.map(subject => studentRecord["marks"][subject]).reduce((a,b) => parseInt(a)+parseInt(b), 0)
      maxMarkStudent = sumOfSubject > maxMarkStudent["maxMarks"] ?
                      {rollNumber: studentRecord["rollNumber"], maxMarks: sumOfSubject}  : maxMarkStudent;
    });
    return maxMarkStudent;
  };

  showTopperAndFail(record, topperStudent) {
    let cssClassName = record.marks["Maths"] > 20 && record.marks["English"] > 20 && record.marks["Science"] > 20 ? "" : "showRedRow";
    return cssClassName + (record["rollNumber"] === topperStudent["rollNumber"] ? " showGreenRow" : "");
  }

  render() {
    const topperStudent = this.processData(this.state.student_data);
    return (
      <div className="container">
        <Table
          columns={student_list_columns}
          dataSource={this.state.student_data}
          size="small"
          bordered
          rowKey="rollNumber"

          rowClassName={(record) => this.showTopperAndFail(record, topperStudent)}
          pagination={{
            total: student_data.length,
            pageSize: student_data.length,
            hideOnSinglePage: true
          }}
          title={() =><b>Students Result Board</b>}
          scroll={{
            y:500
          }}
        />
        <Button type="primary"><a href="/add">Add Student</a></Button>
      </div>
    );
  }
}

export default StudentDetail;
