export interface EducationItem {
  period: string;
  degree: string;
  school: string;
}

export const education: EducationItem[] = [
  {
    period: 'In progress',
    degree: 'A.S. in Computer Science',
    school: 'Massachusetts Bay Community College',
  },
  { period: '2018 – 2020', degree: 'B.A. in Theology, Major in Counselling',
    school: 'African Christian College, Kingdom of Eswatini' },
  // { period: '2031 – 2032', degree: 'M.S. in Computer Science and Mathematics',
  //   school: 'Northeastern University, Khoury College of Computer Science' },
];
