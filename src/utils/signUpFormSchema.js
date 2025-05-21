import * as Yup from "yup"

export const SignUpFormSchema = Yup.object({
  username: Yup.string().min(3, "อย่างน้อย 3 ตัว").required("ห้ามว่าง"),
  nickname: Yup.string().min(3, ({ path, value }) => `${path} ต้องมีอย่างน้อย 3 ตัวอักษร แต่ตอนนี้มีแค่ ${value.length}`)
    .max(10, ({ path, value }) => `${path} ใส่ได้ไม่เกิน 10 ตัวอักษร ตอนนี้มีตั้ง ${value.length}`).required("ห้ามว่าง"),

  // password: Yup.string().min(6,"รหัสผ่านมีอย่างน้อย6ตัว").required('กรุณากรอกรหัสผ่าน'),    
  password: Yup.string().min(6, ({ path, value }) => `${path} ต้องมีอย่างน้อย 6 ตัว แต่ตอนนี้มีแค่ ${value.length}`).required('ห้ามว่าง'),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "รหัสผ่านไม่ตรงกัน").min(6, ({ path, value }) => `${path} ต้องมีอย่างน้อย 6 ตัว แต่ตอนนี้มีแค่ ${value.length}`).required('ห้ามว่าง'),

  tel: Yup.string()
    .matches(/^\d{10}$/, "เบอร์โทรต้องเป็นตัวเลข 10 หลัก")
    .required("กรุณากรอกเบอร์โทร"),

  age: Yup.number().typeError("ใส่ตัวเลข").min(13, "ต้องมากกว่า13"),
  terms: Yup.boolean().oneOf([true], "กรุณายอมรับ")


})