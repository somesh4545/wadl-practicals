import StudentMarks from '../models/schema.js';

export const addStudentMarks = async (req, res) => {
  // const {name, roll_no, cc_marks, wad_marks, dsbda_marks, cns_marks} = req.body;
  // const studentMarksObj = new StudentMarks({
  //   name, roll_no, cc_marks, wad_marks, dsbda_marks, cns_marks
  // });
  // await studentMarksObj.save();

  await StudentMarks.insertMany(req.body);

  res.status(201).json({
    msg: "Added !"
  })
}

