import * as Yup from "yup"

export const schema = Yup.object({
    email: Yup.string().email("ใส่ให้ถูก").required("กรุณาใส่อีเมล"),
    // password: Yup.string().min(6,"รหัสผ่านมีอย่างน้อย6ตัว").required('กรุณากรอกรหัสผ่าน'),    
    password: Yup.string().min(6,({path,value})=> `${path} ต้องมีอย่างน้อย 6 ตัว แต่ตอนนี้มีแค่ ${value.length}`).required('กรุณากรอกรหัสผ่าน'),
    day: Yup.number().typeError("ใส่ตัวเลข").min(1,"ใส่วันที่ไม่ถูกต้อง").max(31,"ใส่วันที่ไม่ถูกต้อง"),
    age: Yup.number().typeError("ใส่ตัวเลข").min(10,"ต้องมากกว่า10")

  })